import { notFound } from "next/navigation";
import SubServiceTemplate from "@/components/templates/SubServiceTemplate";
import { getService } from "@/data/services";
import { getSubService, getSubServicesByParent, subServices } from "@/data/subServices";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return subServices
    .filter((s) => s.parentCategory === "personal" && s.parentSlug === "reform")
    .map((s) => ({ subservice: s.slug }));
}

export function generateMetadata({ params }: { params: { subservice: string } }) {
  const subService = getSubService("personal", "reform", params.subservice);
  if (!subService) return undefined;
  return buildMetadata({
    title: subService.title,
    description: subService.metaDescription,
    path: `/personal/reform/${subService.slug}`,
  });
}

export default function ReformSubServicePage({ params }: { params: { subservice: string } }) {
  const service = getService("personal", "reform");
  const subService = getSubService("personal", "reform", params.subservice);
  if (!service || !subService) return notFound();

  const relatedProjects = projects
    .filter((p) => p.categoryLabel === subService.relatedProjectCategory)
    .slice(0, 3);
  const siblingSubServices = getSubServicesByParent("personal", "reform").filter((s) => s.slug !== subService.slug);

  return (
    <SubServiceTemplate
      subService={subService}
      breadcrumbs={[
        { label: "個人のお客様", href: "/personal" },
        { label: service.title, href: "/personal/reform" },
        { label: subService.title },
      ]}
      relatedProjects={relatedProjects}
      siblingSubServices={siblingSubServices}
      parentHref="/personal/reform"
      parentTitle={service.title}
    />
  );
}
