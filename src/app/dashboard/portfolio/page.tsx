'use client'

import { useEffect, useState } from 'react'

type Portfolio = {
  id: string
  title: string
  slug: string
  category?: string
  description?: string
  client_name?: string
  tech_stack?: string
  live_url?: string
  github_url?: string
  featured_image?: string
}

export default function DashboardPortfolio() {
  const [items, setItems] = useState<Portfolio[]>([])
  const [form, setForm] = useState({ title: '', slug: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const fetchItems = async () => {
    const res = await fetch('/api/portfolio')
    const data = await res.json()
    setItems(data.portfolios || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const payload = { title: form.title, slug: form.slug }
    const res = await fetch('/api/portfolio', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) {
      setMessage('Created')
      setForm({ title: '', slug: '' })
      fetchItems()
    } else setMessage(data.error || 'Error')
    setLoading(false)
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Portfolio</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} placeholder="Title" className="w-full p-2 border border-border rounded-btn mb-2" />
        <input value={form.slug} onChange={(e)=>setForm({...form, slug: e.target.value})} placeholder="slug" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded-btn">Create</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <div className="mt-6">
        {items.length === 0 && <p className="text-secondary-text">No portfolio items yet</p>}
        <ul className="space-y-3 mt-4">
          {items.map(i=> (
            <li key={i.id} className="p-4 bg-white rounded-card shadow-soft">
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-secondary-text">{i.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
