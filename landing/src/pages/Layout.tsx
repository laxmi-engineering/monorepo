import { useLayoutEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { IsometricGrid } from './components'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const navLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout() {
  const location = useLocation()

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-dvh bg-gray-50 font-['Space_Grotesk']">
      <ScrollToTop />
      <IsometricGrid />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="size-10 bg-brand-500 flex items-center justify-center font-bold text-white text-xl">
                L
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg leading-tight">Laxmi Engineering</div>
                <div className="text-xs text-gray-600">Industries (Bhopal) Pvt. Ltd.</div>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path, link.exact)
                      ? 'text-brand-600'
                      : 'text-gray-700 hover:text-brand-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-coral-500 text-white text-sm font-medium hover:bg-coral-600"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t border-gray-200 px-4 py-2 flex gap-4 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium whitespace-nowrap py-2 ${
                isActive(link.path, link.exact)
                  ? 'text-brand-600 border-b-2 border-brand-500'
                  : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Page Content — key forces full remount so animations restart */}
      <main key={location.pathname} className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-950 text-gray-400 py-16 border-t-4 border-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 bg-brand-500 flex items-center justify-center font-bold text-white text-xl">
                  L
                </div>
                <div>
                  <div className="font-bold text-white text-lg leading-tight">Laxmi Engineering</div>
                  <div className="text-xs">Industries (Bhopal) Pvt. Ltd.</div>
                </div>
              </div>
              <p className="text-sm text-pretty mb-4">
                Leading manufacturer and supplier of made-to-order Heat Transfer Solutions and Equipment for Heavy Industries since 1987.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/laxmiei/" target="_blank" rel="noopener noreferrer" className="size-9 bg-gray-800 hover:bg-coral-500 flex items-center justify-center text-white text-sm" aria-label="Facebook">
                  f
                </a>
                <a href="https://www.linkedin.com/company/laxmiei/" target="_blank" rel="noopener noreferrer" className="size-9 bg-gray-800 hover:bg-coral-500 flex items-center justify-center text-white text-sm" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-brand-500">Shell &amp; Tube Heat Exchangers</Link></li>
                <li><Link to="/products" className="hover:text-brand-500">Surface Condensers</Link></li>
                <li><Link to="/products" className="hover:text-brand-500">HP/LP Heaters</Link></li>
                <li><Link to="/products" className="hover:text-brand-500">Air Cooled Heat Exchangers</Link></li>
                <li><Link to="/products" className="hover:text-brand-500">Pressure Vessels</Link></li>
                <li><Link to="/products" className="hover:text-brand-500">Finned Tubes</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-brand-500">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-brand-500">Projects</Link></li>
                <li><Link to="/about" className="hover:text-brand-500">Quality Policy</Link></li>
                <li><Link to="/about" className="hover:text-brand-500">Vision &amp; Mission</Link></li>
                <li><Link to="/contact" className="hover:text-brand-500">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Head Office</h3>
              <p className="text-sm mb-3 text-pretty">
                Plot No. 72-A&amp;B, Sector-I, Industrial Area, Govindpura, Bhopal (M.P.) 462023
              </p>
              <div className="space-y-2 text-sm">
                <p>+91-755-4033211</p>
                <p>laxmiei@hotmail.com</p>
              </div>

              <h3 className="font-bold text-white mb-2 mt-6">Factory (Unit II)</h3>
              <p className="text-sm text-pretty">
                Industrial Area, Jhalar Kalan, Mandideep (Bhopal) 462046
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; 2026 Laxmi Engineering Industries (Bhopal) Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span>ISO 9001:2015 Certified</span>
              <span>ASME Compliant</span>
              <span>IBR Approved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
