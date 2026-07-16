import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  englishLabel?: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  categoryLabel?: string;
}

/**
 * サービス紹介カード(写真+短い説明文+「詳しく見る」ボタン)。
 */
export default function ServiceCard({
  title,
  englishLabel,
  description,
  image,
  imageAlt,
  href,
  categoryLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 md:h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {categoryLabel && (
          <span className="absolute top-4 left-4 bg-white/90 text-charcoal-dark text-xs font-semibold px-3 py-1.5 rounded-full">
            {categoryLabel}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-7">
        {englishLabel && <span className="font-display italic text-gold text-sm mb-1.5">{englishLabel}</span>}
        <h3 className="text-lg font-bold text-charcoal-dark mb-3">{title}</h3>
        <p className="text-base text-charcoal-light leading-loose line-clamp-3 mb-6">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy group-hover:gap-3 transition-all">
          詳しく見る
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
