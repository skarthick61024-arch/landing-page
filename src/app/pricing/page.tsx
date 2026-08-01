import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata = {
  title: 'Pricing | TeleTorrent',
  description: 'Simple, transparent pricing.',
}

export default function PricingPage() {
  return (
    <div className="pt-12 pb-24 md:pt-16 md:pb-32 min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Simple, Transparent Pricing.
          </h1>
          <p className="text-lg md:text-xl font-normal text-muted-foreground">
            Start for free, upgrade when you need more power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 rounded-3xl border border-border/50 bg-background flex flex-col">
            <h3 className="font-semibold text-xl mb-2 text-foreground">Free</h3>
            <p className="text-sm font-normal text-muted-foreground mb-6">Perfect for light usage.</p>
            <div className="text-4xl font-bold mb-8">$0<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Background Downloads", "Up to 2GB file sizes", "Standard Speed", "Basic Queue"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-full font-semibold">Get Started Free</Button>
          </div>

          {/* Pro Tier */}
          <div className="p-8 rounded-3xl border border-foreground/10 bg-muted/20 flex flex-col relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Recommended
            </div>
            <h3 className="font-semibold text-xl mb-2 text-foreground">Pro</h3>
            <p className="text-sm font-normal text-muted-foreground mb-6">For heavy power users.</p>
            <div className="text-4xl font-bold mb-8">$4.99<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Unlimited file sizes", "Priority max speed", "Advanced Queue Management", "Auto-Resume & Sync", "Priority Support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full font-semibold bg-foreground text-background hover:bg-foreground/90">Upgrade to Pro</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
