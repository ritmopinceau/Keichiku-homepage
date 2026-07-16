import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";

const staticPaths = [
  "/",
  "/personal",
  "/corporate",
  "/realestate",
  "/projects",
  "/properties",
  "/company",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = services.map((s) => `/${s.category}/${s.slug}`);
  const projectPaths = projects.map((p) => `/projects/${p.slug}`);
  const propertyPaths = properties.map((p) => `/properties/${p.slug}`);

  const allPaths = [...staticPaths, ...servicePaths, ...projectPaths, ...propertyPaths];

  return allPaths.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
