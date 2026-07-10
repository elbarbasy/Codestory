import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('services').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ services: data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, summary, description, starting_price, delivery_time, is_visible } = body
    const { data, error } = await supabaseAdmin.from('services').insert([{ title, slug, summary, description, starting_price, delivery_time, is_visible }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ service: data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status: 500 })
  }
}
