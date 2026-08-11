"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    
    // Simulate backend submission
    setTimeout(() => {
      setStatus("success")
    }, 1000)
  }

  return (
    <div className="bg-[#F7F7F7] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[1000px]">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#F5F5F5] mb-4 tracking-tight">
              Contact TeleTorrent
            </h1>
            <p className="text-[17px] text-[#8D919B] mb-12">
              Whether you have a technical problem, privacy question, feedback, or business enquiry, we're here to help.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-[15px] font-bold text-[#F5F5F5] mb-1">General Support</h3>
                <a href="mailto:support@teletorrent.me" className="text-[16px] text-[#8D919B] hover:text-[#B7FF32] transition-colors">
                  support@teletorrent.me
                </a>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#F5F5F5] mb-1">Privacy</h3>
                <a href="mailto:support@teletorrent.me" className="text-[16px] text-[#8D919B] hover:text-[#B7FF32] transition-colors">
                  support@teletorrent.me
                </a>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#F5F5F5] mb-1">Business enquiries</h3>
                <a href="mailto:support@teletorrent.me" className="text-[16px] text-[#8D919B] hover:text-[#B7FF32] transition-colors">
                  support@teletorrent.me
                </a>
              </div>
            </div>

            <div className="bg-[#E8E8E8] rounded-l-[4px] pl-4 py-2 border-l-4 border-[#090909]">
              <p className="text-[15px] text-[#8D919B] italic">
                "We aim to review support requests as soon as reasonably possible."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#000000] p-8 md:p-10 rounded-[24px] border border-[#141518] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#090909] rounded-full flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-[#B7FF32]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-2">Message sent successfully</h3>
                <p className="text-[15px] text-[#8D919B]">We'll get back to you as soon as possible.</p>
                <Button 
                  onClick={() => setStatus("idle")}
                  variant="outline" 
                  className="mt-8 rounded-full px-6 h-10 font-semibold"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-[#F7F7F7] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#090909] focus:ring-1 focus:ring-[#090909] transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-[#F7F7F7] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#090909] focus:ring-1 focus:ring-[#090909] transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full h-12 rounded-[12px] bg-[#090909] text-white hover:text-[#B7FF32] font-semibold text-[15px] transition-colors"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
