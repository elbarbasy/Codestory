import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('testimonials').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ testimonials: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, company, avatar, rating, content } = body
    const { data, error } = await supabaseAdmin.from('testimonials').insert([{ name, role, company, avatar, rating, content }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ testimonial: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
