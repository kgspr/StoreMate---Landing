import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  Bell,
  Bot,
  Boxes,
  ChartNoAxesColumnIncreasing,
  Headset,
  Map,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const bars = [34, 52, 45, 68, 57, 72, 62, 78]
const requests = [30, 38, 35, 48, 44, 54, 61, 73, 68, 82, 76, 94]
const navigation = [
  { icon: Boxes, label: 'Overview', active: true },
  { icon: Map, label: 'Store map' },
  { icon: Activity, label: 'Live activity' },
  { icon: ShieldCheck, label: 'Quality' },
]
const statusNodes = [
  { icon: Boxes, label: 'Applications', value: '18 active' },
  { icon: Activity, label: 'Realtime AI', value: 'Live' },
  { icon: ShieldCheck, label: 'Knowledge', value: '362 sources' },
]

function MiniChart() {
  return (
    <div className="relative mt-4 h-24 overflow-hidden border-b border-l border-white/[0.08]">
      <div className="absolute inset-0 flex flex-col justify-between">
        {[0, 1, 2, 3].map((line) => <span key={line} className="border-t border-white/[0.06]" />)}
      </div>
      <svg viewBox="0 0 360 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-label="Requests increasing across the day" role="img">
        <defs>
          <linearGradient id="request-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#b4ff39" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#b4ff39" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 76 L34 64 L68 69 L102 54 L136 58 L170 43 L204 47 L238 31 L272 38 L306 20 L340 28 L360 10 V100 H0 Z" fill="url(#request-fill)" />
        <path d="M0 76 L34 64 L68 69 L102 54 L136 58 L170 43 L204 47 L238 31 L272 38 L306 20 L340 28 L360 10" fill="none" stroke="#b4ff39" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-x-0 bottom-1 flex justify-between text-[8px] text-white/35"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
    </div>
  )
}

function StatCard({ label, value, change }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
      <p className="text-[9px] text-white/45">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      <p className="mt-1 text-[9px] text-[#00d6a2]">{change}</p>
    </div>
  )
}

export default function ProductPreviewSection() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rotateZ = useTransform(scrollYProgress, [0, 0.48, 1], reduceMotion ? [0, 0, 0] : [7, 0, -3])
  const rotateX = useTransform(scrollYProgress, [0, 0.48, 1], reduceMotion ? [0, 0, 0] : [6, 0, 1])
  const y = useTransform(scrollYProgress, [0, 0.48, 1], reduceMotion ? [0, 0, 0] : [54, 0, -22])

  return (
    <section ref={sectionRef} aria-labelledby="product-preview-title" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d9f18]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1160px]">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <p className="mb-3 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b4ff39] sm:text-xs">
            <span className="h-px w-6 bg-[#b4ff39]/60" />
            Product prototype
            <span className="h-px w-6 bg-[#b4ff39]/60" />
          </p>
          <h2 id="product-preview-title" className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Store intelligence, <span className="text-[#b4ff39]">at a glance.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            A preview of the StoreMate operations dashboard—customer requests, store insights, and AI activity in one place.
          </p>
        </div>

        <motion.div
          style={{ rotateZ, rotateX, y, transformPerspective: 10000, transformOrigin: 'center center' }}
          className="relative mx-auto max-w-[1080px] rounded-[22px] border border-white/[0.14] bg-[#0d110e] shadow-[0_45px_120px_rgba(0,0,0,0.72),0_0_80px_rgba(180,255,57,0.08)] sm:rounded-[28px]"
        >
          <img src="images/prototype.png" className='' alt="" />
        </motion.div>
      </div>
    </section>
  )
}
