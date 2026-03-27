import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Cpu, Globe, Rocket, Code2, GitBranch } from 'lucide-react'

const items = [

  { icon: Cpu, label: 'Build Production ML', desc: 'Ship real models with APIs, dashboards, and pipelines.', color: 'text-blue' },
  { icon: GitBranch, label: 'MLOps & DevOps', desc: 'Docker, CI/CD, Cloud deployment.', color: 'text-blue' },
    { icon: Trophy, label: 'Compete Globally', desc: 'Competition that matters.', color: 'text-mint' },
  { icon: Globe, label: 'Industry Collaboration', desc: 'Work with quant research firms on live problems.', color: 'text-violet' },
  { icon: Code2, label: 'Full Stack AI', desc: 'Train it, deploy it, build the frontend around it.', color: 'text-mint' },
  
  { icon: Rocket, label: 'Career Velocity', desc: 'ML Engineer, Quant Analyst, MLOps — real career paths.', color: 'text-violet' },
]

export default function WhatYouDo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[3px] uppercase mb-3">What You'll Do</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            Train. Build. {' '}
            <span className="font-[family-name:var(--font-serif)]  font-bold text-mint">Ship</span>.
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="p-6 rounded-2xl border border-dim3 bg-surface hover:bg-surface-2 transition-colors group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
            >
              <item.icon className={`w-5 h-5 ${item.color} mb-3 opacity-80`} strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fg mb-1.5">{item.label}</h3>
              <p className="text-xs text-dim leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
