import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { heroImages } from "@/data/placeholderImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: `${siteConfig.siteName}における個人情報の取り扱いについてご案内します。`,
  path: "/privacy",
});

const sections: { title: string; body: string }[] = [
  {
    title: "1. 個人情報の定義",
    body: "本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、氏名、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報を指します。",
  },
  {
    title: "2. 個人情報の収集方法",
    body: "当社は、お問い合わせフォーム、お電話、その他のお申し込みの際に、氏名、会社名、メールアドレス、電話番号、お問い合わせ内容などの個人情報をお伺いする場合があります。",
  },
  {
    title: "3. 個人情報を収集・利用する目的",
    body: "当社は、お客様からいただいた個人情報を、お問い合わせへの回答、サービスのご案内、工事・不動産取引に関するご連絡、その他これらに付随する目的のために利用いたします。",
  },
  {
    title: "4. 個人情報の第三者提供",
    body: "当社は、法令に基づく場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、業務委託先に対して必要な範囲で提供する場合があります。",
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    body: "お客様ご本人からの個人情報の開示、訂正、削除等のご要望があった場合には、ご本人であることを確認のうえ、合理的な範囲で速やかに対応いたします。",
  },
  {
    title: "6. 個人情報の安全管理",
    body: "当社は、個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。",
  },
  {
    title: "7. お問い合わせ窓口",
    body: `本ポリシーに関するお問い合わせは、下記窓口までご連絡ください。\n${siteConfig.company.name}\n${siteConfig.company.fullAddress}\nTEL: ${siteConfig.company.phoneDisplay}\nEmail: ${siteConfig.company.email}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="プライバシーポリシー"
        englishLabel="Privacy Policy"
        image={heroImages.top}
        imageAlt="プライバシーポリシーのイメージ"
        breadcrumbs={[{ label: "プライバシーポリシー" }]}
      />

      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content max-w-3xl space-y-10">
          <p className="text-base md:text-lg text-charcoal-light leading-loose">
            {siteConfig.company.name}（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
            個人情報の保護に関する法律を遵守するとともに、以下のプライバシーポリシーに基づき、
            適切な取り扱いおよび保護に努めます。
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4">{section.title}</h2>
              <p className="text-base md:text-lg text-charcoal-light leading-loose whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}

          <p className="text-xs text-charcoal-light/70">制定日：20XX年XX月XX日（制定日 未確定）</p>
        </div>
      </section>
    </>
  );
}
