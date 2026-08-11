import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-[#090909] py-[120px] md:py-[160px]">
      <div className="container mx-auto px-5 md:px-12 max-w-[800px] flex flex-col items-center text-center">
        
        <h2 className="text-[44px] md:text-[56px] font-bold tracking-tight text-white leading-[1.05] mb-6">
          Ready to simplify your downloads?
        </h2>
        
        <p className="text-[17px] text-[#A1A1A1] mb-10 max-w-[500px]">
          Get TeleTorrent for Android and manage your files from one focused download experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button className="w-full sm:w-auto rounded-full bg-[#B7FF32] text-[#090909] hover:bg-[#a1e626] font-semibold px-8 h-[52px] text-[15px] shadow-[0_4px_14px_rgba(183,255,50,0.1)] transition-colors">
            Download TeleTorrent →
          </Button>
          <Link href="#features" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto rounded-full bg-transparent text-white border-[#222222] hover:bg-[#111111] font-semibold px-8 h-[52px] text-[15px] transition-colors">
              Learn more
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
