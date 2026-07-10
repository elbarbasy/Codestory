'use client'

import { useEffect, useState } from 'react'

export default function DashboardContacts() {
  const [items, setItems] = useState<any[]>([])

  const fetchItems = async () => {
    const res = await fetch('/api/contacts')
    const data = await res.json()
    setItems(data.contacts || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Contact Messages</h3>
      <ul className="mt-4 space-y-3">
        {items.map(c=> (
          <li key={c.id} className="p-4 bg-white rounded-card shadow-soft">
            <div className="font-semibold">{c.name} — {c.email}</div>
            <div className="text-secondary-text text-sm">{c.message}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
