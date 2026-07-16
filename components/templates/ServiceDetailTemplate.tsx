import Image from "next/image";
import { CheckCircle2, HelpCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FlowSteps from "@/components/sections/FlowSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactBanner from "@/components/sections/ContactBanner";
import ProjectCard from "@/components/cards/ProjectCard";
import PropertyCard from "@/components/cards/PropertyCard";
import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import type { ServiceDetail, ProjectCase, PropertyItem } from "@/data/types";
import { getFaqByIds } from "@/data/faq";
import { defaultFlowSteps } from "@/data/services";
import { serviceStrengthImages } from "@/data/placeholderImages";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
  breadcrumbs: BreadcrumbItem[];
  relatedProjects?: ProjectCase[];
  relatedProperties?: PropertyItem[];
}

/**
 * 個人/法人/不動産の全9サービス詳細ページで共通利用するテンプレート。
 * 内容はすべて data/services.ts から受け取り、この共通レイアウトに流し込む。
 */
export default function ServiceDetailTemplate({
  service,
  breadcrumbs,
  relatedProjects,
  relatedProperties,
}: ServiceDetailTemplateProps) {
  const faqItems = getFaqByIds(service.faqIds);
  const isRealEstate = service.category === "realestate";

  return (
    <>
      <PageHero
        title={service.title}
        englishLabel={service.englishLabel}
        description={service.shortSummary}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. サービスの概要 */}
      <section className="py-14 md:py-20">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Overview" ja="サービスの概要" align="left" />
            <div className="space-y-4">
              {service.overview.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base leading-relaxed text-charcoal-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. このようなお悩みはありませんか */}
      <section className="py-14 md:py-20 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Concerns" ja="このようなお悩みはありませんか" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.painPoints.map((point, index) => (
              <Reveal key={point} delayMs={index * 60}>
                <p className="flex items-start gap-2.5 bg-white rounded-sm p-4 text-sm text-charcoal-dark leading-relaxed border border-black/5">
                  <HelpCircle size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 対応できる工事またはサービス内容 */}
      <section className="py-14 md:py-20">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Services" ja={service.workScopeTitle} />
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {service.workScopeItems.map((item, index) => (
              <Reveal key={item} delayMs={index * 40}>
                <li className="flex items-center gap-2.5 bg-white border border-black/10 rounded-sm px-4 py-3.5 text-sm text-charcoal-dark">
                  <CheckCircle2 size={16} className="text-gold shrink-0" aria-hidden />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. 当社の強み */}
      <section className="py-14 md:py-20 bg-charcoal-dark">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Our Strength" ja="当社の強み" light />
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.strengths.map((strength, index) => (
              <Reveal key={strength.title} delayMs={index * 80}>
                <div className="text-center">
                  <div className="relative h-36 w-full rounded-sm overflow-hidden mb-4">
                    <Image
                      src={serviceStrengthImages[index % serviceStrengthImages.length]}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gold-light font-display italic text-2xl mb-2">{`0${index + 1}`}</p>
                  <h3 className="text-white font-bold mb-2">{strength.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{strength.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 施工事例または取扱事例 */}
      {(relatedProjects?.length || relatedProperties?.length) ? (
        <section className="py-14 md:py-20 bg-greige-light">
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

      {/* 6. ご相談から完了までの流れ */}
      <section className="py-14 md:py-20">
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
        <section className="py-14 md:py-20 bg-greige-light">
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
