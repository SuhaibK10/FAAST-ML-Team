import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } },
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative">
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dim3 bg-surface mb-8"
        variants={fade(0.1)} initial="hidden" animate="visible"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-blink shadow-[0_0_6px_var(--color-mint)]" />
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[2px] uppercase">Applications Open till 10 April</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,52px)] font-bold leading-[1.3] tracking-[-1px] text-fg max-w-2xl mb-5"
        variants={fade(0.2)} initial="hidden" animate="visible"
      >
        FAAST AMU's ML Full Stack{' '}
       <span className="font-[family-name:var(--font-display)] font-bold text-mint">Team</span>{' '}
        
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-[15px] md:text-base text-dim leading-relaxed max-w-lg mb-10"
        variants={fade(0.35)} initial="hidden" animate="visible"
      >
         Build production grade ML systems.  <br></br>Deploy them to solve real-world problems.
         
      </motion.p>

      {/* CTAs */}
      <motion.div className="flex flex-col sm:flex-row gap-3" variants={fade(0.5)} initial="hidden" animate="visible">
        <motion.button
          className="px-7 py-3 rounded-full text-fg text-sm font-semibold cursor-pointer"
         style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.12), rgba(96,165,250,0.08))', border: '1.5px solid rgba(74,222,128,0.25)' }}
          whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(74,222,128,0.1)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo('formZone')}
        >
          Apply Now
        </motion.button>
        <motion.button
          className="relative px-7 py-3 rounded-full text-fg2 text-sm font-medium cursor-pointer flex items-center gap-2 bg-transparent overflow-hidden"
          style={{ background: 'linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1.5px solid rgba(74,222,128,0.3)' }}
          onClick={() => scrollTo('mentors')}
        >
          <Users size={14} /> Meet Our Mentors
        </motion.button>
      </motion.div>

      
    </section>
  )
}
