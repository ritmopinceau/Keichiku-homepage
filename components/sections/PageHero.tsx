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
    <div className="relative bg-charcoal-dark text-white pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/70 to-charcoal-dark/40" />
      <div className="relative container-content">
        <Breadcrumbs items={breadcrumbs} />
        {englishLabel && (
          <p className="font-display italic text-gold-light text-base md:text-lg mt-6">{englishLabel}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/80">{description}</p>
        )}
      </div>
    </div>
  );
}
