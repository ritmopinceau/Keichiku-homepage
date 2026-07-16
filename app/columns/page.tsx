import PageHero from "@/components/sections/PageHero";
import ContactBanner from "@/components/sections/ContactBanner";
import ColumnsListClient from "./ColumnsListClient";
import { projectImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "コラム",
  description:
    "リフォーム費用の相場、補助金制度、住宅会社の選び方など、家づくり・リフォームに役立つ情報をお届けするコラムです。",
  path: "/columns",
});

export default function ColumnsPage() {
  return (
    <>
      <PageHero
        title="コラム"
        englishLabel="Column"
        description="リフォーム費用の相場や補助金制度、会社選びのポイントなど、家づくりに役立つ情報をお届けします。"
        image={projectImages[0]}
        imageAlt="コラムのイメージ"
        breadcrumbs={[{ label: "コラム" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <ColumnsListClient />
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
