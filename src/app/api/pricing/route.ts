import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from('pricing_packages').select('*').order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ packages: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, slug, description, price, features } = body
    const { data, error } = await supabaseAdmin.from('pricing_packages').insert([{ name, slug, description, price, features }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status:500 })
    return NextResponse.json({ package: data })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status:500 })
  }
}
