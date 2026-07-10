import Hero from '../components/Hero'
import TerminalLoader from '../components/TerminalLoader'

export default function Page() {
  return (
    <div>
      <TerminalLoader />
      <section className="container mx-auto px-6 py-16">
        <Hero />
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <p className="text-secondary-text">Short overview of services. This scaffold follows the PRD — replace with real content from the admin later.</p>
        </section>
      </section>
    </div>
  )
}
