'use client'

import { useEffect, useState } from 'react'

type Pricing = {
  id: string
  name: string
  slug: string
  price?: number
}

export default function DashboardPricing() {
  const [items, setItems] = useState<Pricing[]>([])
  const [form, setForm] = useState({ name: '', slug: '', price: '' })
  const [message, setMessage] = useState('')

  const fetchItems = async () => {
    const res = await fetch('/api/pricing')
    const data = await res.json()
    setItems(data.packages || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    const payload = { name: form.name, slug: form.slug, price: parseFloat(form.price||'0'), features: [] }
    const res = await fetch('/api/pricing', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) { setMessage('Created'); setForm({ name:'', slug:'', price:'' }); fetchItems() } else setMessage(data.error||'Error')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Pricing Packages</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={form.slug} onChange={(e)=>setForm({...form, slug: e.target.value})} placeholder="slug" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={form.price} onChange={(e)=>setForm({...form, price: e.target.value})} placeholder="price" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button className="bg-primary text-white px-4 py-2 rounded-btn">Create</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <ul className="mt-4 space-y-3">
        {items.map(p=> (
          <li key={p.id} className="p-4 bg-white rounded-card shadow-soft flex justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-secondary-text">{p.slug}</div>
            </div>
            <div className="text-secondary-text">{p.price ? `Rp ${p.price}` : ''}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
