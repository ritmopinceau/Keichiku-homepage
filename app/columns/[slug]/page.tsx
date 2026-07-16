import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactBanner from "@/components/sections/ContactBanner";
import ColumnCard from "@/components/cards/ColumnCard";
import { columns, getColumnBySlug, getRelatedColumns } from "@/data/columns";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return columns.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const column = getColumnBySlug(params.slug);
  if (!column) return undefined;
  return buildMetadata({ title: column.title, description: column.metaDescription, path: `/columns/${column.slug}` });
}

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
  const column = getColumnBySlug(params.slug);
  if (!column) return notFound();

  const relatedColumns = getRelatedColumns(column);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: column.title,
    description: column.metaDescription,
    image: column.heroImage,
    datePublished: column.publishedAt,
    dateModified: column.updatedAt ?? column.publishedAt,
    author: { "@type": "Organization", name: siteConfig.company.name },
    publisher: { "@type": "Organization", name: siteConfig.siteName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="bg-charcoal-dark pt-24 pb-6 md:pt-32">
        <div className="container-content">
          <Breadcrumbs items={[{ label: "コラム", href: "/columns" }, { label: column.title }]} />
        </div>
      </div>

      <article className="py-10 md:py-16">
        <div className="container-content max-w-3xl">
          <span className="text-xs font-semibold text-gold-dark">{column.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-dark mt-3 mb-4 leading-tight text-balance">
            {column.title}
          </h1>
          <p className="flex items-center gap-1.5 text-sm text-charcoal-light mb-8">
            <CalendarDays size={14} aria-hidden />
            {column.publishedAt}
            {column.updatedAt && column.updatedAt !== column.publishedAt && `(更新: ${column.updatedAt})`}
          </p>

          <div className="relative h-56 md:h-96 w-full rounded-card overflow-hidden mb-10">
            <Image
              src={column.heroImage}
              alt={column.heroImageAlt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-10">
            {column.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg text-charcoal-light leading-loose">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {column.relatedServiceHref && column.relatedServiceLabel && (
            <div className="mt-12 bg-greige-light rounded-card p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-base font-semibold text-charcoal-dark">この内容について詳しく知りたい方へ</p>
              <Link
                href={column.relatedServiceHref}
                className="min-h-[48px] flex items-center gap-2 px-6 rounded-btn bg-navy text-white font-semibold text-sm shrink-0 hover:bg-navy-light hover:-translate-y-0.5 transition-all"
              >
                {column.relatedServiceLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          )}

          {column.faqItems && column.faqItems.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">
                よくある質問
              </h2>
              <FaqAccordion items={column.faqItems} />
            </section>
          )}
        </div>
      </article>

      {relatedColumns.length > 0 && (
        <section className="py-20 md:py-28 bg-greige-light">
          <div className="container-content">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-10 text-center">関連するコラム</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedColumns.map((related) => (
                <ColumnCard key={related.slug} column={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBanner />
    </>
  );
}
