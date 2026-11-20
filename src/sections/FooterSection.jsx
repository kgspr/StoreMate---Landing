import React from 'react'
import { motion } from 'framer-motion'
import { RovixMark } from './SectionUtils'

export default function FooterSection({ onOpenOrder }) {
  return (
    <footer className="pt-16 md:pt-24 relative overflow-hidden border-t border-white/[0.04]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-[#5d9f18]/35 via-[#416f10]/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full bg-[#92ec2f]/25 blur-[110px]"
      />

      <div className="relative z-20">
        <div className="max-w-[1120px] px-5 sm:px-8 mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] uppercase leading-[1.15] tracking-tight">
              <span className="font-bold block text-white">DISCOVER THE NEW ERA</span>
              <span className="block mt-0.5">
                <span className="font-bold text-white">OF ROBOTIC </span>
                <span className="font-light italic text-white/80">TECHNOLOGY</span>
              </span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenOrder}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#b4ff39] hover:bg-[#c5ff66] text-[#0a0c09] text-xs font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(180,255,57,0.35)] transition-colors cursor-pointer"
            >
              Order RoviX
            </motion.button>
          </div>

          <div className="flex items-start gap-14 sm:gap-20 text-xs">
            <div>
              <h4 className="font-display font-semibold uppercase tracking-[0.14em] text-white/90 mb-3.5">
                SOCIAL MEDIA
              </h4>
              <ul className="space-y-2 text-[11px] tracking-wider uppercase text-white/45">
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">Instagram</a></li>
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">Facebook</a></li>
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">Twitter</a></li>
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">YouTube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold uppercase tracking-[0.14em] text-white/90 mb-3.5">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-[11px] tracking-wider uppercase text-white/45">
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">Home</a></li>
                <li><a href="#why-us" className="hover:text-[#b4ff39] transition-colors">Features</a></li>
                <li><a href="#models" className="hover:text-[#b4ff39] transition-colors">Models</a></li>
                <li><a href="#reviews" className="hover:text-[#b4ff39] transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-12 flex flex-col items-center justify-end pt-6">
          <div
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 inset-x-0 text-center pointer-events-none select-none overflow-hidden"
          >
            <span className="font-display font-extrabold uppercase text-[88px] sm:text-[160px] md:text-[220px] leading-none tracking-tight text-white/[0.04]">
              ROVIX
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-64 sm:w-80 md:w-[360px] z-20 flex flex-col items-center"
          >
            <div className="w-full h-full overflow-hidden flex items-start justify-center relative z-20">
              <img
                src="/images/rovix-hero.png"
                onError={(e) => {
                  e.currentTarget.src = '/images/rovix-hero.jpg'
                }}
                alt="Rovix Footer Head"
                className="w-full h-auto object-cover object-top scale-105 drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
              />
            </div>

            <div
              aria-hidden="true"
              className="w-full h-0 overflow-hidden flex items-start justify-center -mt-3 opacity-35 blur-[2.5px] pointer-events-none select-none z-10"
            >
              <img
                src="/images/rovix-hero.png"
                alt=""
                className="w-full h-auto object-cover object-top scale-y-[-0.55] scale-x-105"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="absolute -right-6 sm:-right-12 bottom-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#b4ff39] shadow-[0_0_50px_rgba(180,255,57,0.45)] flex items-center justify-center rotate-[-8deg] z-30 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <RovixMark className="w-11 h-9 sm:w-14 sm:h-11 text-[#0a0c09]" />
            </motion.div>
          </motion.div>

          <div className="w-full h-14 bg-gradient-to-t from-[#080a07] via-[#080a07]/90 to-transparent -mt-10 z-20 flex items-end justify-center pb-5">
            <p className="text-[11px] text-white/45 tracking-wide">© 2025 Rovix. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

