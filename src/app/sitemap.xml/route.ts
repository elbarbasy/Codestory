import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  // generate a simple sitemap from public tables
  try {
    const pages = [ { loc: '/' } ]
    const { data: portfolios } = await supabaseAdmin.from('portfolios').select('slug')
    const { data: services } = await supabaseAdmin.from('services').select('slug')

    let urls = pages.map(p => `https://your-site.com${p.loc}`)
    portfolios?.forEach((p:any)=> urls.push(`https://your-site.com/portfolio/${p.slug}`))
    services?.forEach((s:any)=> urls.push(`https://your-site.com/services/${s.slug}`))

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>`
    return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } })
  } catch (err:any) {
    return NextResponse.json({ error: err.message ?? 'Unknown' }, { status: 500 })
  }
}
