import IntlCompanyTemplate from "@/components/templates/IntlCompanyTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.en;

export const metadata = buildMetadata({
  title: content.company.metaTitle,
  description: content.company.metaDescription,
  path: "/en/company",
  languageAlternates: { ja: "/company", en: "/en/company", zh: "/zh/company", vi: "/vi/company", "x-default": "/company" },
});

export default function EnglishCompanyPage() {
  return <IntlCompanyTemplate content={content} />;
}
