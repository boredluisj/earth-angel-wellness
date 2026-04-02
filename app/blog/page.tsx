import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Medical weight loss insights, GLP-1 guides, and wellness tips from Earth Angel Wellness in Salem, Oregon.",
};

const posts = [
  {
    title: "Medical Weight Loss in Salem, OR: What to Expect",
    slug: "medical-weight-loss-salem-or",
    date: "April 1, 2026",
    excerpt:
      "Nervous about your first appointment? This guide walks through exactly what happens at your initial free consultation, from lab work and body composition scanning to building your personalized treatment protocol.",
  },
  {
    title: "Semaglutide vs Tirzepatide: Which GLP-1 Is Right for You?",
    slug: "semaglutide-vs-tirzepatide",
    date: "March 25, 2026",
    excerpt:
      "Both medications work. The difference is in the mechanism, the results, and how your body responds. Here is a side-by-side breakdown to help you and your provider make the right call.",
  },
  {
    title: "Telehealth Weight Loss Programs: How to Lose Weight from Home",
    slug: "telehealth-weight-loss-oregon",
    date: "March 18, 2026",
    excerpt:
      "You do not have to come into the clinic to get started. Our telehealth program delivers the same clinical-grade GLP-1 protocols and ongoing support to Oregon residents without leaving the house.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 text-center px-6">
        <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
          Resources
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
          Blog
        </h1>
        <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
          GLP-1 guides, medical weight loss insights, and wellness education from the team at Earth
          Angel Wellness in Salem, Oregon.
        </p>
      </section>

      {/* Cards */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <p className="text-obsidian/50 text-sm tracking-wide uppercase mb-3">{post.date}</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light leading-snug mb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-gold transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-obsidian/70 text-base leading-relaxed flex-1 mb-6">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-gold font-semibold text-sm tracking-widest uppercase hover:text-gold/70 transition-colors"
              >
                Read More &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
