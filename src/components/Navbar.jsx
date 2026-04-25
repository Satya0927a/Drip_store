import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, User, ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'New Arrivals', href: '#' },
  { label: 'Men', href: '#', sub: ['T-Shirts', 'Jeans', 'Jackets', 'Accessories'] },
  { label: 'Women', href: '#', sub: ['Dresses', 'Tops', 'Trousers', 'Bags'] },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#', highlight: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount] = useState(3)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-charcoal-900 py-2 px-4 text-center">
        <p className="text-gold-400 text-xs font-body font-medium tracking-widest uppercase">
          <Sparkles size={12} className="inline mr-2 mb-0.5" />
          Free shipping on orders above ₹999 — Use code <span className="text-ivory-100 font-semibold">DRIP50</span> for 50% off
          <Sparkles size={12} className="inline ml-2 mb-0.5" />
        </p>
      </div>

      <header className={`navbar-glass sticky top-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="nav-logo-text">DRIP</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 ml-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`nav-link flex items-center gap-1 ${link.highlight ? 'text-red-500' : ''}`}
                  >
                    {link.label}
                    {link.sub && <ChevronDown size={13} className="opacity-60" />}
                  </a>
                  {link.sub && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 bg-ivory-50 border border-gold-500/10 shadow-xl rounded-xl py-2 min-w-36 z-50"
                    >
                      {link.sub.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm font-body text-charcoal-700 hover:text-charcoal-900 hover:bg-gold-500/5 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search bar — desktop */}
            <div className="flex-1 hidden md:block max-w-xs lg:max-w-sm ml-auto">
              <div className="search-bar flex items-center px-4 py-2 gap-2">
                <Search size={15} className="text-charcoal-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for clothes, brands…"
                  className="bg-transparent w-full text-sm font-body text-charcoal-800 placeholder-charcoal-400 outline-none"
                />
              </div>
            </div>

            {/* Action icons */}
            <div className="flex items-center gap-1 ml-2">
              {/* Mobile search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gold-500/10 transition-colors text-charcoal-700"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <button className="p-2 rounded-full hover:bg-gold-500/10 transition-colors text-charcoal-700 relative hidden sm:flex">
                <Heart size={20} />
              </button>

              <button className="p-2 rounded-full hover:bg-gold-500/10 transition-colors text-charcoal-700 relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-gold-500 rounded-full text-xs font-bold text-charcoal-900 flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="btn-login hidden sm:flex items-center gap-2 px-4 py-2 ml-1 text-sm">
                <User size={15} />
                Login
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-full hover:bg-gold-500/10 transition-colors text-charcoal-700 ml-1"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>

          {/* Mobile search bar */}

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden md:hidden pb-3"
              >
                <div className="search-bar flex items-center px-4 py-2.5 gap-2">
                  <Search size={15} className="text-charcoal-400 flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search for clothes, brands…"
                    className="bg-transparent w-full text-sm font-body text-charcoal-800 placeholder-charcoal-400 outline-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-charcoal-900/50 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="mobile-menu flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-gold-500/15">
                <span className="nav-logo-text text-xl">DRIP</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-full hover:bg-charcoal-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block py-3 border-b border-charcoal-100 font-body font-500 text-sm ${link.highlight ? 'text-red-500' : 'text-charcoal-800'}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="p-5 border-t border-gold-500/15 flex gap-3">
                <button className="btn-login flex-1 flex items-center justify-center gap-2 py-2.5 text-sm">
                  <User size={15} /> Login
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
