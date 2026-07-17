import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, HelpCircle, ArrowRight, Clock, Star } from "lucide-react";
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
import { reformFlowSteps, reformTestimonials } from "@/data/reformPageContent";
import { testimonialImages } from "@/data/placeholderImages";

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

      {/* 費用の目安・工事期間 */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Price" ja="費用の目安" light />
          </Reveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
              <Clock size={20} className="text-gold-light shrink-0" aria-hidden />
              <span className="text-white text-sm md:text-base">
                工事期間の目安：<strong className="text-gold-light font-bold">{subService.durationLabel}</strong>
              </span>
            </div>
          </div>
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
            ※ 価格・工期は目安です。建物の状態や仕様により異なります。正確な金額・工期は現地調査後にご案内いたします。
          </p>
        </div>
      </section>

      {/* 工事の流れ */}
      <section className="py-20 md:py-28 bg-charcoal-dark">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Flow" ja="ご相談から完了までの流れ" light />
          </Reveal>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {reformFlowSteps.map((step, index) => {
              const IconComponent = getIcon(step.icon);
              const isRowEnd = (index + 1) % 4 === 0;
              return (
                <li key={step.step} className="relative">
                  <Reveal delayMs={index * 60} className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-gold-light flex items-center justify-center">
                      <IconComponent size={26} aria-hidden />
                    </div>
                    <p className="font-display italic text-gold-light text-sm">{`0${step.step}`}</p>
                    <p className="text-white font-bold text-sm md:text-base leading-snug">{step.title}</p>
                  </Reveal>
                  {!isRowEnd && (
                    <Icons.ChevronRight
                      size={20}
                      aria-hidden
                      className="hidden md:block absolute top-6 -right-6 text-white/30"
                    />
                  )}
                </li>
              );
            })}
          </ol>
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

      {/* お客様の声 */}
      <section className="py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Voice" ja="お客様の声" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reformTestimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delayMs={index * 80}>
                <div className="flex flex-col h-full bg-white rounded-card shadow-card border border-black/5 p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonialImages[index % testimonialImages.length]}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal-dark">{testimonial.name}</p>
                      <span className="text-xs font-semibold text-gold-dark">{testimonial.workType}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        aria-hidden
                        className={starIndex < testimonial.rating ? "fill-gold text-gold" : "text-black/15"}
                      />
                    ))}
                  </div>
                  <p className="text-base text-charcoal-light leading-loose">{testimonial.comment}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 補助金相談への案内 */}
      <section className="py-14 md:py-16 bg-greige-light">
        <div className="container-content">
          <div className="bg-white rounded-card shadow-card border border-black/5 p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-base md:text-lg font-bold text-charcoal-dark mb-1">補助金相談も承ります</p>
              <p className="text-sm text-charcoal-light">
                工事内容によっては、国や自治体の補助金制度を活用できる場合があります。
              </p>
            </div>
            <Link
              href="/personal/reform#subsidy"
              className="min-h-[48px] flex items-center gap-2 px-6 rounded-btn border border-navy/30 text-navy font-semibold text-sm shrink-0 hover:bg-navy hover:text-white transition-all"
            >
              補助金について見る
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

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
