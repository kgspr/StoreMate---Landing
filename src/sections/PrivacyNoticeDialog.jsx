import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function PrivacyNoticeDialog({ isOpen, onClose, hasContactRecipient }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-labelledby="privacy-dialog-title"
          className="fixed bottom-4 right-4 z-[70] w-[calc(100vw-2rem)] max-w-md rounded-2xl border border-[#b4ff39]/25 bg-[#11150f]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:bottom-6 sm:right-6 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b4ff39]">Privacy</p>
              <h2 id="privacy-dialog-title" className="font-display text-lg font-semibold text-white">Your email stays in your control</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close privacy notice"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-white/65">
            StoreMate does not save signup details in this website or send them to a server. Submitting the form opens a draft in your email app; your details are shared only if you choose to send that email. Your email provider may process the message.
          </p>
          {!hasContactRecipient && (
            <p className="mt-3 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] p-3 text-xs leading-relaxed text-amber-100/80">
              The StoreMate inbox is not configured yet. The draft opens without a recipient; enter the team’s email address before sending.
            </p>
          )}
          <button
            type="button"
            onClick={onClose}
            className="mt-5 rounded-lg bg-[#b4ff39] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#c5ff66]"
          >
            Got it
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
