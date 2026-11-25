import React, { useState } from 'react'
import { Logo } from './sections/SectionUtils'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import IntroducingSection from './sections/SolutionSection'
import MockupSection from './sections/ServicesSection'
import TeamSection from './sections/TeamSection'
import FooterSection from './sections/FooterSection'
import OrderModal from './sections/OrderModal'
import PrivacyNoticeDialog from './sections/PrivacyNoticeDialog'
import ProductPreviewSection from './sections/ProductPreviewSection'

const NAV_ITEMS = [
  ['Home', '#home'],
  ['Features', '#features'],
  ['Solution', '#solution'],
  ['Services', '#services'],
  ['Team', '#team'],
]

export default function App() {
  const [activeSpec, setActiveSpec] = useState(0)
  const [activeModelIdx, setActiveModelIdx] = useState(2)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [privacyNoticeOpen, setPrivacyNoticeOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || ''

  const handleWaitlistSubmit = (email) => {
    const subject = encodeURIComponent('StoreMate early-access request')
    const body = encodeURIComponent(`Please add me to the StoreMate early-access waitlist.\n\nEmail: ${email}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setOrderSubmitted(true)
  }

  const openWaitlist = () => {
    setOrderSubmitted(false)
    setOrderModalOpen(true)
    setMobileMenuOpen(false)
  }

  React.useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 16)

      const activationLine = window.innerHeight * 0.3
      const currentSection = NAV_ITEMS
        .map(([, href]) => document.getElementById(href.slice(1)))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= activationLine)
        .at(-1)

      setActiveSection(currentSection?.id || 'home')
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0c09] text-white relative selection:bg-[#b4ff39] selection:text-black">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-[#0a0c09]/65 backdrop-blur-xl border-white/[0.06]' : 'bg-transparent backdrop-blur-0 border-transparent'}`}>
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <Logo className="w-7 h-5 text-[#b4ff39] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-lg tracking-[0.08em] text-white">
              Store<span className='text-[#b4ff39]'>M8</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-[11px] font-medium tracking-[0.18em] text-white/60 uppercase">
            {NAV_ITEMS.map(([label, href]) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`${isActive ? 'text-[#b4ff39]' : 'text-white/60 hover:text-[#b4ff39]'} transition-colors`}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className='flex gap-2'>
            <button
            onClick={openWaitlist}
            className="px-3 sm:px-4 py-2 rounded-lg bg-[#141911] hover:bg-[#1d2617] border border-[#b4ff39]/25 hover:border-[#b4ff39]/60 text-[#b4ff39] text-[11px] sm:text-xs font-medium tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(180,255,57,0.08)] hover:shadow-[0_0_25px_rgba(180,255,57,0.22)] cursor-pointer"
          >
            Join Waitlist
          </button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          >
            <span aria-hidden="true" className="text-xl leading-none">{mobileMenuOpen ? '×' : '☰'}</span>
          </button>
          </div>
        </div>
        <nav id="mobile-navigation" className={`md:hidden border-t border-white/10 bg-[#0a0c09]/95 px-5 py-4 backdrop-blur-xl ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="mx-auto flex max-w-[1160px] flex-col gap-1 text-sm uppercase tracking-wider text-white/75">
              {NAV_ITEMS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 transition-colors ${activeSection === href.slice(1) ? 'bg-white/5 text-[#b4ff39]' : 'hover:bg-white/5 hover:text-[#b4ff39]'}`}
                >
                  {label}
                </a>
              ))}
            </div>
        </nav>
      </header>

      {/* 1 - (20241465) Pramuditha */}
      <HeroSection onOpenOrder={openWaitlist} />
      <ProductPreviewSection />
      {/* 2 - (20241616) Tinura*/}
      <FeaturesSection />
      {/* 3 - (20241355) Asiri*/}
      <IntroducingSection activeSpec={activeSpec} setActiveSpec={setActiveSpec} />
      {/* 4 - (20241623) Sandali*/}
      <MockupSection />
      {/* 5 - (20240094) Sahan*/}
      <TeamSection activeModelIdx={activeModelIdx} setActiveModelIdx={setActiveModelIdx} />
      
      
      
      <FooterSection
        onOpenOrder={openWaitlist}
        onOpenPrivacy={() => setPrivacyNoticeOpen(true)}
      />

      <PrivacyNoticeDialog
        isOpen={privacyNoticeOpen}
        onClose={() => setPrivacyNoticeOpen(false)}
        hasContactRecipient={Boolean(contactEmail)}
      />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        orderSubmitted={orderSubmitted}
        onSubmit={handleWaitlistSubmit}
        hasContactRecipient={Boolean(contactEmail)}
        onOpenPrivacy={() => setPrivacyNoticeOpen(true)}
      />
    </div>
  )
}
