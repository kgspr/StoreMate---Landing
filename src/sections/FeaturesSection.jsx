unction IconCommunication() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <path
        d="M16 26C16 20.4772 20.4772 16 26 16H36C41.5228 16 46 20.4772 46 26V30C46 35.5228 41.5228 40 36 40H24L16 45V26Z"
        strokeOpacity="0.45"
        strokeDasharray="2 2"
      />
      <path d="M24 30C24 25.5817 27.5817 22 32 22H42C46.4183 22 50 25.5817 50 30V36C50 40.4183 46.4183 44 42 44H39L45 50L33 44H32C27.5817 44 24 40.4183 24 36V30Z" />
      <circle cx="38" cy="14" r="2.5" className="fill-[#0e120d]" />
      <circle cx="16" cy="38" r="2.5" className="fill-[#0e120d]" />
    </svg>
  )
}

const WHY_WORK_ITEMS = [
  {
    titleLine1: 'Voice',
    titleLine2: 'Conversations',
    desc: 'Talk naturally with AI and get helpful, human-sounding responses in real time.',
    Icon: 'communication',
  },
  {
    titleLine1: 'Visual',
    titleLine2: 'Understanding',
    desc: 'Share images with your assistant to identify products, read details, and get visual insights.',
    Icon: 'visual',
  },
  {
    titleLine1: 'Speak Your',
    titleLine2: 'Language',
    desc: 'Serve customers and manage conversations in multiple languages with ease.',
    Icon: 'languages',
  },
  {
    titleLine1: 'Works With',
    titleLine2: 'WooCommerce',
    desc: 'Connect your store so the assistant can work with your products, orders, and workflows.',
    Icon: 'integrations',
  },
  {
    titleLine1: 'Your Choice',
    titleLine2: 'of AI Models',
    desc: 'Choose from multiple AI models to match the task, quality, and speed you need.',
    Icon: 'chip',
  },
  {
    titleLine1: 'A Simple',
    titleLine2: 'User App',
    desc: 'Manage your assistant, connect services, and keep your settings together in one app.',
    Icon: 'application',
  },
]

function IconChip() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <rect x="21" y="21" width="22" height="22" rx="4" />
      <rect x="26" y="26" width="12" height="12" rx="2" strokeOpacity="0.5" />
      <line x1="28" y1="12" x2="28" y2="18" />
      <line x1="36" y1="12" x2="36" y2="18" />
      <line x1="28" y1="46" x2="28" y2="52" />
      <line x1="36" y1="46" x2="36" y2="52" />
      <line x1="12" y1="28" x2="18" y2="28" />
      <line x1="12" y1="36" x2="18" y2="36" />
      <line x1="46" y1="28" x2="52" y2="28" />
      <line x1="46" y1="36" x2="52" y2="36" />
    </svg>
  )
}

function IconVisual() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <path d="M10 32S18 19 32 19S54 32 54 32S46 45 32 45S10 32 10 32Z" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="7" />
      <circle cx="32" cy="32" r="2" className="fill-[#8cd936] transition-colors duration-300 group-hover:fill-white" />
      <path d="M47 15L49 11M52 21L56 20" strokeLinecap="round" />
    </svg>
  )
}

function IconLanguages() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <circle cx="32" cy="32" r="19" />
      <path d="M13 32H51M32 13C38 18 41 24.5 41 32S38 46 32 51M32 13C26 18 23 24.5 23 32S26 46 32 51M16 22H48M16 42H48" strokeLinecap="round" />
    </svg>
  )
}

function IconIntegrations() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <path d="M25 38L20 43C17.7909 45.2091 14.2091 45.2091 12 43C9.79086 40.7909 9.79086 37.2091 12 35L20 27C22.2091 24.7909 25.7909 24.7909 28 27" strokeLinecap="round" />
      <path d="M39 26L44 21C46.2091 18.7909 49.7909 18.7909 52 21C54.2091 23.2091 54.2091 26.7909 52 29L44 37C41.7909 39.2091 38.2091 39.2091 36 37" strokeLinecap="round" />
      <path d="M24 40L40 24" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" className="fill-[#181d16]" />
    </svg>
  )
}

function IconApplication() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] stroke-[#8cd936] group-hover:stroke-white transition-colors duration-300" strokeWidth="1.35">
      <rect x="20" y="10" width="24" height="44" rx="5" />
      <path d="M27 17H37M26 26H38M26 32H38M26 38H34" strokeLinecap="round" />
      <circle cx="32" cy="47" r="1.5" className="fill-[#8cd936] transition-colors duration-300 group-hover:fill-white" />
    </svg>
  )
}

const ICON_MAP = {
  communication: IconCommunication,
  chip: IconChip,
  visual: IconVisual,
  languages: IconLanguages,
  integrations: IconIntegrations,
  application: IconApplication,
}

export default function WhyWorkSection() {
  return (
    <section id="features" className="py-10 md:py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75 }}
        className="max-w-[1120px] mx-auto rounded-[32px] bg-[#121510] border border-white/[0.06] p-6 sm:p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-[38px] uppercase tracking-[-0.01em] mb-8 md:mb-10">
          <span className="font-bold text-white">Store<span className='text-[#80ED00]'>M8</span> </span>
          <span className="font-light italic text-white/80">FOR YOUR STORE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
          {WHY_WORK_ITEMS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.Icon]
            return (
              <motion.div
                key={`${item.titleLine1}-${item.titleLine2}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bento-card relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between min-h-[250px] md:min-h-[270px] group cursor-default"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-2 select-none pr-3 font-display text-[7rem] sm:text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/[0.04]"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex items-start origin-top-left transition-transform duration-500 group-hover:scale-110">
                  <IconComponent />
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-base sm:text-[17px] font-semibold text-white leading-snug">
                    {item.titleLine1}
                    <br />
                    {item.titleLine2}
                  </h3>
                  <p className="mt-2 text-xs text-white/45 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}