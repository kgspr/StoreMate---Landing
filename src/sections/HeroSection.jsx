import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
                src="/images/storemate-hero.png"
                onError={(e) => {
                  e.currentTarget.src = '/images/StoreMate-hero.jpg'
                }}
                alt="StoreMate AI Robot"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0c09] via-[#0a0c09]/65 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 sm:left-10 flex items-center gap-7 text-[11px] tracking-wider text-white/60 font-medium z-20">
                <span className="hover:text-[#b4ff39] transition-colors cursor-default">
                  #StoreMate
                </span>
                <span className="hover:text-[#b4ff39] transition-colors cursor-default">
                  #InStoreAI
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between z-20 order-1 lg:order-2 lg:-ml-10 px-6 md:px-16 -mt-5 md:-mt-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-center lg:text-left lg:pl-6"
            >
              <div className="mx-auto w-fit text-left lg:mx-0">
                <div className="flex w-fit items-center gap-2 text-left text-xs font-medium text-white/80 sm:text-lg">
                  <p>Introducing <span className="tracking-[0.1em] text-[#b4ff39] font-bold">StoreMate</span></p>
                </div>

                <h1 className="-mt-2 w-fit text-left font-display font-bold leading-[1.1] tracking-[-0.02em]">
                  <span className="block whitespace-nowrap text-[clamp(3.5rem,12vw,6.625rem)] text-white hero-title-glow">
                    Store<span className='border-4 sm:border-5 border-[#b4ff39] px-2 sm:px-5 ml-1 sm:ml-2 !py-0 rounded-xl text-[#b4ff39]'>M8</span>
                  </span>
                </h1>
              </div>
<h2 className="mx-auto block w-max whitespace-nowrap rounded-lg bg-[#b4ff39] px-2 text-[54px] font-bold uppercase text-black/95 sm:text-[74px] md:text-[90px] lg:mx-4">
                  #Store AI
                </h2>
            </motion.div>

            <div className="mt-8 flex flex-col items-center gap-6 text-center lg:mt-14 lg:ml-8 lg:flex-row lg:items-center lg:gap-7 lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex justify-center"
              >
                <button
                  type="button"
                  onClick={onOpenOrder}
                  className="w-fit rounded-2xl px-6 py-4 text-center backdrop-blur-xl bg-white text-black border border-white/[0.12] shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.45)] hover:border-[#b4ff39]/40 transition-all duration-300 ease-out group cursor-pointer"
                >
                  Join <b> Waitlist →</b>
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="flex flex-col items-center text-center lg:mt-0 lg:items-end lg:text-right"
              >
                <p className="max-w-[280px] text-sm font-normal leading-snug text-white/85 sm:text-base">
                  Helping every shopper find the right product, faster.
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
