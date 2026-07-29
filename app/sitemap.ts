import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { subServices } from "@/data/subServices";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { columns } from "@/data/columns";

const staticPaths = [
  "/",
  "/construction",
  "/personal",
  "/corporate",
  "/realestate",
  "/projects",
  "/properties",
  "/columns",
  "/company",
  "/contact",
  "/privacy",
  "/work-and-life",
  "/en",
  "/en/company",
  "/en/contact",
  "/en/work-and-life",
  "/zh",
  "/zh/company",
  "/zh/contact",
  "/zh/work-and-life",
  "/vi",
  "/vi/company",
  "/vi/contact",
  "/vi/work-and-life",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = services.map((s) => `/${s.category}/${s.slug}`);
  const subServicePaths = subServices.map((s) => `/${s.parentCategory}/${s.parentSlug}/${s.slug}`);
  const projectPaths = projects.map((p) => `/projects/${p.slug}`);
  const propertyPaths = properties.map((p) => `/properties/${p.slug}`);
  const columnPaths = columns.map((c) => `/columns/${c.slug}`);

  const allPaths = [
    ...staticPaths,
    ...servicePaths,
    ...subServicePaths,
    ...projectPaths,
    ...propertyPaths,
    ...columnPaths,
  ];

  return allPaths.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
