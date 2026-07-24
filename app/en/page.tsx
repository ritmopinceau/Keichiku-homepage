import IntlHomeTemplate from "@/components/templates/IntlHomeTemplate";
import { intlContent } from "@/data/intlContent";
import { buildMetadata } from "@/lib/metadata";

const content = intlContent.en;

export const metadata = buildMetadata({
  title: content.home.metaTitle,
  description: content.home.metaDescription,
  path: "/en",
  languageAlternates: { ja: "/", en: "/en", zh: "/zh", vi: "/vi", "x-default": "/" },
});

export default function EnglishHomePage() {
  return <IntlHomeTemplate content={content} />;
}
