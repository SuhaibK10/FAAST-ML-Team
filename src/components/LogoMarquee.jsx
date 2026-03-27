const logos = [
  { type: 'img', src: '/starlab.png', alt: 'STARlab Capital', noFilter: true, className: 'h-9 md:h-16' },
  { type: 'img', src: '/telecrm.svg', alt: 'TeleCRM', noFilter: true, className: 'h-6 md:h-16' },
   { type: 'text', name: 'JANE STREET', style: "font-[family-name:var(--font-display)] font-bold text-[12px] md:text-xs tracking-[2px]" },
   { type: 'text', name: 'GRAVITON', style: "font-[family-name:var(--font-display)] font-bold text-[12px] md:text-xs tracking-[2px]" },
  { type: 'text', name: 'AMERICAN EXPRESS', style: "font-[family-name:var(--font-display)] font-bold text-[12px] md:text-xs tracking-[2px]" },
  { type: 'text', name: 'BARCLAYS', style: "font-[family-name:var(--font-display)] font-semibold text-[13px] md:text-xs tracking-[3px]" },
    { type: 'text', name: 'RBI', style: "font-[family-name:var(--font-display)] font-semibold text-[15px] md:text-xs tracking-[3px]" },
    { type: 'text', name: 'QUANTUMBLACK', style: "font-[family-name:var(--font-display)] font-semibold text-[15px] md:text-xs tracking-[3px]" },
]

export default function LogoMarquee() {
  return (
    <div className="py-6 md:py-8 overflow-hidden relative border-t border-b border-dim3">
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-10 md:gap-16 animate-marquee-slow w-max hover:[animation-play-state:paused]">
        {[...Array(2)].flatMap((_, s) =>
          logos.map((logo, i) => (
            <div key={`${s}-${i}`} className="flex-shrink-0 flex items-center h-6 md:h-8 opacity-100 hover:opacity-100 transition-opacity duration-400 cursor-default">
              {logo.type === 'img' ? (
               <img src={logo.src} alt={logo.alt} className={`${logo.className || 'h-full'} w-auto object-contain ${logo.noFilter ? '' : 'brightness-0 invert'}`} />
              ) : (
                <span className={`text-fg whitespace-nowrap ${logo.style}`}>{logo.name}</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
