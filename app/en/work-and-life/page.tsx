import WorkAndLifeContent from "@/components/work-and-life/WorkAndLifeContent";
import { workLifeContent } from "@/data/workAndLife";
import { buildMetadata } from "@/lib/metadata";

const content = workLifeContent.en;

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/en/work-and-life",
  languageAlternates: {
    ja: "/work-and-life",
    en: "/en/work-and-life",
    zh: "/zh/work-and-life",
    vi: "/vi/work-and-life",
    "x-default": "/work-and-life",
  },
});

export default function EnglishWorkAndLifePage() {
  return <WorkAndLifeContent lang="en" />;
}
