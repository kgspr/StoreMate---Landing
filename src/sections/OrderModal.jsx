import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { ROBOT_MODELS } from './sectionData'
import { RovixMark } from './SectionUtils'

export default function OrderModal({
  isOpen,
  onClose,
  activeModelIdx,
  setActiveModelIdx,
  orderSubmitted,
  setOrderSubmitted,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-[#131711] border border-[#b4ff39]/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#b4ff39] flex items-center justify-center">
                <RovixMark className="w-5 h-4 text-black" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b4ff39] block">
                  Early Access Batch 01
                </span>
                <h3 className="font-display text-xl font-bold text-white">Reserve Your ROVIX</h3>
              </div>
            </div>

            {orderSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#b4ff39]/20 border border-[#b4ff39] text-[#b4ff39] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Reservation Confirmed!</h4>
                <p className="text-xs text-white/60 mt-1.5 max-w-xs mx-auto">
                  Your priority build slot for{' '}
                  <span className="text-[#b4ff39]">{ROBOT_MODELS[activeModelIdx].name}</span>{' '}
                  has been registered.
                </p>
                <button
                  onClick={() => {
                    setOrderSubmitted(false)
                    onClose()
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#b4ff39] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setOrderSubmitted(true)
                }}
                className="space-y-4 mt-4"
              >
                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/50 mb-1.5">
                    Selected Configuration
                  </label>
                  <select
                    value={activeModelIdx}
                    onChange={(e) => setActiveModelIdx(Number(e.target.value))}
                    className="w-full rounded-xl bg-[#0b0e0a] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#b4ff39]"
                  >
                    {ROBOT_MODELS.map((m, idx) => (
                      <option key={m.id} value={idx}>
                        {m.name} — {m.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/50 mb-1.5">
                    Work or Personal Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="w-full rounded-xl bg-[#0b0e0a] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#b4ff39]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#b4ff39] hover:bg-[#c5ff66] text-black font-display font-bold text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer"
                >
                  Request Priority Invitation
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
