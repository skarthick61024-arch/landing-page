export function WhySection() {
  const cards = [
    {
      title: "Customizable layouts",
      description: "Build your financial workspace around the way you actually work.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: "Dynamic elements",
      description: "Stay informed with real-time insights and intelligent financial tools.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "Records and insights",
      description: "Keep every transaction organized and understand where your money goes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white pt-[140px] pb-[100px]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E8E8E8] text-[13px] font-semibold text-[#111111] uppercase tracking-wider mb-6 shadow-sm">
            Why we are best
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#111111] mb-6">
            Why Mensta is best?
          </h2>
          <p className="text-[16px] text-[#666666] max-w-[500px] leading-relaxed">
            Experience a new standard of financial clarity with tools designed for speed, precision, and complete control.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white border border-[#E8E8E8] rounded-[16px] p-8 md:p-10 h-[240px] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center mb-6 shrink-0">
                {card.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-[#111111] mb-3">
                {card.title}
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
