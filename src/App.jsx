import React, { useState } from 'react'
import { RovixMark } from './sections/SectionUtils'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import IntroducingSection from './sections/IntroducingSection'
import MockupSection from './sections/MockupSection'
import TeamSection from './sections/TeamSection'
import FooterSection from './sections/FooterSection'
import OrderModal from './sections/OrderModal'

export default function App() {
  const [activeSpec, setActiveSpec] = useState(0)
  const [activeModelIdx, setActiveModelIdx] = useState(2)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0c09] text-white relative selection:bg-[#b4ff39] selection:text-black">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0c09]/80 border-b border-white/[0.04]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <RovixMark className="w-7 h-5 text-[#b4ff39] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-lg tracking-[0.08em] text-white">
              ROVIX
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-[11px] font-medium tracking-[0.18em] text-white/60 uppercase">
            <a href="#home" className="text-white hover:text-[#b4ff39] transition-colors">
              Home
            </a>
            <a href="#why-us" className="hover:text-[#b4ff39] transition-colors">
              Features
            </a>
            <a href="#models" className="hover:text-[#b4ff39] transition-colors">
              Services
            </a>
            <a href="#reviews" className="hover:text-[#b4ff39] transition-colors">
              About
            </a>
          </nav>

          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-[#141911] hover:bg-[#1d2617] border border-[#b4ff39]/25 hover:border-[#b4ff39]/60 text-[#b4ff39] text-xs font-medium tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(180,255,57,0.08)] hover:shadow-[0_0_25px_rgba(180,255,57,0.22)] cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </header>

      {/* 1 - (20241465) Pramuditha */}
      <HeroSection onOpenOrder={() => setOrderModalOpen(true)} />
      {/* 2 - (20241616) Tinura*/}
      <FeaturesSection />
      {/* 3 - (20241355) Asiri*/}
      <IntroducingSection activeSpec={activeSpec} setActiveSpec={setActiveSpec} />
      {/* 4 - (20241623) Sandali*/}
      <MockupSection />
      {/* 5 - (20240094) Sahan*/}
      <TeamSection activeModelIdx={activeModelIdx} setActiveModelIdx={setActiveModelIdx} />
      
      
      
      <FooterSection onOpenOrder={() => setOrderModalOpen(true)} />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        activeModelIdx={activeModelIdx}
        setActiveModelIdx={setActiveModelIdx}
        orderSubmitted={orderSubmitted}
        setOrderSubmitted={setOrderSubmitted}
      />
    </div>
  )
}
