import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { PropertyItem } from "@/data/types";

interface PropertyCardProps {
  property: PropertyItem;
}

/**
 * 不動産物件カード。
 */
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-sm bg-white border border-black/5 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={property.mainImage}
          alt={property.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-sm text-white ${
            property.dealType === "sale" ? "bg-navy" : "bg-gold-dark"
          }`}
        >
          {property.dealType === "sale" ? "売買" : "賃貸"}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-charcoal-dark mb-1">{property.name}</h3>
        <p className="flex items-center gap-1 text-xs text-charcoal-light mb-3">
          <MapPin size={13} aria-hidden />
          {property.location}
        </p>
        <p className="text-lg font-bold text-navy mb-3">{property.priceLabel}</p>
        <dl className="grid grid-cols-2 gap-y-1 text-xs text-charcoal-light mb-4">
          <div className="flex gap-1">
            <dt className="text-charcoal-light/70">間取り</dt>
            <dd>{property.layout}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="text-charcoal-light/70">面積</dt>
            <dd>{property.areaLabel}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
          詳細を見る
          <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
