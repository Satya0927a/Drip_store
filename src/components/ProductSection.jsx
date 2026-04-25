import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

export default function ProductSection({ label, title, products, bgLight = false }) {
  return (
    <section className={`py-14 px-4 sm:px-6 ${bgLight ? 'bg-ivory-100' : 'bg-ivory-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="section-label mb-1">{label}</p>
            <h2 className="section-title text-2xl sm:text-3xl">{title}</h2>
            <div className="divider-gold" />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="btn-view-all hidden sm:inline-flex"
          >
            View All <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-7 flex justify-center sm:hidden">
          <button className="btn-view-all">
            View All <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
