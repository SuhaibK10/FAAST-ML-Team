import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
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
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.pop-card')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <style>{`
        .pop-card {
          opacity: 0;
          transform: translateY(40px) scale(0.88);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pop-card.pop-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .pop-card:nth-child(1) { transition-delay: 0ms; }
        .pop-card:nth-child(2) { transition-delay: 80ms; }
        .pop-card:nth-child(3) { transition-delay: 160ms; }
        .pop-card:nth-child(4) { transition-delay: 240ms; }
        .pop-card:nth-child(5) { transition-delay: 320ms; }
        .pop-card:nth-child(6) { transition-delay: 400ms; }
        .pop-card:hover {
          transform: translateY(-4px) scale(1.03) !important;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[3px] uppercase mb-3">What You'll Do</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            Train. Build.{' '}
            <span className="font-[family-name:var(--font-display)] font-bold text-mint">Ship</span>.
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="pop-card p-6 rounded-2xl border border-dim3 bg-surface hover:bg-surface-2 group cursor-default"
            >
              <item.icon className={`w-5 h-5 ${item.color} mb-3 opacity-80`} strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fg mb-1.5">{item.label}</h3>
              <p className="text-xs text-dim leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}