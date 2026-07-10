import { supabaseAdmin } from '@/lib/supabaseAdmin'

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const { data, error } = await supabaseAdmin.from('services').select('*').eq('slug', slug).limit(1).single()
  if (error || !data) {
    return (
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Service not found</h1>
      </section>
    )
  }

  const service = data as any

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="mt-4 text-secondary-text max-w-2xl">{service.summary}</p>
          <div className="mt-6">
            <button data-service-slug={service.slug} className="bg-primary text-white px-6 py-3 rounded-btn" id="request-quote-btn">Request Quote</button>
          </div>
        </div>
        <div>
          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-white rounded-card shadow-soft flex items-center justify-center">Service Mockup</div>
        </div>
      </div>

      {/* Client-side request quote modal will attach to button by id */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          function loadModal(){
            import('/src/components/RequestQuoteModal.js').then(m=>{
              const Modal = m.default
              const btn = document.getElementById('request-quote-btn')
              if (!btn) return
              btn.addEventListener('click', ()=>{
                const container = document.createElement('div')
                document.body.appendChild(container)
                // render modal client-side
                const evt = new CustomEvent('openRequestQuote', { detail: { service: '${service.title}', slug: '${service.slug}' } })
                window.dispatchEvent(evt)
              })
            }).catch(()=>{})
          }
          if (typeof window !== 'undefined') loadModal()
        })();
      ` }} />
    </section>
  )
}
