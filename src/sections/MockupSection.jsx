import React from 'react'
import { motion } from 'framer-motion'
import { SMART_FEATURES } from './sectionData'

export default function SmartFeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] uppercase leading-[1.1] tracking-tight">
            <span className="font-bold block text-white">SMART FEATURES</span>
            <span className="block mt-1">
              <span className="font-bold text-white">AT </span>
              <span className="font-light italic text-white/80">A GLANCE</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
          {SMART_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group flex flex-col"
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-[#151814] border border-white/[0.07] ${
                  feat.tall
                    ? 'h-[320px] sm:h-[380px] md:h-[410px]'
                    : 'h-[280px] sm:h-[310px] md:h-[320px]'
                }`}
              >
                <img
                  src={feat.image}
                  alt={`${feat.title1} ${feat.title2}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              <div className="mt-4 pr-2">
                <h3 className="font-display text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-[#b4ff39] transition-colors">
                  {feat.title1}
                  <br />
                  {feat.title2}
                </h3>
                <p className="mt-2 text-xs text-white/45 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
