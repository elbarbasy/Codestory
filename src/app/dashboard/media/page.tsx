'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardMedia() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setUploading(true)
    const filename = `${Date.now()}_${file.name}`
    const { data, error } = await supabase.storage.from('media').upload(filename, file)
    if (error) {
      setMessage(error.message)
    } else {
      // register media in DB via server API
      await fetch('/api/media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename: file.name, path: data.path, mime_type: file.type, size: file.size }) })
      setMessage('Uploaded')
      setFile(null)
    }
    setUploading(false)
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Media</h3>
      <form onSubmit={handleUpload} className="mt-4">
        <input onChange={(e)=>setFile(e.target.files?.[0] ?? null)} type="file" />
        <button disabled={uploading} className="ml-3 bg-primary text-white px-4 py-2 rounded-btn">Upload</button>
      </form>
      {message && <p className="mt-3 text-secondary-text">{message}</p>}
    </div>
  )
}
