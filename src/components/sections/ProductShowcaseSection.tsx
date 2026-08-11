export function ProductShowcaseSection() {
  return (
    <section id="workspace" className="bg-[#000000] py-24 md:py-32 border-t border-[#141518] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center bg-[#0D0F11] border border-[#141518] text-[#858993] text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            TeleTorrent Workspace
          </div>
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-[#F5F5F5] mb-6 leading-[1.1]">
            Everything downloading.<br className="hidden md:block" /> One clear view.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#858993] max-w-[600px] mx-auto leading-relaxed">
            See what is downloading, what is waiting, and what is already complete — without losing track of your files.
          </p>
        </div>

        {/* The Dashboard Workspace */}
        <div className="w-full bg-[#0D0F11] border border-[#141518] rounded-[24px] md:rounded-[32px] overflow-hidden flex shadow-[0_40px_100px_rgba(0,0,0,0.8)] h-[800px] md:h-[720px]">
          
          {/* ================================================== */}
          {/* LEFT SIDEBAR (Desktop / Tablet) */}
          {/* ================================================== */}
          <div className="hidden md:flex flex-col w-[240px] shrink-0 border-r border-[#141518] bg-[#000000]/40">
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-[#141518]/50">
              <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full mr-3" />
              <span className="font-bold text-[16px] tracking-tight text-[#F5F5F5]">TeleTorrent</span>
            </div>
            
            {/* Nav */}
            <div className="flex-1 py-6 px-4 flex flex-col gap-1">
              <div className="px-3 py-2.5 rounded-[10px] text-[#858993] hover:bg-[#141518] hover:text-[#F5F5F5] text-[14px] font-medium flex items-center gap-3 cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/></svg>
                Saved
              </div>
              <div className="px-3 py-2.5 rounded-[10px] bg-[#141518]/80 text-[#B7FF32] text-[14px] font-medium flex items-center gap-3 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Downloads
              </div>
              <div className="px-3 py-2.5 rounded-[10px] text-[#858993] hover:bg-[#141518] hover:text-[#F5F5F5] text-[14px] font-medium flex items-center gap-3 cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                Completed
              </div>
              
              <div className="h-[1px] bg-[#141518] my-4 mx-2"></div>
              
              <div className="px-3 py-2.5 rounded-[10px] text-[#858993] hover:bg-[#141518] hover:text-[#F5F5F5] text-[14px] font-medium flex items-center gap-3 cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg>
                Storage
              </div>
              <div className="px-3 py-2.5 rounded-[10px] text-[#858993] hover:bg-[#141518] hover:text-[#F5F5F5] text-[14px] font-medium flex items-center gap-3 cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                Settings
              </div>
            </div>

            {/* Bottom Status */}
            <div className="p-6 border-t border-[#141518]/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#141518] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#F5F5F5]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22l10-4 10 4L12 2z"/></svg>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#F5F5F5]">Telegram</div>
                  <div className="text-[11px] text-[#858993] flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#B7FF32] rounded-full"></div>
                    Connected
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* CENTER CONTENT (Main Workspace) */}
          {/* ================================================== */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0D0F11]">
            
            {/* Top Bar */}
            <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 border-b border-[#141518] shrink-0 bg-[#0D0F11]/80 backdrop-blur-md sticky top-0 z-20">
              
              {/* Mobile Only Logo + Title */}
              <div className="md:hidden flex items-center gap-2">
                <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-7 h-7 rounded-full" />
              </div>
              
              <h1 className="text-[18px] md:text-[20px] font-bold text-[#F5F5F5]">Downloads</h1>
              
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#858993] transition-colors">
                  <svg className="w-4 h-4 md:w-4.5 md:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#858993] transition-colors">
                  <svg className="w-4 h-4 md:w-4.5 md:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 border border-[#22252A]"></div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
              <div className="p-4 md:p-8">
                
                {/* Metrics Summary Row */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 mb-10 md:mb-12 border-b border-[#141518]/50 pb-6">
                  <div className="w-[45%] md:flex-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-[#858993] uppercase tracking-wider mb-1">Live Speed</div>
                    <div className="text-[16px] md:text-[20px] font-bold text-[#B7FF32] font-mono">2.5 MB/s</div>
                  </div>
                  <div className="w-[45%] md:flex-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-[#858993] uppercase tracking-wider mb-1">Active</div>
                    <div className="text-[16px] md:text-[20px] font-bold text-[#F5F5F5]">2</div>
                  </div>
                  <div className="w-[45%] md:flex-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-[#858993] uppercase tracking-wider mb-1">Queue</div>
                    <div className="text-[16px] md:text-[20px] font-bold text-[#F5F5F5]">3</div>
                  </div>
                  <div className="w-[45%] md:flex-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-[#858993] uppercase tracking-wider mb-1">Completed</div>
                    <div className="text-[16px] md:text-[20px] font-bold text-[#F5F5F5]">24</div>
                  </div>
                  <div className="w-full md:flex-1 mt-2 md:mt-0">
                    <div className="text-[10px] md:text-[11px] font-bold text-[#858993] uppercase tracking-wider mb-1">Storage</div>
                    <div className="text-[16px] md:text-[20px] font-bold text-[#F5F5F5]">12.8 GB</div>
                  </div>
                </div>

                {/* Active Downloads List */}
                <div className="mb-10">
                  <h3 className="text-[12px] font-bold text-[#858993] uppercase tracking-widest mb-4 flex items-center gap-2">
                    Active Downloads
                    <span className="bg-[#141518] text-[#F5F5F5] px-1.5 py-0.5 rounded text-[10px]">2</span>
                  </h3>
                  
                  <div className="flex flex-col gap-3">
                    
                    {/* Active Row 1 */}
                    <div className="bg-[#0D0F11] border border-[#141518] hover:border-[#22252A] rounded-[16px] p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 transition-colors group relative overflow-hidden">
                      {/* Left color bar */}
                      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#B7FF32]"></div>
                      
                      {/* Thumbnail */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#141518] shrink-0 relative overflow-hidden border border-[#22252A]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        </div>
                      </div>
                      
                      {/* Info & Progress */}
                      <div className="flex-1 min-w-0 w-full flex flex-col gap-1.5 md:gap-1">
                        <div className="flex justify-between items-start md:items-center mb-0.5 md:mb-0">
                          <div className="flex items-center gap-2 max-w-full">
                            <h4 className="text-[#F5F5F5] text-[14px] md:text-[15px] font-bold truncate">[AC] Demon Slayer</h4>
                            <span className="hidden md:inline-block px-1.5 py-0.5 bg-[#B7FF32]/10 text-[#B7FF32] border border-[#B7FF32]/20 rounded text-[9px] uppercase tracking-wider font-bold">⚡ High</span>
                          </div>
                          <span className="text-[#858993] text-[11px] font-medium shrink-0">MKV · 2.08 GB</span>
                        </div>
                        
                        <div className="flex justify-between items-end w-full">
                          <div className="text-[#F5F5F5] text-[12px] md:text-[13px] font-medium">
                            1.09 GB <span className="mx-1 text-[#858993]">/</span> <span className="text-[#858993]">2.08 GB</span>
                          </div>
                          <span className="text-[#B7FF32] text-[12px] md:text-[13px] font-bold font-mono">2.5 MB/s</span>
                        </div>
                        
                        <div className="w-full h-1.5 md:h-2 bg-[#141518] rounded-full mt-1 md:mt-1.5 overflow-hidden">
                          <div className="h-full bg-[#B7FF32] rounded-full w-[52%] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Controls */}
                      <div className="hidden md:flex items-center gap-2 pl-2">
                        <div className="w-9 h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#F5F5F5] transition-colors border border-transparent hover:border-[#22252A]">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                        </div>
                        <div className="w-9 h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#858993] transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Active Row 2 */}
                    <div className="bg-[#0D0F11] border border-[#141518] hover:border-[#22252A] rounded-[16px] p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 transition-colors group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#F97316]/80"></div>
                      
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#141518] shrink-0 relative overflow-hidden border border-[#22252A]">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-orange-500 font-bold text-[11px] md:text-[13px]">MP4</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0 w-full flex flex-col gap-1.5 md:gap-1">
                        <div className="flex justify-between items-start md:items-center mb-0.5 md:mb-0">
                          <div className="flex items-center gap-2 max-w-full">
                            <h4 className="text-[#F5F5F5] text-[14px] md:text-[15px] font-bold truncate">Video_2026_Final.mp4</h4>
                            <span className="hidden md:inline-block px-1.5 py-0.5 bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 rounded text-[9px] uppercase tracking-wider font-bold">⚡ Med</span>
                          </div>
                          <span className="text-[#858993] text-[11px] font-medium shrink-0">MP4 · 506 MB</span>
                        </div>
                        
                        <div className="flex justify-between items-end w-full">
                          <div className="text-[#F5F5F5] text-[12px] md:text-[13px] font-medium">
                            286 MB <span className="mx-1 text-[#858993]">/</span> <span className="text-[#858993]">506 MB</span>
                          </div>
                          <span className="text-[#B7FF32] text-[12px] md:text-[13px] font-bold font-mono">780 KB/s</span>
                        </div>
                        
                        <div className="w-full h-1.5 md:h-2 bg-[#141518] rounded-full mt-1 md:mt-1.5 overflow-hidden">
                          <div className="h-full bg-[#B7FF32] rounded-full w-[56%] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite_1s]"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:flex items-center gap-2 pl-2">
                        <div className="w-9 h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#F5F5F5] transition-colors border border-transparent hover:border-[#22252A]">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                        </div>
                        <div className="w-9 h-9 rounded-full hover:bg-[#141518] flex items-center justify-center cursor-pointer text-[#858993] transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completed Downloads */}
                <div>
                  <h3 className="text-[12px] font-bold text-[#858993] uppercase tracking-widest mb-4 flex items-center gap-2">
                    Recently Completed
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    {/* Complete Row 1 */}
                    <div className="bg-[#000000]/40 border border-[#141518] rounded-[12px] p-3 flex items-center gap-4 hover:border-[#22252A] transition-colors cursor-pointer group">
                      <div className="w-10 h-10 rounded-[8px] bg-[#141518] shrink-0 relative overflow-hidden border border-[#22252A]">
                        <div className="absolute inset-0 flex items-center justify-center text-[#858993] group-hover:text-[#F5F5F5] transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#B7FF32] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                          <h4 className="text-[#F5F5F5] text-[13px] md:text-[14px] font-bold truncate">Insidious.2010.1080p.mkv</h4>
                        </div>
                        <div className="text-[#858993] text-[11px] md:text-[12px] pl-5.5">MKV · 1.59 GB · <span className="text-[#666666]">Completed 2 min ago</span></div>
                      </div>
                      <div className="hidden md:flex text-[#B7FF32] text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Open</div>
                    </div>
                    
                    {/* Complete Row 2 */}
                    <div className="bg-[#000000]/40 border border-[#141518] rounded-[12px] p-3 flex items-center gap-4 hover:border-[#22252A] transition-colors cursor-pointer group">
                      <div className="w-10 h-10 rounded-[8px] bg-[#141518] shrink-0 relative overflow-hidden border border-[#22252A]">
                        <div className="absolute inset-0 flex items-center justify-center text-[#858993] group-hover:text-[#F5F5F5] transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#B7FF32] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                          <h4 className="text-[#F5F5F5] text-[13px] md:text-[14px] font-bold truncate">Photo_2026_export.jpg</h4>
                        </div>
                        <div className="text-[#858993] text-[11px] md:text-[12px] pl-5.5">JPG · 518 KB · <span className="text-[#666666]">Completed 8 min ago</span></div>
                      </div>
                      <div className="hidden md:flex text-[#B7FF32] text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Open</div>
                    </div>
                    
                    {/* Complete Row 3 */}
                    <div className="bg-[#000000]/40 border border-[#141518] rounded-[12px] p-3 flex items-center gap-4 hover:border-[#22252A] transition-colors cursor-pointer group">
                      <div className="w-10 h-10 rounded-[8px] bg-[#141518] shrink-0 relative overflow-hidden border border-[#22252A]">
                        <div className="absolute inset-0 flex items-center justify-center text-[#858993] group-hover:text-[#F5F5F5] transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#B7FF32] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                          <h4 className="text-[#F5F5F5] text-[13px] md:text-[14px] font-bold truncate">Recording_Screen_12.mp4</h4>
                        </div>
                        <div className="text-[#858993] text-[11px] md:text-[12px] pl-5.5">MP4 · 89.5 MB · <span className="text-[#666666]">Completed 14 min ago</span></div>
                      </div>
                      <div className="hidden md:flex text-[#B7FF32] text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Open</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT SIDEBAR (Desktop Activity Panel) */}
          {/* ================================================== */}
          <div className="hidden lg:flex flex-col w-[260px] xl:w-[280px] shrink-0 border-l border-[#141518] bg-[#000000]/30 p-6">
            <h3 className="text-[12px] font-bold text-[#858993] uppercase tracking-widest mb-6">Activity</h3>
            
            <div className="flex flex-col gap-8">
              {/* Today */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="text-[14px] font-bold text-[#F5F5F5]">Today</div>
                  <div className="text-[12px] font-medium text-[#858993]">8 files</div>
                </div>
                <div className="text-[20px] font-bold text-[#F5F5F5] mb-3">12.4 <span className="text-[13px] text-[#858993]">GB</span></div>
                
                {/* Mini bar chart representation */}
                <div className="flex items-end gap-1.5 h-10 w-full mb-1">
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[30%]"></div>
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[45%]"></div>
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[20%]"></div>
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[60%]"></div>
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[85%]"></div>
                  <div className="flex-1 bg-[#B7FF32] rounded-t-[4px] h-[100%] shadow-[0_0_12px_rgba(183,255,50,0.3)]"></div>
                  <div className="flex-1 bg-[#141518] hover:bg-[#22252A] rounded-t-[4px] h-[40%]"></div>
                </div>
              </div>

              {/* This Week */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="text-[14px] font-bold text-[#F5F5F5]">This Week</div>
                  <div className="text-[12px] font-medium text-[#858993]">32 files</div>
                </div>
                <div className="text-[20px] font-bold text-[#F5F5F5] mb-3">48.7 <span className="text-[13px] text-[#858993]">GB</span></div>
                <div className="w-full h-1.5 bg-[#141518] rounded-full overflow-hidden">
                  <div className="h-full bg-[#858993] rounded-full w-[65%]"></div>
                </div>
              </div>

              <div className="h-[1px] bg-[#141518]"></div>

              {/* Storage */}
              <div>
                <div className="text-[14px] font-bold text-[#F5F5F5] mb-4">Device Storage</div>
                
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Fake Donut SVG */}
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path
                      className="text-[#141518]"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#B7FF32]"
                      strokeDasharray="72, 100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[16px] font-bold text-[#F5F5F5]">72%</span>
                    <span className="text-[10px] text-[#858993] uppercase tracking-wider">Used</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-[#F5F5F5] font-medium"><span className="inline-block w-2 h-2 rounded-full bg-[#B7FF32] mr-1.5"></span>87.4 GB Used</span>
                  <span className="text-[#858993]">128 GB Total</span>
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #141518;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #22252A;
        }
      `}} />
    </section>
  )
}
