import { Shield, Zap, RefreshCw, HardDriveDownload } from "lucide-react"

const features = [
  {
    icon: <HardDriveDownload className="w-6 h-6" />,
    title: "Background Downloads",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Downloads",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Connection",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Resume Support",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 border-y border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 tracking-wider uppercase">
          Trusted by Telegram users worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="text-primary bg-primary/10 p-4 rounded-2xl">
                {feature.icon}
              </div>
              <span className="font-semibold text-sm md:text-base text-foreground/80">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
