export type BusinessCategory = "personal" | "corporate" | "realestate";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  category: BusinessCategory;
  categoryLabel: string;
  title: string;
  englishLabel: string;
  shortSummary: string;
  cardDescription: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string[];
  painPoints: string[];
  workScopeTitle: string;
  workScopeItems: string[];
  strengths: StrengthItem[];
  flowNote?: string;
  faqIds: string[];
  relatedProjectCategory: string;
  metaDescription: string;
}

export interface ProjectCase {
  slug: string;
  title: string;
  businessCategory: BusinessCategory;
  categoryLabel: string;
  constructionType: string;
  location: string;
  summary: string;
  mainImage: string;
  mainImageAlt: string;
  images: { src: string; alt: string }[];
  buildingType: string;
  workDetail: string;
  period: string;
  customerRequest: string;
  proposal: string;
  points: string[];
  beforeImage?: string;
  afterImage?: string;
  staffComment: string;
}

export type PropertyDealType = "sale" | "rent";

export interface PropertyItem {
  slug: string;
  dealType: PropertyDealType;
  name: string;
  location: string;
  priceLabel: string;
  priceValue: number;
  layout: string;
  areaLabel: string;
  buildingAgeLabel: string;
  propertyType: string;
  mainImage: string;
  mainImageAlt: string;
  images: { src: string; alt: string }[];
  access: string;
  landArea?: string;
  buildingArea?: string;
  builtDate: string;
  structure: string;
  facilities: string[];
  points: string[];
  surroundings: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type NewsCategory = "お知らせ" | "施工事例" | "物件情報" | "イベント" | "休業案内";

export interface NewsItem {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  href?: string;
}
