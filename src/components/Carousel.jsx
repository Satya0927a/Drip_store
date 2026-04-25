import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const SLIDES = [
  {
    id: 1,
    badge: 'Limited Deal',
    headline: 'Flat 50%\nOff on\nDenim',
    sub: 'Premium stretch denim in 20+ washes. For every body, every occasion.',
    cta: 'Grab the Deal',
    discount: '50% OFF',
    bg: 'from-[#0d1520] via-[#162030] to-[#1a2535]',
    img: "/crousal/crousal_2.png",
    accent: '#60a5fa',
  },
  {
    id: 2,
    badge: 'New Season',
    headline: 'Summer\nCollection\n2026',
    sub: 'Lightweight fabrics, bold prints, and effortless silhouettes — crafted for the heat.',
    cta: 'Shop Summer',
    discount: null,
    bg: 'from-[#1a1917] via-[#2e2a22] to-[#3d3020]',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80',
    accent: '#d4a017',
  },
  {
    id: 3,
    badge: 'Trending Now',
    headline: 'Ethnic\nWear for\nEvery Occasion',
    sub: 'From festive kurtas to bridal lehengas — curated with love for every celebration.',
    cta: 'Explore Ethnic',
    discount: 'Up to 40% Off',
    bg: 'from-[#1e0f0a] via-[#2e1510] to-[#3a1c10]',
    img: 'https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accent: '#fb923c',
  },
  {
    id: 4,
    badge: 'Best Sellers',
    headline: 'Street\nStyle\nEssentials',
    sub: 'Oversized hoodies, graphic tees & cargo pants — your everyday urban uniform.',
    cta: 'Shop Streetwear',
    discount: 'NEW IN',
    bg: 'from-[#0d0d0d] via-[#1a1a1a] to-[#272727]',
    img: "/crousal/crousal_1.webp",
    accent: '#a3e635',
  },
]

const INTERVAL = 5000

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(true)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = SLIDES[current]

  const textVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const imgVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 1.05 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97 }),
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'min(90vh, 640px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background gradient */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        />
      </AnimatePresence>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full items-center lg:gap-8">

          {/* Text content */}
          <div className="order-1 lg:order-1 pb-12 lg:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${slide.id}`}
                initial="enter"
                animate="center"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-5"
              >
                <div className='flex flex-col gap-2'>
                  <div className="flex items-center gap-3">
                    <span className="carousel-badge">{slide.badge}</span>
                    {slide.discount && (
                      <span className="text-xs font-body font-bold tracking-wider px-3 py-1 rounded-full"
                        style={{ background: slide.accent + '22', color: slide.accent, border: `1px solid ${slide.accent}55` }}>
                        {slide.discount}
                      </span>
                    )}
                  </div>

                  <h2 className="carousel-headline text-5xl sm:text-6xl lg:text-7xl whitespace-pre-line ">
                    {slide.headline}
                  </h2>

                  <p className="text-ivory-200/75 text-sm sm:text-base font-body font-light leading-relaxed max-w-md">
                    {slide.sub}
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all"
                      style={{ background: slide.accent, color: '#1a1917' }}
                    >
                      {slide.cta}
                      <ArrowRight size={15} />
                    </motion.button>
                    <button className="text-ivory-200/60 text-sm font-body hover:text-ivory-100 transition-colors underline underline-offset-4">
                      View All
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end h-64 sm:h-80 lg:h-[520px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`img-${slide.id}`}
                custom={direction}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-end justify-center lg:justify-end"
              >
                <div className="relative w-full h-full max-w-sm lg:max-w-none">
                  <img
                    src={slide.img}
                    alt={slide.badge}
                    className="w-full h-full object-cover object-top rounded-2xl lg:rounded-3xl shadow-2xl"
                    draggable={false}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <button onClick={prev} className="carousel-btn" aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={next} className="carousel-btn" aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={current}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          className="h-full origin-left"
          style={{ background: slide.accent }}
        />
      </div>
    </section>
  )
}
