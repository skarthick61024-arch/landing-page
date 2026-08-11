import { Button } from "@/components/ui/button"

export function HeroSection({
  title = "Telegram Downloader",
  subtitle = "Download Telegram videos, files, documents and media with TeleTorrent. Fast, simple downloads with resume support and background downloading."
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#000000] pt-[80px] md:pt-[100px] pb-[100px] overflow-hidden flex flex-col items-center relative">
      
      {/* Subtle background glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9333EA]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-12 max-w-[1280px] flex flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <div className="bg-[#101114] border border-[#141518] text-[#8D919B] text-[12px] font-medium px-4 py-1.5 rounded-full mb-8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#B7FF32] rounded-full shadow-[0_0_8px_rgba(183,255,50,0.6)] animate-pulse"></div>
          Modern Telegram File Manager
        </div>

        {/* Headline */}
        <h1 className="text-[38px] md:text-[56px] lg:text-[64px] font-bold text-[#F5F5F5] tracking-tight mb-6 max-w-[800px] leading-[1.1]">
          {title}
        </h1>

        {/* Supporting text */}
        <p className="text-[15px] md:text-[17px] text-[#8D919B] leading-[1.6] max-w-[580px] mx-auto mb-10">
          {subtitle}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col items-center gap-6 mb-16 md:mb-24 w-full justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="transition-transform hover:scale-105 focus:outline-none rounded-full overflow-hidden">
              <img src="/playstore.png" alt="Get it on Google Play" className="h-[52px] md:h-[56px] w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </button>
            <Button className="w-full sm:w-auto rounded-full bg-[#101114] border border-[#141518] text-[#F5F5F5] hover:bg-[#141518] font-semibold px-8 h-[52px] md:h-[56px] text-[15px] transition-all">
              Learn More
            </Button>
          </div>
          
          {/* User Ratings */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[#8D919B] text-[13px] font-medium mt-2">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <div className="flex items-center gap-4">
              <span><strong className="text-[#F5F5F5]">4.8/5</strong> Rating</span>
              <div className="w-1 h-1 rounded-full bg-[#333333]"></div>
              <span><strong className="text-[#F5F5F5]">500K+</strong> Downloads</span>
            </div>
          </div>
        </div>

        {/* Abstract UI Component */}
        <div className="w-full max-w-[900px] bg-[#0B0C0E] border border-[#141518] rounded-[24px] md:rounded-[32px] p-4 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col gap-6 select-none relative">
          
          {/* Header row */}
          <div className="flex justify-between items-end border-b border-[#141518] pb-4 px-2">
            <h2 className="text-[#F5F5F5] font-bold text-[18px] md:text-[22px]">Downloads</h2>
            <div className="flex gap-6 md:gap-10 text-right">
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Live Speed</div>
                <div className="text-[#B7FF32] text-[14px] md:text-[16px] font-bold font-mono">2.5 MB/s</div>
              </div>
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Active</div>
                <div className="text-[#F5F5F5] text-[14px] md:text-[16px] font-bold">2</div>
              </div>
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Queue</div>
                <div className="text-[#F5F5F5] text-[14px] md:text-[16px] font-bold">1</div>
              </div>
            </div>
          </div>

          {/* Download Queue */}
          <div className="flex flex-col gap-3">
            
            {/* Active Item 1 */}
            <div className="bg-[#101114] border border-[#141518] rounded-[16px] p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B7FF32]"></div>
              
              <div className="flex w-full items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#1A1A1A] shrink-0 overflow-hidden relative border border-[#222222]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#1E3A8A]/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3B82F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.55-2.27A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v4z"/></svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col gap-1.5 md:gap-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#F5F5F5] text-[13px] md:text-[15px] font-semibold truncate pr-4">Demonstration_Video_4K.mp4</h4>
                    <span className="text-[#B7FF32] text-[11px] md:text-[12px] font-bold shrink-0 font-mono hidden md:block">2.5 MB/s</span>
                  </div>
                  
                  <div className="flex justify-between items-end w-full">
                    <div className="text-[#8D919B] text-[11px] md:text-[12px] font-medium">
                      1.2 GB <span className="mx-1 text-[#333333]">/</span> 3.8 GB
                    </div>
                    <span className="text-[#B7FF32] text-[11px] md:text-[12px] font-bold shrink-0 font-mono md:hidden">2.5 MB/s</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1.5 md:h-2 bg-[#1A1A1A] rounded-full mt-1 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-[#B7FF32] rounded-full w-[31.5%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#222222] hover:bg-[#222222] cursor-pointer shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#F5F5F5]" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                </div>
              </div>
            </div>

            {/* Active Item 2 */}
            <div className="bg-[#101114] border border-[#141518] rounded-[16px] p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B7FF32]"></div>
              
              <div className="flex w-full items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#1A1A1A] shrink-0 overflow-hidden relative border border-[#222222]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D8B4FE]/20 to-[#9333EA]/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#D8B4FE] text-[12px] md:text-[14px] font-bold tracking-wider">ZIP</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col gap-1.5 md:gap-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#F5F5F5] text-[13px] md:text-[15px] font-semibold truncate pr-4">Project_Assets_2026.zip</h4>
                    <span className="text-[#B7FF32] text-[11px] md:text-[12px] font-bold shrink-0 font-mono hidden md:block">780 KB/s</span>
                  </div>
                  
                  <div className="flex justify-between items-end w-full">
                    <div className="text-[#8D919B] text-[11px] md:text-[12px] font-medium">
                      512 MB <span className="mx-1 text-[#333333]">/</span> 1.4 GB
                    </div>
                    <span className="text-[#B7FF32] text-[11px] md:text-[12px] font-bold shrink-0 font-mono md:hidden">780 KB/s</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1.5 md:h-2 bg-[#1A1A1A] rounded-full mt-1 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-[#B7FF32] rounded-full w-[36%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite_0.5s]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#222222] hover:bg-[#222222] cursor-pointer shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#F5F5F5]" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                </div>
              </div>
            </div>

            {/* Queued Item */}
            <div className="bg-[#0B0C0E] border border-[#141518] rounded-[16px] p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden opacity-60">
              <div className="flex w-full items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#101114] shrink-0 overflow-hidden relative border border-[#1A1A1A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8D919B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#8D919B] text-[13px] md:text-[15px] font-semibold truncate pr-4">Q3_Financial_Report.pdf</h4>
                    <span className="text-[#8D919B] text-[11px] md:text-[12px] font-medium shrink-0">Queued</span>
                  </div>
                  <div className="text-[#8D919B] text-[11px] md:text-[12px] font-medium">
                    0 B <span className="mx-1 text-[#333333]">/</span> 45 MB
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 md:h-2 bg-[#1A1A1A] rounded-full mt-1 overflow-hidden"></div>
                </div>
                
                {/* Controls */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#101114] border border-[#1A1A1A] cursor-pointer shrink-0">
                  <svg className="w-4 h-4 text-[#8D919B]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
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
