import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('portfolios').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ portfolios: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, category, description } = body
    const { data, error } = await supabaseAdmin.from('portfolios').insert([{ title, slug, category, description }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ portfolio: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
