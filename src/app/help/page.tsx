export default function HelpPage() {
  const faqs = [
    {
      q: "Telegram Connection",
      a: "Problems connecting or reconnecting your Telegram account."
    },
    {
      q: "Saved Messages",
      a: "Files missing, incorrect file information, synchronization problems, or unavailable content."
    },
    {
      q: "Downloads",
      a: "Downloads stuck, paused, failed, or not progressing."
    },
    {
      q: "Files",
      a: "Problems with thumbnails, file names, file types, or completed files."
    },
    {
      q: "Account",
      a: "Problems with your connected account or profile."
    },
    {
      q: "Other",
      a: "Anything else related to TeleTorrent."
    }
  ]

  return (
    <div className="bg-[#000000] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[800px]">
        
        <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#F5F5F5] mb-4 text-center">
          TeleTorrent Help & Support
        </h1>
        <p className="text-[17px] text-[#8D919B] mb-16 text-center max-w-[500px] mx-auto">
          Need help with TeleTorrent? Choose the issue that best describes your problem:
        </p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#101114] rounded-[16px] p-6 border border-[#1A1A1A] hover:border-[#B7FF32] transition-colors cursor-pointer group flex flex-col justify-center min-h-[120px]">
              <h3 className="text-[18px] font-bold text-[#F5F5F5] mb-2 group-hover:text-[#B7FF32] transition-colors">
                {faq.q}
              </h3>
              <p className="text-[15px] text-[#8D919B] leading-[1.5]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#101114] rounded-[24px] p-8 md:p-12 text-center text-white border border-[#1A1A1A]">
          <h2 className="text-[28px] font-bold text-[#F5F5F5] mb-4">Report a Problem</h2>
          <p className="text-[16px] text-[#8D919B] mb-8 max-w-[500px] mx-auto">
            When reporting a problem, please include a title, description, screenshot, app version, Android version, and device model. Do not automatically upload private Telegram messages or unrelated device files with a support report.
          </p>
          <a 
            href="/report-problem" 
            className="inline-flex items-center justify-center px-8 h-[52px] rounded-full bg-[#B7FF32] text-[#000000] font-semibold hover:bg-[#a1e626] transition-colors"
          >
            Submit a Report
          </a>
        </div>

      </div>
    </div>
  )
}
