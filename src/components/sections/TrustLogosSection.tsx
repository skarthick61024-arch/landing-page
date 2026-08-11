export function TrustLogosSection() {
  const logos = [
    "Logoluxe", "Graphicraft", "Auracons", "Nexmark", 
    "Logolaze", "Primeark", "Logozen", "Designnest"
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E8E8E8]/50">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        <h3 className="text-center text-[15px] font-medium text-[#8A8A8A] mb-12">
          Trusted by customer-led product companies
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:justify-between opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-pointer">
              {/* Minimal geometric icon */}
              <div className="w-6 h-6 border-[2px] border-[#111111] rounded-sm rotate-45 group-hover:bg-[#111111] transition-colors" />
              <span className="font-bold text-[18px] tracking-tight text-[#111111]">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
