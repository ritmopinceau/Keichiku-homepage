import { NavItem } from "./types";

/**
 * サイト全体の設定値。
 * 会社名・住所・電話番号・許認可番号などは確定後にこのファイルの値だけを書き換えてください。
 */
export const siteConfig = {
  siteName: "拓工建設グループ",
  siteNameEn: "Takko Construction Group",
  siteUrl: "https://www.example.co.jp",
  defaultTitle: "拓工建設グループ｜〇〇市の建築・不動産をワンストップで",
  defaultDescription:
    "〇〇市・〇〇県で住宅リフォーム、新築住宅、住宅リノベーション、法人向け新築・改修・リノベーション、不動産の売買・賃貸・買取・管理までワンストップで対応。建築と不動産、両方の専門知識でお客様の暮らしと事業をサポートします。",
  // OGP用画像(1200x630px推奨)。public/images/og-default.jpg にファイルを配置してください(現状は未配置)。
  ogImage: "/images/og-default.jpg",
  locale: "ja_JP",

  company: {
    name: "株式会社拓工建設",
    nameEn: "Takko Construction Co., Ltd.",
    ceo: "眞鍋 晋次郎",
    postalCode: "〒555-0032",
    prefecture: "大阪府",
    city: "大阪市西淀川区",
    addressLine: "大和田3-1-25",
    fullAddress: "〒555-0032 大阪府大阪市西淀川区大和田3-1-25",
    phoneDisplay: "06-6473-1682",
    phoneHref: "tel:0664731682",
    faxDisplay: "06-6474-1686",
    email: "未公開（お問い合わせフォームをご利用ください）",
    businessHours: "8:30〜17:30",
    holidays: "土曜・日曜・祝日・年末年始",
    constructionLicense: "〇〇県知事許可（般-0）第00000号（建設業許可 未確定）",
    realEstateLicense: "〇〇県知事（0）第00000号（宅地建物取引業免許 未確定）",
    qualifications: [
      "一級建築士（保有資格 未確定）",
      "宅地建物取引士（保有資格 未確定）",
      "1級建築施工管理技士（保有資格 未確定）",
      "既存住宅状況調査技術者（保有資格 未確定）",
    ],
    establishedYear: "昭和31年(1956年)4月",
    capital: "2,000万円",
    employees: "00名（従業員数 未確定）",
    businessDetail: [
      "建築工事の設計・施工（新築・増改築・リフォーム・リノベーション）",
      "不動産の売買仲介・賃貸仲介",
      "不動産の買取",
      "賃貸物件・事業用物件の管理運営",
    ],
  },

  // SNSリンク（後から追加してください。空欄の場合はフッターに表示されません）
  sns: {
    instagram: "",
    facebook: "",
    x: "",
    line: "",
  },

  // 主要キーワード（地域名は一括変換しやすいようここに集約）
  seoKeywords: [
    "〇〇市 リフォーム",
    "〇〇市 新築",
    "〇〇市 リノベーション",
    "〇〇市 建築会社",
    "〇〇市 不動産",
    "〇〇市 不動産売却",
    "〇〇市 不動産買取",
    "〇〇市 賃貸管理",
    "法人 改修工事",
    "店舗 リノベーション",
  ],
};

export const headerNav: NavItem[] = [
  { label: "ホーム", href: "/" },
  {
    label: "個人のお客様",
    href: "/personal",
    children: [
      { label: "住宅リフォーム", href: "/personal/reform" },
      { label: "新築住宅", href: "/personal/newbuild" },
      { label: "住宅リノベーション", href: "/personal/renovation" },
    ],
  },
  {
    label: "法人のお客様",
    href: "/corporate",
    children: [
      { label: "新築工事", href: "/corporate/newbuild" },
      { label: "改修工事", href: "/corporate/renovation-construction" },
      { label: "リノベーション", href: "/corporate/renovation" },
    ],
  },
  {
    label: "不動産",
    href: "/realestate",
    children: [
      { label: "売買", href: "/realestate/sale" },
      { label: "賃貸", href: "/realestate/rent" },
      { label: "買取", href: "/realestate/purchase" },
      { label: "管理", href: "/realestate/management" },
    ],
  },
  { label: "施工事例", href: "/projects" },
  { label: "物件情報", href: "/properties" },
  { label: "コラム", href: "/columns" },
  { label: "会社案内", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "個人のお客様", href: "/personal" },
  { label: "法人のお客様", href: "/corporate" },
  { label: "不動産", href: "/realestate" },
  { label: "コラム", href: "/columns" },
  { label: "施工事例", href: "/projects" },
  { label: "物件情報", href: "/properties" },
  { label: "会社案内", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];
