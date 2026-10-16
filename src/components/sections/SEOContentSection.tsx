import Link from "next/link"

export function SEOContentSection() {
  return (
    <section className="bg-[#000000] py-20 border-t border-[#141518] cv-auto" aria-labelledby="seo-overview-heading">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#141518] text-[11px] font-mono tracking-widest text-[#B7FF32] font-semibold uppercase mb-4">
            TECHNICAL SPECIFICATIONS & ARCHITECTURE
          </div>
          <h2 id="seo-overview-heading" className="text-[28px] md:text-[38px] font-bold text-[#F5F5F5] mb-4 tracking-tight leading-[1.2]">
            Telegram Movie, Video & File Downloader Architecture
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#8D919B] max-w-3xl leading-relaxed">
            TeleTorrent is engineered to make downloading large movies, 4K videos, documents, and APK packages from Telegram Saved Messages seamless, high-speed, and battery-efficient across India and globally.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#8D919B]">
          
          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🎬</span> Telegram Movie Downloader
              </h3>
              <p className="text-[14px] leading-[1.6] mb-3">
                Download full 4K UHD and 1080p movies directly from Telegram to your phone gallery. Preserves original multi-audio dubs (Hindi, English, Tamil, Telugu) and subtitle tracks.
              </p>
              <Link href="/telegram-movie-downloader" className="text-[13px] font-mono text-[#B7FF32] hover:underline flex items-center gap-1">
                Explore Movie Downloader →
              </Link>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">⚡</span> Jio 5G & Airtel 5G Acceleration
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Splits heavy 2GB+ Telegram files into 16 parallel MTProto connections, maxing out your high-speed Indian 5G and fiber network without client throttling.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🔄</span> 100% Byte-Perfect Auto-Resume
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Never lose your downloaded movie data again. TeleTorrent automatically resumes interrupted transfers on Wi-Fi and mobile data switches without starting from scratch.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">📁</span> All Telegram Formats Supported
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Comprehensive support for large ZIP and RAR archives, Android APK packages, lossless FLAC audio, and academic PDFs.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🎯</span> Direct Gallery & SD Card Export
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Files are exported directly to physical storage, allowing instant access from MX Player, VLC, and your phone&apos;s default Gallery without cache loss.
              </p>
            </div>
          </div>

          <div className="bg-[#0B0C0E] border border-[#141518] rounded-[20px] p-6 flex flex-col justify-between hover:border-[#22252A] transition-colors">
            <div>
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-3 flex items-center gap-2">
                <span className="text-[#B7FF32]">🔒</span> 100% Local MTProto Security
              </h3>
              <p className="text-[14px] leading-[1.6]">
                Zero third-party servers, zero cloud proxies, and zero logging. All transfers communicate straight between your device and Telegram official data centers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
