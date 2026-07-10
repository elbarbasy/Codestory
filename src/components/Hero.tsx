export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Build Websites That Grow Your Business.</h1>
        <p className="mt-4 text-secondary-text max-w-xl">Premium web development and design for startups and small businesses. Fast, accessible, and owner-managed via an admin dashboard.</p>
        <div className="mt-6 flex gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-btn shadow-soft">Get Started</button>
          <button className="border border-border px-6 py-3 rounded-btn">Learn more</button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-white rounded-card shadow-soft flex items-center justify-center">Mockup</div>
      </div>
    </section>
  )
}
