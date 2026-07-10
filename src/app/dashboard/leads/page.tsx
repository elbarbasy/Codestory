'use client'

import { useEffect, useState } from 'react'

export default function DashboardLeads() {
  const [items, setItems] = useState<any[]>([])

  const fetchItems = async () => {
    const res = await fetch('/api/leads')
    const data = await res.json()
    setItems(data.leads || [])
  }

  useEffect(()=>{ fetchItems() }, [])

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Leads</h3>
      <ul className="mt-4 space-y-3">
        {items.map(l=> (
          <li key={l.id} className="p-4 bg-white rounded-card shadow-soft">
            <div className="font-semibold">Lead from message {l.contact_message_id}</div>
            <div className="text-secondary-text text-sm">Status: {l.pipeline_status}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
