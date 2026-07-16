import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building2, Hammer, CalendarClock, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactBanner from "@/components/sections/ContactBanner";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return buildMetadata({ title: "施工事例", description: "施工事例の詳細ページです。", path: "/projects" });
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <>
      <div className="bg-charcoal-dark pt-24 pb-6 md:pt-32">
        <div className="container-content">
          <Breadcrumbs items={[{ label: "施工事例", href: "/projects" }, { label: project.title }]} />
        </div>
      </div>

      <article className="py-10 md:py-16">
        <div className="container-content max-w-4xl">
          <span className="text-xs font-semibold text-gold-dark">{project.categoryLabel}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-dark mt-3 mb-8 leading-tight text-balance">{project.title}</h1>

          <div className="relative h-64 md:h-[440px] w-full rounded-card overflow-hidden mb-4">
            <Image src={project.mainImage} alt={project.mainImageAlt} fill sizes="(min-width: 768px) 800px, 100vw" className="object-cover" priority />
          </div>

          {project.images.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {project.images.map((image) => (
                <div key={image.src + image.alt} className="relative h-32 sm:h-40 rounded-card overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <dl className="grid sm:grid-cols-2 gap-4 mb-12 bg-greige-light rounded-card p-7">
            <div className="flex gap-3">
              <MapPin size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="text-xs text-charcoal-light">施工場所</dt>
                <dd className="text-sm font-medium text-charcoal-dark">{project.location}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Building2 size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="text-xs text-charcoal-light">建物種別</dt>
                <dd className="text-sm font-medium text-charcoal-dark">{project.buildingType}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Hammer size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="text-xs text-charcoal-light">工事内容</dt>
                <dd className="text-sm font-medium text-charcoal-dark">{project.workDetail}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <CalendarClock size={18} className="text-navy shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="text-xs text-charcoal-light">工期</dt>
                <dd className="text-sm font-medium text-charcoal-dark">{project.period}</dd>
              </div>
            </div>
          </dl>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">お客様のご要望</h2>
              <p className="text-base md:text-lg text-charcoal-light leading-loose">{project.customerRequest}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">当社からのご提案</h2>
              <p className="text-base md:text-lg text-charcoal-light leading-loose">{project.proposal}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">施工のポイント</h2>
              <ul className="space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="text-base text-charcoal-dark bg-white border border-black/10 rounded-card shadow-card px-5 py-4">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {(project.beforeImage || project.afterImage) && (
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4 border-l-4 border-navy pl-4">施工前・施工後</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.beforeImage && (
                    <div>
                      <p className="text-xs font-semibold text-charcoal-light mb-2">施工前</p>
                      <div className="relative h-48 rounded-card overflow-hidden">
                        <Image src={project.beforeImage} alt={`${project.title} 施工前`} fill sizes="50vw" className="object-cover" />
                      </div>
                    </div>
                  )}
                  {project.afterImage && (
                    <div>
                      <p className="text-xs font-semibold text-charcoal-light mb-2">施工後</p>
                      <div className="relative h-48 rounded-card overflow-hidden">
                        <Image src={project.afterImage} alt={`${project.title} 施工後`} fill sizes="50vw" className="object-cover" />
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            <section className="bg-navy/5 rounded-card p-7">
              <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-4">担当者コメント</h2>
              <p className="text-base md:text-lg text-charcoal-light leading-loose">{project.staffComment}</p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 rounded-btn bg-navy text-white font-semibold text-base hover:bg-navy-light hover:-translate-y-0.5 transition-all"
            >
              この事例と似た内容で相談する
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </article>

      <ContactBanner />
    </>
  );
}
