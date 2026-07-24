import IntlCompanyTemplate from "@/components/templates/IntlCompanyTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.zh;

export const metadata = buildMetadata({
  title: content.company.metaTitle,
  description: content.company.metaDescription,
  path: "/zh/company",
  languageAlternates: { ja: "/company", en: "/en/company", zh: "/zh/company", vi: "/vi/company", "x-default": "/company" },
});

export default function ChineseCompanyPage() {
  return <IntlCompanyTemplate content={content} />;
}
