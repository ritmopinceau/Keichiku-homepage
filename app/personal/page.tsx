import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/sections/Reveal";
import ContactBanner from "@/components/sections/ContactBanner";
import ServiceLandingCard from "@/components/cards/ServiceLandingCard";
import { getServicesByCategory } from "@/data/services";
import { heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "個人のお客様向けサービス",
  description:
    "住宅リフォーム、新築住宅、住宅リノベーションなど、個人のお客様の住まいに関するご相談にワンストップで対応します。〇〇市の建築・不動産会社。",
  path: "/personal",
});

export default function PersonalPage() {
  const personalServices = getServicesByCategory("personal");

  return (
    <>
      <PageHero
        title="個人のお客様向けサービス"
        englishLabel="For Individual"
        description="家族の暮らしに寄り添う、住まいづくり。今の暮らしをより快適にするリフォームから、新築住宅、中古住宅のリノベーションまで、ご家族のライフスタイルや将来を見据えてご提案します。"
        image={heroImages.personal}
        imageAlt="家族が暮らす明るいリビングルーム"
        breadcrumbs={[{ label: "個人のお客様" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-content space-y-8 md:space-y-10">
          {personalServices.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 80}>
              <ServiceLandingCard
                service={service}
                href={`/personal/${service.slug}`}
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
