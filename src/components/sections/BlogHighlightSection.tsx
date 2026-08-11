import Link from "next/link"
import { blogPosts } from "@/lib/blogData"

export function BlogHighlightSection() {
  // Grab the latest 3 posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#0B0C0E] py-24 md:py-32 border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="text-[#B7FF32] text-[12px] font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#B7FF32] rounded-full"></div>
              From the TeleTorrent Blog
            </div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#F5F5F5] tracking-tight mb-4 leading-[1.2]">
              Guides & Resources
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#8D919B] max-w-[500px]">
              Practical guides for downloading and managing Telegram videos, files and media.
            </p>
          </div>
          
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-[#F5F5F5] font-semibold hover:text-[#B7FF32] transition-colors shrink-0">
            View all guides
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-0">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#101114] border border-[#141518] rounded-[24px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="w-full h-[220px] bg-[#1A1A1A] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[#B7FF32] text-[12px] font-bold mb-3 uppercase">{post.category}</div>
                <h3 className="text-[20px] font-bold mb-3 leading-[1.3] text-[#F5F5F5] group-hover:text-[#B7FF32] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-[15px] text-[#8D919B] leading-[1.6] mb-8 line-clamp-2 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-[#8D919B] text-[13px] font-medium">
                  <span>{post.date}</span>
                  <span className="text-[#F5F5F5] font-semibold group-hover:text-[#B7FF32] transition-colors">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <Link href="/blog" className="md:hidden flex items-center justify-center gap-2 w-full bg-[#101114] border border-[#141518] text-[#F5F5F5] font-semibold rounded-full py-4 mt-6">
          View all guides
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </Link>

      </div>
    </section>
  )
}
