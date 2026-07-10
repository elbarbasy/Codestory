import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, service_interest, budget_range, message } = body
    const { error } = await supabaseAdmin.from('contact_messages').insert([{ name, email, whatsapp, service_interest, budget_range, message }])
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status: 500 })
  }
}
