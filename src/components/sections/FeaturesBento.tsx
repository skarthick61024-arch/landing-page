export function FeaturesBento() {
  return (
    <section id="features" className="bg-[#F7F7F7] py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#090909] mb-6 leading-tight">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="text-[17px] text-[#6B6B6B] leading-relaxed">
            TeleTorrent keeps file discovery, downloading and management in one simple interface.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Telegram Saved Messages (Span 2) */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E8E8E8] md:col-span-2 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#090909] text-[#B7FF32] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-[#090909] mb-3">Saved Messages</h3>
            <p className="text-[15px] text-[#6B6B6B] max-w-[400px]">
              Access files from your Telegram Saved Messages without losing the original file information.
            </p>
          </div>

          {/* Card 2: Download Manager */}
          <div className="bg-[#090909] rounded-[24px] p-8 md:p-10 border border-[#111111] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#111111] text-[#B7FF32] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-white mb-3">Download Manager</h3>
            <p className="text-[15px] text-[#A1A1A1]">
              Track active downloads with clear progress, file size and real-time status.
            </p>
          </div>

          {/* Card 3: File Organization */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E8E8E8] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#F7F7F7] text-[#090909] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-[#090909] mb-3">Organized Files</h3>
            <p className="text-[15px] text-[#6B6B6B]">
              Keep videos, photos, documents and other files easy to browse and manage.
            </p>
          </div>

          {/* Card 4: Real-Time Progress */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E8E8E8] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#F7F7F7] text-[#090909] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-[#090909] mb-3">Real-Time Progress</h3>
            <p className="text-[15px] text-[#6B6B6B]">
              See actual downloaded size, current speed, progress and download state.
            </p>
          </div>

          {/* Card 5: Completed Downloads */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E8E8E8] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#F7F7F7] text-[#090909] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-[#090909] mb-3">Completed</h3>
            <p className="text-[15px] text-[#6B6B6B]">
              Quickly find files that have already finished downloading.
            </p>
          </div>

          {/* Card 6: Mobile First (Span 3 on md) */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E8E8E8] md:col-span-3 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-[40%] hidden md:block bg-gradient-to-l from-[#F7F7F7] to-transparent"></div>
            <div className="absolute top-8 left-8 w-12 h-12 bg-[#F7F7F7] text-[#090909] rounded-[12px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" /></svg>
            </div>
            <div className="relative z-10 max-w-[600px] mt-16">
              <h3 className="text-[22px] font-bold text-[#090909] mb-3">Built for Android</h3>
              <p className="text-[15px] text-[#6B6B6B]">
                Designed around a compact mobile experience that works naturally on Android devices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
