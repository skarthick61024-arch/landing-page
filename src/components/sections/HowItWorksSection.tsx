export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Forward",
      description: "Forward the files you want to keep into your Telegram Saved Messages.",
    },
    {
      number: "02",
      title: "Sync",
      description: "Open TeleTorrent and securely sync your Saved Messages.",
    },
    {
      number: "03",
      title: "Download",
      description: "Choose your files and download them directly to your device.",
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#000000] py-24 md:py-32 border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1000px]">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#F5F5F5]">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-[#141518] z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#0B0C0E] border border-[#141518] flex items-center justify-center text-[20px] font-bold text-[#F5F5F5] mb-6 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#F5F5F5] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#8D919B] leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
