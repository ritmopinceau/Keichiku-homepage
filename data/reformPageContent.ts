/**
 * 個人のお客様向け「住宅リフォーム」ページ専用のコンテンツ。
 * コピーやアイコンを変更したい場合はこのファイルを編集してください。
 * icon はアイコン名の文字列で指定し、存在しない名前の場合は自動的に既定アイコンにフォールバックします。
 */

export const reformWorries: { icon: string; label: string }[] = [
  { icon: "ChefHat", label: "キッチンが古くなった" },
  { icon: "Bath", label: "お風呂が寒い" },
  { icon: "Droplets", label: "トイレを新しくしたい" },
  { icon: "Home", label: "外壁が傷んできた" },
  { icon: "Key", label: "中古住宅を購入した" },
  { icon: "Users", label: "子供の成長に合わせて間取りを変えたい" },
  { icon: "Accessibility", label: "バリアフリーにしたい" },
  { icon: "Archive", label: "収納を増やしたい" },
];

export const reformTrustPoints: { icon: string; label: string }[] = [
  { icon: "Search", label: "現地調査無料" },
  { icon: "Banknote", label: "お見積り無料" },
  { icon: "HardHat", label: "建築のプロが対応" },
  { icon: "MapPin", label: "地域密着" },
  { icon: "ShieldCheck", label: "アフターフォロー" },
  { icon: "Percent", label: "補助金相談対応" },
];

export const reformMenuItems: { icon: string; label: string }[] = [
  { icon: "ChefHat", label: "キッチン" },
  { icon: "Bath", label: "浴室" },
  { icon: "Droplets", label: "トイレ" },
  { icon: "Sparkles", label: "洗面所" },
  { icon: "Paintbrush", label: "内装" },
  { icon: "PaintRoller", label: "外壁塗装" },
  { icon: "Home", label: "屋根工事" },
  { icon: "Thermometer", label: "窓・断熱" },
  { icon: "LayoutGrid", label: "間取り変更" },
  { icon: "Accessibility", label: "バリアフリー" },
  { icon: "Building2", label: "全面リフォーム" },
];

export const reformFlowSteps: { icon: string; step: number; title: string }[] = [
  { icon: "Phone", step: 1, title: "お問い合わせ" },
  { icon: "Search", step: 2, title: "現地調査" },
  { icon: "ClipboardList", step: 3, title: "プラン提案" },
  { icon: "Banknote", step: 4, title: "お見積り" },
  { icon: "FileSignature", step: 5, title: "ご契約" },
  { icon: "Hammer", step: 6, title: "施工" },
  { icon: "Key", step: 7, title: "完成・お引き渡し" },
  { icon: "HeartHandshake", step: 8, title: "アフターサービス" },
];

export const reformFaqItems: { id: string; question: string; answer: string }[] = [
  {
    id: "reform-consult-only",
    question: "相談だけでも可能ですか？",
    answer: "はい、ご相談のみでも承っております。無理な勧誘は一切いたしませんので、まずはお気軽にお声がけください。",
  },
  {
    id: "reform-free-estimate",
    question: "見積りは無料ですか？",
    answer: "はい、現地調査・お見積りともに無料で承っております。内容にご納得いただくまで費用は発生しません。",
  },
  {
    id: "reform-duration",
    question: "工事期間はどれくらいですか？",
    answer:
      "内容により異なりますが、部分的な水まわりリフォームで1〜3週間、全面リフォームで1〜3ヶ月程度が目安です。着工前に詳しい工程表をご提示します。",
  },
  {
    id: "reform-living-during-work",
    question: "住みながら工事できますか？",
    answer: "はい、生活動線や工程を工夫し、住みながらの工事にも対応しております。工事範囲や順序をご相談のうえ決定します。",
  },
  {
    id: "reform-subsidy",
    question: "補助金は利用できますか？",
    answer:
      "工事内容によっては、国や自治体の補助金・助成金制度を利用できる場合があります。対象となるかどうかも含めてご案内いたします。",
  },
  {
    id: "reform-loan",
    question: "ローン相談できますか？",
    answer: "リフォームローンについても提携金融機関のご案内が可能です。お気軽にご相談ください。",
  },
  {
    id: "reform-small-scale",
    question: "小さな工事でも対応できますか？",
    answer: "水まわりの一部修理や建具の交換など、小規模な工事からご相談いただけます。",
  },
  {
    id: "reform-warranty",
    question: "保証はありますか？",
    answer: "工事内容に応じた保証を設けております。詳しい保証内容は事前にご説明いたします。",
  },
];
