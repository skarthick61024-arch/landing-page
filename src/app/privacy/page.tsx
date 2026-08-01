import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - TeleTorrent",
  description: "Privacy Policy for TeleTorrent Telegram Download Manager.",
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-24 md:py-32 max-w-3xl min-h-[80vh]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>

      <div className="space-y-12 text-base md:text-lg leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">1. Information Collected</h2>
          <p>TeleTorrent operates directly on your device. We do not collect, transmit, or store any of your personal information, messages, or files on our own servers. All data processing happens locally.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">2. Authentication</h2>
          <p>TeleTorrent connects directly to secure servers. When you log in, your credentials and authentication tokens are sent directly for secure processing. TeleTorrent does not intercept, log, or store your passwords.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">3. Local Storage & Download History</h2>
          <p>Your downloaded files and download history are stored locally on your device. You have full control over this data and can clear your history or delete files at any time through the app settings or your device&apos;s file manager.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">4. Permissions</h2>
          <p>To function correctly, TeleTorrent requires storage permissions to save your downloaded files and notification permissions to keep you updated on background downloads.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">5. Background Downloads & Notifications</h2>
          <p>The app runs a foreground service during active downloads to ensure they complete successfully in the background. Notifications are used solely for download status updates and are generated locally.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">6. Security</h2>
          <p>All communication is encrypted using industry-standard protocols. We do not compromise this connection.</p>
        </section>

        <section className="space-y-4 pt-8 border-t border-border/50">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">7. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@teletorrent.app" className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">privacy@teletorrent.app</a>.</p>
        </section>
      </div>
    </main>
  )
}
