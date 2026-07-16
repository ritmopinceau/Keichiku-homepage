import PageHero from "@/components/sections/PageHero";
import ContactBanner from "@/components/sections/ContactBanner";
import ProjectsListClient from "./ProjectsListClient";
import { projectImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "施工事例一覧",
  description:
    "住宅リフォーム、新築住宅、住宅リノベーション、法人向け新築・改修・リノベーションの施工事例を掲載しています。〇〇市の建築・不動産会社の施工実績。",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="施工事例一覧"
        englishLabel="Works"
        description="これまでに手がけた住宅・法人向け建築の施工事例をご紹介します。カテゴリーから絞り込んでご覧いただけます。"
        image={projectImages[0]}
        imageAlt="施工事例のイメージ"
        breadcrumbs={[{ label: "施工事例" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <ProjectsListClient />
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
