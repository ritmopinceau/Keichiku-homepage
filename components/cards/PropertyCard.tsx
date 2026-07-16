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
      className="group flex flex-col h-full overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={property.mainImage}
          alt={property.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full text-white ${
            property.dealType === "sale" ? "bg-navy" : "bg-gold-dark"
          }`}
        >
          {property.dealType === "sale" ? "売買" : "賃貸"}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-lg font-bold text-charcoal-dark mb-2">{property.name}</h3>
        <p className="flex items-center gap-1.5 text-sm text-charcoal-light mb-4">
          <MapPin size={14} aria-hidden />
          {property.location}
        </p>
        <p className="text-xl font-bold text-navy mb-4">{property.priceLabel}</p>
        <dl className="grid grid-cols-2 gap-y-1.5 text-sm text-charcoal-light mb-6">
          <div className="flex gap-1.5">
            <dt className="text-charcoal-light/70">間取り</dt>
            <dd>{property.layout}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-charcoal-light/70">面積</dt>
            <dd>{property.areaLabel}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy group-hover:gap-3 transition-all">
          詳細を見る
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
