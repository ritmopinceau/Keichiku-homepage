import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FreeBadges from "@/components/sections/FreeBadges";
import ContactBanner from "@/components/sections/ContactBanner";
import ProjectCard from "@/components/cards/ProjectCard";
import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import type { SubService, ProjectCase } from "@/data/types";
import { siteConfig } from "@/data/siteConfig";

interface SubServiceTemplateProps {
  subService: SubService;
  breadcrumbs: BreadcrumbItem[];
  relatedProjects: ProjectCase[];
  siblingSubServices: SubService[];
  parentHref: string;
  parentTitle: string;
}

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

/**
 * 個人/法人/不動産の各サービス配下にぶら下がる、工事内容別ページ(SubService)の
 * 共通テンプレート。ページを増やす際はデータ(subServices.ts)を追加するだけで
 * このテンプレートに自動的に流し込まれる。
 */
export default function SubServiceTemplate({
  subService,
  breadcrumbs,
  relatedProjects,
  siblingSubServices,
  parentHref,
  parentTitle,
}: SubServiceTemplateProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: subService.title,
    name: `${subService.title}｜${siteConfig.siteName}`,
    description: subService.metaDescription,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.company.name,
      telephone: siteConfig.company.phoneDisplay,
    },
    areaServed: siteConfig.company.city,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        title={subService.title}
        englishLabel={subService.englishLabel}
        description={subService.shortSummary}
        image={subService.heroImage}
        imageAlt={subService.heroImageAlt}
        breadcrumbs={breadcrumbs}
      />

      {/* 無料バッジ */}
      <section className="py-8 md:py-10 bg-white border-b border-black/5">
        <div className="container-content">
          <FreeBadges />
        </div>
      </section>

      {/* 概要 */}
      <section className="py-20 md:py-28">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Overview" ja="概要" align="left" />
            <div className="space-y-4">
              {subService.overview.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg leading-loose text-charcoal-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* こんなお悩みはありませんか */}
      <section className="py-20 md:py-28 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Concerns" ja="こんなお悩みはありませんか" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {subService.painPoints.map((point, index) => (
              <Reveal key={point} delayMs={index * 60}>
                <p className="flex items-start gap-3 bg-white rounded-card shadow-card p-6 text-base text-charcoal-dark leading-loose border border-black/5">
                  <HelpCircle size={20} className="text-navy shrink-0 mt-0.5" aria-hidden />
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 対応できる工事内容 */}
      <section className="py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Details" ja="対応できる工事内容" />
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {subService.workScopeItems.map((item, index) => (
              <Reveal key={item} delayMs={index * 40}>
                <li className="flex items-center gap-3 bg-white border border-black/10 rounded-card shadow-card px-5 py-4 text-base text-charcoal-dark">
                  <CheckCircle2 size={18} className="text-gold shrink-0" aria-hidden />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 費用の目安 */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Price" ja="費用の目安" light />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subService.priceRanges.map((range, index) => (
              <Reveal key={range.label} delayMs={index * 80}>
                <div className="bg-white/5 border border-white/15 rounded-card p-7 text-center h-full flex flex-col justify-center">
                  <p className="text-white/80 text-sm mb-3">{range.label}</p>
                  <p className="font-display italic text-gold-light text-2xl md:text-3xl">{range.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60 text-center leading-relaxed max-w-2xl mx-auto">
            ※ 価格は目安です。建物の状態や仕様により異なります。正確な金額は現地調査後にお見積りいたします。
          </p>
        </div>
      </section>

      {/* 施工事例 */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-greige-light">
          <div className="container-content">
            <Reveal>
              <SectionTitle en="Works" ja="施工事例" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 無料相談への誘導 */}
      <section className="py-16 md:py-20">
        <div className="container-content flex flex-col items-center text-center gap-6">
          <FreeBadges />
          <Link
            href="/contact"
            className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-navy text-white font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            無料相談はこちら
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 他の工事内容(内部リンク) */}
      {siblingSubServices.length > 0 && (
        <section className="py-20 md:py-28 bg-greige-light">
          <div className="container-content">
            <Reveal>
              <SectionTitle en="More" ja={`${parentTitle}の他の工事内容`} />
            </Reveal>
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {siblingSubServices.map((sibling) => {
                const IconComponent = getIcon(sibling.icon);
                return (
                  <Link
                    key={sibling.slug}
                    href={`${parentHref}/${sibling.slug}`}
                    className="flex items-center gap-3 bg-white border border-black/5 rounded-card shadow-card px-5 py-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
                  >
                    <IconComponent size={20} className="text-gold-dark shrink-0" aria-hidden />
                    <span className="text-sm font-semibold text-charcoal-dark">{sibling.title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link href={parentHref} className="text-navy font-semibold underline underline-offset-4">
                {parentTitle}のトップに戻る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* よくある質問 */}
      {subService.faqItems.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-content max-w-3xl">
            <Reveal>
              <SectionTitle en="FAQ" ja="よくある質問" />
            </Reveal>
            <FaqAccordion items={subService.faqItems} />
          </div>
        </section>
      )}

      <ContactBanner />
    </>
  );
}
