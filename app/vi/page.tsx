import IntlHomeTemplate from "@/components/templates/IntlHomeTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.vi;

export const metadata = buildMetadata({
  title: content.home.metaTitle,
  description: content.home.metaDescription,
  path: "/vi",
  languageAlternates: { ja: "/", en: "/en", zh: "/zh", vi: "/vi", "x-default": "/" },
});

export default function VietnameseHomePage() {
  return <IntlHomeTemplate content={content} />;
}
