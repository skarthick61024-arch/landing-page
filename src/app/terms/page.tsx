import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - TeleTorrent",
  description: "Terms and Conditions for TeleTorrent.",
}

export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-24 md:py-32 max-w-3xl min-h-[80vh]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground font-medium">Last updated: August 1, 2026</p>
      </div>

      <div className="space-y-12 text-base md:text-lg leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">1. Acceptance & Minimum Age</h2>
          <p>By downloading or using the TeleTorrent app, these terms will automatically apply to you. You must be at least 13 years of age (or 16 depending on your jurisdiction) to use our services. By using TeleTorrent, you warrant that you meet this minimum age requirement.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">2. Usage</h2>
          <p>TeleTorrent is an independent download manager. You must use it in compliance with standard platform Terms of Service. We are not responsible if your account is restricted for violating terms of any connected platforms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">3. User Responsibility & DMCA Takedowns</h2>
          <p>You are solely responsible for the files you download using TeleTorrent. Do not use TeleTorrent to download copyrighted material without permission. TeleTorrent acts strictly as a client-side download manager and does not host, index, or distribute any files. If you are a copyright owner and believe your content is being infringed, please direct your DMCA notices to the hosting platform where the content resides. If you believe our specific services are hosting infringing material, contact us at terms@teletorrent.me.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">4. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to TeleTorrent at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use the Service will immediately cease.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">5. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, in no event shall TeleTorrent, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">6. Disclaimer</h2>
          <p>TeleTorrent is provided &quot;as is&quot; without any warranties. We do not guarantee uninterrupted functionality, nor do we promise that the app will be free from errors or bugs. TeleTorrent is an independent application and is not affiliated with, endorsed by, or sponsored by Telegram FZ-LLC.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">7. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is registered, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
        </section>

        <section className="space-y-4 pt-8 border-t border-border/50">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">8. Contact</h2>
          <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="mailto:terms@teletorrent.me" className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">terms@teletorrent.me</a>.</p>
        </section>
      </div>
    </main>
  )
}
