import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import ContactBanner from "@/components/sections/ContactBanner";
import { siteConfig } from "@/data/siteConfig";
import { companyImage, companyPhilosophyImage, heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "会社案内",
  description: `${siteConfig.siteName}の会社概要、代表メッセージ、事業内容、建設業許可・宅地建物取引業免許などをご紹介します。`,
  path: "/company",
});

const overviewRows: { label: string; value: string }[] = [
  { label: "会社名", value: siteConfig.company.name },
  { label: "代表者", value: siteConfig.company.ceo },
  { label: "所在地", value: siteConfig.company.fullAddress },
  { label: "電話番号", value: siteConfig.company.phoneDisplay },
  { label: "FAX番号", value: siteConfig.company.faxDisplay },
  { label: "設立", value: siteConfig.company.establishedYear },
  { label: "資本金", value: siteConfig.company.capital },
  { label: "従業員数", value: siteConfig.company.employees },
  { label: "営業時間", value: siteConfig.company.businessHours },
  { label: "定休日", value: siteConfig.company.holidays },
  { label: "建設業許可", value: siteConfig.company.constructionLicense },
  { label: "宅地建物取引業免許", value: siteConfig.company.realEstateLicense },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="会社案内"
        englishLabel="Company"
        description="建築と不動産、両方の専門性を持つ会社として、お客様の暮らしと事業を長期的にサポートします。"
        image={heroImages.corporate}
        imageAlt="会社のオフィス外観"
        breadcrumbs={[{ label: "会社案内" }]}
      />

      {/* 代表メッセージ */}
      <section className="py-14 md:py-20">
        <div className="container-content max-w-4xl">
          <Reveal>
            <SectionTitle en="Message" ja="代表メッセージ" align="left" />
            <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-start">
              <div className="relative h-56 md:h-64 w-full rounded-sm overflow-hidden">
                <Image src={companyImage} alt="代表者（写真は仮のものです）" fill sizes="220px" className="object-cover" />
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-charcoal-light">
                <p>
                  私たちは、建築と不動産という2つの専門分野を一社で担うことで、お客様が「どこに相談すればよいか分からない」という状況をなくしたいという想いで事業を行っています。
                </p>
                <p>
                  住まいや建物は、人生や事業において長く付き合っていく大切な資産です。目先の工事や取引だけでなく、その先の暮らしや運営まで見据えたご提案をすることを大切にしています。
                </p>
                <p className="text-right font-semibold text-charcoal-dark">代表取締役　{siteConfig.company.ceo}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 会社の理念 */}
      <section className="py-14 md:py-20 bg-greige-light">
        <div className="container-content max-w-3xl text-center">
          <Reveal>
            <SectionTitle en="Philosophy" ja="会社の理念" />
            <div className="relative h-52 md:h-64 w-full rounded-sm overflow-hidden mb-8">
              <Image
                src={companyPhilosophyImage}
                alt="当社が手がける建築のイメージ"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-base md:text-lg font-semibold text-charcoal-dark leading-relaxed">
              「建てる、直す、活かす。」建築と不動産の両輪で、地域のお客様の暮らしと事業に寄り添い、
              建物と土地の価値を未来へつなぎます。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-14 md:py-20">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Company Profile" ja="会社概要" align="left" />
            <dl className="divide-y divide-black/10 border-t border-b border-black/10">
              {overviewRows.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-sm font-semibold text-charcoal-dark col-span-1">{row.label}</dt>
                  <dd className="text-sm text-charcoal-light col-span-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-14 md:py-20 bg-greige-light">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Business" ja="事業内容" align="left" />
            <ul className="space-y-3">
              {siteConfig.company.businessDetail.map((item) => (
                <li key={item} className="bg-white border border-black/10 rounded-sm px-4 py-3.5 text-sm text-charcoal-dark">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 保有資格 */}
      <section className="py-14 md:py-20">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Qualifications" ja="保有資格" align="left" />
            <ul className="grid sm:grid-cols-2 gap-3">
              {siteConfig.company.qualifications.map((q) => (
                <li key={q} className="bg-white border border-black/10 rounded-sm px-4 py-3.5 text-sm text-charcoal-dark">
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-14 md:py-20 bg-greige-light">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="Access" ja="アクセス" align="left" />
            <p className="text-sm md:text-base text-charcoal-light leading-relaxed mb-4">
              {siteConfig.company.fullAddress}
              <br />
              最寄り駅からのアクセス方法は、確定後にこちらへ記載してください（例：〇〇線「〇〇」駅よりバス10分）。
            </p>
            <div className="h-56 md:h-72 rounded-sm bg-white border border-black/10 flex items-center justify-center text-charcoal-light text-sm">
              地図表示エリア（Googleマップ等を埋め込んでください）
            </div>
          </Reveal>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
