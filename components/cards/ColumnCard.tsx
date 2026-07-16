import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { ColumnArticle } from "@/data/types";

interface ColumnCardProps {
  column: ColumnArticle;
}

/**
 * コラム一覧カード。写真+カテゴリー+タイトル+抜粋を表示する。
 */
export default function ColumnCard({ column }: ColumnCardProps) {
  return (
    <Link
      href={`/columns/${column.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={column.heroImage}
          alt={column.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {column.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <p className="flex items-center gap-1.5 text-xs text-charcoal-light mb-3">
          <CalendarDays size={13} aria-hidden />
          {column.publishedAt}
        </p>
        <h3 className="text-lg font-bold text-charcoal-dark mb-3 leading-snug line-clamp-2">{column.title}</h3>
        <p className="text-sm text-charcoal-light leading-loose line-clamp-3 mb-6">{column.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy group-hover:gap-3 transition-all">
          続きを読む
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
