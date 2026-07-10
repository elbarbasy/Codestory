import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('settings').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ settings: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { key, value } = body
    const parsedValue = (() => {
      try { return JSON.parse(value) } catch { return value }
    })()
    const { data, error } = await supabaseAdmin.from('settings').insert([{ key, value: parsedValue }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ setting: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
