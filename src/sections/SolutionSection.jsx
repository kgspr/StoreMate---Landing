import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Headset,
  MapPin,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  QrCode,
  Sparkles,
} from 'lucide-react'

// Sample conversation examples to show how StoreMate works in the store
const EXAMPLES = [
  {
    id: 'find',
    title: 'Find a product',
    subtitle: 'Guides you straight to the right shelf',
    Icon: MapPin,
    BadgeIcon: MapPin,
    en: {
      question: 'Where can I find a rice cooker?',
      thinking: 'Hmm, checking store map... found it!',
      answer:
        'The rice cookers are on Rack 14, right next to the kettles. Can I help you find anything else?',
      badge: 'Rack 14 • Next to Kettles',
    },
    si: {
      question: 'රයිස් කුකර් තියෙන්නේ කොහෙද?',
      thinking: 'හ්ම්ම්, පොඩ්ඩක් බලමු... ආහ්, හම්බවුණා!',
      answer:
        'රයිස් කුකර් තියෙන්නේ 14 වෙනි රාක්කයේ, කේතල් අසලයි. ඔබට තවත් මොනවා හරි අවශ්‍යද?',
      badge: '14 වන රාක්කය • කේතල් අසල',
    },
  },
  {
    id: 'stock',
    title: 'Check live stock',
    subtitle: 'Checks available colors, sizes & stock',
    Icon: PackageCheck,
    BadgeIcon: CheckCircle2,
    en: {
      question: 'Do you have the small rice cooker in white?',
      thinking: 'Checking live shelf stock... got it!',
      answer:
        'Yes, we have two white ones left in stock. You’ll find them on the bottom shelf of Rack 14.',
      badge: '2 White Units in Stock • Bottom Shelf',
    },
    si: {
      question: 'පොඩි රයිස් කුකර් එකේ සුදු පාට තියෙනවද?',
      thinking: 'තොග පරීක්ෂා කරමින්... හරි!',
      answer:
        'ඔව්, සුදු පාට රයිස් කුකර් දෙකක් ඉතිරිව තියෙනවා. 14 වෙනි රාක්කයේ පහළම තට්ටුවේ බලන්න.',
      badge: 'ඒකක 2ක් තොගයේ ඇත • පහළ තට්ටුව',
    },
  },
  {
    id: 'support',
    title: 'Ask the store team',
    subtitle: 'Calls store staff when you need extra help',
    Icon: Headset,
    BadgeIcon: PhoneCall,
    en: {
      question: 'Do you have a yellow rice cooker?',
      thinking: 'Checking all color variants...',
      answer:
        'I’m not sure about yellow. Let me call the store team right now and share your question with them.',
      badge: 'Calling Store Team • Live Support Connected',
    },
    si: {
      question: 'කහ පාට රයිස් කුකර් එකක් තියෙනවද?',
      thinking: 'සියලුම වර්ණ පරීක්ෂා කරමින්...',
      answer:
        'කහ පාට එකක් ගැන සඳහන් වෙන්නේ නැහැ. මම දැන්ම සහායක කණ්ඩායමට ඇමතුමක් අරන් දෙන්නම්.',
      badge: 'සහායක කණ්ඩායම අමතමින් • සජීවී සහාය',
    },
  },
]

export default function IntroducingSection() {
  // State to track which example button is currently selected (0, 1, or 2)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // State to switch conversation language between English ('en') and Sinhala ('si')
  const [language, setLanguage] = useState('en')

  // Get the active example data and text based on selected index and language
  const currentExample = EXAMPLES[selectedIndex]
  const currentText = currentExample[language]
  const BadgeIcon = currentExample.BadgeIcon
  const isSupportCall = currentExample.id === 'support'

  return (
    <section id="solution" className="relative overflow-hidden py-16 md:py-24">
      {/* Background green glow effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b4ff39]/5 blur-[130px]" />

      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 sm:px-8 md:grid-cols-2 lg:gap-16">
        {/* ================= LEFT SIDE: Project Introduction & Example Buttons ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Small top title */}
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#b4ff39]">
            <span className="h-px w-8 bg-[#b4ff39]" />
            Your in-store assistant
          </p>

          {/* Main Section Heading */}
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Meet <span className="text-[#b4ff39] text-glow-lime">StoreMate.</span>
          </h2>

          {/* Short description about how StoreMate works */}
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Scan the shop’s QR code or use the in-store screen to ask a question in{' '}
            <span className="font-medium text-white">Sinhala or English</span>. StoreMate shows you
            the right shelf, checks what’s in stock, or calls the store team for you.
          </p>

          {/* Quick highlight tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              <QrCode size={13} className="text-[#b4ff39]" />
              QR & In-Store Kiosk
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              <Sparkles size={13} className="text-[#b4ff39]" />
              Instant Voice Replies
            </span>
          </div>

          {/* Interactive Example Selector Buttons */}
          <div className="mt-8">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-white/60">
              Try an example
            </p>

            <div className="grid gap-2.5">
              {EXAMPLES.map((item, index) => {
                const isSelected = selectedIndex === index
                const Icon = item.Icon

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`group relative flex w-full cursor-pointer items-center gap-3.5 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-[#b4ff39]/50 bg-[#b4ff39]/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/75 hover:border-[#b4ff39]/30'
                    }`}
                  >
                    {/* Left green bar for active button */}
                    {isSelected && (
                      <span className="absolute inset-y-0 left-0 w-1 bg-[#b4ff39]" />
                    )}

                    {/* Icon Box */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isSelected
                          ? 'border-[#b4ff39] bg-[#b4ff39] text-[#0a0c09]'
                          : 'border-white/10 bg-white/5 text-[#b4ff39]'
                      }`}
                    >
                      <Icon size={18} />
                    </span>

                    {/* Button Title & Subtitle */}
                    <span className="flex-1">
                      <span className="block font-display text-sm font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="block text-xs text-white/50">{item.subtitle}</span>
                    </span>

                    <ArrowRight
                      size={16}
                      className={`transition-all ${
                        isSelected
                          ? 'text-[#b4ff39] opacity-100'
                          : 'text-white/40 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: Conversation Preview Card ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-[#b4ff39]/25 bg-[#11150f] shadow-2xl"
        >
          {/* Card Header with Language Switcher */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-6">
            <h3 className="flex items-center gap-2 font-display text-sm font-medium text-white/90">
              <MessageCircle size={16} className="text-[#b4ff39]" />
              Conversation preview
            </h3>

            {/* Toggle buttons for English and Sinhala */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-white/10 bg-[#0a0c09] p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-[#b4ff39] font-semibold text-[#0a0c09]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('si')}
                  className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-colors ${
                    language === 'si'
                      ? 'bg-[#b4ff39] font-semibold text-[#0a0c09]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  සිංහල
                </button>
              </div>
              <AudioLines size={18} className="hidden text-[#b4ff39]/80 sm:block" />
            </div>
          </div>

          {/* Robot Image & Animated Voice Status */}
          <div className="relative h-52 overflow-hidden bg-gradient-to-t from-[#11150f] via-[#222e19] to-[#11150f] sm:h-60">
            {/* Circular background ring */}
            <div className="absolute top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-[#b4ff39]/20 sm:h-80 sm:w-80" />

            {/* Floating Robot Image */}
            <motion.img
              src="/images/rovix-waving.png"
              alt="StoreMate Robot"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1 left-1/2 w-[275px] -translate-x-1/2 select-none sm:w-[325px]"
            />

            {/* Small Animated Robot Eyes & Voice Indicator Badge */}
            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b4ff39]/30 bg-[#0a0c09]/85 px-3.5 py-1.5 backdrop-blur-md">
                {/* Blinking robot eyes */}
                <div className="flex items-center gap-1">
                  <motion.span
                    animate={{ scaleY: [1, 1, 0.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="block h-2.5 w-2 rounded-full bg-[#b4ff39]"
                  />
                  <motion.span
                    animate={{ scaleY: [1, 1, 0.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="block h-2.5 w-2 rounded-full bg-[#b4ff39]"
                  />
                </div>

                {/* Simple animated sound bars */}
                <div className="flex h-3 items-center gap-0.5 border-l border-white/15 pl-2">
                  {[0.5, 1, 0.6, 0.9].map((barHeight, i) => (
                    <motion.span
                      key={i}
                      animate={{ scaleY: [0.4, barHeight, 0.4] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.1 }}
                      className="block h-3 w-0.5 rounded-full bg-[#b4ff39]"
                    />
                  ))}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">
                  StoreMate Live
                </span>
              </div>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="px-5 pt-3 pb-6 sm:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentExample.id}-${language}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid gap-4"
              >
                {/* 1. Customer / Shopper Question Bubble */}
                <div className="justify-self-end text-right">
                  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-white/55">
                    Shopper
                  </p>
                  <div className="rounded-2xl rounded-tr-sm border border-white/10 bg-white/5 px-4 py-2.5 text-left text-sm leading-relaxed text-white/95">
                    {currentText.question}
                  </div>
                </div>

                {/* 2. StoreMate AI Answer Bubble */}
                <div className="max-w-[46ch] justify-self-start">
                  {/* Robot Name + Fast Thinking Text */}
                  <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#b4ff39]">
                    <span>StoreMate</span>
                    <span className="rounded-full bg-[#b4ff39]/10 px-2 py-0.5 text-[10px] font-normal normal-case text-[#b4ff39]/80">
                      {currentText.thinking}
                    </span>
                  </div>

                  {/* Main Reply Message & Highlight Tag */}
                  <div className="rounded-2xl rounded-tl-sm border border-[#b4ff39]/25 bg-[#b4ff39]/10 p-4 text-sm leading-relaxed text-white/90">
                    <p>{currentText.answer}</p>

                    {/* Status Badge (Location, Stock, or Store Call) */}
                    <div
                      className={`mt-3 inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium ${
                        isSupportCall
                          ? 'border-amber-400/35 bg-amber-400/10 text-amber-300'
                          : 'border-[#b4ff39]/30 bg-[#0a0c09]/70 text-[#b4ff39]'
                      }`}
                    >
                      <BadgeIcon size={14} />
                      <span>{currentText.badge}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
