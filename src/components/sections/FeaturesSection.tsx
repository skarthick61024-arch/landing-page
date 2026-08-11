export function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Saved Messages",
      description: "Access and organize files available through Telegram Saved Messages.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Smart Downloads",
      description: "Monitor active downloads, progress, speed and completion status.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "File Organization",
      description: "Keep videos, photos, documents and other files organized.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Download Monitoring",
      description: "See downloaded amount, remaining size and current status.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Thumbnails",
      description: "Display available file previews to make files easier to identify.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="8.5" r="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "06",
      title: "Sync",
      description: "Synchronize available Saved Messages content when requested.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#F5F5F5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="bg-[#000000] py-[100px] border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1280px]">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#F5F5F5] mb-4">
            Everything you need.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#8D919B] max-w-[500px] leading-relaxed">
            A comprehensive set of tools designed specifically for handling large files over Telegram.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0B0C0E] border border-[#141518] hover:border-[#22252A] rounded-[24px] p-8 flex flex-col justify-between transition-colors group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 rounded-[12px] bg-[#141518] border border-[#22252A] flex items-center justify-center group-hover:bg-[#B7FF32]/10 group-hover:border-[#B7FF32]/30 transition-colors">
                  {feature.icon}
                </div>
                <span className="text-[13px] font-bold text-[#8D919B] font-mono">{feature.number}</span>
              </div>
              
              <div>
                <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3">{feature.title}</h3>
                <p className="text-[14px] text-[#8D919B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
