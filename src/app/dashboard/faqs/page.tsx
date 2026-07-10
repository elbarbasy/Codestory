'use client'

import { useEffect, useState } from 'react'

export default function DashboardFaqs() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState({ question: '', answer: '' })
  const [message, setMessage] = useState('')

  const fetchItems = async () => {
    const res = await fetch('/api/faqs')
    const data = await res.json()
    setItems(data.faqs || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { question: form.question, answer: form.answer }
    const res = await fetch('/api/faqs', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) { setMessage('Created'); setForm({ question:'', answer:'' }); fetchItems() } else setMessage(data.error||'Error')
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">FAQs</h3>
      <form onSubmit={handleCreate} className="mt-4 max-w-lg">
        <input value={form.question} onChange={(e)=>setForm({...form, question: e.target.value})} placeholder="Question" className="w-full p-2 border border-border rounded-btn mb-2" />
        <textarea value={form.answer} onChange={(e)=>setForm({...form, answer: e.target.value})} placeholder="Answer" className="w-full p-2 border border-border rounded-btn mb-2" />
        <button className="bg-primary text-white px-4 py-2 rounded-btn">Create</button>
        {message && <p className="mt-2 text-secondary-text">{message}</p>}
      </form>

      <ul className="mt-4 space-y-3">
        {items.map(f=> (
          <li key={f.id} className="p-4 bg-white rounded-card shadow-soft">
            <div className="font-semibold">{f.question}</div>
            <div className="text-secondary-text text-sm">{f.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
