import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/data/services";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

const service = getService("personal", "newbuild");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.metaDescription, path: "/personal/newbuild" })
  : undefined;

export default function PersonalNewbuildPage() {
  if (!service) return notFound();

  const relatedProjects = projects.filter((p) => p.categoryLabel === service.relatedProjectCategory).slice(0, 3);

  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbs={[{ label: "個人のお客様", href: "/personal" }, { label: service.title }]}
      relatedProjects={relatedProjects}
    />
  );
}
