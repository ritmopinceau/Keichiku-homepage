import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/sections/Reveal";
import ContactBanner from "@/components/sections/ContactBanner";
import ServiceLandingCard from "@/components/cards/ServiceLandingCard";
import { getServicesByCategory } from "@/data/services";
import { heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "法人のお客様向けサービス",
  description:
    "店舗、オフィス、施設などの新築工事、改修工事、リノベーションまで、法人のお客様の事業に合わせた建築をご提案します。〇〇市の建築・不動産会社。",
  path: "/corporate",
});

export default function CorporatePage() {
  const corporateServices = getServicesByCategory("corporate");

  return (
    <>
      <PageHero
        title="法人のお客様向けサービス"
        englishLabel="For Business"
        description="事業の目的に応える、建築と空間づくり。店舗、オフィス、事業所、施設など、建物の用途や事業計画に合わせて、新築・改修・リノベーションをご提案します。"
        image={heroImages.corporate}
        imageAlt="スタイリッシュなオフィスの内観"
        breadcrumbs={[{ label: "法人のお客様" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-content space-y-8 md:space-y-10">
          {corporateServices.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 80}>
              <ServiceLandingCard
                service={service}
                href={`/corporate/${service.slug}`}
                reverse={index % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
