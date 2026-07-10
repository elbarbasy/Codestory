import Link from 'next/link'

export function SiteNavbar() {
  return (
    <header className="backdrop-blur-md sticky top-0 z-40 bg-white/60 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">CodeStory</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services" className="text-secondary-text">Services</Link>
          <Link href="/portfolio" className="text-secondary-text">Portfolio</Link>
          <Link href="/pricing" className="text-secondary-text">Pricing</Link>
          <Link href="/about" className="text-secondary-text">About</Link>
          <Link href="/contact" className="btn-primary">Contact</Link>
        </nav>
        <div className="md:hidden">{/* hamburger placeholder */}
          <button aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  )
}
