import { Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactFormClient from "./ContactFormClient";
import { siteConfig } from "@/data/siteConfig";
import { heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "お問い合わせ",
  description:
    "住宅リフォーム、新築住宅、法人向け工事、不動産の売買・賃貸・買取・管理など、建築・不動産に関するお問い合わせはこちらから。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        englishLabel="Contact"
        description="住宅リフォーム、新築、法人向け工事、不動産の売買・賃貸・買取・管理まで、ご相談内容に合わせて対応いたします。"
        image={heroImages.top}
        imageAlt="お問い合わせのイメージ"
        breadcrumbs={[{ label: "お問い合わせ" }]}
      />

      <section className="py-14 md:py-20">
        <div className="container-content max-w-2xl">
          <a
            href={siteConfig.company.phoneHref}
            className="flex items-center justify-center gap-3 min-h-[56px] rounded-sm border border-navy text-navy font-semibold mb-10 hover:bg-navy/5 transition-colors"
          >
            <Phone size={20} aria-hidden />
            お急ぎの方はお電話でも承ります：{siteConfig.company.phoneDisplay}（{siteConfig.company.businessHours}）
          </a>

          <ContactFormClient />
        </div>
      </section>
    </>
  );
}
