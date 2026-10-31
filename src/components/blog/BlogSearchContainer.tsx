"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Search, Tag, Calendar, Clock, ArrowRight, X, Sparkles, Filter } from "lucide-react"
import type { BlogPost } from "@/lib/blogData"

function BlogSearchContent({ posts }: { posts: BlogPost[] }) {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Update query if URL param changes
  useEffect(() => {
    const q = searchParams.get("q")
    if (q !== null) {
      setSearchQuery(q)
    }
  }, [searchParams])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)))
    return ["All", ...cats]
  }, [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      
      if (!query) return matchesCategory

      const matchesTitle = post.title.toLowerCase().includes(query)
      const matchesDesc = post.description.toLowerCase().includes(query)
      const matchesCategoryText = post.category.toLowerCase().includes(query)
      const matchesSlug = post.slug.toLowerCase().includes(query)

      return matchesCategory && (matchesTitle || matchesDesc || matchesCategoryText || matchesSlug)
    })
  }, [posts, searchQuery, selectedCategory])

  return (
    <div className="w-full">
      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 absolute left-4 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, 4K movies, Jio 5G speed, failed downloads..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#0B0D12] border border-white/10 hover:border-white/20 focus:border-[#B7FF32] focus:ring-2 focus:ring-[#B7FF32]/20 text-white placeholder-zinc-500 text-sm md:text-base outline-none transition-all font-medium"
            aria-label="Search Telegram download tutorials"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick query chips */}
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1 font-mono text-zinc-500">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF32]" />
            Trending:
          </span>
          {[
            "Download Telegram Movies",
            "Jio 5G Speed",
            "Multi-Audio Dubs",
            "Stuck at 99%",
            "Save to Gallery",
            "Resume Downloads"
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-[#B7FF32]/10 border border-white/[0.06] hover:border-[#B7FF32]/30 text-zinc-300 hover:text-[#B7FF32] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                isSelected
                  ? "bg-[#B7FF32] text-black shadow-md shadow-[#B7FF32]/20"
                  : "bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08]"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-[10px] ${isSelected ? "text-black/70" : "text-zinc-500"}`}>
                  ({posts.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6 pb-3 border-b border-white/[0.08]">
        <span>
          Showing <span className="text-white font-bold">{filteredPosts.length}</span> of {posts.length} Guides
          {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
          {selectedCategory !== "All" && <span> in {selectedCategory}</span>}
        </span>
        {(searchQuery || selectedCategory !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
            }}
            className="text-[#B7FF32] hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 rounded-3xl bg-[#0B0D12] border border-white/[0.08] p-8">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center mx-auto text-zinc-400 mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No matching guides found</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
            We couldn&apos;t find any tutorials matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
            }}
            className="px-5 py-2.5 rounded-xl bg-[#B7FF32] text-black font-bold text-xs"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
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

                {/* Backlink Tag Preview */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500 font-mono text-[11px]">TeleTorrent Guide</span>
                  <span className="text-[#B7FF32] flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function BlogSearchContainer({ posts }: { posts: BlogPost[] }) {
  return (
    <Suspense fallback={
      <div className="w-full text-center py-12 text-zinc-400 font-mono text-sm">
        Loading Guides & Search Hub...
      </div>
    }>
      <BlogSearchContent posts={posts} />
    </Suspense>
  )
}
