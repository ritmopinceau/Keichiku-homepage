import { notFound } from "next/navigation";
import SubServiceTemplate from "@/components/templates/SubServiceTemplate";
import { getService } from "@/data/services";
import { getSubService, getSubServicesByParent, subServices } from "@/data/subServices";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return subServices
    .filter((s) => s.parentCategory === "corporate" && s.parentSlug === "renovation-construction")
    .map((s) => ({ subservice: s.slug }));
}

export function generateMetadata({ params }: { params: { subservice: string } }) {
  const subService = getSubService("corporate", "renovation-construction", params.subservice);
  if (!subService) return undefined;
  return buildMetadata({
    title: subService.title,
    description: subService.metaDescription,
    path: `/corporate/renovation-construction/${subService.slug}`,
  });
}

export default function CorporateRenovationConstructionSubServicePage({
  params,
}: {
  params: { subservice: string };
}) {
  const service = getService("corporate", "renovation-construction");
  const subService = getSubService("corporate", "renovation-construction", params.subservice);
  if (!service || !subService) return notFound();

  const relatedProjects = projects
    .filter((p) => p.categoryLabel === subService.relatedProjectCategory)
    .slice(0, 3);
  const siblingSubServices = getSubServicesByParent("corporate", "renovation-construction").filter(
    (s) => s.slug !== subService.slug
  );

  return (
    <SubServiceTemplate
      subService={subService}
      breadcrumbs={[
        { label: "法人のお客様", href: "/corporate" },
        { label: service.title, href: "/corporate/renovation-construction" },
        { label: subService.title },
      ]}
      relatedProjects={relatedProjects}
      siblingSubServices={siblingSubServices}
      parentHref="/corporate/renovation-construction"
      parentTitle={service.title}
    />
  );
}
