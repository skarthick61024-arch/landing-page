import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-12 md:mt-24 mx-4 md:mx-auto max-w-7xl border border-border/40 bg-background/50 rounded-2xl md:rounded-3xl mb-8 overflow-hidden">
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-lg tracking-tight">TeleTorrent</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              The modern Telegram download manager designed for users who frequently save large files inside Telegram.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-foreground transition-colors">How it Works</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">Download</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="mailto:contact@teletorrent.app" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TeleTorrent. All rights reserved.</p>
          <p>Not affiliated with Telegram FZ-LLC.</p>
        </div>
      </div>
    </footer>
  )
}
