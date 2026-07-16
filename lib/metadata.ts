import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/**
 * 各ページの title / description / canonical / OGP をまとめて生成するヘルパー。
 * ページ側では buildMetadata({ title, description, path }) を呼ぶだけで済むようにする。
 */
export function buildMetadata({ title, description, path, image }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    // ルートレイアウトの title.template (%s｜サイト名) が自動的に付与するため、ここでは付けない
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title}｜${siteConfig.siteName}`,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [{ url: ogImage }],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title}｜${siteConfig.siteName}`,
      description,
      images: [ogImage],
    },
  };
}
