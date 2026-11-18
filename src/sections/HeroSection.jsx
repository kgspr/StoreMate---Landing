import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RovixMark } from './SectionUtils'

export default function HeroSection({ onOpenOrder }) {
  const [isBadgeVisible, setIsBadgeVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsBadgeVisible(window.scrollY < 220)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative pt-4 md:pt-8 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-[-5%] w-[460px] h-[460px] md:w-[680px] md:h-[580px] rounded-full bg-gradient-to-tr from-[#5d9f18]/45 via-[#8ee02c]/35 to-transparent blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4%] left-[25%] w-[520px] h-[280px] rounded-full bg-[#7bd424]/25 blur-[100px]"
      />

      <div className="max-w-[100%] md:max-w-[calc(100vw-150px)] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0 min-h-[560px] md:min-h-[640px]">
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-end order-2 lg:order-1 mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[800px]"
            >
              <motion.img
                src="/images/rovix-hero.png"
                onError={(e) => {
                  e.currentTarget.src = '/images/rovix-hero.jpg'
                }}
                alt="Rovix AI Robot"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0c09] via-[#0a0c09]/65 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 sm:left-10 flex items-center gap-7 text-[11px] tracking-wider text-white/60 font-medium z-20">
                <span className="hover:text-[#b4ff39] transition-colors cursor-default">
                  #FutureIsNow
                </span>
                <span className="hover:text-[#b4ff39] transition-colors cursor-default">
                  #RovixAI2025
                </span>
              </div>

              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{
                  scale: isBadgeVisible ? 1 : 0,
                  rotate: isBadgeVisible ? -8 : 0,
                  opacity: isBadgeVisible ? 1 : 0,
                }}
                whileHover={isBadgeVisible ? { scale: 1.07, rotate: 0 } : undefined}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 16,
                  delay: 0.35,
                }}
                className={`fixed right-2 sm:right-4 lg:right-[calc(50vw-80px)] top-[95vh] -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-[#b4ff39] shadow-[0_0_60px_rgba(180,255,57,0.45)] flex items-center justify-center z-30 cursor-pointer ${
                  isBadgeVisible ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                onClick={() => {
                  if (!isBadgeVisible) return
                  document.getElementById('introducing')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <RovixMark className="w-14 h-11 sm:w-16 sm:h-12 text-[#0a0c09]" />
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between z-20 order-1 lg:order-2 lg:-ml-10 px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-left lg:pl-6"
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-white/80 uppercase mb-2 ml-1">
                <span>HELLO</span>
                <motion.span
                  animate={{ rotate: [0, 18, -10, 18, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block origin-bottom-right text-base"
                >
                  👋
                </motion.span>
              </div>

              <h1 className="font-display font-bold uppercase leading-[0.92] tracking-[-0.02em]">
                <span className="block text-[64px] sm:text-[88px] md:text-[106px] text-white hero-title-glow">
                  StoreMate
                </span>
                <span className="w-max block px-2 text-[54px] sm:text-[74px] md:text-[90px] text-black/95 whitespace-nowrap bg-[#b4ff39]">
                  #AI ROBOT
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 lg:mt-14 flex flex-col items-end text-right"
            >
              <p className="text-sm sm:text-base text-white/85 font-normal leading-snug max-w-[240px]">
                Redefining the World One
                <br />
                Innovation at a Time
              </p>
              <div className="w-48 sm:w-64 h-[1px] bg-gradient-to-l from-white/30 via-white/15 to-transparent mt-3" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 lg:mt-12 self-end w-full sm:w-[270px] rounded-2xl p-5 backdrop-blur-xl bg-white/[0.07] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:border-[#b4ff39]/40 transition-colors group"
            >
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                The Future of Robotics
                <br />
                is Here
              </p>
              <button
                type="button"
                onClick={onOpenOrder}
                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b4ff39] group-hover:translate-x-1 transition-transform"
              >
                <span>LEARN MORE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
