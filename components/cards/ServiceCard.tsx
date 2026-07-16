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
      className="group flex flex-col h-full overflow-hidden rounded-sm bg-white border border-black/5 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-44 md:h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {categoryLabel && (
          <span className="absolute top-3 left-3 bg-white/90 text-charcoal-dark text-[11px] font-semibold px-2.5 py-1 rounded-sm">
            {categoryLabel}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        {englishLabel && <span className="font-display italic text-gold text-xs mb-1">{englishLabel}</span>}
        <h3 className="text-base md:text-lg font-bold text-charcoal-dark mb-2">{title}</h3>
        <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3 mb-4">{description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
          詳しく見る
          <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
