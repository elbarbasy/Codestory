import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('contact_messages').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ contacts: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
