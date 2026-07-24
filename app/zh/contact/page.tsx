import IntlContactTemplate from "@/components/templates/IntlContactTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.zh;

export const metadata = buildMetadata({
  title: content.contact.metaTitle,
  description: content.contact.metaDescription,
  path: "/zh/contact",
  languageAlternates: { ja: "/contact", en: "/en/contact", zh: "/zh/contact", vi: "/vi/contact", "x-default": "/contact" },
});

export default function ChineseContactPage() {
  return <IntlContactTemplate content={content} />;
}
