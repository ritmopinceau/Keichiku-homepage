import IntlCompanyTemplate from "@/components/templates/IntlCompanyTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.vi;

export const metadata = buildMetadata({
  title: content.company.metaTitle,
  description: content.company.metaDescription,
  path: "/vi/company",
  languageAlternates: { ja: "/company", en: "/en/company", zh: "/zh/company", vi: "/vi/company", "x-default": "/company" },
});

export default function VietnameseCompanyPage() {
  return <IntlCompanyTemplate content={content} />;
}
