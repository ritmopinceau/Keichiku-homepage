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

// 当社が選ばれる理由(アイコン付きカード)
export const reformChoiceReasons: { icon: string; title: string; description: string }[] = [
  {
    icon: "Building2",
    title: "建築会社だから構造まで安心",
    description: "内装だけでなく、構造や耐久性まで理解した建築のプロが対応します。",
  },
  {
    icon: "Wrench",
    title: "小さな修繕から全面改修まで対応",
    description: "部分的な水まわり修理から全面リフォームまで、工事の規模を問わずご相談いただけます。",
  },
  {
    icon: "Layers",
    title: "建築・不動産をワンストップ対応",
    description: "物件探しから設計・施工まで、窓口を一本化して対応できることが強みです。",
  },
  {
    icon: "Search",
    title: "現地調査・見積無料",
    description: "現地調査、お見積りは無料です。内容にご納得いただくまで費用は発生しません。",
  },
  {
    icon: "HeartHandshake",
    title: "アフターサポートも充実",
    description: "工事完了後も、定期点検やご相談を通じて長くお付き合いいたします。",
  },
];

// 実績を数字で(仮データ。確定次第この数値を差し替えてください)
export const reformAchievements: { value: string; label: string }[] = [
  { value: "30年", label: "創業からの年数" },
  { value: "850件+", label: "累計施工件数" },
  { value: "120件", label: "年間施工件数" },
  { value: "98%", label: "顧客満足度" },
  { value: "65%", label: "リピート・紹介率" },
  { value: "30年", label: "地域密着" },
];

// お客様の声(仮データ。実際のお客様の声・写真に差し替えてください)
export const reformTestimonials: {
  name: string;
  rating: number;
  workType: string;
  comment: string;
}[] = [
  {
    name: "田中様（30代女性）",
    rating: 5,
    workType: "キッチンリフォーム",
    comment:
      "対面キッチンにしたことで、料理をしながら家族と会話できるようになりました。担当の方が要望を丁寧に聞いてくださり、安心してお任せできました。",
  },
  {
    name: "佐藤様（60代男性）",
    rating: 5,
    workType: "浴室リフォーム",
    comment:
      "寒かった浴室が暖かく快適になり、毎日の入浴が楽しみになりました。工事中の対応も丁寧で、近隣への配慮もしっかりされていました。",
  },
  {
    name: "山本様（40代女性）",
    rating: 4,
    workType: "全面リフォーム",
    comment:
      "中古住宅を購入したタイミングで全面的にお願いしました。予算内でできることを一緒に考えてくださり、納得のいく仕上がりになりました。",
  },
];

// 担当者紹介(仮データ。実際のスタッフ写真・紹介文に差し替えてください)
export const reformStaffMembers: {
  name: string;
  role: string;
  specialty: string;
  comment: string;
}[] = [
  {
    name: "山田 太郎（仮）",
    role: "リフォームアドバイザー",
    specialty: "水まわりリフォーム",
    comment: "お客様の暮らし方に合わせたプランを、じっくりお話を伺いながらご提案します。",
  },
  {
    name: "鈴木 一郎（仮）",
    role: "設計担当",
    specialty: "間取り変更・断熱改修",
    comment: "構造や断熱性能まで考えた、長く安心して暮らせる住まいをご提案します。",
  },
  {
    name: "高橋 健二（仮）",
    role: "現場管理担当",
    specialty: "施工管理・工程調整",
    comment: "住みながらの工事も、生活への影響を最小限にする工程を組みます。",
  },
];

// 補助金相談セクション(仮データ。制度内容・支給額は年度や自治体により異なるため、
// 具体的な金額は記載せずお問い合わせ時にご案内する構成にしています)
export const reformSubsidyItems: { icon: string; title: string; description: string }[] = [
  {
    icon: "Leaf",
    title: "住宅省エネ補助金",
    description: "断熱窓や高効率給湯器の設置など、省エネ性能を高める工事が対象になる場合があります。",
  },
  {
    icon: "Thermometer",
    title: "断熱補助金",
    description: "窓・壁・床の断熱改修など、住まいの断熱性能を向上させる工事が対象になる場合があります。",
  },
  {
    icon: "Baby",
    title: "子育て支援補助金",
    description: "子育て世帯・若者夫婦世帯を対象に、住宅の性能向上リフォームを支援する制度がある場合があります。",
  },
  {
    icon: "FileText",
    title: "その他各種補助金",
    description: "国・自治体の制度は年度により変わります。対象となるかどうかも含めてご案内いたします。",
  },
];
