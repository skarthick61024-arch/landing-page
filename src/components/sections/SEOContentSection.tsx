export function SEOContentSection() {
  return (
    <section className="bg-[#000000] py-20 border-t border-[#141518] cv-auto" aria-labelledby="seo-overview-heading">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 id="seo-overview-heading" className="text-[28px] md:text-[36px] font-bold text-[#F5F5F5] mb-4">
            Telegram Video & File Downloader Specifications
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#8D919B] max-w-3xl leading-relaxed">
            TeleTorrent is designed to make saving media and documents from your Telegram Saved Messages seamless, fast, and native on Android.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#8D919B]">
          
          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">⚡</span> High-Quality Video Downloads
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Download high-bitrate MP4 and MKV videos directly from your Telegram Saved Messages with zero compression or data loss.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">📁</span> All File Types Supported
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Comprehensive support for ZIP, RAR archives, Android APK packages, lossless audio, and heavy documents (PDF, DOCX).
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🔄</span> Resume & Background Transfer
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Reliable background downloading allows multitasking, while auto-resume recovers interrupted transfers without restarting.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🎯</span> Simple Saved Messages Flow
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Forward any file to your Saved Messages, open TeleTorrent, and tap download to manage your library in one dedicated workspace.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🛡️</span> Dedicated, Clutter-Free Utility
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Unlike web browsers with ad redirects, TeleTorrent focuses exclusively on your Telegram content with no speed caps and direct local device storage.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
