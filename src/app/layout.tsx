import '../styles/globals.css'
import { Metadata } from 'next'
import { SiteNavbar } from '../components/Navbar'
import { SiteFooter } from '../components/Footer'
import RequestQuoteModalLoader from '../components/RequestQuoteModalLoader'

export const metadata: Metadata = {
  title: 'CodeStory — Build Websites That Grow Your Business',
  description: 'Premium bilingual agency website — CodeStory'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-dark">
        <SiteNavbar />
        <main>{children}</main>
        <SiteFooter />
        <RequestQuoteModalLoader />
      </body>
    </html>
  )
}
