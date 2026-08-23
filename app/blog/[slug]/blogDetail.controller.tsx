import { BLOG_POSTS, blogContentMap, DOWNLOAD_LINKS } from "@/config/constants";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogDetailControllerProps {
  params: { slug: string };
}

export default async function BlogDetailController({
  params,
}: BlogDetailControllerProps) {
  const { slug } = params;
  const postMeta = BLOG_POSTS.find((p) => p.slug === slug);
  const postContent = blogContentMap[slug];

  if (!postMeta || !postContent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12 lg:py-16 space-y-10">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[140px]" />

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8f8588]">
          <Link href="/" className="hover:text-[#ffc629] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-[#ffc629] transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#ffc629] truncate max-w-[200px] sm:max-w-none">
            {postMeta.title}
          </span>
        </div>

        {/* Article Header */}
        <section className="relative space-y-5 rounded-3xl border border-[#50152c] bg-[#12070b] p-6 sm:p-10 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629] uppercase tracking-wider">
              <BookOpen className="h-3.5 w-3.5" /> {postMeta.category}
            </span>
          </div>

          <h1 className="font-['Impact',sans-serif] text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {postMeta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-[#29141c] pt-5 text-xs text-[#8f8588]">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#ffc629]" />
              By{" "}
              <strong className="text-white font-semibold">
                {postMeta.author}
              </strong>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#ffc629]" />
              {postMeta.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ffc629]" />
              {postMeta.readTime}
            </span>
          </div>
        </section>

        {/* Main Article Body */}
        <section className="rounded-3xl border border-[#381622] bg-[#0e0609] p-6 sm:p-10 shadow-xl">
          <article
            className="space-y-6 text-sm sm:text-base leading-relaxed text-[#c4bcc0] 
              [&>h3]:font-['Impact',sans-serif] [&>h3]:text-2xl [&>h3]:tracking-wide [&>h3]:text-white [&>h3]:pt-6 [&>h3]:border-t [&>h3]:border-[#29141c] [&>h3]:uppercase [&>h3]:text-[#ffc629]
              [&>p]:leading-relaxed
              [&>strong]:text-white [&>strong]:font-bold
              [&>em]:text-[#ffc629] [&>em]:not-italic [&>em]:font-semibold
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2.5 [&>ul]:text-[#c4bcc0]"
            dangerouslySetInnerHTML={{ __html: postContent.content }}
          />
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-[#54152b] bg-gradient-to-r from-[#25050e] via-[#10090b] to-[#17040b] p-8 text-center space-y-4 shadow-2xl">
          <h2 className="font-['Impact',sans-serif] text-2xl sm:text-3xl uppercase tracking-wide text-white">
            Ready to Play on <span className="text-[#ffc629]">IV7 Game</span>?
          </h2>
          <p className="text-xs sm:text-sm text-[#c8c0c2] max-w-md mx-auto leading-relaxed">
            Download the official verified 35 MB APK to claim your ₹500 welcome
            bonus and enjoy instant 24/7 UPI withdrawals.
          </p>
          <div className="pt-2">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_28px_#ee0d4540] transition-transform hover:scale-105 active:scale-95"
            >
              <Download className="h-4 w-4" /> Download IV7 APK
            </Link>
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[#50152c] bg-[#12070b] px-6 py-2.5 text-xs font-bold text-[#a59ca0] transition-all hover:border-[#f20d4d] hover:text-[#ffc629]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all blog posts
          </Link>
        </div>
      </div>
    </main>
  );
}
