import { ProjectCase } from "./types";
import { projectImages } from "./placeholderImages";

/**
 * 施工事例データ（仮データ）。
 * 実際の事例が用意でき次第、この配列に追加・編集してください。
 * category は絞り込みタブの値と一致させてください。
 */
export const projectCategoryFilters = [
  "すべて",
  "住宅リフォーム",
  "新築住宅",
  "住宅リノベーション",
  "法人向け新築",
  "改修工事",
  "法人向けリノベーション",
] as const;

export const projects: ProjectCase[] = [
  {
    slug: "reform-kitchen-tanaka",
    title: "家族が集まる対面キッチンへの水まわりリフォーム",
    businessCategory: "personal",
    categoryLabel: "住宅リフォーム",
    constructionType: "住宅リフォーム",
    location: "〇〇県〇〇市",
    summary: "独立型キッチンを対面式に変更し、水まわり3点を同時にリフォームした事例です。",
    mainImage: projectImages[0],
    mainImageAlt: "リフォーム後の対面キッチン",
    images: [
      { src: projectImages[0], alt: "リフォーム後の対面キッチン全景" },
      { src: projectImages[1], alt: "新しくなった浴室" },
      { src: projectImages[2], alt: "リフォーム後の洗面所" },
    ],
    buildingType: "木造戸建て（築25年）",
    workDetail: "キッチン、浴室、洗面所の交換、内装工事一式",
    period: "約3週間",
    customerRequest:
      "家族との会話を楽しみながら料理ができるキッチンにしたい、あわせて古くなった浴室と洗面所も新しくしたいというご要望でした。",
    proposal:
      "壁を一部撤去して対面式キッチンへ変更し、リビングとのつながりを持たせるプランをご提案しました。水まわり3点をまとめて工事することで、工期と費用を抑えています。",
    points: [
      "対面キッチンでリビングとの一体感を演出",
      "水まわり3点をまとめて工事しコストを最適化",
      "収納スペースを増やし使い勝手を向上",
    ],
    beforeImage: projectImages[3],
    afterImage: projectImages[0],
    staffComment:
      "限られた期間の中で、家族の暮らし方に合わせたレイアウトをご提案できました。仕上がりをとても喜んでいただけました。",
  },
  {
    slug: "newbuild-house-sato",
    title: "平屋で暮らす、将来を見据えた新築住宅",
    businessCategory: "personal",
    categoryLabel: "新築住宅",
    constructionType: "新築住宅",
    location: "〇〇県〇〇市",
    summary: "将来のバリアフリーを見据えた平屋の注文住宅です。",
    mainImage: projectImages[1],
    mainImageAlt: "新築の平屋住宅外観",
    images: [
      { src: projectImages[1], alt: "新築の平屋住宅外観" },
      { src: projectImages[4], alt: "リビングダイニング" },
      { src: projectImages[5], alt: "外構と庭" },
    ],
    buildingType: "木造平屋建て",
    workDetail: "新築工事一式、外構工事",
    period: "約6ヶ月",
    customerRequest: "将来的な暮らしやすさを考え、段差の少ない平屋を希望されました。",
    proposal:
      "土地探しの段階からご相談いただき、日当たりや周辺環境を確認したうえで、バリアフリーを意識した平屋のプランをご提案しました。",
    points: [
      "段差を抑えたバリアフリー設計",
      "土地探しから資金計画まで一括サポート",
      "将来のメンテナンスを見据えた素材選定",
    ],
    staffComment: "土地探しの段階からご一緒できたことで、暮らし方に合った提案がしやすい事例でした。",
  },
  {
    slug: "renovation-mansion-yamamoto",
    title: "中古マンションをスケルトンから再生したリノベーション",
    businessCategory: "personal",
    categoryLabel: "住宅リノベーション",
    constructionType: "住宅リノベーション",
    location: "〇〇県〇〇市",
    summary: "中古マンションをスケルトン状態から間取りごと再構築した事例です。",
    mainImage: projectImages[2],
    mainImageAlt: "リノベーション後のマンションリビング",
    images: [
      { src: projectImages[2], alt: "リノベーション後のリビング" },
      { src: projectImages[0], alt: "対面式キッチン" },
    ],
    buildingType: "分譲マンション（築30年）",
    workDetail: "スケルトンリノベーション、断熱改修",
    period: "約2ヶ月",
    customerRequest: "中古マンションを購入し、自分たちらしい間取りとデザインにしたいとのご要望でした。",
    proposal:
      "物件探しの段階からご相談いただき、購入後にスケルトン状態まで解体して間取りを再構築するプランをご提案しました。",
    points: [
      "物件探しからリノベーションまで一括対応",
      "断熱性能を向上させる仕様を採用",
      "自由な間取り変更を実現",
    ],
    beforeImage: projectImages[5],
    afterImage: projectImages[2],
    staffComment: "物件探しの段階から関わることで、リノベーションを前提とした無駄のない購入判断ができました。",
  },
  {
    slug: "corporate-newbuild-clinic",
    title: "地域医療を支える医療施設の新築工事",
    businessCategory: "corporate",
    categoryLabel: "法人向け新築",
    constructionType: "法人向け新築",
    location: "〇〇県〇〇市",
    summary: "開業予定の医療施設を、事業計画に合わせて新築した事例です。",
    mainImage: projectImages[3],
    mainImageAlt: "新築の医療施設外観",
    images: [
      { src: projectImages[3], alt: "新築の医療施設外観" },
      { src: projectImages[4], alt: "施設内の待合スペース" },
    ],
    buildingType: "鉄骨造 医療施設",
    workDetail: "新築工事一式、外構・駐車場整備",
    period: "約8ヶ月",
    customerRequest: "開業に合わせたスケジュールで、患者様が利用しやすい動線の施設にしたいというご要望でした。",
    proposal:
      "事業計画とスケジュールをふまえ、開業に間に合う工程計画と、来院者の動線に配慮したプランをご提案しました。",
    points: [
      "開業スケジュールに合わせた工程管理",
      "利用者の動線に配慮した設計",
      "将来の増床にも対応できる構造計画",
    ],
    staffComment: "開業日から逆算したスケジュール管理を徹底し、予定通りにお引き渡しできました。",
  },
  {
    slug: "renovation-construction-office-kondo",
    title: "営業を継続しながら進めたオフィス改修工事",
    businessCategory: "corporate",
    categoryLabel: "改修工事",
    constructionType: "改修工事",
    location: "〇〇県〇〇市",
    summary: "業務を止めずに進めた、既存オフィスの内装・設備改修工事です。",
    mainImage: projectImages[4],
    mainImageAlt: "改修後のオフィス内観",
    images: [
      { src: projectImages[4], alt: "改修後のオフィス内観" },
      { src: projectImages[3], alt: "改修後のエントランス" },
    ],
    buildingType: "鉄骨造オフィスビル（築20年）",
    workDetail: "内装改修、空調・電気設備更新",
    period: "約1.5ヶ月（部分施工）",
    customerRequest: "営業を止めずに、老朽化した設備と内装をリニューアルしたいというご要望でした。",
    proposal:
      "フロアを区切って夜間・週末を中心に施工するなど、業務への影響を最小限に抑える工程を計画しました。",
    points: [
      "業務を継続しながらの部分施工",
      "老朽化した空調・電気設備を更新",
      "働きやすさを考えた内装デザイン",
    ],
    staffComment: "業務スケジュールを詳しくヒアリングし、影響を抑えた工程を組めたことが評価いただけました。",
  },
  {
    slug: "corporate-renovation-shop-suzuki",
    title: "空き店舗を活用したカフェへのリノベーション",
    businessCategory: "corporate",
    categoryLabel: "法人向けリノベーション",
    constructionType: "法人向けリノベーション",
    location: "〇〇県〇〇市",
    summary: "空き店舗物件を、ブランドイメージに合わせたカフェへ再生した事例です。",
    mainImage: projectImages[5],
    mainImageAlt: "リノベーション後のカフェ店内",
    images: [
      { src: projectImages[5], alt: "リノベーション後のカフェ店内" },
      { src: projectImages[2], alt: "カフェのカウンター席" },
    ],
    buildingType: "鉄筋コンクリート造 店舗",
    workDetail: "用途変更にともなうリノベーション工事一式",
    period: "約2ヶ月",
    customerRequest: "空き店舗物件を活用し、ブランドの世界観を表現できるカフェにしたいというご要望でした。",
    proposal:
      "物件探しの段階から関わり、用途変更の手続きとあわせて、ブランドイメージに合わせた内装デザインをご提案しました。",
    points: [
      "空き物件の活用による初期コスト抑制",
      "用途変更の手続きを含めて対応",
      "ブランドイメージを反映した内装デザイン",
    ],
    staffComment: "物件選びの段階からブランドの世界観をどう表現するか一緒に考えられた事例です。",
  },
];

export function getProjectBySlug(slug: string): ProjectCase | undefined {
  return projects.find((p) => p.slug === slug);
}
