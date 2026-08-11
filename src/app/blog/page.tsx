import Link from "next/link"
import { Metadata } from "next"
import { blogPosts } from "@/lib/blogData"

export const metadata: Metadata = {
  title: "Telegram Download Guides & Tips | TeleTorrent Blog",
  description: "Practical guides and tips for downloading and managing Telegram videos, files and media with TeleTorrent.",
  alternates: {
    canonical: "https://www.teletorrent.me/blog",
  },
  openGraph: {
    title: "Telegram Download Guides & Tips | TeleTorrent Blog",
    description: "Practical guides and tips for downloading and managing Telegram videos, files and media with TeleTorrent.",
    url: "https://www.teletorrent.me/blog",
    type: "website",
  }
}

export default function BlogIndex() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col">

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
          
          {/* Breadcrumb */}
          <div className="text-[13px] md:text-[14px] text-[#8D919B] mb-12 flex items-center gap-2">
            <Link href="/" className="hover:text-[#F5F5F5] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F5F5F5]">Blog</span>
          </div>

          {/* Hero */}
          <div className="max-w-[800px] mb-20">
            <div className="text-[#B7FF32] text-[13px] font-bold tracking-wider uppercase mb-4">
              TELETORRENT BLOG
            </div>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Telegram Download Guides & Tips
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#8D919B] leading-[1.6] max-w-[600px]">
              Practical guides, troubleshooting tips and useful resources for downloading and managing Telegram videos, files and media.
            </p>
          </div>

          {/* Featured Article */}
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-20">
            <div className="bg-[#101114] border border-[#141518] rounded-[24px] overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:-translate-y-1">
              <div className="w-full md:w-1/2 h-[250px] md:h-[400px] bg-[#1A1A1A] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-[#B7FF32] text-[13px] font-bold mb-4 uppercase">{featuredPost.category}</div>
                <h2 className="text-[28px] md:text-[36px] font-bold mb-4 leading-[1.2] group-hover:text-[#B7FF32] transition-colors">{featuredPost.title}</h2>
                <p className="text-[16px] text-[#8D919B] leading-[1.6] mb-8 line-clamp-3">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between text-[#8D919B] text-[14px]">
                  <span>{featuredPost.date} • {featuredPost.readingTime}</span>
                  <span className="text-[#F5F5F5] font-semibold flex items-center gap-2 group-hover:text-[#B7FF32] transition-colors">
                    Read article <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Latest Guides */}
          <div className="mb-24">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-8">Latest Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#101114] border border-[#141518] rounded-[20px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-full h-[200px] bg-[#1A1A1A] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[#B7FF32] text-[12px] font-bold mb-3 uppercase">{post.category}</div>
                    <h4 className="text-[20px] font-bold mb-3 leading-[1.3] group-hover:text-[#B7FF32] transition-colors line-clamp-2">{post.title}</h4>
                    <p className="text-[15px] text-[#8D919B] leading-[1.6] mb-6 line-clamp-2 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-[#8D919B] text-[13px] pt-4 border-t border-[#141518]">
                      <span>{post.date}</span>
                      <span className="text-[#F5F5F5] font-semibold group-hover:text-[#B7FF32] transition-colors">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Browse by Topic */}
          <div className="mb-24">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-8">Browse by Topic</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <div key={cat} className="bg-[#101114] border border-[#141518] px-6 py-3 rounded-full text-[#F5F5F5] text-[15px] font-medium hover:bg-[#141518] hover:text-[#B7FF32] cursor-pointer transition-colors">
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Contextual CTA */}
          <div className="bg-gradient-to-r from-[#101114] to-[#141518] border border-[#1A1A1A] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-[24px] md:text-[28px] font-bold mb-3">Need to download a Telegram file?</h3>
              <p className="text-[16px] text-[#8D919B]">Use TeleTorrent to manage supported Telegram downloads.</p>
            </div>
            <Link href="/" className="bg-[#B7FF32] hover:bg-[#a3e62c] text-[#000000] font-bold py-3.5 px-8 rounded-full text-[15px] transition-colors shrink-0">
              Open TeleTorrent
            </Link>
          </div>

        </div>
      </main>

    </div>
  )
}
