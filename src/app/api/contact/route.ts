import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, service_interest, budget_range, message } = body
    const insert = { name, email, whatsapp, service_interest, budget_range, message }
    const { error } = await supabaseAdmin.from('contact_messages').insert([insert])
    if (error) return NextResponse.json({ error: error.message }, { status:500 })

    // create analytics event
    const metadata = { referrer: request.headers.get('referer') || null }
    await supabaseAdmin.from('analytics_events').insert([{ event_type: 'contact_submitted', page_path: request.url, metadata }])

    return NextResponse.json({ success: true })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
