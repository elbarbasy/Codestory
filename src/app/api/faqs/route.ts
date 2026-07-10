import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('faqs').select('*').order('sort_order', { ascending: true })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ faqs: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, answer } = body
    const { data, error } = await supabaseAdmin.from('faqs').insert([{ question, answer }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ faq: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
