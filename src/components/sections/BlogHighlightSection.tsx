import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blogData"
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react"

export function BlogHighlightSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
              Guides &amp; Knowledge Base
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Latest Telegram Guides &amp; Tutorials.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Step-by-step walkthroughs, troubleshooting tips, and speed optimization techniques for Android.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-bold text-white transition-all group shrink-0"
          >
            <span>View All {blogPosts.length} Guides</span>
            <ArrowRight className="w-4 h-4 text-[#B7FF32] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col bg-[#0B0D12] border border-white/[0.08] hover:border-[#B7FF32]/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="w-full h-52 bg-zinc-900 overflow-hidden relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[#B7FF32]">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#B7FF32] transition-colors line-clamp-2 leading-snug mb-3">
                  {post.title}
                </h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-2 flex-1">
                  {post.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-400 group-hover:text-white transition-colors">Read Tutorial</span>
                  <span className="text-[#B7FF32] flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
