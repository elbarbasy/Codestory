'use client'

import { useEffect, useState } from 'react'

export default function DashboardTestimonials() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState({ name: '', content: '' })
  const [message, setMessage] = useState('')

  const fetchItems = async () => {
    const res = await fetch('/api/testimonials')
    const data = await res.json()
    setItems(data.testimonials || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { name: form.name, content: form.content }
    const res = await fetch('/api/testimonials', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) { setMessage('Created'); setForm({ name:'', content:'' }); fetchItems() } else setMessage(data.error||'Error')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Testimonials</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-2 border border-border rounded-btn mb-2" />
        <textarea value={form.content} onChange={(e)=>setForm({...form, content: e.target.value})} placeholder="Content" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button className="bg-primary text-white px-4 py-2 rounded-btn">Create</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <ul className="mt-4 space-y-3">
        {items.map(t=> (
          <li key={t.id} className="p-4 bg-white rounded-card shadow-soft">
            <div className="font-semibold">{t.name}</div>
            <div className="text-secondary-text text-sm">{t.content}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
