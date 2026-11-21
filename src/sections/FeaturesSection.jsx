import React from 'react'
import { motion } from 'framer-motion'
import { WHY_WORK_ITEMS } from './sectionData'

function IconCommunication() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <path
        d="M16 26C16 20.4772 20.4772 16 26 16H36C41.5228 16 46 20.4772 46 26V30C46 35.5228 41.5228 40 36 40H24L16 45V26Z"
        strokeOpacity="0.45"
        strokeDasharray="2 2"
      />
      <path d="M24 30C24 25.5817 27.5817 22 32 22H42C46.4183 22 50 25.5817 50 30V36C50 40.4183 46.4183 44 42 44H39L45 50L33 44H32C27.5817 44 24 40.4183 24 36V30Z" />
      <circle cx="38" cy="14" r="2.5" className="fill-[#0e120d]" />
      <circle cx="16" cy="38" r="2.5" className="fill-[#0e120d]" />
    </svg>
  )
}

function IconChip() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <rect x="21" y="21" width="22" height="22" rx="4" />
      <rect x="26" y="26" width="12" height="12" rx="2" strokeOpacity="0.5" />
      <line x1="28" y1="12" x2="28" y2="18" />
      <line x1="36" y1="12" x2="36" y2="18" />
      <line x1="28" y1="46" x2="28" y2="52" />
      <line x1="36" y1="46" x2="36" y2="52" />
      <line x1="12" y1="28" x2="18" y2="28" />
      <line x1="12" y1="36" x2="18" y2="36" />
      <line x1="46" y1="28" x2="52" y2="28" />
      <line x1="46" y1="36" x2="52" y2="36" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <path
        d="M32 13L37.4 24.2L49.8 25.9L40.8 34.6L42.9 46.9L32 41.1L21.1 46.9L23.2 34.6L14.2 25.9L26.6 24.2L32 13Z"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="13" r="1.5" fill="#8cd936" />
      <circle cx="49.8" cy="25.9" r="1.5" fill="#8cd936" />
      <circle cx="14.2" cy="25.9" r="1.5" fill="#8cd936" />
    </svg>
  )
}

function IconPerformance() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <circle cx="32" cy="32" r="16" strokeDasharray="5 3" />
      <circle cx="32" cy="32" r="8" />
      <circle cx="32" cy="16" r="2" className="fill-[#181d16]" />
      <circle cx="32" cy="48" r="2" className="fill-[#181d16]" />
      <circle cx="16" cy="32" r="2" className="fill-[#181d16]" />
      <circle cx="48" cy="32" r="2" className="fill-[#181d16]" />
      <circle cx="21" cy="21" r="1.8" className="fill-[#181d16]" />
      <circle cx="43" cy="43" r="1.8" className="fill-[#181d16]" />
    </svg>
  )
}

function IconPrivacy() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <path
        d="M22 40H19C14.5817 40 11 36.4183 11 32C11 27.9294 14.0411 24.5684 17.9776 24.0637C19.5326 18.2738 24.8199 14 31.1 14C38.6111 14 44.7 20.0889 44.7 27.6C44.7 28.0114 44.6817 28.4186 44.646 28.8206C48.2389 29.5999 50.9333 32.7963 50.9333 36.6222C50.9333 41.0282 47.3615 44.6 42.9556 44.6"
        strokeLinecap="round"
      />
      <rect x="26" y="34" width="12" height="11" rx="2.5" />
      <path d="M29 34V31C29 29.3431 30.3431 28 32 28C33.6569 28 35 29.3431 35 31V34" />
    </svg>
  )
}

function IconSupport() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 stroke-[#8cd936]" strokeWidth="1.35">
      <circle cx="32" cy="32" r="17" />
      <circle cx="32" cy="32" r="10" strokeDasharray="3 3" strokeOpacity="0.65" />
      <path d="M27 32.5L30.5 36L44 21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ICON_MAP = {
  communication: IconCommunication,
  chip: IconChip,
  star: IconStar,
  performance: IconPerformance,
  privacy: IconPrivacy,
  support: IconSupport,
}

export default function WhyWorkSection() {
  return (
    <section id="features" className="py-10 md:py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75 }}
        className="max-w-[1120px] mx-auto rounded-[32px] bg-[#121510] border border-white/[0.06] p-6 sm:p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-[38px] uppercase tracking-[-0.01em] mb-8 md:mb-10">
          <span className="font-bold text-white">WHY WORK </span>
          <span className="font-light italic text-white/80">WITH US</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
          {WHY_WORK_ITEMS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.Icon]
            return (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bento-card rounded-2xl p-6 flex flex-col justify-between min-h-[250px] md:min-h-[270px] group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/45 group-hover:text-[#b4ff39]/80 transition-colors">
                    {item.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#b4ff39] transition-colors" />
                </div>

                <div className="my-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <IconComponent />
                </div>

                <div>
                  <h3 className="font-display text-base sm:text-[17px] font-semibold text-white leading-snug">
                    {item.titleLine1}
                    <br />
                    {item.titleLine2}
                  </h3>
                  <p className="mt-2 text-xs text-white/45 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
