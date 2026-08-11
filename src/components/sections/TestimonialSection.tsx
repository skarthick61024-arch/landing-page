export function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Designer at Stripe",
      content: "Mensta is the first financial app that doesn't feel like a spreadsheet. It’s absolutely beautiful and incredibly fast. It completely changed how I manage my freelance income.",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Michael Chen",
      role: "Founder, Nexus",
      content: "The level of detail in the analytics is astonishing. We use it to track both personal and early-stage startup expenses. The minimal interface keeps me focused on the numbers that actually matter.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      content: "I've tried every budgeting app on the market, and Mensta is the only one I've stuck with. The automatic categorization is flawless, and the design is just stunning.",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="bg-white py-[120px] border-t border-[#E8E8E8]/50">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight text-[#111111]">
            People are managing money differently.
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-[#E8E8E8] rounded-[16px] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              
              <div className="mb-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#111111]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] text-[#111111] leading-relaxed font-medium">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-[14px] font-bold text-[#111111]">{t.name}</div>
                  <div className="text-[13px] text-[#666666]">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
