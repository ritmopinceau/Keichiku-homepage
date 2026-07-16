import { FaqItem } from "./types";

/**
 * よくある質問。id をサービスごとに data/services.ts の faqIds から参照します。
 * 追加・編集はこの配列に対して行ってください。
 */
export const faqList: FaqItem[] = [
  {
    id: "free-consultation",
    question: "相談や見積もりは無料ですか。",
    answer:
      "初回のご相談、現地調査、お見積もりは無料で承っております。内容を確認させていただいたうえで、費用が発生する場合は事前に必ずご説明いたします。",
  },
  {
    id: "area",
    question: "対応可能なエリアを教えてください。",
    answer:
      "〇〇県〇〇市を中心に、近隣エリアまで対応しております。エリア外の場合もご相談内容によって対応可能な場合がありますので、まずはお問い合わせください。",
  },
  {
    id: "small-scale",
    question: "小規模な工事でも相談できますか。",
    answer:
      "水まわりの一部修理や部分的な内装工事など、小規模な工事からご相談いただけます。工事の大小にかかわらずお気軽にご連絡ください。",
  },
  {
    id: "land-search",
    question: "土地や物件探しから相談できますか。",
    answer:
      "土地探し、中古物件探しの段階からご相談いただけます。不動産部門と建築部門が連携し、購入後の設計・工事まで見据えたご提案が可能です。",
  },
  {
    id: "during-construction",
    question: "工事中も建物を使用できますか。",
    answer:
      "店舗や事務所の営業を継続しながらの部分工事、居住しながらのリフォームなど、稼働・生活への影響を最小限にする工程計画をご提案いたします。",
  },
  {
    id: "valuation-only",
    question: "不動産の査定だけでも依頼できますか。",
    answer:
      "査定のみのご依頼も承っております。売却するかどうか未定の段階でも、まずは現在の資産価値を把握するためにご利用いただけます。",
  },
  {
    id: "vacant-house-inherited",
    question: "相続した空き家の相談はできますか。",
    answer:
      "相続された空き家の売却、買取、活用方法まで含めてご相談いただけます。建物の状態確認から必要な手続きまでサポートいたします。",
  },
  {
    id: "combined-request",
    question: "建築と不動産をまとめて依頼できますか。",
    answer:
      "物件探しから購入、設計、施工、その後の管理まで一社でワンストップに対応できることが強みです。窓口を一本化することで手間や情報の行き違いを減らせます。",
  },
];

export function getFaqByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => faqList.find((f) => f.id === id))
    .filter((f): f is FaqItem => Boolean(f));
}
