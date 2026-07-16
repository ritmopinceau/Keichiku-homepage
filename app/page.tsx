import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FlowSteps from "@/components/sections/FlowSteps";
import ContactBanner from "@/components/sections/ContactBanner";
import BusinessEntryCard from "@/components/cards/BusinessEntryCard";
import StrengthCard from "@/components/cards/StrengthCard";
import ServiceCard from "@/components/cards/ServiceCard";
import ProjectCard from "@/components/cards/ProjectCard";
import PropertyCard from "@/components/cards/PropertyCard";
import { businessCategories, companyStrengths, defaultFlowSteps, services } from "@/data/services";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { getSortedNews } from "@/data/news";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "〇〇市の建築・不動産をワンストップで",
  description:
    "〇〇市・〇〇県の建築会社・不動産会社。住宅リフォーム、新築住宅、住宅リノベーション、法人向け新築・改修・リノベーション、不動産の売買・賃貸・買取・管理までワンストップで対応します。",
  path: "/",
});

export default function HomePage() {
  const personalServices = services.filter((s) => s.category === "personal");
  const corporateServices = services.filter((s) => s.category === "corporate");
  const realestateServices = services.filter((s) => s.category === "realestate");

  return (
    <>
      <HeroSection />

      {/* 3つの事業への入口 */}
      <section className="py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="Our Business"
              ja="3つの事業でワンストップに対応"
              description="住まいや建物に関するご相談は、個人のお客様・法人のお客様・不動産の3つの窓口からお選びいただけます。"
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {businessCategories.map((biz, index) => (
              <Reveal key={biz.key} delayMs={index * 100}>
                <BusinessEntryCard
                  englishLabel={biz.englishLabel}
                  headline={biz.headline}
                  description={biz.description}
                  items={biz.items}
                  buttonLabel={biz.buttonLabel}
                  href={biz.href}
                  image={biz.image}
                  imageAlt={biz.imageAlt}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 私たちの強み */}
      <section className="py-16 md:py-24 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Our Strength" ja="私たちの強み" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {companyStrengths.map((strength, index) => (
              <Reveal key={strength.title} delayMs={index * 80}>
                <StrengthCard {...strength} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Services" ja="サービス紹介" />
          </Reveal>

          <div className="space-y-14">
            <div>
              <h3 className="text-lg font-bold text-charcoal-dark mb-5 border-l-4 border-navy pl-3">個人向け</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalServices.map((s, index) => (
                  <Reveal key={s.slug} delayMs={index * 60}>
                    <ServiceCard
                      title={s.title}
                      englishLabel={s.englishLabel}
                      description={s.cardDescription}
                      image={s.heroImage}
                      imageAlt={s.heroImageAlt}
                      href={`/personal/${s.slug}`}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-charcoal-dark mb-5 border-l-4 border-navy pl-3">法人向け</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {corporateServices.map((s, index) => (
                  <Reveal key={s.slug} delayMs={index * 60}>
                    <ServiceCard
                      title={s.title}
                      englishLabel={s.englishLabel}
                      description={s.cardDescription}
                      image={s.heroImage}
                      imageAlt={s.heroImageAlt}
                      href={`/corporate/${s.slug}`}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-charcoal-dark mb-5 border-l-4 border-navy pl-3">不動産</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {realestateServices.map((s, index) => (
                  <Reveal key={s.slug} delayMs={index * 60}>
                    <ServiceCard
                      title={s.title}
                      englishLabel={s.englishLabel}
                      description={s.cardDescription}
                      image={s.heroImage}
                      imageAlt={s.heroImageAlt}
                      href={`/realestate/${s.slug}`}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 施工事例 */}
      <section className="py-16 md:py-24 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Works" ja="施工事例" description="これまでの施工事例の一部をご紹介します。" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {projects.slice(0, 6).map((project, index) => (
              <Reveal key={project.slug} delayMs={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 min-h-[48px] px-8 rounded-sm border border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
            >
              施工事例をすべて見る
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 不動産物件情報 */}
      <section className="py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Properties" ja="不動産物件情報" description="売買・賃貸の新着物件情報をご紹介します。" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {properties.slice(0, 6).map((property, index) => (
              <Reveal key={property.slug} delayMs={index * 60}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 min-h-[48px] px-8 rounded-sm border border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
            >
              物件情報をすべて見る
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ご相談から完了までの流れ */}
      <section className="py-16 md:py-24 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Flow" ja="ご相談から完了までの流れ" />
          </Reveal>
          <FlowSteps
            steps={defaultFlowSteps}
            note="不動産サービスの場合は、売買・賃貸・買取・管理などご相談内容によって流れが異なります。詳しくはお問い合わせ時にご案内いたします。"
          />
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-16 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="News" ja="お知らせ" align="left" />
          </Reveal>
          <ul className="divide-y divide-black/10 border-t border-b border-black/10">
            {getSortedNews().slice(0, 3).map((news) => {
              const content = (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5">
                  <span className="text-xs text-charcoal-light w-24 shrink-0">{news.date}</span>
                  <span className="inline-flex w-fit text-[11px] font-semibold bg-greige-light text-charcoal-dark px-2.5 py-1 rounded-sm shrink-0">
                    {news.category}
                  </span>
                  <span className="text-sm text-charcoal-dark">{news.title}</span>
                </div>
              );
              return (
                <li key={news.id}>
                  {news.href ? (
                    <Link href={news.href} className="block hover:opacity-70 transition-opacity">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
