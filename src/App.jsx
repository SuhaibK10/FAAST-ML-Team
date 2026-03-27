import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import WhatYouDo from './components/WhatYouDo'
import Mentors from './components/Mentors'
import ApplicationForm from './components/ApplicationForm'
import { Instagram, Linkedin, Globe } from 'lucide-react'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={onComplete} />
      <div className="grain" />
      <div className="mesh-gradient" />

      <motion.div
        className="relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-[500] px-6 md:px-10 py-4 flex items-center justify-between bg-bg/70 backdrop-blur-md border-b border-dim3">
          <div className="flex items-center gap-3">
            <img src="/faast-logo.png" alt="FAAST" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.amufaast.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-dim hover:text-fg transition-colors no-underline hidden sm:block">FAAST Home</a>
            <motion.button
              
              className="px-4 py-1.5 rounded-full text-fg text-[11px] font-semibold cursor-pointer border border-mint"
              
             
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('formZone')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </motion.button>
          </div>
        </nav>

        <Hero />
        <LogoMarquee />
        <WhatYouDo />
        <Mentors />
        <ApplicationForm />

        {/* Footer */}
        <footer className="py-8 px-6 text-center border-t border-dim3">
          <img src="/faast-logo.png" alt="FAAST" className="h-10 w-auto mx-auto opacity-100 mb-3" />
          <p className="text-[11px] text-dim1 mb-3">AMU's Premier FinTech Club</p>
          <div className="flex justify-center gap-5">
            {[
  { label: 'Website', href: 'https://www.amufaast.com', icon: Globe },
  { label: 'Instagram', href: 'https://www.instagram.com/amu_faast_official/', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/faast-amu', icon: Linkedin },
].map(l => (
  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-dim1 no-underline hover:text-mint transition-colors">
    <l.icon size={12} /> {l.label}
  </a>
))}
          </div>
        </footer>
      </motion.div>
    </>
  )
}
