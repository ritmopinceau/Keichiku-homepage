import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactBanner from "@/components/sections/ContactBanner";
import { getService } from "@/data/services";
import { projects } from "@/data/projects";
import { serviceImages, projectImages } from "@/data/placeholderImages";
import { reformWorries, reformTrustPoints, reformMenuItems, reformFlowSteps, reformFaqItems } from "@/data/reformPageContent";
import { buildMetadata } from "@/lib/metadata";

const service = getService("personal", "reform");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.metaDescription, path: "/personal/reform" })
  : undefined;

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

export default function PersonalReformPage() {
  if (!service) return notFound();

  const relatedProjects = projects.filter((p) => p.categoryLabel === service.relatedProjectCategory);

  return (
    <>
      {/* 1. ファーストビュー */}
      <section className="relative min-h-[640px] md:min-h-[760px] w-full overflow-hidden bg-charcoal-dark flex flex-col">
        <Image
          src={serviceImages.personalReform}
          alt="リフォーム後の明るいキッチン"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/55 to-charcoal-dark/25" />

        <div className="relative container-content pt-28 md:pt-36">
          <Breadcrumbs items={[{ label: "個人のお客様", href: "/personal" }, { label: service.title }]} />
        </div>

        <div className="relative container-content flex-1 flex flex-col justify-center pb-20 md:pb-28">
          <p className="font-display italic text-gold-light text-lg md:text-2xl mb-5">Reform</p>
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            住まいのお悩みを、
            <br />
            理想の暮らしへ。
          </h1>
          <p className="text-white/85 mt-7 text-base md:text-lg leading-loose max-w-2xl">
            水まわりから全面リフォームまで。
            <br />
            ご家族の暮らしに合わせた最適なプランをご提案いたします。
          </p>

          <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
            <Link
              href="/contact"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} aria-hidden />
              無料相談はこちら
            </Link>
            <a
              href="#cases"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              施工事例を見る
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* 2. こんなお悩みありませんか */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Concerns" ja="こんなお悩みありませんか？" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reformWorries.map((worry, index) => {
              const IconComponent = getIcon(worry.icon);
              return (
                <Reveal key={worry.label} delayMs={index * 50}>
                  <div className="flex flex-col items-center text-center gap-4 bg-white rounded-card shadow-card border border-black/5 p-7 h-full">
                    <div className="w-14 h-14 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <IconComponent size={26} aria-hidden />
                    </div>
                    <p className="text-base text-charcoal-dark leading-snug">{worry.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="mt-14 text-center text-xl md:text-2xl font-bold text-charcoal-dark">
              そのお悩み、私たちが解決します。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. 安心ポイント */}
      <section className="py-20 md:py-24">
        <div className="container-content">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
            {reformTrustPoints.map((point, index) => {
              const IconComponent = getIcon(point.icon);
              return (
                <Reveal key={point.label} delayMs={index * 50}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                      <IconComponent size={26} aria-hidden />
                    </div>
                    <p className="text-sm md:text-base font-semibold text-charcoal-dark leading-snug">
                      {point.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 対応工事メニュー */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Menu" ja="対応工事メニュー" />
          </Reveal>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {reformMenuItems.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <Reveal key={item.label} delayMs={index * 40}>
                  <div className="flex flex-col items-center text-center gap-4 bg-white rounded-card shadow-card border border-black/5 p-8 h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center shrink-0">
                      <IconComponent size={26} aria-hidden />
                    </div>
                    <p className="font-bold text-charcoal-dark">{item.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 大きな一枚写真 */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[560px] w-full overflow-hidden">
        <Image
          src={projectImages[1]}
          alt="リフォームで生まれ変わった浴室"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/10 to-transparent" />
        <div className="relative h-full container-content flex items-end pb-12 md:pb-16">
          <p className="text-white text-lg md:text-2xl font-display italic">
            ひとつひとつの仕上がりに、こだわりを。
          </p>
        </div>
      </section>

      {/* 5. 施工事例 */}
      {relatedProjects.length > 0 && (
        <section id="cases" className="py-24 md:py-32 lg:py-40 scroll-mt-20">
          <div className="container-content">
            <Reveal>
              <SectionTitle en="Works" ja="施工事例" />
            </Reveal>

            <div className={`grid gap-8 ${relatedProjects.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-xl mx-auto"}`}>
              {relatedProjects.map((project) => (
                <Reveal key={project.slug}>
                  <div className="flex flex-col h-full rounded-card overflow-hidden bg-white border border-black/5 shadow-card">
                    <div className="relative h-72 md:h-80 w-full">
                      <Image
                        src={project.mainImage}
                        alt={project.mainImageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {project.beforeImage && project.afterImage && (
                      <div className="grid grid-cols-2">
                        <div className="relative h-32">
                          <Image src={project.beforeImage} alt={`${project.title} 施工前`} fill sizes="50vw" className="object-cover" />
                          <span className="absolute top-2 left-2 bg-charcoal-dark/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            Before
                          </span>
                        </div>
                        <div className="relative h-32">
                          <Image src={project.afterImage} alt={`${project.title} 施工後`} fill sizes="50vw" className="object-cover" />
                          <span className="absolute top-2 left-2 bg-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            After
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-7 flex flex-col flex-1">
                      <span className="text-sm font-semibold text-gold-dark">{project.categoryLabel}</span>
                      <h3 className="text-lg font-bold text-charcoal-dark mt-2 mb-3 leading-snug">{project.title}</h3>
                      <p className="text-base text-charcoal-light leading-loose line-clamp-2 mb-6">{project.summary}</p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-navy hover:gap-3 transition-all"
                      >
                        詳細を見る
                        <ArrowRight size={16} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/projects"
                className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-navy/30 text-navy font-semibold text-sm md:text-base hover:bg-navy hover:text-white hover:-translate-y-0.5 transition-all"
              >
                もっと施工事例を見る
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 6. リフォームの流れ */}
      <section className="py-24 md:py-32 lg:py-40 bg-charcoal-dark">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Flow" ja="リフォームの流れ" light />
          </Reveal>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {reformFlowSteps.map((step, index) => {
              const IconComponent = getIcon(step.icon);
              const isRowEnd = (index + 1) % 4 === 0;
              return (
                <li key={step.step} className="relative">
                  <Reveal delayMs={index * 60} className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-gold-light flex items-center justify-center">
                      <IconComponent size={26} aria-hidden />
                    </div>
                    <p className="font-display italic text-gold-light text-sm">{`0${step.step}`}</p>
                    <p className="text-white font-bold text-sm md:text-base leading-snug">{step.title}</p>
                  </Reveal>
                  {!isRowEnd && (
                    <Icons.ChevronRight
                      size={20}
                      aria-hidden
                      className="hidden md:block absolute top-6 -right-6 text-white/30"
                    />
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mt-12 text-sm text-white/60 leading-relaxed text-center">
            ※ 内容により流れが一部異なる場合があります。詳しくはお問い合わせ時にご案内します。
          </p>
        </div>
      </section>

      {/* 7. よくある質問 */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="FAQ" ja="よくある質問" />
          </Reveal>
          <FaqAccordion items={reformFaqItems} />
        </div>
      </section>

      {/* 8. お問い合わせへの誘導 */}
      <ContactBanner
        title="住まいのお悩み、まずはお気軽にご相談ください。"
        description="リフォームの規模に関わらず、経験豊富なスタッフが丁寧にご対応いたします。"
      />
    </>
  );
}
