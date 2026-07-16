import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, TrainFront, Home, Building2, CalendarDays, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactBanner from "@/components/sections/ContactBanner";
import { getPropertyBySlug, properties } from "@/data/properties";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) {
    return buildMetadata({ title: "物件情報", description: "不動産物件の詳細ページです。", path: "/properties" });
  }
  return buildMetadata({
    title: `${property.name}（${property.dealType === "sale" ? "売買" : "賃貸"}）`,
    description: `${property.location}の${property.propertyType}。${property.priceLabel} / ${property.layout} / ${property.areaLabel}。`,
    path: `/properties/${property.slug}`,
  });
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return notFound();

  const dealLabel = property.dealType === "sale" ? "売買" : "賃貸";

  return (
    <>
      <div className="bg-charcoal-dark pt-24 pb-6 md:pt-32">
        <div className="container-content">
          <Breadcrumbs items={[{ label: "物件情報", href: "/properties" }, { label: property.name }]} />
        </div>
      </div>

      <article className="py-10 md:py-16">
        <div className="container-content max-w-4xl">
          <span className={`inline-block text-xs font-semibold text-white px-3 py-1.5 rounded-full mb-4 ${property.dealType === "sale" ? "bg-navy" : "bg-gold-dark"}`}>
            {dealLabel}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-dark mb-3 leading-tight text-balance">{property.name}</h1>
          <p className="flex items-center gap-1.5 text-sm text-charcoal-light mb-6">
            <MapPin size={15} aria-hidden />
            {property.location}
          </p>

          <div className="relative h-64 md:h-[440px] w-full rounded-card overflow-hidden mb-4">
            <Image src={property.mainImage} alt={property.mainImageAlt} fill sizes="(min-width: 768px) 800px, 100vw" className="object-cover" priority />
          </div>

          {property.images.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {property.images.map((image) => (
                <div key={image.src + image.alt} className="relative h-32 sm:h-40 rounded-card overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="bg-navy text-white rounded-card p-7 mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-2xl md:text-3xl font-bold">{property.priceLabel}</p>
            <p className="text-sm text-white/80">{property.layout} / {property.areaLabel}</p>
          </div>

          <dl className="grid sm:grid-cols-2 gap-4 mb-12 bg-greige-light rounded-card p-7">
            <InfoRow icon={TrainFront} label="交通アクセス" value={property.access} />
            <InfoRow icon={Home} label="間取り" value={property.layout} />
            {property.landArea && <InfoRow icon={Building2} label="土地面積" value={property.landArea} />}
            {property.buildingArea && <InfoRow icon={Building2} label="建物面積" value={property.buildingArea} />}
            <InfoRow icon={CalendarDays} label="築年月" value={property.builtDate} />
            <InfoRow icon={Building2} label="構造" value={property.structure} />
          </dl>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">設備</h2>
              <ul className="flex flex-wrap gap-2">
                {property.facilities.map((facility) => (
                  <li key={facility} className="text-xs md:text-sm bg-white border border-black/10 rounded-full px-3.5 py-1.5 text-charcoal-dark">
                    {facility}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">おすすめポイント</h2>
              <ul className="space-y-2">
                {property.points.map((point) => (
                  <li key={point} className="text-base text-charcoal-dark bg-white border border-black/10 rounded-card shadow-card px-5 py-4">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">周辺環境</h2>
              <p className="text-base md:text-lg text-charcoal-light leading-loose">{property.surroundings}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">地図</h2>
              {/* 実装時はここにGoogleマップ等の埋め込みiframeを設置してください */}
              <div className="h-56 md:h-72 rounded-card bg-greige-light border border-black/10 flex flex-col items-center justify-center gap-2 text-charcoal-light">
                <MapPin size={24} aria-hidden />
                <p className="text-sm">地図表示エリア（{property.location}）</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 rounded-btn bg-navy text-white font-semibold text-base hover:bg-navy-light hover:-translate-y-0.5 transition-all"
            >
              この物件について問い合わせる
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </article>

      <ContactBanner />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
      <div>
        <dt className="text-xs text-charcoal-light">{label}</dt>
        <dd className="text-sm font-medium text-charcoal-dark">{value}</dd>
      </div>
    </div>
  );
}
