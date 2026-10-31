import Link from "next/link"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#060709] pt-16 pb-12 border-t border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          
          {/* Brand & Play Store Badge */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#B7FF32] to-cyan-400">
                <Image src="/logo-round.jpg" alt="TeleTorrent Logo" width={32} height={32} className="w-full h-full rounded-full object-cover" loading="lazy" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#B7FF32] transition-colors">
                TeleTorrent
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed mb-5 max-w-[240px]">
              High-speed 16-channel TurboStream™ Telegram downloader &amp; movie download manager for Android.
            </p>

            {/* Google Play Store Badge */}
            <a
              href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
              title="Get it on Google Play"
            >
              <div className="w-36 h-11 relative">
                <Image 
                  src="/playstore.png" 
                  alt="Get it on Google Play" 
                  width={144} 
                  height={44} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </a>
          </div>

          {/* Product & Downloads */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Product &amp; App</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.teletorrent.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#B7FF32] hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>Google Play Store</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-[#B7FF32]/20 text-[#B7FF32]">OFFICIAL</span>
                </a>
              </li>
              <li><Link href="/telegram-movie-downloader" className="text-zinc-400 hover:text-white transition-colors">Movie Downloader</Link></li>
              <li><Link href="/#features" className="text-zinc-400 hover:text-white transition-colors">TurboStream™ Engine</Link></li>
              <li><Link href="/#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/platform" className="text-zinc-400 hover:text-white transition-colors">Supported Devices</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Downloader Hubs</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/telegram-movie-downloader" className="text-[#B7FF32] hover:underline font-semibold">Movie Downloader</Link></li>
              <li><Link href="/telegram-downloader" className="text-zinc-400 hover:text-white transition-colors">Telegram Downloader</Link></li>
              <li><Link href="/telegram-video-downloader" className="text-zinc-400 hover:text-white transition-colors">Video Downloader</Link></li>
              <li><Link href="/telegram-file-downloader" className="text-zinc-400 hover:text-white transition-colors">File &amp; ZIP Downloader</Link></li>
              <li><Link href="/telegram-download-manager" className="text-zinc-400 hover:text-white transition-colors">Download Manager</Link></li>
              <li><Link href="/telegram-media-downloader" className="text-zinc-400 hover:text-white transition-colors">Media Downloader</Link></li>
              <li><Link href="/telegram-document-downloader" className="text-zinc-400 hover:text-white transition-colors">Document Downloader</Link></li>
            </ul>
          </div>

          {/* Guides & Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Guides &amp; Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Knowledge Base &amp; Blog</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About TeleTorrent</Link></li>
              <li><Link href="/pricing" className="text-zinc-400 hover:text-white transition-colors">Free Forever Policy</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/help" className="text-zinc-400 hover:text-white transition-colors">Help Center &amp; FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs font-mono uppercase tracking-wider">Trust &amp; Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/report-problem" className="text-zinc-400 hover:text-white transition-colors">Report an Issue</Link></li>
              <li><Link href="/delete-account" className="text-zinc-400 hover:text-white transition-colors">Account &amp; Data Control</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} TeleTorrent. All rights reserved. Google Play and the Google Play logo are trademarks of Google LLC.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.teletorrent.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B7FF32] hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>com.teletorrent.app</span>
            </a>
            <span>•</span>
            <span className="text-zinc-400">Google Play Protect Verified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
