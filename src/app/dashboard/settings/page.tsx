'use client'

import { useEffect, useState } from 'react'

export default function DashboardSettings() {
  const [items, setItems] = useState<any[]>([])
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  const fetchItems = async () => {
    const res = await fetch('/api/settings')
    const data = await res.json()
    setItems(data.settings || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { key, value }
    const res = await fetch('/api/settings', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) { setMessage('Saved'); setKey(''); setValue(''); fetchItems() } else setMessage(data.error||'Error')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Settings</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={key} onChange={(e)=>setKey(e.target.value)} placeholder="key" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="value (json or string)" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button className="bg-primary text-white px-4 py-2 rounded-btn">Save</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <ul className="mt-4 space-y-3">
        {items.map(s=> (
          <li key={s.id} className="p-4 bg-white rounded-card shadow-soft">
            <div className="font-semibold">{s.key}</div>
            <div className="text-secondary-text text-sm">{JSON.stringify(s.value)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
