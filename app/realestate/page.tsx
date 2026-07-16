import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/sections/Reveal";
import ContactBanner from "@/components/sections/ContactBanner";
import ServiceLandingCard from "@/components/cards/ServiceLandingCard";
import { getServicesByCategory } from "@/data/services";
import { heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "不動産サービス",
  description:
    "不動産の売買、賃貸、買取、管理まで、建築の専門知識を活かしてトータルにサポートします。〇〇市の建築・不動産会社。",
  path: "/realestate",
});

export default function RealEstatePage() {
  const realestateServices = getServicesByCategory("realestate");

  return (
    <>
      <PageHero
        title="不動産サービス"
        englishLabel="Real Estate"
        description="不動産の売る・買う・貸す・管理するを、トータルでサポート。建築の専門知識を活かし、不動産の現在の状態だけでなく、改修後の可能性や将来の資産価値まで考えたご提案を行います。"
        image={heroImages.realestate}
        imageAlt="街並みと不動産物件"
        breadcrumbs={[{ label: "不動産" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content space-y-12 md:space-y-16">
          {realestateServices.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 80}>
              <ServiceLandingCard
                service={service}
                href={`/realestate/${service.slug}`}
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
