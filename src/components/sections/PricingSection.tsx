import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "month",
      features: [
        "Basic financial tracking",
        "Expense management",
        "Basic reports"
      ],
      isPopular: false,
      buttonText: "Get Started"
    },
    {
      name: "PRO",
      price: "$12",
      period: "month",
      features: [
        "Advanced analytics",
        "Financial goals",
        "Smart insights",
        "Unlimited tracking"
      ],
      isPopular: true,
      buttonText: "Try Pro Free"
    },
    {
      name: "BUSINESS",
      price: "$29",
      period: "month",
      features: [
        "Team management",
        "Advanced reports",
        "Priority support"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="bg-white py-[120px]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E8E8E8] text-[13px] font-semibold text-[#111111] uppercase tracking-wider mb-6 shadow-sm">
            Simple pricing
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#111111] mb-6">
            Choose the plan that fits you.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[20px] p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                plan.isPopular 
                  ? "border-[2px] border-[#111111] shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative scale-100 md:scale-105 z-10" 
                  : "border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-[13px] font-bold text-[#666666] tracking-wider mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[42px] font-bold tracking-tight text-[#111111] leading-none">
                    {plan.price}
                  </span>
                  <span className="text-[15px] font-medium text-[#666666]">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#111111] font-medium">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-[#111111] shrink-0 mt-0.5"><path d="M20 6L9 17l-5-5"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full h-[48px] rounded-full text-[14px] font-semibold transition-all ${
                  plan.isPopular 
                    ? "bg-[#111111] text-white hover:bg-black shadow-[0_4px_14px_rgba(0,0,0,0.08)]" 
                    : "bg-white text-[#111111] border border-[#E8E8E8] hover:bg-gray-50"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
