import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { filename, path, mime_type, size, alt_text } = body
    const { data, error } = await supabaseAdmin.from('media_assets').insert([{ filename, path, mime_type, size, alt_text }]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ media: data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status: 500 })
  }
}
