import WorkAndLifeContent from "@/components/work-and-life/WorkAndLifeContent";
import { workLifeContent } from "@/data/workAndLife";
import { buildMetadata } from "@/lib/metadata";

const content = workLifeContent.zh;

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/zh/work-and-life",
  languageAlternates: {
    ja: "/work-and-life",
    en: "/en/work-and-life",
    zh: "/zh/work-and-life",
    vi: "/vi/work-and-life",
    "x-default": "/work-and-life",
  },
});

export default function ChineseWorkAndLifePage() {
  return <WorkAndLifeContent lang="zh" />;
}
