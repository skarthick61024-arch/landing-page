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
        <p className="text-muted-foreground font-medium">Last updated: August 1, 2026</p>
      </div>

      <div className="space-y-12 text-base md:text-lg leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">1. Information Processing & Authentication</h2>
          <p>TeleTorrent connects directly to secure servers to enable download management functionality. When you log in, certain necessary authentication tokens and session data pass securely through our servers to facilitate the connection. We do not permanently store or intercept your passwords, messages, or files.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">2. Data Retention</h2>
          <p>We only retain the minimal data required to maintain your active session. Authentication tokens and session identifiers are kept only as long as you are actively logged in and using the service. Once you log out, this temporary session data is immediately discarded.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">3. Local Storage & Download History</h2>
          <p>Your downloaded files and download history are stored locally on your device. You have full control over this data and can clear your history or delete files at any time through the app settings or your device&apos;s file manager.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">4. Third-Party Services</h2>
          <p>We may employ trusted third-party hosting and infrastructure providers to facilitate our service. These providers process data on our behalf under strict confidentiality agreements and only to the extent necessary to keep the application operational. We do not sell or share your data with advertisers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">5. International Data Transfers</h2>
          <p>To provide our services globally, your information, including session data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. We take all reasonable steps to ensure your data is treated securely.</p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">6. Permissions</h2>
          <p>To function correctly, TeleTorrent requires storage permissions to save your downloaded files and notification permissions to keep you updated on background downloads.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">7. User Rights</h2>
          <p>You have the right to request access to or deletion of any personal data we may hold about you. Because we process minimal data and store your files locally, you can exercise most of these rights simply by logging out and deleting the app. For further assistance, contact us using the details below.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">8. Children&apos;s Privacy</h2>
          <p>TeleTorrent is not intended for use by children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will immediately delete it from our servers.</p>
        </section>

        <section className="space-y-4 pt-8 border-t border-border/50">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">9. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@teletorrent.me" className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">privacy@teletorrent.me</a>.</p>
        </section>
      </div>
    </main>
  )
}
