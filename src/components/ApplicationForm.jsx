import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, ArrowLeft, ArrowRight } from 'lucide-react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzax6_bi6GKisw-SpVYoTXMYtQLZbh0RwHk2ejP16AHItkYEnOEgIqA8TBV73oiM_u2/exec'
const stepNames = ['Personal Info', 'Academics', 'Portfolio & Resume']

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    department: '', year: '', enrollment: '', faculty: '',
    github: '', linkedin: '', resume: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: undefined })) }

  const validate = () => {
    const e = {}
    if (step === 1) {
      if (!form.name.trim()) e.name = true
      if (!form.email.trim()) e.email = true
      if (!form.phone.trim()) e.phone = true
    }
    if (step === 2) {
      if (!form.department.trim()) e.department = true
      if (!form.year.trim()) e.year = true
      if (!form.enrollment.trim()) e.enrollment = true
      if (!form.faculty.trim()) e.faculty = true
    }
    if (step === 3) {
      if (!form.resume.trim()) e.resume = true
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => { if (validate()) { setDirection(1); setStep(s => Math.min(s + 1, 3)) } }
  const back = () => { setDirection(-1); setStep(s => Math.max(s - 1, 1)) }

  const submit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setSuccess(true)
    } catch { alert('Error. Please try again.') }
    setSubmitting(false)
  }

  if (success) {
    return (
      <motion.section
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-mint flex items-center justify-center mb-6 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-mint/20"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Check className="text-mint" size={24} />
          </motion.div>
        </motion.div>
        <motion.h2
          className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Application Received
        </motion.h2>
        <motion.p
          className="text-sm text-dim max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          We'll review and reach out on WhatsApp.<br />Keep building.
        </motion.p>
        <motion.p
          className="font-[family-name:var(--font-mono)] text-[9px] text-dim2 tracking-[3px] mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          FAAST ML TEAM · 2026
        </motion.p>
      </motion.section>
    )
  }

  const inp = (k) =>
    `w-full px-4 py-3.5 bg-surface-2 border ${errors[k] ? 'border-rose/40 shadow-[0_0_0_3px_rgba(248,113,113,0.06)]' : 'border-dim3 hover:border-white/10'} rounded-xl text-fg text-[13px] outline-none transition-all duration-300 focus:border-mint/40 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.06)] placeholder:text-dim2/60 placeholder:text-[12px] font-[family-name:var(--font-body)]`

  const variants = {
    enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  }

  return (
    <section id="formZone" className="py-20 md:py-28 px-6 flex justify-center">
      <div className="w-full max-w-lg">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[-0.5px] text-fg">
            Ready to build?<br />
            <span className="font-[family-name:var(--font-display)] font-bold text-mint">Start here</span>
          </h2>
        </motion.div>

        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1 gap-3">
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full text-[11px] font-semibold font-[family-name:var(--font-mono)] flex-shrink-0"
                animate={{
                  backgroundColor: s < step ? 'rgba(74,222,128,0.15)' : s === step ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.03)',
                  borderColor: s <= step ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.06)',
                  color: s <= step ? '#4ade80' : '#3d3f4e',
                }}
                style={{ border: '1.5px solid' }}
                transition={{ duration: 0.3 }}
              >
                {s < step ? <Check size={12} /> : s}
              </motion.div>
              {s < 3 && (
                <motion.div
                  className="flex-1 h-px"
                  animate={{ backgroundColor: s < step ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.06)' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-mono)] text-[10px] text-dim2 tracking-wide mb-4">{stepNames[step - 1]}</p>

        <motion.div className="border border-dim3 rounded-2xl bg-surface overflow-hidden relative" layout>
          <motion.div
            className="h-[2px] bg-gradient-to-r from-mint/0 via-mint to-blue/0"
            animate={{ scaleX: step / 3 }}
            style={{ transformOrigin: 'left' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-6 md:p-8"
            >
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Full Name <span className="text-rose">*</span></label>
                    <input className={inp('name')} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Email <span className="text-rose">*</span></label>
                    <input className={inp('email')} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Phone / WhatsApp <span className="text-rose">*</span></label>
                    <input className={inp('phone')} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="Enter your phone number" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Department and Course <span className="text-rose">*</span></label>
                    <input className={inp('department')} value={form.department} onChange={e => set('department', e.target.value)} placeholder="e.g. Btech CSE, MSc Data Science, etc." />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Year <span className="text-rose">*</span></label>
                    <input className={inp('year')} value={form.year} onChange={e => set('year', e.target.value)} placeholder="e.g. 2nd Year, 4th Year etc." />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Enrollment No. <span className="text-rose">*</span></label>
                      <input className={inp('enrollment')} value={form.enrollment} onChange={e => set('enrollment', e.target.value)} placeholder="e.g. GI-1234" />
                    </div>
                    <div>
                      <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Faculty No. <span className="text-rose">*</span></label>
                      <input className={inp('faculty')} value={form.faculty} onChange={e => set('faculty', e.target.value)} placeholder="e.g. 22COB123" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">GitHub</label>
                    <input className={inp()} value={form.github} onChange={e => set('github', e.target.value)} placeholder="github.com/username (if available)" />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">LinkedIn</label>
                    <input className={inp()} value={form.linkedin} onChange={e => set('linkedin', e.target.value)} placeholder="linkedin.com/in/username" />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Resume <span className="text-rose">*</span></label>
                    <input className={inp('resume')} value={form.resume} onChange={e => set('resume', e.target.value)} placeholder="Google Drive link" />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center px-6 md:px-8 pb-6 pt-2">
            <motion.button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-dim3 text-dim text-xs cursor-pointer bg-transparent hover:text-fg hover:border-white/10 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              onClick={back}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft size={12} /> Back
            </motion.button>
            <motion.button
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer ml-auto transition-all ${
                step === 3 ? 'text-bg' : 'bg-fg text-bg hover:shadow-[0_4px_20px_rgba(255,255,255,0.06)]'
              }`}
              style={step === 3 ? { background: 'linear-gradient(135deg, rgba(74,222,128,0.9), rgba(96,165,250,0.8))', border: 'none' } : {}}
              onClick={step === 3 ? submit : next}
              disabled={submitting}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitting ? (
                <><Loader2 size={12} className="animate-spin" /> Submitting...</>
              ) : step === 3 ? (
                <>Submit Application <Check size={12} /></>
              ) : (
                <>Continue <ArrowRight size={12} /></>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}