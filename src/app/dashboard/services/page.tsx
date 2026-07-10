'use client'

import { useEffect, useState } from 'react'

type Service = {
  id: string
  title: string
  slug: string
  summary?: string
  description?: string
  starting_price?: number
  delivery_time?: string
  is_visible?: boolean
}

export default function DashboardServices() {
  const [services, setServices] = useState<Service[]>([])
  const [form, setForm] = useState({ title: '', slug: '', summary: '', starting_price: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const fetchServices = async () => {
    const res = await fetch('/api/services')
    const data = await res.json()
    setServices(data.services || [])
  }

  useEffect(() => { fetchServices() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const payload = { title: form.title, slug: form.slug, summary: form.summary, starting_price: parseFloat(form.starting_price || '0'), is_visible: true }
    const res = await fetch('/api/services', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) {
      setMessage('Created')
      setForm({ title: '', slug: '', summary: '', starting_price: '' })
      fetchServices()
    } else {
      setMessage(data.error || 'Error')
    }
    setLoading(false)
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Services</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={form.title} onChange={(e)=>setForm({...form, title:e.target.value})} placeholder="Title" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={form.slug} onChange={(e)=>setForm({...form, slug:e.target.value})} placeholder="slug" className="w-full p-2 border border-border rounded-btn mb-2" />
        <textarea value={form.summary} onChange={(e)=>setForm({...form, summary:e.target.value})} placeholder="summary" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={form.starting_price} onChange={(e)=>setForm({...form, starting_price:e.target.value})} placeholder="starting price" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded-btn">Create</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <div className="mt-6">
        {services.length === 0 && <p className="text-secondary-text">No services yet</p>}
        <ul className="space-y-3 mt-4">
          {services.map(s => (
            <li key={s.id} className="p-4 bg-white rounded-card shadow-soft flex justify-between items-center">
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-secondary-text">{s.summary}</div>
              </div>
              <div className="text-sm text-secondary-text">{s.starting_price ? `Rp ${s.starting_price}` : ''}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
