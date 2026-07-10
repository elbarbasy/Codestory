'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMessage(error.message)
    else setMessage('Check your email for the sign-in link.')
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold">Admin sign in</h2>
      <p className="mt-2 text-secondary-text">Sign in with your owner email to access the dashboard.</p>
      <form onSubmit={handleMagicLink} className="mt-6 max-w-md">
        <label className="block text-sm mb-2">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-3 rounded-btn border border-border" />
        <button disabled={loading} className="mt-4 bg-primary text-white px-4 py-2 rounded-btn">Send sign-in link</button>
        {message && <p className="mt-3 text-secondary-text">{message}</p>}
      </form>
    </div>
  )
}
