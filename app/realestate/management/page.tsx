import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { getService } from "@/data/services";
import { properties } from "@/data/properties";
import { buildMetadata } from "@/lib/metadata";

const service = getService("realestate", "management");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.metaDescription, path: "/realestate/management" })
  : undefined;

export default function RealEstateManagementPage() {
  if (!service) return notFound();

  const relatedProperties = properties.filter((p) => p.dealType === "rent").slice(0, 3);

  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbs={[{ label: "不動産", href: "/realestate" }, { label: service.title }]}
      relatedProperties={relatedProperties}
    />
  );
}
