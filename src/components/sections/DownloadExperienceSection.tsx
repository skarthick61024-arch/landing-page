export function DownloadExperienceSection() {
  return (
    <section className="bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#F5F5F5] tracking-tight leading-[1.15] mb-6">
              Everything you need to see a download.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#8D919B] leading-relaxed mb-8">
              TeleTorrent provides a transparent download experience. Monitor exactly what is happening with real-time speed, accurate progress calculation, and clear file metadata all in one compact view.
            </p>
          </div>

          {/* Right: Abstract UI Component */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            
            <div className="w-full max-w-[600px] bg-[#0B0C0E] border border-[#141518] rounded-[24px] p-6 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              
              <div className="text-[12px] font-medium text-[#8D919B] mb-4 uppercase tracking-wider">
                Active Download Interface
              </div>

              {/* The Download Card */}
              <div className="bg-[#101114] border border-[#141518] rounded-[20px] p-4 md:p-5 flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#B7FF32]"></div>
                
                <div className="flex w-full items-start gap-4">
                  
                  {/* Thumbnail */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] bg-[#1A1A1A] shrink-0 overflow-hidden relative border border-[#222222]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-[#047857]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#10B981] text-[13px] md:text-[15px] font-bold tracking-wider">APK</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    
                    {/* Title and Menu */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#F5F5F5] text-[15px] md:text-[17px] font-bold truncate pr-4 leading-tight mb-1">TeleTorrent_v2.1.apk</h4>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-[#8D919B]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C3.45 22 2.979 21.804 2.587 21.412C2.195 21.02 2 20.55 2 20V4C2 3.45 2.195 2.979 2.587 2.587C2.979 2.195 3.45 2 4 2H10L12 4H20C20.55 4 21.02 4.195 21.412 4.587C21.804 4.979 22 5.45 22 6V20C22 20.55 21.804 21.02 21.412 21.412C21.02 21.804 20.55 22 20 22H4ZM4 6V20H20V6H4Z"/></svg>
                          <span className="text-[#8D919B] text-[12px] font-medium">Android Package</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full hover:bg-[#1A1A1A] flex items-center justify-center cursor-pointer transition-colors text-[#8D919B]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex justify-between items-end w-full mt-1">
                      <div className="text-[#8D919B] text-[12px] md:text-[13px] font-medium">
                        32.4 MB <span className="mx-1.5 text-[#333333]">/</span> 45.6 MB
                      </div>
                      <span className="text-[#B7FF32] text-[12px] md:text-[13px] font-bold font-mono">1.2 MB/s</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-[#1A1A1A] rounded-full mt-1 overflow-hidden relative">
                      <div className="absolute top-0 left-0 h-full bg-[#B7FF32] rounded-full w-[71%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Controls Row */}
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-[#141518]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#222222] hover:bg-[#222222] flex items-center justify-center cursor-pointer transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#F5F5F5]" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                    </div>
                    <span className="text-[12px] text-[#F5F5F5] font-medium">Downloading...</span>
                  </div>
                  <span className="text-[12px] text-[#8D919B] font-medium font-mono">71%</span>
                </div>

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
