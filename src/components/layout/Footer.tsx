import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#000000] pt-20 pb-8 border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-[18px] tracking-tight text-[#F5F5F5]">
                TeleTorrent
              </span>
            </Link>
            <p className="text-[14px] text-[#8D919B] leading-relaxed max-w-[240px]">
              A focused file downloading and management experience for Android.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-[#F5F5F5] mb-5 text-[14px]">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/#features" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">How it works</Link></li>
              <li><Link href="/" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Download</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-bold text-[#F5F5F5] mb-5 text-[14px]">Tools</h4>
            <ul className="space-y-4">
              <li><Link href="/telegram-downloader" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Telegram Downloader</Link></li>
              <li><Link href="/telegram-video-downloader" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Video Downloader</Link></li>
              <li><Link href="/telegram-file-downloader" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">File Downloader</Link></li>
              <li><Link href="/telegram-media-downloader" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Media Downloader</Link></li>
              <li><Link href="/telegram-document-downloader" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Document Downloader</Link></li>
              <li><Link href="/telegram-download-manager" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Download Manager</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[#F5F5F5] mb-5 text-[14px]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Contact</Link></li>
              <li><Link href="/help" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Help & Support</Link></li>
              <li><Link href="/report-problem" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Report a Problem</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#F5F5F5] mb-5 text-[14px]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[14px] text-[#8D919B] hover:text-[#F5F5F5] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom */}
        <div className="border-t border-[#141518] pt-8 flex flex-col items-start md:items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[12px] text-[#8D919B] max-w-[800px] text-center mx-auto mb-2">
            TeleTorrent is an independent third-party application and is not affiliated with, endorsed by, or sponsored by Telegram.
          </p>
          <p className="text-[13px] text-[#8D919B] w-full text-center">
            © {new Date().getFullYear()} TeleTorrent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
