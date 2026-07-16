import { NewsItem } from "./types";

/**
 * お知らせ（仮データ）。新しいものを配列の先頭に追加してください。
 */
export const newsList: NewsItem[] = [
  {
    id: "news-001",
    date: "2026-07-01",
    category: "お知らせ",
    title: "ホームページをリニューアルしました。",
  },
  {
    id: "news-002",
    date: "2026-06-20",
    category: "施工事例",
    title: "空き店舗を活用したカフェへのリノベーション事例を公開しました。",
    href: "/projects/corporate-renovation-shop-suzuki",
  },
  {
    id: "news-003",
    date: "2026-06-10",
    category: "物件情報",
    title: "〇〇町の新築戸建てを掲載しました。",
    href: "/properties/sale-house-001",
  },
  {
    id: "news-004",
    date: "2026-05-25",
    category: "イベント",
    title: "住まいの無料相談会を開催しました。",
  },
  {
    id: "news-005",
    date: "2026-08-13",
    category: "休業案内",
    title: "夏季休業のお知らせ（8/13〜8/16）。",
  },
];

/** 日付の新しい順に並べ替えて返す。表示件数の絞り込みは呼び出し側で行う。 */
export function getSortedNews(): NewsItem[] {
  return [...newsList].sort((a, b) => (a.date < b.date ? 1 : -1));
}
