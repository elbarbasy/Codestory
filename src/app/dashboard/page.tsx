'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      if (session) setUser(session.user)
      setLoading(false)
    }
    getUser()
  }, [])

  if (loading) return <div className="p-6">Loading...</div>

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-secondary-text">You must sign in to view the admin dashboard.</p>
        <a href="/dashboard/login" className="inline-block mt-6 bg-primary text-white px-4 py-2 rounded-btn">Sign in</a>
      </div>
    )
  }

  // simple owner check client-side
  const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL
  if (user.email !== ownerEmail) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Access denied</h2>
        <p className="mt-2 text-secondary-text">Your account does not have permission to access this dashboard.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-secondary-text">Owner: {user.email}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-card bg-white shadow-soft">
          <h3 className="font-semibold">Content</h3>
          <ul className="mt-3 space-y-2 text-secondary-text">
            <li><a href="/dashboard/services">Services</a></li>
            <li><a href="/dashboard/portfolio">Portfolio</a></li>
            <li><a href="/dashboard/pricing">Pricing</a></li>
            <li><a href="/dashboard/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="p-4 rounded-card bg-white shadow-soft">
          <h3 className="font-semibold">Leads</h3>
          <ul className="mt-3 space-y-2 text-secondary-text">
            <li><a href="/dashboard/contacts">Contact Messages</a></li>
            <li><a href="/dashboard/leads">Leads</a></li>
          </ul>
        </div>

        <div className="p-4 rounded-card bg-white shadow-soft">
          <h3 className="font-semibold">Settings</h3>
          <ul className="mt-3 space-y-2 text-secondary-text">
            <li><a href="/dashboard/settings">Site Settings</a></li>
            <li><a href="/dashboard/media">Media</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
