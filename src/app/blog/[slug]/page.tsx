import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blogData"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: `${post.title} | TeleTorrent`,
    description: post.description,
    alternates: {
      canonical: `https://www.teletorrent.me/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | TeleTorrent`,
      description: post.description,
      url: `https://www.teletorrent.me/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": `https://www.teletorrent.me${post.image}`,
      "description": post.description,
      "author": {
        "@type": "Organization",
        "name": "TeleTorrent Editorial Team",
        "url": "https://www.teletorrent.me"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TeleTorrent",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.teletorrent.me/logo-round.jpg"
        }
      },
      "datePublished": new Date(post.date).toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.teletorrent.me/blog/${post.slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.teletorrent.me/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.teletorrent.me/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.teletorrent.me/blog/${post.slug}`
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-5 md:px-12 max-w-[1000px]">
          
          {/* Breadcrumb */}
          <div className="text-[13px] md:text-[14px] text-[#8D919B] mb-12 flex items-center gap-2">
            <Link href="/" className="hover:text-[#F5F5F5] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#F5F5F5] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#F5F5F5] truncate max-w-[200px] md:max-w-none">{post.title}</span>
          </div>

          {/* Article Header */}
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <div className="text-[#B7FF32] text-[13px] font-bold tracking-wider uppercase mb-6">
              {post.category}
            </div>
            <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-tight mb-6 leading-[1.2]">
              {post.title}
            </h1>
            <p className="text-[17px] md:text-[20px] text-[#8D919B] leading-[1.6] mb-8">
              {post.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-[#8D919B] text-[14px] font-medium">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#333333]"></span>
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[300px] md:h-[500px] rounded-[24px] overflow-hidden mb-16 border border-[#141518]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-[760px] mx-auto prose prose-invert prose-p:text-[#8D919B] prose-p:text-[17px] prose-p:leading-relaxed prose-headings:text-[#F5F5F5] prose-a:text-[#B7FF32] prose-strong:text-[#F5F5F5] prose-li:text-[#8D919B]">
            {post.content}
          </div>

          {/* Contextual CTA */}
          <div className="max-w-[760px] mx-auto mt-20 bg-gradient-to-r from-[#101114] to-[#141518] border border-[#1A1A1A] rounded-[24px] p-8 md:p-12 text-center">
            <h3 className="text-[24px] font-bold mb-4">Need a simpler way to manage supported Telegram downloads?</h3>
            <p className="text-[16px] text-[#8D919B] mb-8 max-w-[500px] mx-auto">
              TeleTorrent is the native Android solution for heavy Telegram users. Seamlessly queue, pause, and organize your files.
            </p>
            <Link href="/" className="inline-block bg-[#B7FF32] hover:bg-[#a3e62c] text-[#000000] font-bold py-3.5 px-8 rounded-full text-[15px] transition-colors">
              Try TeleTorrent →
            </Link>
          </div>

        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-[#0B0C0E] py-20 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
          <h3 className="text-[24px] md:text-[28px] font-bold mb-10">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link href={`/blog/${related.slug}`} key={related.slug} className="group flex flex-col bg-[#101114] border border-[#141518] rounded-[20px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="w-full h-[180px] bg-[#1A1A1A] overflow-hidden">
                  <img 
                    src={related.image} 
                    alt={related.title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[#B7FF32] text-[12px] font-bold mb-3 uppercase">{related.category}</div>
                  <h4 className="text-[18px] font-bold mb-3 leading-[1.3] group-hover:text-[#B7FF32] transition-colors line-clamp-2">{related.title}</h4>
                  <p className="text-[14px] text-[#8D919B] leading-[1.6] line-clamp-2 flex-1">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
