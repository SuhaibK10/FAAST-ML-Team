import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, ExternalLink } from 'lucide-react'

const mentors = [
  {
    photo: '/mentor-abdullah.jpg',
    name: 'Abdullah Ahmad',
    role: 'Sr. Data Scientist',
    edu: 'IIT Guwahati',
    company: 'American Express',
    focus: 'ML in Banking & Revenue Analytics',
    linkedin: 'https://www.linkedin.com/in/abdullahjamilahmad/',
  },
  {
    photo: '/mentor-arsalan.jpg',
    name: 'Mohd Arsalan',
    role: 'Machine Learning Engineer',
    edu: 'IIT Kharagpur',
    company: 'PubMatic',
    focus: 'ML in AdTech & Real-Time Systems',
    linkedin: 'https://www.linkedin.com/in/mohd-arsalan-293793204/',
  },
  {
    photo: '/mentor-sertaj.jpg',
    name: 'Sertaj Ahmed Khan',
    role: 'Assistant Vice President, AML',
    edu: '',
    company: 'Barclays',
    focus: 'ML in Anti-Money Laundering',
    linkedin: 'https://www.linkedin.com/in/sertajahmedkhan/',
  },
]

export default function Mentors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="mentors" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[3px] uppercase mb-3">Meet Our Mentors</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            Guided by the{' '}
            <span className="font-[family-name:var(--font-serif)]  text-mint">BEST</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              className="flex flex-col items-center text-center p-8 md:p-10 rounded-3xl border border-dim3 bg-surface group relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, borderColor: 'rgba(74,222,128,0.15)' }}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Photo */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-dim3 group-hover:border-mint/30 transition-colors mb-5">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-fg mb-1">{m.name}</h3>
              <p className="text-xs text-dim leading-snug mb-0.5">{m.role}</p>
              {m.edu && <p className="text-[12px] text-dim2 mb-1">{m.edu}</p>}
              <p className="font-[family-name:var(--font-mono)] text-[11px] font-semibold text-mint tracking-[1.5px] uppercase mb-3">{m.company}</p>

              {/* Focus area */}
              <div className="px-3 py-1.5 rounded-full bg-mint-dim border border-mint/10 mb-5">
                <p className="text-[12px] text-mint font-medium">{m.focus}</p>
              </div>

              <motion.a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-dim3 text-dim text-[12px] font-medium no-underline"
                whileHover={{ borderColor: '#4ade80', color: '#4ade80', backgroundColor: 'rgba(74,222,128,0.06)' }}
              >
                <Linkedin size={12} /> LinkedIn <ExternalLink size={9} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* And many more */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
         
          <p className="text-sm text-dim font-medium">& many more industry mentors</p>
          <p className="text-[11px] text-dim2 mt-1">From top companies across finance, tech & research</p>
        </motion.div>
      </div>
    </section>
  )
}