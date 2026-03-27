import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState('INITIALIZING')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let c = 0
    const interval = setInterval(() => {
      c += Math.floor(Math.random() * 8) + 3
      if (c > 100) c = 100
      setCount(c)
      if (c > 25) setWord('LOADING MODULES')
      if (c > 60) setWord('CALIBRATING')
      if (c >= 100) {
        clearInterval(interval)
        setWord('READY')
        setTimeout(() => setDone(true), 500)
        setTimeout(() => onComplete(), 1100)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9000] bg-bg flex flex-col items-center justify-center gap-5"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <img src="/faast-logo.png" alt="FAAST" className="w-30 h-auto opacity-100 mb-8" />
          <span className="font-[family-name:var(--font-display)] text-[clamp(64px,14vw,140px)] font-extrabold text-fg leading-none tracking-[-4px]">
            {count}
          </span>
          <div className="w-40 h-[2px] bg-dim3 rounded-full overflow-hidden">
            <motion.div className="h-full bg-mint rounded-full" animate={{ width: `${count}%` }} transition={{ duration: 0.1 }} />
          </div>
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-dim tracking-[5px] uppercase">{word}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
