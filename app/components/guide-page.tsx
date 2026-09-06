import type { Article } from "../../config/articles";
import type { ElementType, ReactNode } from "react";
import Link from "next/link";

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return <span key={index}>{part}</span>;
  });
}

function renderListItem(item: string, index: number): ReactNode {
  const checkbox = item.match(/^\[([ xX])\]\s+(.*)$/);
  const content = checkbox ? checkbox[2] : item;

  return (
    <li key={index} className="flex gap-3">
      {checkbox ? (
        <input
          type="checkbox"
          checked={checkbox[1].toLowerCase() === "x"}
          readOnly
          aria-label={content}
          className="mt-1 accent-[#f20d4d]"
        />
      ) : null}
      <span>{renderInline(content)}</span>
    </li>
  );
}

function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let blockKey = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const content = renderInline(heading[2]);
      const className =
        level === 1
          ? "text-3xl sm:text-4xl"
          : level === 2
            ? "border-t border-[#3a1820] pt-8 text-2xl sm:text-3xl"
            : level === 3
              ? "text-xl sm:text-2xl"
              : "text-lg text-[#ffc629]";
      const Heading = `h${level}` as ElementType;
      blocks.push(
        <Heading key={blockKey++} className={className}>
          {content}
        </Heading>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={blockKey++}
          className="border-l-4 border-[#ffc629] bg-[#24120a] px-4 py-3 text-[#e8d9c0]"
        >
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      index += 1;
      continue;
    }

    const unorderedItem = line.match(/^-\s+(.+)$/);
    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    if (unorderedItem || orderedItem) {
      const ordered = Boolean(orderedItem);
      const items: string[] = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const match = ordered
          ? current.match(/^\d+\.\s+(.+)$/)
          : current.match(/^-\s+(.+)$/);
        if (!match) break;
        items.push(match[1]);
        index += 1;
      }

      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List
          key={blockKey++}
          className={`${ordered ? "list-decimal" : "list-disc"} space-y-2 pl-6`}
        >
          {items.map(renderListItem)}
        </List>,
      );
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (
        !next ||
        /^(#{1,4})\s+/.test(next) ||
        next.startsWith("> ") ||
        /^(-|\d+\.)\s+/.test(next)
      ) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }

    blocks.push(<p key={blockKey++}>{renderInline(paragraph.join(" "))}</p>);
  }

  return blocks;
}

export default function GuidePage({ article }: { article: Article }) {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <nav className="mb-8 text-sm text-[#a59ca0]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#ffc629]">
            Home
          </Link>
          <span className="mx-2 text-[#6f6268]">/</span>
          <span className="text-[#ffc629]">{article.title}</span>
        </nav>

        <article className="overflow-hidden rounded-3xl border border-[#50152c] bg-[#0e0609] shadow-2xl">
          <header className="border-b border-[#3a1820] bg-gradient-to-br from-[#25050e] to-[#10090b] px-6 py-10 sm:px-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffc629]">
              IV7 Guide
            </p>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#c4bcc0]">
              {article.metaDescription}
            </p>
          </header>

          <div className="prose-iv7 space-y-6 px-6 py-8 text-[15px] leading-8 text-[#c4bcc0] sm:px-10 sm:py-10">
            {renderMarkdown(article.contentMarkdown)}
          </div>
        </article>

        <section
          className="mt-8 rounded-3xl border border-[#3a1820] bg-[#12070b] p-6 sm:p-8"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-5 space-y-3">
            {article.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#3a1820] bg-[#0e0609] p-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-white marker:hidden group-open:text-[#ffc629]">
                  {faq.question}
                </summary>
                <p className="mt-3 border-t border-[#29141c] pt-3 text-sm leading-7 text-[#a59ca0]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
