import { LogIn, RefreshCcw, CheckSquare, Zap } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Login with Telegram",
    description: "Securely connect to your account to access your saved media.",
    icon: <LogIn className="w-6 h-6" />,
  },
  {
    num: "02",
    title: "Sync Saved Messages",
    description: "TeleTorrent instantly loads your media, files, and links.",
    icon: <RefreshCcw className="w-6 h-6" />,
  },
  {
    num: "03",
    title: "Choose Files",
    description: "Select what you want to download, filter by type or size.",
    icon: <CheckSquare className="w-6 h-6" />,
  },
  {
    num: "04",
    title: "Download Instantly",
    description: "Enjoy fast, background downloads with pause & resume.",
    icon: <Zap className="w-6 h-6" />,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">How it works</h2>
          <p className="text-lg md:text-xl font-normal text-muted-foreground">
            Get started in seconds. No complicated setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-[1px] bg-border z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-[2rem] bg-background premium-shadow border border-border/50 flex items-center justify-center text-primary mb-6">
                {step.icon}
              </div>
              <span className="text-sm font-bold text-muted-foreground mb-2">{step.num}</span>
              <h3 className="font-semibold text-xl mb-3 text-foreground">{step.title}</h3>
              <p className="text-sm font-normal text-muted-foreground leading-relaxed max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
