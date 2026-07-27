import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FlowSteps from "@/components/sections/FlowSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactBanner from "@/components/sections/ContactBanner";
import ProjectCard from "@/components/cards/ProjectCard";
import PropertyCard from "@/components/cards/PropertyCard";
import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import type { ServiceDetail, ProjectCase, PropertyItem, SubService } from "@/data/types";
import { getFaqByIds } from "@/data/faq";
import { defaultFlowSteps } from "@/data/services";
import { serviceStrengthImages } from "@/data/placeholderImages";
import { siteConfig } from "@/data/siteConfig";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
  breadcrumbs: BreadcrumbItem[];
  relatedProjects?: ProjectCase[];
  relatedProperties?: PropertyItem[];
  /** このサービスの下にぶら下がる、より専門的な工事内容別ページ(あれば表示) */
  relatedSubServices?: SubService[];
}

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

/**
 * 個人/法人/不動産の各サービス詳細ページで共通利用するテンプレート
 * (住宅リフォームのみ、より作り込んだCV最適化ページのため独自実装)。
 * 内容はすべて data/services.ts から受け取り、この共通レイアウトに流し込む。
 */
export default function ServiceDetailTemplate({
  service,
  breadcrumbs,
  relatedProjects,
  relatedProperties,
  relatedSubServices,
}: ServiceDetailTemplateProps) {
  const faqItems = getFaqByIds(service.faqIds);
  const isRealEstate = service.category === "realestate";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title}｜${siteConfig.siteName}`,
    description: service.metaDescription,
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
        title={service.title}
        englishLabel={service.englishLabel}
        description={service.shortSummary}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. サービスの概要 */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Overview" ja="サービスの概要" align="left" />
            <div className="space-y-4">
              {service.overview.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg leading-loose text-charcoal-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. このようなお悩みはありませんか */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Concerns" ja="このようなお悩みはありませんか" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {service.painPoints.map((point, index) => (
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

      {/* 3. 対応できる工事またはサービス内容 */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Services" ja={service.workScopeTitle} />
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.workScopeItems.map((item, index) => (
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

      {/* 4. 当社の強み */}
      <section className="py-24 md:py-32 lg:py-40 bg-charcoal-dark">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Our Strength" ja="当社の強み" light />
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.strengths.map((strength, index) => (
              <Reveal key={strength.title} delayMs={index * 80}>
                <div className="text-center">
                  <div className="relative h-40 w-full rounded-card overflow-hidden mb-5">
                    <Image
                      src={serviceStrengthImages[index % serviceStrengthImages.length]}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gold-light font-display italic text-2xl mb-3">{`0${index + 1}`}</p>
                  <h3 className="text-white font-bold text-xl mb-3">{strength.title}</h3>
                  <p className="text-white/70 text-base leading-loose">{strength.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 施工事例または取扱事例 */}
      {(relatedProjects?.length || relatedProperties?.length) ? (
        <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
          <div className="container-content">
            <Reveal>
              <SectionTitle en={isRealEstate ? "Cases" : "Works"} ja={isRealEstate ? "取扱事例" : "施工事例"} />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects?.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
              {relatedProperties?.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 専門的な工事内容(あれば) */}
      {relatedSubServices && relatedSubServices.length > 0 && (
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container-content">
            <Reveal>
              <SectionTitle en="Special Menu" ja="専門的な工事内容" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedSubServices.map((sub, index) => {
                const IconComponent = getIcon(sub.icon);
                return (
                  <Reveal key={sub.slug} delayMs={index * 80}>
                    <Link
                      href={`/${sub.parentCategory}/${sub.parentSlug}/${sub.slug}`}
                      className="group flex flex-col h-full bg-white border border-black/5 shadow-card rounded-card p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mb-4">
                        <IconComponent size={22} aria-hidden />
                      </div>
                      <h3 className="font-bold text-charcoal-dark text-lg mb-2">{sub.title}</h3>
                      <p className="text-sm text-charcoal-light leading-loose mb-5">{sub.shortSummary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">
                        詳しく見る
                        <ArrowRight size={14} aria-hidden />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. ご相談から完了までの流れ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Flow" ja="ご相談から完了までの流れ" />
          </Reveal>
          <FlowSteps
            steps={defaultFlowSteps}
            note={service.flowNote ?? "内容により流れが一部異なる場合があります。詳しくはお問い合わせ時にご案内します。"}
          />
        </div>
      </section>

      {/* 7. よくある質問 */}
      {faqItems.length > 0 && (
        <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
          <div className="container-content max-w-3xl">
            <Reveal>
              <SectionTitle en="FAQ" ja="よくある質問" />
            </Reveal>
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      )}

      {/* 8. お問い合わせへの誘導 */}
      <ContactBanner />
    </>
  );
}
