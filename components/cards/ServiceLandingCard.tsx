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
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white border border-black/5 rounded-card shadow-card overflow-hidden ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="relative h-64 md:h-full md:min-h-[380px] w-full">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-8 md:p-10">
        <span className="font-display italic text-gold text-base">{service.englishLabel}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mt-2 mb-4 leading-snug">{service.title}</h3>
        <p className="text-base md:text-lg text-charcoal-light leading-loose mb-7">{service.cardDescription}</p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
          {service.workScopeItems.slice(0, 6).map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm md:text-base text-charcoal-dark">
              <CheckCircle2 size={16} className="text-gold shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center gap-2 min-h-[48px] px-7 rounded-btn bg-navy text-white text-base font-semibold shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:bg-navy-light transition-all"
        >
          詳しく見る
          <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
