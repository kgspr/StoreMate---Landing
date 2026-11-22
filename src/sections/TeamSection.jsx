import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROBOT_MODELS = [
  {
    id: 'team-sahan',
    name: 'Sahan Fernando',
    role: 'AI Automation & Quality Assurance',
    scale: 0.72,
    hue: 'hue-rotate-[-15deg] brightness-90',
  },
  {
    id: 'team-shanuka',
    name: 'Shanuka Pramuditha',
    role: 'Systems Architect & UI/UX Designer',
    scale: 1,
    hue: '',
  },
  {
    id: 'team-tinura',
    name: 'Tinura Dissanayaka',
    role: 'Team Leader',
    scale: 0.85,
    hue: 'brightness-95',
  },
  {
    id: 'team-asiri',
    name: 'Asiri Madhusanka',
    role: 'Creative & Executive Assistant',
    scale: 0.85,
    hue: 'hue-rotate-[12deg] brightness-95',
  },
  {
    id: 'team-sandali',
    name: 'Sandali Damdini',
    role: 'Quality Assurance & DevOps',
    scale: 0.72,
    hue: 'hue-rotate-[25deg] brightness-90',
  },
]

export default function ModelsSection({ activeModelIdx, setActiveModelIdx }) {
  const getOrderedModels = () => {
    const total = ROBOT_MODELS.length
    const offsets = [-2, -1, 0, 1, 2]
    return offsets.map((offset) => {
      const idx = (activeModelIdx + offset + total) % total
      return { ...ROBOT_MODELS[idx], originalIdx: idx, offset }
    })
  }

  return (
    <section id="team" className="py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] uppercase leading-[1.1] tracking-tight">
            <span className="font-bold block text-white">MEET THE</span>
            <span className="block mt-1">
              <span className="font-bold text-white">AVAILABLE </span>
              <span className="font-light italic text-white/80">MODELS</span>
            </span>
          </h2>
        </motion.div>

        <div className="relative flex items-end justify-center gap-4 sm:gap-8 md:gap-12 pt-10 pb-6 min-h-[360px] sm:min-h-[430px] z-20">
          {getOrderedModels().map((model) => {
            const isCenter = model.offset === 0
            const isInner = Math.abs(model.offset) === 1

            return (
              <motion.button
                key={model.id}
                layout
                onClick={() => setActiveModelIdx(model.originalIdx)}
                transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                className={`relative flex items-end justify-center shrink-0 cursor-pointer focus:outline-none group ${
                  isCenter
                    ? 'w-56 h-68 sm:w-72 sm:h-84 md:w-80 md:h-96 rounded-b-full overflow-visible z-30'
                    : isInner
                    ? 'w-32 h-36 sm:w-44 sm:h-48 md:w-52 md:h-56 rounded-b-full overflow-visible z-20 mb-4'
                    : 'hidden lg:flex w-28 h-32 rounded-b-full overflow-visible opacity-45 hover:opacity-80 z-10 mb-10'
                }`}
              >
                <div
                  className={`absolute bottom-0 inset-x-0 aspect-square overflow-hidden rounded-full transition-all duration-500 ${
                    isCenter
                      ? 'bg-[#b4ff39] shadow-[0_0_90px_rgba(180,255,57,0.35)]'
                      : 'bg-[#171b15] border border-white/[0.06] group-hover:border-[#b4ff39]/40'
                  }`}
                >
                  <img
                    src={`/images/${model.id}.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = isCenter ? '/images/rovix-waving.jpg' : '/images/rovix-hero.jpg'
                    }}
                    alt={model.name}
                    className={`absolute inset-0 z-10 h-full w-full select-none pointer-events-none rounded-full object-cover object-center transition-all duration-500 ${
                      model.hue
                    } ${
                      isCenter
                        ? 'drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)]'
                        : 'opacity-85 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                  />
                </div>

                <span
                  className={`absolute left-1/2 -bottom-10 -translate-x-1/2 whitespace-nowrap text-center font-mono uppercase transition-colors duration-300 ${
                    isCenter
                      ? 'text-[15px] sm:text-lg font-semibold text-[#b4ff39]'
                      : 'text-[9px] sm:text-[10px] text-white/60 group-hover:text-white'
                  }`}
                >
                  {model.name}
                </span>
              </motion.button>
            )
          })}
        </div>

        <div className="flex flex-col items-center justify-center mt-2 z-30 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={ROBOT_MODELS[activeModelIdx].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <p className="text-xs text-white/50 mt-1.5">
                {ROBOT_MODELS[activeModelIdx].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="w-full text-center select-none pointer-events-none overflow-hidden -mt-6 sm:-mt-10"
      >
        <span className="font-display font-extrabold uppercase text-[84px] sm:text-[150px] md:text-[210px] lg:text-[250px] leading-[0.82] tracking-[-0.03em] text-[#141713] drop-shadow-[0_-1px_0_rgba(255,255,255,0.03)] block">
          StoreM8
        </span>
      </div>
    </section>
  )
}