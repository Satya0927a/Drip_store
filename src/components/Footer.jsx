import { motion } from 'framer-motion'
import {
  Instagram, Twitter, Facebook, Youtube,
  MapPin, Phone, Mail, CreditCard, Shield, Truck
} from 'lucide-react'

const FOOTER_LINKS = {
  'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Sustainability'],
  'Customer Care': ['Track Order', 'Returns & Exchanges', 'Shipping Policy', 'Size Guide', 'FAQs'],
  'Quick Links': ['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards', 'Store Locator'],
}

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
]

const PAYMENT_LABELS = ['Visa', 'Mastercard', 'UPI', 'PayTM', 'RazorPay', 'COD']

export default function Footer() {
  return (
    <footer className="footer-bg">
      {/* Top strip — guarantees */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, title: 'Free Delivery', sub: 'On orders ₹999+' },
            { icon: Shield, title: 'Secure Payment', sub: '100% safe checkout' },
            { icon: CreditCard, title: 'Easy Returns', sub: '30-day hassle-free' },
            { icon: Phone, title: '24/7 Support', sub: 'Always here for you' },
          ].map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,160,23,0.1)' }}>
                <Icon size={18} className="text-gold-400" />
              </div>
              <div>
                <p className="text-ivory-100 text-sm font-body font-600 leading-tight">{title}</p>
                <p className="text-charcoal-500 text-xs font-body">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <span className="footer-logo">DRIP</span>
            <p className="text-charcoal-500 text-sm font-body leading-relaxed mt-4 max-w-xs">
              Premium fashion for every occasion. Quality you can feel, style that speaks — that's the DRIP promise.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-5">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <button key={label} className="footer-social" aria-label={label}>
                  <Icon size={15} />
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="footer-heading">Stay in the loop</p>
              <div className="flex mt-2 max-w-xs">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
              <p className="text-charcoal-600 text-xs font-body mt-2">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="footer-heading">{heading}</p>
              {links.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-10 flex flex-wrap gap-5 text-charcoal-500 text-sm font-body border-t footer-divider pt-8">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-gold-500" />
            Connaught Place, New Delhi, India
          </span>
          <span className="flex items-center gap-2">
            <Phone size={13} className="text-gold-500" />
            +91 98765 43210
          </span>
          <span className="flex items-center gap-2">
            <Mail size={13} className="text-gold-500" />
            hello@dripfashion.in
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t footer-divider pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-600 text-xs font-body">
            © 2025 DRIP Fashion. All rights reserved.
          </p>

          {/* Payment logos (text badges) */}
          <div className="flex items-center flex-wrap gap-2">
            {PAYMENT_LABELS.map((label) => (
              <span
                key={label}
                className="text-xs font-body font-600 px-2.5 py-1 rounded border border-white/10 text-charcoal-400"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-4 text-xs font-body text-charcoal-600">
            <a href="#" className="hover:text-charcoal-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
