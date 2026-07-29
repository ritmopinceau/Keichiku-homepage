import WorkAndLifeClient from "@/components/work-and-life/WorkAndLifeClient";
import { workLifeContent } from "@/data/workAndLife";
import { buildMetadata } from "@/lib/metadata";

const content = workLifeContent.ja;

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/work-and-life",
});

export default function WorkAndLifePage() {
  return <WorkAndLifeClient />;
}
