import { motion } from 'framer-motion'
import { Database, Shield, Brain, ExternalLink } from 'lucide-react'

const projects = [
  {
    status: 'ACTIVE',
    statusColor: 'text-mint',
    statusBg: 'bg-mint-dim border-mint/10',
    title: 'Mule Account Detection',
    subtitle: 'Anti-Money Laundering · RBIH × IIT Delhi Tryst',
    desc: 'Building ML models to detect mule accounts used in money laundering across 7.4M+ banking transactions. Identifying patterns like dormant activation, rapid pass-through, fan-in/fan-out flows, and structuring below reporting thresholds.',
    stats: [
      { value: '7.4M+', label: 'Transactions' },
      { value: '40K+', label: 'Accounts' },
      { value: '12', label: 'Mule Patterns' },
    ],
    tags: ['XGBoost', 'Anomaly Detection', 'Feature Engineering', 'Temporal Analysis', 'AUC-ROC'],
    icon: Shield,
    iconColor: 'text-mint',
  },
  // Add more projects here as the team grows
  // {
  //   status: 'UPCOMING',
  //   title: 'Jane Street Market Prediction',
  //   ...
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[3px] uppercase mb-3">Projects</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            What we're{' '}
            <span className="font-[family-name:var(--font-serif)] italic font-normal text-mint">building</span>.
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="p-6 md:p-8 rounded-2xl border border-dim3 bg-surface group relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(74,222,128,0.12)' }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Status + Icon row */}
              <div className="flex items-center justify-between mb-5">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold tracking-[1.5px] uppercase border ${project.statusBg} ${project.statusColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor === 'text-mint' ? 'bg-mint animate-pulse' : 'bg-dim2'}`} />
                  {project.status}
                </div>
                <project.icon className={`w-5 h-5 ${project.iconColor} opacity-60`} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-fg mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-dim2 tracking-[1px] uppercase mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-dim leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-6">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-[family-name:var(--font-display)] text-lg font-bold text-fg">{stat.value}</div>
                    <div className="text-[10px] text-dim2 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-dim3 text-[10px] text-dim2 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming */}
        <motion.p
          className="text-center mt-8 text-sm text-dim"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          More projects loading as the team grows.
        </motion.p>
      </div>
    </section>
  )
}