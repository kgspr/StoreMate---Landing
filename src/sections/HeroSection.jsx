import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './SectionUtils'

export default function HeroSection({ onOpenOrder }) {
  const matrixCanvasRef = useRef(null)

  useEffect(() => {
    const canvas = matrixCanvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    let animationFrameId
    let columns = []
    let fontSize = 16
    let columnGap = 26
    let rowGap = 24
    let pointer = null

    const updatePointer = (event) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      pointer = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height
        ? { x, y }
        : null
    }

    const clearPointer = (event) => {
      if (!event.relatedTarget) pointer = null
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const pixelRatio = window.devicePixelRatio || 1

      canvas.width = rect.width * pixelRatio
      canvas.height = rect.height * pixelRatio
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const width = rect.width
      const height = rect.height
      fontSize = width < 640 ? 12 : 16
      columnGap = fontSize * 1.7
      rowGap = fontSize * 1.55
      const columnCount = Math.ceil(width / columnGap)
      columns = Array.from({ length: columnCount }, (_, index) => ({
        x: index * columnGap + columnGap / 2,
        y: Math.random() * -height,
        speed: 1.8 + Math.random() * 4,
        length: 8 + Math.floor(Math.random() * 18),
        opacity: 0.18 + Math.random() * 0.52,
      }))
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect()

      context.fillStyle = 'rgba(10, 12, 9, 0.13)'
      context.fillRect(0, 0, rect.width, rect.height)
      context.font = `500 ${fontSize}px monospace`
      context.textAlign = 'center'

      columns.forEach((column) => {
        for (let trail = 0; trail < column.length; trail += 1) {
          const char = Math.random() > 0.5 ? '1' : '0'
          const y = column.y - trail * rowGap
          if (y < 0 || y > rect.height) continue

          const fade = 1 - trail / column.length
          context.fillStyle = trail === 0
            ? `rgba(206, 255, 121, ${column.opacity})`
            : `rgba(62, 202, 117, ${column.opacity * fade})`

          const distance = pointer
            ? Math.hypot(pointer.x - column.x, pointer.y - y)
            : Infinity
          const proximity = Math.max(0, 1 - distance / 125)
          const scale = 1 + proximity * proximity * 1.8
          context.save()
          context.translate(column.x, y)
          context.scale(scale, scale)
          context.fillText(char, 0, 0)
          context.restore()
        }

        column.y += column.speed
        if (column.y - column.length * rowGap > rect.height) {
          column.y = Math.random() * -250
          column.speed = 1.8 + Math.random() * 4
          column.length = 8 + Math.floor(Math.random() * 18)
          column.opacity = 0.18 + Math.random() * 0.52
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    draw()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', updatePointer)
    window.addEventListener('pointerout', clearPointer)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('pointerout', clearPointer)
    }
  }, [])

  return (
    <section id="home" className="relative pt-4 md:pt-8 overflow-hidden">
      <canvas
        ref={matrixCanvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-[-5%] w-[460px] h-[460px] md:w-[680px] md:h-[580px] rounded-full bg-gradient-to-tr from-[#5d9f18]/45 via-[#8ee02c]/35 to-transparent blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4%] left-[25%] w-[520px] h-[280px] rounded-full bg-[#7bd424]/25 blur-[100px]"
      />

      <div className="max-w-[100%] md:max-w-[calc(100vw-150px)] mx-auto relative z-10 pt-30">
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
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between z-20 order-1 lg:order-2 lg:-ml-10 px-6 md:px-16 -mt-5 md:-mt-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-left lg:pl-6"
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-lg font-medium text-white/80 ml-1">
                <p className='ml-2 md:ml-7'>Introducing <span className='tracking-[0.1em] text-[#b4ff39] font-bold'>StoreMate</span></p>
              </div>

              <h1 className="font-display font-bold leading-[1.1] tracking-[-0.02em] -mt-2">
                <span className="block text-[64px] sm:text-[88px] md:text-[106px] text-white hero-title-glow">
                  Store<span className='border-5 border-[#b4ff39] px-5 ml-2 !py-0 rounded-xl text-[#b4ff39]'>M8</span>
                </span>
                <span className="w-max uppercase rounded-lg ml-4 block px-2 text-[54px] sm:text-[74px] md:text-[90px] text-black/95 whitespace-nowrap bg-[#b4ff39]">
                  #Store AI
                </span>
              </h1>
            </motion.div>

            <div className='flex items-center ml-8'>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >

<button className="mt-8 lg:mt-12 self-end w-full sm:w-[200px] text-center rounded-2xl p-5 backdrop-blur-xl bg-white text-black border border-white/[0.12] shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.45)] hover:border-[#b4ff39]/40 transition-all duration-300 ease-out group cursor-pointer">
  Join <b>WaitList {'->'}</b>
</button>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
