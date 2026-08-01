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
        <p className="text-muted-foreground font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>

      <div className="space-y-12 text-base md:text-lg leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">1. Acceptance</h2>
          <p>By downloading or using the TeleTorrent app, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">2. Usage</h2>
          <p>TeleTorrent is an independent download manager. You must use it in compliance with standard platform Terms of Service. We are not responsible if your account is restricted for violating terms of any connected platforms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">3. User Responsibility & Copyright</h2>
          <p>You are solely responsible for the files you download using TeleTorrent. Do not use TeleTorrent to download copyrighted material without permission. TeleTorrent acts strictly as a download manager and does not host or distribute any files.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">4. Limitations</h2>
          <p>TeleTorrent is provided &quot;as is&quot; without any warranties. We do not guarantee uninterrupted functionality, nor do we promise that the app will be free from errors or bugs.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">5. Disclaimer</h2>
          <p>TeleTorrent is an independent application and is not affiliated with, endorsed by, or sponsored by Telegram FZ-LLC.</p>
        </section>

        <section className="space-y-4 pt-8 border-t border-border/50">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">6. Contact</h2>
          <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="mailto:terms@teletorrent.app" className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">terms@teletorrent.app</a>.</p>
        </section>
      </div>
    </main>
  )
}
