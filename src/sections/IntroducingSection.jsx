import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { INTRO_SPECS } from './sectionData'

export default function IntroducingSection({ activeSpec, setActiveSpec }) {
  return (
    <section id="introducing" className="py-16 md:py-24 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[40%] w-[340px] h-[340px] rounded-full bg-[#68b81e]/20 blur-[110px]"
      />

      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-[42px] uppercase leading-[1.08] tracking-tight"
            >
              <span className="font-bold block text-white">INTRODUCING</span>
              <span className="font-light italic block text-white/80 mt-0.5">ROVIX</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 relative w-full max-w-[300px] sm:max-w-[330px] self-center lg:self-start"
            >
              <motion.img
                src="/images/rovix-waving.png"
                onError={(e) => {
                  e.currentTarget.src = '/images/rovix-waving.jpg'
                }}
                alt="Introducing Rovix Waving"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {INTRO_SPECS.map((spec, idx) => {
              const isActive = activeSpec === idx
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveSpec(idx)}
                  onMouseEnter={() => setActiveSpec(idx)}
                  className={`spec-row rounded-2xl p-5 sm:p-6 cursor-pointer relative group ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-[88%]">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-[#b4ff39] transition-colors">
                        {spec.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-white/50 leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'bg-[#b4ff39]/15 text-[#b4ff39] rotate-45'
                          : 'text-white/40 group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
