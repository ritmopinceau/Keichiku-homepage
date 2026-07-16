import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { ProjectCase } from "@/data/types";

interface ProjectCardProps {
  project: ProjectCase;
}

const businessCategoryLabel: Record<ProjectCase["businessCategory"], string> = {
  personal: "個人向け",
  corporate: "法人向け",
  realestate: "不動産",
};

/**
 * 施工事例カード。写真を主役にする。
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {businessCategoryLabel[project.businessCategory]}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <span className="text-sm font-semibold text-gold-dark">{project.categoryLabel}</span>
        <h3 className="text-lg font-bold text-charcoal-dark mt-2 mb-3 leading-snug">{project.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-charcoal-light mb-3">
          <MapPin size={14} aria-hidden />
          {project.location}
        </p>
        <p className="text-base text-charcoal-light leading-loose line-clamp-2 mb-6">{project.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy group-hover:gap-3 transition-all">
          詳細を見る
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
