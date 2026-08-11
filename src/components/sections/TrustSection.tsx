import Link from "next/link"

export function TrustSection() {
  return (
    <section id="security" className="bg-[#000000] py-24 md:py-32 border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1000px] text-center">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#101114] border border-[#141518] mb-6">
            <svg className="w-5 h-5 text-[#F5F5F5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#F5F5F5] mb-6">
            Built with privacy in mind.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#8D919B] max-w-[640px] mx-auto leading-relaxed">
            TeleTorrent follows a strict data-minimization approach. We do not sell your personal information, and your downloaded files remain entirely under your local control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-16 text-left">
          
          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#101114] border border-[#141518] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#B7FF32]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div>
              <h4 className="text-[#F5F5F5] font-bold text-[15px] mb-2">Local File Control</h4>
              <p className="text-[#8D919B] text-[14px] leading-relaxed">Your files are downloaded directly to your device storage and managed entirely locally by you.</p>
            </div>
          </div>
          
          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#101114] border border-[#141518] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#B7FF32]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div>
              <h4 className="text-[#F5F5F5] font-bold text-[15px] mb-2">Transparent Data Handling</h4>
              <p className="text-[#8D919B] text-[14px] leading-relaxed">We process only the information required to provide the core downloading functionality.</p>
            </div>
          </div>
          
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <Link href="/privacy" className="text-[14px] font-medium text-[#F5F5F5] hover:text-[#B7FF32] transition-colors underline underline-offset-4 decoration-[#333333] hover:decoration-[#B7FF32]">
            Privacy Policy
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-[#333333]"></div>
          <Link href="/terms" className="text-[14px] font-medium text-[#F5F5F5] hover:text-[#B7FF32] transition-colors underline underline-offset-4 decoration-[#333333] hover:decoration-[#B7FF32]">
            Terms & Conditions
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-[#333333]"></div>
          <Link href="/help" className="text-[14px] font-medium text-[#F5F5F5] hover:text-[#B7FF32] transition-colors underline underline-offset-4 decoration-[#333333] hover:decoration-[#B7FF32]">
            Help & Support
          </Link>
        </div>

      </div>
    </section>
  )
}
