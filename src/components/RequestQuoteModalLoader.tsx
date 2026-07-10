import React from 'react'
import RequestQuoteModal from '@/components/RequestQuoteModal'

export default function ModalLoader(){
  // Places the modal root in the document so client-side script can render
  if (typeof window === 'undefined') return null
  const root = document.getElementById('request-quote-root')
  if (root) return null
  const el = document.createElement('div')
  el.id = 'request-quote-root'
  document.body.appendChild(el)
  return <RequestQuoteModal />
}
