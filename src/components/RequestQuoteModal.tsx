'use client'

import React, { useEffect, useState } from 'react'

export default function RequestQuoteModal(){
  const [open, setOpen] = useState(false)
  const [service, setService] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [form, setForm] = useState({ name:'', email:'', whatsapp:'', service_interest:'', budget_range:'', message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [error, setError] = useState('')

  useEffect(()=>{
    function handler(e:any){
      const d = e.detail || {}
      if (d.service) setService(d.service)
      if (d.portfolio) setPortfolio(d.portfolio)
      setOpen(true)
      // prefill interest
      setForm(prev=>({ ...prev, service_interest: d.service || d.portfolio || '' }))
      // capture utm
      try{
        const params = new URLSearchParams(window.location.search)
        const utm_source = params.get('utm_source')
        if (utm_source) (form as any).utm_source = utm_source
      }catch(e){}
    }
    window.addEventListener('openRequestQuote', handler)
    return ()=> window.removeEventListener('openRequestQuote', handler)
  }, [])

  const close = ()=>{ setOpen(false); setStatus('idle'); setError('') }

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setStatus('loading')
    setError('')
    const payload = { ...form, service_interest: form.service_interest || service || portfolio }
    const res = await fetch('/api/contact', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) {
      setStatus('success')
      // redirect to thank-you
      window.location.href = '/thank-you'
    } else {
      setStatus('error')
      setError(data.error || 'Unexpected error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="bg-white rounded-2xl p-6 z-10 w-full max-w-lg">
        <h3 className="text-xl font-semibold">Request a quote</h3>
        <p className="text-secondary-text text-sm">Tell us about your project and we will reach out shortly.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your name" className="w-full p-3 border border-border rounded-btn" />
          <input required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" type="email" className="w-full p-3 border border-border rounded-btn" />
          <input value={form.whatsapp} onChange={(e)=>setForm({...form, whatsapp:e.target.value})} placeholder="WhatsApp (optional)" className="w-full p-3 border border-border rounded-btn" />
          <input value={form.service_interest} onChange={(e)=>setForm({...form, service_interest:e.target.value})} placeholder="Service of interest" className="w-full p-3 border border-border rounded-btn" />
          <select value={form.budget_range} onChange={(e)=>setForm({...form, budget_range:e.target.value})} className="w-full p-3 border border-border rounded-btn">
            <option value="">Select budget range</option>
            <option value="< $1k">&lt; $1k</option>
            <option value="$1k - $5k">$1k - $5k</option>
            <option value="> $5k">&gt; $5k</option>
          </select>
          <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Brief description" className="w-full p-3 border border-border rounded-btn" />
          <div className="flex items-center justify-between">
            <button type="button" onClick={close} className="px-4 py-2 rounded-btn border">Cancel</button>
            <button type="submit" disabled={status==='loading'} className="bg-primary text-white px-4 py-2 rounded-btn">{status==='loading' ? 'Sending...' : 'Send request'}</button>
          </div>
          {status==='error' && <div className="text-red-600">{error}</div>}
        </form>
      </div>
    </div>
  )
}
