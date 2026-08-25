import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blogData"

export function BlogHighlightSection() {
  // Grab the latest 3 posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#0B0C0E] py-24 md:py-32 border-t border-[#141518] cv-auto">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <div className="text-[#B7FF32] text-xs font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#B7FF32] rounded-full"></div>
              From the TeleTorrent Blog
            </div>
            <h2 className="text-[28px] md:text-[38px] font-bold text-[#F5F5F5] tracking-tight mb-2 leading-[1.2]">
              Guides & Resources
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#8D919B] max-w-[500px]">
              Practical guides for downloading and managing Telegram videos, files and media.
            </p>
          </div>
          
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#B7FF32] hover:text-[#F5F5F5] transition-colors shrink-0 group">
            View all guides
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-0">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#101114] border border-[#141518] rounded-[20px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="w-full h-[200px] bg-[#1A1A1A] overflow-hidden relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="text-[#B7FF32] text-xs font-bold mb-2 uppercase">{post.category}</div>
                <h3 className="text-lg font-bold mb-2 leading-[1.3] text-[#F5F5F5] group-hover:text-[#B7FF32] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-[#8D919B] leading-[1.6] mb-6 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-auto pt-4 border-t border-[#141518]/70 flex items-center justify-between text-[#8D919B] text-xs font-medium">
                  <span>{post.date}</span>
                  <span className="text-[#F5F5F5] font-semibold group-hover:text-[#B7FF32] transition-colors">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <Link href="/blog" className="md:hidden flex items-center justify-center gap-2 w-full bg-[#101114] border border-[#141518] text-[#F5F5F5] font-semibold rounded-full py-3.5 mt-6 text-sm">
          View all guides
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </Link>

      </div>
    </section>
  )
}
