import { motion } from 'framer-motion'
import { ArrowRight, Flame, Tag, Zap, Star } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Carousel from '../components/Carousel.jsx'
import ProductSection from '../components/ProductSection.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'
import { AppStoreIcon, PlayStoreIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

/* ─── PRODUCT DATA ─── */
const TRENDING = [
  {
    id: 't1', name: 'Mauve Plain Polo T-Shirt', category: 'Men · T-Shirts',
    price: 699, originalPrice: 1299, rating: 4.5,
    img: '/products/product_2.webp',
  },
  {
    id: 't2', name: 'Floral Wrap Midi Dress', category: 'Women · Dresses',
    price: 1199, originalPrice: 2199, rating: 4.7,
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=75',
  },
  {
    id: 't3', name: 'Premium Slim-Fit Chinos', category: 'Men · Trousers',
    price: 1499, originalPrice: 2499, rating: 4.3,
    img: '/products/product_1.png',
  },
  {
    id: 't4', name: 'Linen T-shirt Set', category: 'Men · Sets',
    price: 1899, originalPrice: 3499,  rating: 4.8,
    img: '/products/product_5.webp',
  },
  {
    id: 't5', name: 'Indigo Shirt', category: 'Men · Shirt',
    price: 1299, originalPrice: 1999, rating: 4.6,
    img: '/products/product_6.webp',
  },
]

const UNDER299 = [
  {
    id: 'u1', name: 'Slim fit Stretch Tshirt', category: 'Men · Basics',
    price: 249, originalPrice: 599, rating: 4.2,
    img:  "products/product_8.webp" },
  {
    id: 'u2', name: '100% Cotton Sleeveless T-Shirt', category: 'Men · Shirts',
    price: 289, originalPrice: 799, rating: 4.1,
    img:  "products/product_9.webp"
  },
  {
    id: 'u3', name: 'Maroon Slim fit Tshirt', category: 'Men · Tshirt',
    price: 199, originalPrice: 499, badge: 'HOT', rating: 4.4,
    img:  "products/product_10.webp"
  },
  {
    id: 'u4', name: 'Regular Fit Stretch Drawstring Shorts', category: 'Men · Bottoms',
    price: 279, originalPrice: 699, badge: 'HOT', rating: 4.6,
    img:  "products/product_12.webp"
  },
  {
    id: 'u5', name: 'Brown T-shirt Slim fit', category: 'Men · T-shirt',
    price: 249, originalPrice: 599,  rating: 4.8,
    img:  "products/product_11.webp"
  },
]

const NEW_ARRIVALS = [
  {
    id: 'n1', name: 'Clyster Off-White Overshirt', category: 'Men · shirts',
    price: 999, originalPrice: null, rating: 4.5,
    img:  "products/product_13.webp"
  },
  {
    id: 'n2', name: 'Stripehaven Blue Striped Shirt', category: 'Men · shirts',
    price: 1599, originalPrice: null, badge: 'NEW', rating: 4.6,
    img:  "products/product_14.webp"
  },
  {
    id: 'n3', name: 'Superflex Lavender Shirt', category: 'Men · shirts',
    price: 1409, originalPrice: 1999, badge: 'NEW', rating: 4.7,
    img:  "products/product_15.webp"
  },
  {
    id: 'n4', name: 'Regular Fit Denim Zipper Overshirt', category: 'Men · Denim',
    price: 1899, originalPrice: null, badge: 'NEW', rating: 4.4,
    img:  "products/product_16.webp"
  },
  {
    id: 'n5', name: 'Blue Relaxed Fit Denim Shirt', category: 'Men · Denim',
    price: 1699, originalPrice: null, badge: 'NEW', rating: 4.5,
    img:  "products/product_17.webp"
  },
]

/* ─── Category data ─── */
const CATEGORIES = [
  { label: 'Men', img: '/other/men_cloth.webp', span: 'col-span-1' },
  { label: 'Women', img: '/other/women_cloth.webp', span: 'col-span-1' },
  { label: 'Kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=75', span: 'col-span-1' },
  { label: 'Ethnic', img: '/other/ethnic_cloth.webp', span: 'col-span-1' },
  { label: 'Sports', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=75', span: 'col-span-1' },
]


/* ─── Category Strip ─── */
function CategoryStrip() {
  return (
    <section className="py-14 px-4 sm:px-6 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="section-label">Browse by Category</p>
          <h2 className="section-title text-2xl sm:text-3xl mt-1">Shop Your Style</h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="category-card"
              style={{ height: '180px' }}
            >
              <img src={cat.img} alt={cat.label} />
              <div className="category-overlay">
                <p className="category-name">{cat.label}</p>
                <p className="text-ivory-100/60 text-xs font-body mt-1">Shop Now →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Promo Banner ─── */
function PromoBanner() {
  return (
    <section className="promo-banner py-14 px-4 sm:px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden flex items-center"
            style={{ minHeight: '200px', background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
          >
            <div className="p-8 z-10 relative">
              <p className="text-purple-200 text-xs font-body font-semibold tracking-widest uppercase mb-2">
                Women's Pick
              </p>
              <h3 className="font-display text-3xl font-bold text-white leading-tight mb-3">
                Dresses<br />Under ₹999
              </h3>
              <button className="flex items-center gap-2 text-white font-body font-semibold text-sm underline underline-offset-4 hover:text-purple-200 transition-colors">
                Shop Now <ArrowRight size={14} />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300&q=70"
              alt="Women's Dresses"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40"
            />
          </motion.div>

          {/* Banner 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden flex items-center"
            style={{ minHeight: '200px', background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)' }}
          >
            <div className="p-8 z-10 relative">
              <p className="text-emerald-200 text-xs font-body font-semibold tracking-widest uppercase mb-2">
                Men's Exclusive
              </p>
              <h3 className="font-display text-3xl font-bold text-white leading-tight mb-3">
                Shirts from<br />₹499
              </h3>
              <button className="flex items-center gap-2 text-white font-body font-semibold text-sm underline underline-offset-4 hover:text-emerald-200 transition-colors">
                Shop Now <ArrowRight size={14} />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=300&q=70"
              alt="Men's Shirts"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
const REVIEWS = [
  {
    name: 'Priya S.', city: 'Mumbai', rating: 5,
    text: 'Absolutely love the quality! The fabric feels premium and the fit is perfect. Will definitely order again.',
    product: 'Floral Wrap Dress',
  },
  {
    name: 'Rohan M.', city: 'Bengaluru', rating: 5,
    text: 'Fast delivery, great packaging and the hoodie exceeded my expectations. DRIP is my go-to now!',
    product: 'Graphic Logo Hoodie',
  },
  {
    name: 'Ananya K.', city: 'Delhi', rating: 4,
    text: 'Such a wide range of options. Got the linen co-ord set for a wedding and got so many compliments!',
    product: 'Linen Co-ord Set',
  },
]

function Testimonials() {
  return (
    <section className="py-14 px-4 sm:px-6 bg-ivory-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="section-label">Real Reviews</p>
          <h2 className="section-title text-2xl sm:text-3xl mt-1">What Our Customers Say</h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="bg-white rounded-2xl p-6 border border-gold-500/10 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-charcoal-700 text-sm font-body leading-relaxed mb-4">
                "{r.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-charcoal-900 text-sm font-body font-semibold">{r.name}</p>
                  <p className="text-charcoal-400 text-xs font-body">{r.city}</p>
                </div>
                <p className="text-gold-600 text-xs font-body italic">{r.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── App Download CTA ─── */
function AppCTA() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-charcoal-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold-400 text-xs font-body font-semibold tracking-widest uppercase mb-3">
            📱 Mobile App
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory-100 mb-3">
            Shop on the Go
          </h2>
          <p className="text-charcoal-400 font-body text-sm mb-7 max-w-md mx-auto">
            Get exclusive app-only deals, track orders in real-time, and enjoy a seamless shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="flex items-center gap-3 bg-ivory-100 text-charcoal-900 rounded-xl px-6 py-3 font-body font-semibold text-sm hover:bg-white transition-colors">
              <span className="text-xl"><HugeiconsIcon icon={AppStoreIcon}/></span> App Store
            </button>
            <button className="flex items-center gap-3 bg-ivory-100 text-charcoal-900 rounded-xl px-6 py-3 font-body font-semibold text-sm hover:bg-white transition-colors">
              <span className="text-xl"><HugeiconsIcon icon={PlayStoreIcon}/></span> Google Play
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Carousel />
        <CategoryStrip />

        {/* Trending Products */}
        <ProductSection
          label="🔥 What's Hot"
          title="Trending Right Now"
          products={TRENDING}
          bgLight={false}
        />

        <PromoBanner />

        {/* Under 299 */}
        <section className="py-14 px-4 sm:px-6 bg-ivory-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <p className="section-label flex items-center gap-1.5">
                  <Tag size={12} /> Budget Picks
                </p>
                <h2 className="section-title text-2xl sm:text-3xl mt-1">
                  Under <span className="text-red-500">₹299</span>
                </h2>
                <div className="divider-gold" />
              </div>
              <button className="btn-view-all hidden sm:inline-flex">
                View All <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Highlighted grid — first card spans 2 rows */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {UNDER299.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>

            <div className="mt-7 flex justify-center sm:hidden">
              <button className="btn-view-all">View All <ArrowRight size={14} /></button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <ProductSection
          label="✨ Just Landed"
          title="New Arrivals"
          products={NEW_ARRIVALS}
          bgLight={false}
        />

        <Testimonials />
        <AppCTA />
      </main>
      <Footer />
    </div>
  )
}
