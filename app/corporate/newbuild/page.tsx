import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/data/services";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

const service = getService("corporate", "newbuild");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.metaDescription, path: "/corporate/newbuild" })
  : undefined;

export default function CorporateNewbuildPage() {
  if (!service) return notFound();

  const relatedProjects = projects.filter((p) => p.categoryLabel === service.relatedProjectCategory).slice(0, 3);

  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbs={[{ label: "法人のお客様", href: "/corporate" }, { label: service.title }]}
      relatedProjects={relatedProjects}
    />
  );
}
