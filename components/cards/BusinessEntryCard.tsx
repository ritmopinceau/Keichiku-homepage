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
      className="group relative flex flex-col overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-60 md:h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-dark/15" />
      </div>
      <div className="flex flex-col flex-1 p-8 md:p-9">
        <span className="font-display italic text-gold text-base mb-2">{englishLabel}</span>
        <h3 className="text-2xl font-bold text-charcoal-dark mb-4 leading-snug">{headline}</h3>
        <p className="text-base text-charcoal-light leading-loose mb-6">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-8">
          {items.map((item) => (
            <li key={item} className="text-sm bg-greige-light text-charcoal-dark px-4 py-1.5 rounded-full">
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy group-hover:gap-3 transition-all">
          {buttonLabel}
          <ArrowRight size={18} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
