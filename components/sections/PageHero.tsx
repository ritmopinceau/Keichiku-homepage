import Image from "next/image";
import Breadcrumbs, { BreadcrumbItem } from "@/components/layout/Breadcrumbs";

interface PageHeroProps {
  title: string;
  englishLabel?: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * 下層ページ共通のページ見出し(写真+タイトル+パンくず)。
 */
export default function PageHero({ title, englishLabel, description, image, imageAlt, breadcrumbs }: PageHeroProps) {
  return (
    <div className="relative bg-charcoal-dark text-white pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-charcoal-dark/30" />
      <div className="relative container-content">
        <Breadcrumbs items={breadcrumbs} />
        {englishLabel && (
          <p className="font-display italic text-gold-light text-lg md:text-xl mt-8">{englishLabel}</p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight text-balance">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-loose text-white/85">{description}</p>
        )}
      </div>
    </div>
  );
}
