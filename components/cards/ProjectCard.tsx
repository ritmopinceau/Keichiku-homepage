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
 * 施工事例カード。
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-sm bg-white border border-black/5 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-navy text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm">
          {businessCategoryLabel[project.businessCategory]}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <span className="text-xs font-semibold text-gold-dark">{project.categoryLabel}</span>
        <h3 className="text-base font-bold text-charcoal-dark mt-1 mb-2">{project.title}</h3>
        <p className="flex items-center gap-1 text-xs text-charcoal-light mb-2">
          <MapPin size={13} aria-hidden />
          {project.location}
        </p>
        <p className="text-sm text-charcoal-light leading-relaxed line-clamp-2 mb-4">{project.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
          詳細を見る
          <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
