import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'
import { Logo } from './SectionUtils'

export default function FooterSection({ onOpenOrder, onOpenPrivacy }) {
  return (
    <footer id="contact" className="pt-16 md:pt-24 relative overflow-hidden border-t border-white/[0.04]">
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
              Join the Waitlist
            </motion.button>
          </div>

          <div className="flex items-start gap-8 sm:gap-20 text-xs">
            <div className="w-32 sm:w-auto">
              <h4 className="font-display font-semibold uppercase tracking-[0.14em] text-white/90 mb-3.5">
                SOCIAL MEDIA
              </h4>
              <div className="flex gap-3">
                <a href={"https://www.instagram.com/storem8.lk?cnvx=MWY2c250aTA2Zjh0dg%3D%3D&utm_source=qr"} target="_blank" rel="noreferrer" aria-label="StoreMate on Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-[#b4ff39]/50 hover:text-[#b4ff39]">
                  <Instagram size={16} />
                </a>
                <a href={"https://youtube.com/@storem8-j8w?si=SN1EP_76ZGzv3MPb"} target="_blank" rel="noreferrer" aria-label="StoreMate on YouTube" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-[#b4ff39]/50 hover:text-[#b4ff39]">
                  <Youtube size={17} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold uppercase tracking-[0.14em] text-white/90 mb-3.5">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-[11px] tracking-wider uppercase text-white/45">
                <li><a href="#home" className="hover:text-[#b4ff39] transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-[#b4ff39] transition-colors">Features</a></li>
                <li><a href="#solution" className="hover:text-[#b4ff39] transition-colors">How It Works</a></li>
                <li><a href="#services" className="hover:text-[#b4ff39] transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-[#b4ff39] transition-colors">Team</a></li>
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
              StoreMate
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
}

