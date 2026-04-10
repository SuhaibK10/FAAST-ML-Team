import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, Users, Calendar, Clock, Video, Sparkles } from 'lucide-react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwEL_nQyT20xavAAWhxvSdUcbOARaOLEnshY6321Y4IMCR54eojUEQzkbKv8_uWcElf/exec'

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } },
})

export default function WebinarRegister() {
  const [form, setForm] = useState({ name: '', facultyNo: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: undefined })) }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.facultyNo.trim()) e.facultyNo = true
    if (!form.email.trim()) e.email = true
    if (!form.phone.trim()) e.phone = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

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
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="grain" />
        <div className="mesh-gradient" />
        <motion.div
          className="relative z-[1] flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-mint flex items-center justify-center mb-6 relative"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-mint/20"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Check className="text-mint" size={24} />
          </motion.div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-3 text-fg">
            You're Registered!
          </h2>
          <p className="text-sm text-dim max-w-sm leading-relaxed mb-2">
            See you on <span className="text-mint font-semibold">12 April at 7:30 PM</span> on Google Meet.
          </p>
          <p className="text-xs text-dim2">The link will be shared before the session.</p>
        
        </motion.div>
      </div>
    )
  }

  const inp = (k) =>
    `w-full px-4 py-3.5 bg-surface-2 border ${errors[k] ? 'border-rose/40 shadow-[0_0_0_3px_rgba(248,113,113,0.06)]' : 'border-dim3 hover:border-white/10'} rounded-xl text-fg text-[13px] outline-none transition-all duration-300 focus:border-mint/40 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.06)] placeholder:text-dim2/60 placeholder:text-[12px] font-[family-name:var(--font-body)]`

  return (
    <div className="min-h-screen bg-bg relative">
      <div className="grain" />
      <div className="mesh-gradient" />

      <div className="relative z-[1] px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Event Info */}
          <motion.div variants={fade(0.1)} initial="hidden" animate="visible">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dim3 bg-surface mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-blink shadow-[0_0_6px_var(--color-mint)]" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[2px] uppercase">Live Webinar</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[clamp(26px,4.5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-fg mb-4">
              ML in Finance &{' '}
              <span className="text-mint">Banking</span>
            </h1>

            <p className="text-[15px] text-dim leading-relaxed mb-8 max-w-md">
              From rule-based systems to modern ML — a practical conversation on how AI is actually used in credit decisioning, risk, fraud & AML.
            </p>

            {/* Mentor Card */}
            <motion.div
              className="p-5 rounded-2xl border border-dim3 bg-surface mb-6"
              variants={fade(0.25)} initial="hidden" animate="visible"
            >
              <div className="flex items-center gap-4 mb-3">
                <img src="/mentor-abdullah.jpg" alt="Abdullah Ahmad" className="w-14 h-14 rounded-full object-cover border-2 border-dim3" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-fg">Abdullah Ahmad</h3>
                  <p className="text-xs text-dim">Sr. Data Scientist</p>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[1px] uppercase">American Express</p>
                </div>
              </div>
              <p className="text-xs text-dim2">IIT Guwahati Alum · ML in Banking & Revenue Analytics</p>
            </motion.div>

            {/* Event Details */}
            <motion.div
              className="space-y-3"
              variants={fade(0.35)} initial="hidden" animate="visible"
            >
              {[
                { icon: Calendar, label: '12 April 2026', sub: 'Saturday' },
                { icon: Clock, label: '7:30 PM IST', sub: 'Duration ~60 min' },
                { icon: Video, label: 'Google Meet', sub: 'Link shared after registration' },
                { icon: Users, label: 'Open to all AMU students', sub: 'No prerequisites' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-dim3">
                  <div className="w-9 h-9 rounded-lg bg-mint-dim border border-mint/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-mint" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-fg font-medium leading-tight">{item.label}</p>
                    <p className="text-[11px] text-dim2">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Registration Form */}
          <motion.div variants={fade(0.3)} initial="hidden" animate="visible">
            <div className="border border-dim3 rounded-2xl bg-surface overflow-hidden">
              {/* Top bar */}
              <div className="h-[2px] bg-gradient-to-r from-mint/0 via-mint to-blue/0" />

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="text-mint" size={16} />
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-mint tracking-[2px] uppercase">Register Now</p>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-fg mb-6">
                  Reserve your spot
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Full Name <span className="text-rose">*</span></label>
                    <input className={inp('name')} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-[11px] text-dim font-medium mb-1.5 block tracking-wide">Faculty Number <span className="text-rose">*</span></label>
                    <input className={inp('facultyNo')} value={form.facultyNo} onChange={e => set('facultyNo', e.target.value)} placeholder="e.g. 22COB123" />
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

                <motion.button
                  className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold cursor-pointer text-bg transition-all"
                  style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.9), rgba(96,165,250,0.8))', border: 'none' }}
                  onClick={submit}
                  disabled={submitting}
                  whileHover={{ y: -1, boxShadow: '0 8px 30px rgba(74,222,128,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  {submitting ? (
                    <><Loader2 size={16} className="animate-spin" /> Registering...</>
                  ) : (
                    <><Sparkles size={14} /> Register for Webinar</>
                  )}
                </motion.button>

                <p className="text-[10px] text-dim2 text-center mt-4">
                  Free event · Google Meet link will be shared via WhatsApp
                </p>
              </div>
            </div>

            {/* Powered by */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <img src="/faast-logo.png" alt="FAAST" className="h-6 w-auto opacity-60" />
              <span className="text-[10px] text-dim2">FAAST ML Team</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}