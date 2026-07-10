import { supabaseAdmin } from '@/lib/supabaseAdmin'

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const { data, error } = await supabaseAdmin.from('portfolios').select('*').eq('slug', slug).limit(1).single()
  if (error || !data) {
    return (
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Portfolio not found</h1>
      </section>
    )
  }

  const item = data as any

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold">{item.title}</h1>
          <p className="mt-4 text-secondary-text max-w-2xl">{item.description}</p>
          <div className="mt-6">
            <button data-portfolio-slug={item.slug} className="bg-primary text-white px-6 py-3 rounded-btn" id="discuss-btn">Discuss this project</button>
          </div>
        </div>
        <div>
          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-white rounded-card shadow-soft flex items-center justify-center">Portfolio Mockup</div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          if (typeof window === 'undefined') return
          const btn = document.getElementById('discuss-btn')
          if (!btn) return
          btn.addEventListener('click', ()=>{
            const evt = new CustomEvent('openRequestQuote', { detail: { portfolio: '${item.title}', slug: '${item.slug}' } })
            window.dispatchEvent(evt)
          })
        })();
      ` }} />
    </section>
  )
}
