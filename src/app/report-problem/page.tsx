"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ReportProblemPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    
    // Simulate backend submission
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <div className="bg-[#0B0C0E] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[800px]">
        
        <div className="mb-12 text-center">
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#F5F5F5] mb-4 tracking-tight">
            Report a Problem
          </h1>
          <p className="text-[17px] text-[#8D919B]">
            Help us improve TeleTorrent by reporting issues you encounter.
          </p>
        </div>

        <div className="bg-[#000000] p-8 md:p-10 rounded-[24px] border border-[#141518] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {status === "success" ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#101114] rounded-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-[#B7FF32]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[24px] font-bold text-[#F5F5F5] mb-2">Report submitted successfully</h3>
              <p className="text-[15px] text-[#8D919B] max-w-[400px]">
                Thank you for your report. Our engineering team will review the issue shortly.
              </p>
              <Button 
                onClick={() => setStatus("idle")}
                variant="outline" 
                className="mt-8 rounded-full px-6 h-10 font-semibold text-[#F5F5F5]"
              >
                Submit another report
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="title" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  required
                  className="w-full bg-[#0B0C0E] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#B7FF32]"
                  placeholder="Brief summary of the issue"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Category</label>
                <select 
                  id="category" 
                  required
                  className="w-full bg-[#0B0C0E] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#B7FF32] appearance-none"
                >
                  <option value="">Select a category</option>
                  <option value="download">Download</option>
                  <option value="connection">Telegram Connection</option>
                  <option value="sync">Sync</option>
                  <option value="account">Account</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="device" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Device (Android version)</label>
                  <input 
                    type="text" 
                    id="device" 
                    required
                    className="w-full bg-[#0B0C0E] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#B7FF32]"
                    placeholder="e.g. Pixel 7, Android 14"
                  />
                </div>
                <div>
                  <label htmlFor="app_version" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">App version</label>
                  <input 
                    type="text" 
                    id="app_version" 
                    required
                    className="w-full bg-[#0B0C0E] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#B7FF32]"
                    placeholder="e.g. 1.0.4"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Description</label>
                <textarea 
                  id="description" 
                  required
                  rows={5}
                  className="w-full bg-[#0B0C0E] border border-[#141518] rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#B7FF32] resize-none"
                  placeholder="Detailed explanation of what happened..."
                />
              </div>

              <div>
                <label className="block text-[14px] font-bold text-[#F5F5F5] mb-2">Attach screenshot</label>
                <div className="w-full border-2 border-dashed border-[#141518] rounded-[12px] p-6 flex flex-col items-center justify-center bg-[#0B0C0E] hover:bg-[#141518] transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#8D919B] mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-[14px] font-medium text-[#8D919B]">Click to upload or drag and drop</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#141518]">
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full h-12 rounded-[12px] bg-[#101114] text-[#F5F5F5] hover:text-[#F5F5F5] font-semibold text-[15px] transition-colors"
                >
                  {status === "submitting" ? "Sending Report..." : "Send Report"}
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
