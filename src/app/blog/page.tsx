import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "How to Build a Zero-Based Budget That Actually Works",
      description: "Stop wondering where your money went and start telling it where to go. A comprehensive guide to modern zero-based budgeting.",
      category: "Finance",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Introducing Mensta 2.0: The Future of Personal Finance",
      description: "We're completely overhauling the core engine of Mensta to make it faster, smarter, and more insightful than ever before.",
      category: "Product",
      date: "Oct 05, 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "The Psychology of Saving: Overcoming Financial Friction",
      description: "Why is it so hard to save money even when we want to? Exploring the behavioral economics behind everyday financial decisions.",
      category: "Insights",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "5 Hidden Traps in Modern Subscription Services",
      description: "How 'set it and forget it' is draining your wealth, and the tools you need to fight back against dark patterns.",
      category: "Finance",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Our New Machine Learning Categorization Engine",
      description: "A deep dive into the engineering behind our new smart transaction categorizer that learns from your specific habits.",
      category: "Updates",
      date: "Sep 02, 2026",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "A Guide to Managing Freelance Taxes with Mensta",
      description: "The complete workflow for 1099 contractors and freelancers to organize expenses and prepare for tax season.",
      category: "Guides",
      date: "Aug 22, 2026",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filters = ["All", "Finance", "Product", "Guides", "Updates"];

  return (
    <div className="bg-white min-h-screen pt-[160px] pb-[120px]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight text-[#111111] leading-none mb-4">
              Insights
            </h1>
            <p className="text-[17px] text-[#666666]">
              Thoughts on product, finance, and building better habits.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter, i) => (
              <button 
                key={i}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  i === 0 
                    ? "bg-[#111111] text-white" 
                    : "bg-white text-[#666666] border border-[#E8E8E8] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-6 border border-[#E8E8E8]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-[#111111] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#E8E8E8]"></span>
                <span className="text-[13px] text-[#8A8A8A]">
                  {post.date}
                </span>
              </div>
              
              <h2 className="text-[20px] font-bold text-[#111111] leading-[1.3] mb-3 group-hover:text-[#FF4F00] transition-colors">
                {post.title}
              </h2>
              
              <p className="text-[15px] text-[#666666] leading-relaxed mb-6 flex-1">
                {post.description}
              </p>
              
              <div className="flex items-center text-[14px] font-semibold text-[#111111] group-hover:text-[#FF4F00] transition-colors">
                Read article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}
