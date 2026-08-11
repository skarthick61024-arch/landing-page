export function ComparisonSection() {
  return (
    <section className="bg-[#000000] py-24 md:py-32 border-t border-[#141518] overflow-hidden">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center bg-[#101114] border border-[#141518] text-[#8D919B] text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            The Reality Check
          </div>
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-[#F5F5F5] mb-6 leading-[1.1]">
            Downloading files shouldn't<br className="hidden md:block" /> feel like a minefield.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#8D919B] max-w-[600px] mx-auto leading-relaxed">
            Stop dealing with fake buttons, throttled speeds, and premium paywalls. Experience how downloading was meant to be.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* LEFT: Other Sites (The Nightmare) */}
          <div className="flex-1 bg-gradient-to-b from-[#1A0A0A] to-[#0A0000] border border-[#331111] rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
            {/* Background texture/noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <h3 className="text-[24px] font-bold text-[#FF4444] mb-2 flex items-center gap-3 relative z-10">
              <span className="text-[28px]">🤡</span> Other Download Sites
            </h3>
            <p className="text-[#8D919B] text-[15px] mb-12 relative z-10">A web of deception, ads, and artificial limits.</p>

            {/* Meme UI Representation */}
            <div className="relative z-10 flex flex-col gap-4 max-w-[400px] mx-auto opacity-90 group-hover:opacity-100 transition-opacity">
              
              {/* Fake Download Button Ad */}
              <div className="bg-[#222222] border-2 border-dashed border-[#444444] p-4 flex flex-col items-center justify-center text-center animate-pulse">
                <span className="text-[10px] text-[#666666] uppercase tracking-widest mb-2">Advertisement</span>
                <div className="w-full bg-[#FF4444] text-white font-black text-[20px] py-3 uppercase cursor-pointer hover:bg-[#CC0000]">
                  ⬇️ DOWNLOAD NOW! ⬇️
                </div>
                <span className="text-[10px] text-[#666666] mt-2">Your PC might be at risk. Click to fix.</span>
              </div>

              {/* Slow Download Card */}
              <div className="bg-[#111111] border border-[#222222] p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[#CCCCCC] text-[13px]">file_final_v2.rar</div>
                  <div className="text-[#FF4444] font-bold text-[12px]">50 KB/s</div>
                </div>
                
                <div className="w-full h-2 bg-[#222222] overflow-hidden">
                  <div className="h-full bg-[#FF4444] w-[12%]"></div>
                </div>
                
                <div className="flex justify-between items-center text-[11px] text-[#888888]">
                  <span>ETA: 14 hours, 23 mins</span>
                  <span>Free Tier Limit</span>
                </div>
              </div>

              {/* Premium Paywall Alert */}
              <div className="bg-[#332200] border border-[#FF9900] p-4 text-center mt-4">
                <div className="text-[#FF9900] font-bold text-[14px] mb-1">⚠️ Premium Required</div>
                <div className="text-[#CCCCCC] text-[12px]">Wait 59 seconds to download, or buy Premium for unlimited speed!</div>
              </div>

            </div>
          </div>

          {/* RIGHT: TeleTorrent (The Dream) */}
          <div className="flex-1 bg-gradient-to-b from-[#0B1A0A] to-[#000A00] border border-[#113311] rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
            {/* Background texture/noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <h3 className="text-[24px] font-bold text-[#B7FF32] mb-2 flex items-center gap-3 relative z-10">
              <span className="text-[28px]">😎</span> TeleTorrent
            </h3>
            <p className="text-[#8D919B] text-[15px] mb-12 relative z-10">Direct, blazing fast, 100% free. No bullshit.</p>

            {/* Meme UI Representation */}
            <div className="relative z-10 flex flex-col gap-4 max-w-[400px] mx-auto opacity-90 group-hover:opacity-100 transition-opacity">
              
              {/* TeleTorrent Download Card */}
              <div className="bg-[#0B0C0E] border border-[#141518] rounded-[16px] p-4 flex flex-col gap-4 shadow-[0_20px_40px_rgba(183,255,50,0.05)]">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#1A1A1A] shrink-0 overflow-hidden relative border border-[#222222]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/20 to-[#D8B4FE]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#D8B4FE] font-bold text-[13px]">RAR</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-[#F5F5F5] text-[14px] font-bold truncate">file_final_v2.rar</h4>
                    </div>
                    <div className="flex justify-between items-end w-full">
                      <div className="text-[#8D919B] text-[12px] font-medium">
                        3.2 GB <span className="mx-1 text-[#333333]">/</span> 4.5 GB
                      </div>
                      <span className="text-[#B7FF32] text-[12px] font-bold font-mono">14.5 MB/s</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-[#B7FF32] rounded-full w-[71%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#B7FF32] font-bold">⚡ Max Speed Reached</span>
                  <span className="text-[#8D919B]">ETA: 1 min, 20 secs</span>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                <span className="bg-[#101114] border border-[#141518] text-[#F5F5F5] text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="text-[#B7FF32]">✔</span> 100% Free
                </span>
                <span className="bg-[#101114] border border-[#141518] text-[#F5F5F5] text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="text-[#B7FF32]">✔</span> Zero Ads
                </span>
                <span className="bg-[#101114] border border-[#141518] text-[#F5F5F5] text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="text-[#B7FF32]">✔</span> No Premium Tiers
                </span>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  )
}
