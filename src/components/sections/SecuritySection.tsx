export function SecuritySection() {
  return (
    <section id="security" className="bg-[#050505] py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-12 max-w-[1000px]">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white mb-6">
              Privacy matters.
            </h2>
            <p className="text-[17px] text-[#A1A1A1] leading-[1.6]">
              Your Telegram account belongs to you. TeleTorrent is designed to use only the access required to provide its core download functionality.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 pb-6 border-b border-[#222222]">
                <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#B7FF32]"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">No unnecessary account information</h4>
                  <p className="text-[15px] text-[#A1A1A1]">We do not store your passwords or track your personal messages.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 pb-6 border-b border-[#222222]">
                <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#B7FF32]"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Clear privacy controls</h4>
                  <p className="text-[15px] text-[#A1A1A1]">You maintain complete control over your local downloads and history.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 pb-6 border-b border-[#222222]">
                <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#B7FF32]"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Transparent data handling</h4>
                  <p className="text-[15px] text-[#A1A1A1]">All communication happens directly with Telegram's official API servers.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#B7FF32]"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Secure account management</h4>
                  <p className="text-[15px] text-[#A1A1A1]">Authentication is handled locally using secure TDLib protocols.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
