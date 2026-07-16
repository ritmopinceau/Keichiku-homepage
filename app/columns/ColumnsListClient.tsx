"use client";

import { useMemo, useState } from "react";
import ColumnCard from "@/components/cards/ColumnCard";
import { columnCategories, getSortedColumns } from "@/data/columns";
import type { ColumnCategory } from "@/data/types";

const ALL = "すべて" as const;

/**
 * コラム一覧のカテゴリー絞り込み。クライアント側で配列をフィルタするだけの軽量な実装。
 */
export default function ColumnsListClient() {
  const [activeCategory, setActiveCategory] = useState<ColumnCategory | typeof ALL>(ALL);
  const sortedColumns = useMemo(() => getSortedColumns(), []);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return sortedColumns;
    return sortedColumns.filter((c) => c.category === activeCategory);
  }, [activeCategory, sortedColumns]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="コラムのカテゴリー絞り込み">
        {[ALL, ...columnCategories].map((category) => {
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
          {filtered.map((column) => (
            <ColumnCard key={column.slug} column={column} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-charcoal-light py-10 text-center">該当する記事が見つかりませんでした。</p>
      )}
    </div>
  );
}
