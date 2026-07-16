import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BusinessEntryCardProps {
  englishLabel: string;
  headline: string;
  description: string;
  items: string[];
  buttonLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

/**
 * トップページの「3つの事業への入口」大型カード。
 */
export default function BusinessEntryCard({
  englishLabel,
  headline,
  description,
  items,
  buttonLabel,
  href,
  image,
  imageAlt,
}: BusinessEntryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-sm bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative h-56 md:h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-dark/20" />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <span className="font-display italic text-gold text-sm mb-1">{englishLabel}</span>
        <h3 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-3">{headline}</h3>
        <p className="text-sm text-charcoal-light leading-relaxed mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {items.map((item) => (
            <li key={item} className="text-xs bg-greige-light text-charcoal-dark px-3 py-1 rounded-full">
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">
          {buttonLabel}
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
