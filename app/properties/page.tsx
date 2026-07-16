import PageHero from "@/components/sections/PageHero";
import ContactBanner from "@/components/sections/ContactBanner";
import PropertiesListClient from "./PropertiesListClient";
import { propertyImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "不動産物件一覧",
  description:
    "〇〇市の売買物件・賃貸物件をご紹介します。物件種別、エリア、価格帯、間取りから絞り込んでお探しいただけます。",
  path: "/properties",
});

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="不動産物件一覧"
        englishLabel="Properties"
        description="売買物件・賃貸物件をご紹介しています。条件を指定して、ご希望に合う物件をお探しください。"
        image={propertyImages[0]}
        imageAlt="不動産物件のイメージ"
        breadcrumbs={[{ label: "物件情報" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <PropertiesListClient />
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
