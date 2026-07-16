"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { projectCategoryFilters, projects } from "@/data/projects";

/**
 * 施工事例一覧のカテゴリー絞り込み。クライアント側で配列をフィルタするだけの軽量な実装。
 */
export default function ProjectsListClient() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategoryFilters)[number]>("すべて");

  const filtered = useMemo(() => {
    if (activeCategory === "すべて") return projects;
    return projects.filter((p) => p.categoryLabel === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="施工事例のカテゴリー絞り込み">
        {projectCategoryFilters.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`min-h-[40px] px-4 rounded-full text-sm font-medium border transition-colors ${
                isActive
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-charcoal-dark border-black/10 hover:border-navy"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-charcoal-light py-10 text-center">該当する施工事例が見つかりませんでした。</p>
      )}
    </div>
  );
}
