import PageHero from "@/components/sections/PageHero";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import ContactBanner from "@/components/sections/ContactBanner";
import BusinessEntryCard from "@/components/cards/BusinessEntryCard";
import { constructionAudiences } from "@/data/services";
import { subServiceImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "建築",
  description:
    "住宅リフォーム・新築から法人のお客様の工事まで。個人のお客様・法人のお客様、それぞれの目的に合わせた建築サービスをご案内します。",
  path: "/construction",
});

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        title="建築"
        englishLabel="Construction"
        description="住宅リフォーム・新築から、店舗・オフィスなど法人のお客様の工事まで。個人のお客様・法人のお客様、それぞれの目的に合わせてご案内します。"
        image={subServiceImages.fullReform}
        imageAlt="建築工事の様子"
        breadcrumbs={[{ label: "建築" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="For You"
              ja="どちらのお客様ですか？"
              description="ご住宅に関するご相談か、店舗・オフィスなど事業に関するご相談かによってご案内が異なります。"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {constructionAudiences.map((audience, index) => (
              <Reveal key={audience.key} delayMs={index * 100}>
                <BusinessEntryCard
                  englishLabel={audience.englishLabel}
                  headline={audience.headline}
                  description={audience.description}
                  items={audience.items}
                  buttonLabel={audience.buttonLabel}
                  href={audience.href}
                  image={audience.image}
                  imageAlt={audience.imageAlt}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
