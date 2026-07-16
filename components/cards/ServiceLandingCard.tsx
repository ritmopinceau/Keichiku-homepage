import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/data/types";

interface ServiceLandingCardProps {
  service: ServiceDetail;
  href: string;
  reverse?: boolean;
}

/**
 * 個人/法人/不動産の各トップページで使う、大きな写真付きサービスカード。
 * 対応例リストとあわせて詳細ページへの導線を表示する。
 */
export default function ServiceLandingCard({ service, href, reverse = false }: ServiceLandingCardProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center bg-white border border-black/5 rounded-sm overflow-hidden ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="relative h-56 md:h-full md:min-h-[320px] w-full">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="font-display italic text-gold text-sm">{service.englishLabel}</span>
        <h3 className="text-xl md:text-2xl font-bold text-charcoal-dark mt-1 mb-3">{service.title}</h3>
        <p className="text-sm md:text-base text-charcoal-light leading-relaxed mb-5">{service.cardDescription}</p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
          {service.workScopeItems.slice(0, 6).map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-xs md:text-sm text-charcoal-dark">
              <CheckCircle2 size={14} className="text-gold shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-sm bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
        >
          詳しく見る
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
