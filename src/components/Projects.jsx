import { motion } from 'framer-motion'
import { Shield, FileSearch, ShoppingCart } from 'lucide-react'

const projects = [
  {
    icon: Shield,
    iconColor: 'text-emerald-400',
    accent: 'from-emerald-500/20 to-emerald-500/0',
    borderHover: 'rgba(52,211,153,0.15)',
    title: 'Mule Account Detection System',
    org: 'Reserve Bank Innovation Hub',
    desc: 'Engineered an end-to-end anomaly detection pipeline to identify mule accounts across 7.4M+ banking transactions. Implemented temporal feature extraction for 12 known laundering typologies such as dormant activation, structuring below ₹50K thresholds, rapid pass-through velocity, fan-in/fan-out graph patterns, and post-mobile-change behavioral spikes. Scored on AUC-ROC with temporal IoU for suspicious activity window precision.',
    stats: [
      { value: '7.4M+', label: 'Transactions Processed' },
      { value: '40K+', label: 'Account Profiles' },
      { value: '12', label: 'Laundering Typologies' },
    ],
    tags: ['XGBoost', 'Graph Analytics', 'Temporal Feature Engineering', 'Anomaly Detection', 'AUC-ROC', 'Behavioral Profiling'],
  },
  {
    icon: FileSearch,
    iconColor: 'text-blue-400',
    accent: 'from-blue-500/20 to-blue-500/0',
    borderHover: 'rgba(96,165,250,0.15)',
    title: 'Credit Decision System',
    org: 'AI-Powered Credit Appraisal · Corporate Lending',
    desc: 'Architected a multi-agent AI system for automated corporate credit appraisal that ingests unstructured data from PDF annual reports, GST filings (GSTR-2A vs 3B reconciliation), bank statements, and MCA filings. Built a Research Agent for real-time web-scale secondary intelligence and a Recommendation Engine generating explainable Credit Appraisal Memos scored on the Five Cs framework with transparent decision logic.',
    stats: [
      { value: '3', label: 'Intelligence Pillars' },
      { value: '5C', label: 'Credit Scoring Framework' },
      { value: 'Multi-Agent', label: 'Architecture' },
    ],
    tags: ['LLM Orchestration', 'RAG Pipeline', 'PDF Extraction', 'Explainable AI', 'Databricks', 'Web Crawling'],
  },
  {
    icon: ShoppingCart,
    iconColor: 'text-amber-400',
    accent: 'from-amber-500/20 to-amber-500/0',
    borderHover: 'rgba(251,191,36,0.15)',
    title: 'Dynamic Pricing Optimization',
    org: 'Amazon ML Challenge ',
    desc: 'Developed a large-scale pricing prediction model for Amazon\'s e-commerce catalog — analyzing product titles, descriptions, specifications, and pack quantities across millions of SKUs. Built feature extraction pipelines for multimodal product attributes (brand signals, specification embeddings, quantity normalization) to predict optimal price points at scale.',
    stats: [
      { value: '2.2M+', label: 'Product SKUs' },
      { value: '7,100+', label: 'Competing Teams' },
      { value: 'NLP', label: 'Core Pipeline' },
    ],
    tags: ['Transformer Embeddings', 'Feature Engineering', 'Regression at Scale', 'Multimodal NLP', 'Catalog Intelligence'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[3px] uppercase mb-3">Projects</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            Real problems.{' '}
            <span className="font-[family-name:var(--font-serif)] italic font-normal text-mint">Shipped solutions</span>.
          </h2>
          <p className="text-sm text-dim mt-3 max-w-md mx-auto"> Production-grade ML on industry-scale data.</p>
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative rounded-2xl border border-dim3 bg-surface group overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ borderColor: project.borderHover }}
            >
              {/* Top gradient accent — always visible */}
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${project.accent} opacity-100 pointer-events-none`} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-dim3 flex items-center justify-center group-hover:border-white/10 transition-colors">
                      <project.icon className={`w-[18px] h-[18px] ${project.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-fg tracking-tight">{project.title}</h3>
                      <p className="font-[family-name:var(--font-mono)] text-[9px] text-dim2 tracking-[1px] uppercase">{project.org}</p>
                    </div>
                  </div>
                </div>

                <p className="text-[13px] text-dim leading-[1.7] mb-6">{project.desc}</p>

                <div className="flex gap-6 md:gap-10 mb-6 pb-6 border-b border-dim3">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-fg leading-tight">{stat.value}</div>
                      <div className="text-[9px] text-dim2 uppercase tracking-[1px] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full border border-dim3 text-[9px] text-dim2 font-medium tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.linkedin.com/in/suhaibkhan10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[10px] text-dim2 hover:text-mint transition-colors no-underline whitespace-nowrap"
                  >
                    by <span className="text-mint/70 hover:text-mint underline underline-offset-2 decoration-mint/30 hover:decoration-mint">Suhaib Khan ↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}