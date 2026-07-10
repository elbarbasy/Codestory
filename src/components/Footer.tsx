export function SiteFooter() {
  return (
    <footer className="mt-24 bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="font-semibold text-lg">CodeStory</div>
            <div className="text-secondary-text text-sm">Build Websites That Grow Your Business.</div>
          </div>
          <nav className="flex gap-4">
            <a href="/privacy" className="text-secondary-text">Privacy</a>
            <a href="/terms" className="text-secondary-text">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
