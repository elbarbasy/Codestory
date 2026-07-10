'use client'

import { useEffect, useState } from 'react'

export default function TerminalLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-[min(900px,95%)] bg-black text-green-400 p-6 rounded-lg font-mono">
        <pre className="whitespace-pre-wrap">Initializing CodeStory...\nLoading components...\nOptimizing for SEO...\nConnecting to services...\nReady in 2.3s</pre>
      </div>
    </div>
  )
}
