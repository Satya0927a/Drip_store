import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star } from 'lucide-react'

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          className={s <= Math.round(rating) ? 'text-gold-500 fill-gold-500' : 'text-charcoal-200'}
          fill={s <= Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
      <span className="text-charcoal-400 text-xs font-body ml-1">({rating})</span>
    </div>
  )
}

export default function ProductCard({ product, index = 0 }) {
  const [wished, setWished] = useState(false)

  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      className="product-card"
    >
      {/* Image */}
      <div className="product-img-wrap" style={{ height: '240px' }}>
        <img src={product.img}  alt={product.name} loading="lazy" />

        {/* Badge */}
        {product.badge && (
          <span className={`product-badge ${product.badge === 'SALE' ? 'sale' : product.badge === 'NEW' ? 'new' : 'hot'}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          className="wishlist-btn"
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
        >
          <Heart
            size={15}
            className={wished ? 'text-red-500 fill-red-500' : 'text-charcoal-500'}
            fill={wished ? 'currentColor' : 'none'}
          />
        </button>

        {/* Hover overlay */}
        <div className="product-overlay">
          <button className="btn-add-cart">
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3.5">
        <p className="product-category mb-0.5">{product.category}</p>
        <h3 className="product-name mb-1.5 line-clamp-2">{product.name}</h3>

        <StarRating rating={product.rating} />

        <div className="flex items-center gap-2 mt-2.5 flex-wrap">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <>
              <span className="product-price-old">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="product-price-discount">{discountPct}% off</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
