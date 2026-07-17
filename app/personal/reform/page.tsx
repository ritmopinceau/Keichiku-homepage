import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail, Phone, MessageCircle, Star, Square } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FreeBadges from "@/components/sections/FreeBadges";
import { getService } from "@/data/services";
import { getSubServicesByParent } from "@/data/subServices";
import { projects } from "@/data/projects";
import type { ProjectCase } from "@/data/types";
import { reformLifestyleImages, testimonialImages, staffPhotoImages, contactBannerImage } from "@/data/placeholderImages";
import { siteConfig } from "@/data/siteConfig";
import {
  reformWorries,
  reformTrustPoints,
  reformFlowSteps,
  reformFaqItems,
  reformChoiceReasons,
  reformAchievements,
  reformTestimonials,
  reformStaffMembers,
  reformSubsidyItems,
  reformMenuOrder,
  reformConcernLinks,
} from "@/data/reformPageContent";
import { buildMetadata } from "@/lib/metadata";

const service = getService("personal", "reform");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.metaDescription, path: "/personal/reform" })
  : undefined;

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

function hasBeforeAfter(project: ProjectCase): project is ProjectCase & { beforeImage: string; afterImage: string } {
  return Boolean(project.beforeImage && project.afterImage);
}

export default function PersonalReformPage() {
  if (!service) return notFound();

  const beforeAfterProjects = projects.filter(hasBeforeAfter);
  const reformSubServices = [...getSubServicesByParent("personal", "reform")].sort((a, b) => {
    const rankA = reformMenuOrder.indexOf(a.slug);
    const rankB = reformMenuOrder.indexOf(b.slug);
    return (rankA === -1 ? reformMenuOrder.length : rankA) - (rankB === -1 ? reformMenuOrder.length : rankB);
  });

  return (
    <>
      {/* 1. ファーストビュー */}
      <section className="relative min-h-[640px] md:min-h-[780px] w-full overflow-hidden bg-charcoal-dark flex flex-col">
        <Image
          src={reformLifestyleImages.heroFamily}
          alt="リビングでくつろぐ家族"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/30 to-transparent" />

        <div className="relative container-content pt-28 md:pt-36">
          <Breadcrumbs items={[{ label: "個人のお客様", href: "/personal" }, { label: service.title }]} />
        </div>

        <div className="relative container-content flex-1 flex flex-col justify-end pb-16 md:pb-20">
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

      {/* 無料バッジ(1回目) */}
      <section className="py-8 md:py-10 bg-white border-b border-black/5">
        <div className="container-content">
          <FreeBadges />
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

      {/* 4. 選ばれる理由 */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Why Us" ja="当社が選ばれる理由" />
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {reformChoiceReasons.map((reason, index) => {
              const IconComponent = getIcon(reason.icon);
              return (
                <Reveal
                  key={reason.title}
                  delayMs={index * 80}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)]"
                >
                  <div className="flex flex-col items-center text-center gap-3 bg-white rounded-card shadow-card border border-black/5 p-7 h-full">
                    <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                      <IconComponent size={24} aria-hidden />
                    </div>
                    <p className="font-display italic text-gold text-sm">{`0${index + 1}`}</p>
                    <h3 className="font-bold text-charcoal-dark leading-snug">{reason.title}</h3>
                    <p className="text-sm text-charcoal-light leading-loose">{reason.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 実績を数字で見せる */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Achievements" ja="数字で見る実績" light />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
            {reformAchievements.map((item, index) => (
              <Reveal key={item.label} delayMs={index * 60}>
                <div className="text-center">
                  <p className="font-display italic text-gold-light text-4xl md:text-5xl">{item.value}</p>
                  <p className="text-white/75 text-sm mt-3">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 対応工事メニュー(サービスハブ) */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="Menu"
              ja="対応工事メニュー"
              description="お住まいのお悩みや、ご希望の工事内容からお選びください。各サービスページでは施工事例・費用目安・工事の流れ・補助金・よくある質問をご紹介しています。まずはお気軽にご覧ください。"
            />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {reformSubServices.map((sub, index) => (
              <Reveal key={sub.slug} delayMs={index * 30}>
                <Link
                  href={`/personal/reform/${sub.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="relative h-32 md:h-36 w-full overflow-hidden">
                    <Image
                      src={sub.heroImage}
                      alt={sub.heroImageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-charcoal-dark text-sm md:text-base mb-1.5 leading-snug">
                      {sub.title}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-light mb-4">{sub.cardDescription}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
                      詳しく見る
                      <ArrowRight size={14} aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* お住まいのお悩みから探す */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="Find by Concern"
              ja="お住まいのお悩みから探す"
              description="工事名が分からなくても大丈夫です。あてはまるお悩みから、あわせてご覧いただけます。"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {reformConcernLinks.map((concern, index) => (
              <Reveal key={concern.slug} delayMs={index * 40}>
                <Link
                  href={`/personal/reform/${concern.slug}`}
                  className="group flex items-center gap-3 bg-white border border-black/10 rounded-card shadow-card px-5 py-4 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-navy/30 transition-all"
                >
                  <Square size={18} className="text-navy shrink-0" aria-hidden />
                  <span className="text-sm md:text-base text-charcoal-dark flex-1">{concern.label}</span>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="text-navy shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 大きな一枚写真 */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[560px] w-full overflow-hidden">
        <Image
          src={reformLifestyleImages.livingRoom}
          alt="リフォームで生まれ変わった、くつろぎのリビング"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/10 to-transparent" />
        <div className="relative h-full container-content flex items-end pb-12 md:pb-16">
          <p className="text-white text-lg md:text-2xl font-display italic">
            毎日を過ごす場所だから、心地よさにこだわりたい。
          </p>
        </div>
      </section>

      {/* 7. リフォームの流れ */}
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

      {/* 8. 施工事例 / Before・After */}
      {beforeAfterProjects.length > 0 && (
        <section id="cases" className="py-24 md:py-32 lg:py-40 scroll-mt-20">
          <div className="container-content">
            <Reveal>
              <SectionTitle
                en="Before / After"
                ja="施工事例で見る、暮らしの変化"
                description="写真がすべてを物語ります。実際の施工事例をご覧ください。"
              />
            </Reveal>

            <div className={`grid gap-10 ${beforeAfterProjects.length > 1 ? "lg:grid-cols-2" : "max-w-2xl mx-auto"}`}>
              {beforeAfterProjects.map((project) => (
                <Reveal key={project.slug}>
                  <div className="rounded-card overflow-hidden bg-white border border-black/5 shadow-card">
                    <div className="relative h-64 md:h-72 w-full">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} 施工前`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-charcoal-dark/85 text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-full">
                        BEFORE
                      </span>
                    </div>
                    <div className="flex justify-center bg-charcoal-dark py-2">
                      <Icons.ChevronDown size={22} className="text-gold-light" aria-hidden />
                    </div>
                    <div className="relative h-64 md:h-72 w-full">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} 施工後`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-gold text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-full">
                        AFTER
                      </span>
                    </div>
                    <div className="p-7">
                      <span className="text-sm font-semibold text-gold-dark">{project.categoryLabel}</span>
                      <h3 className="text-lg font-bold text-charcoal-dark mt-2 mb-3 leading-snug">{project.title}</h3>
                      <p className="text-base text-charcoal-light leading-loose line-clamp-2 mb-6">{project.summary}</p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-base font-semibold text-navy hover:gap-3 transition-all"
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

      {/* 無料バッジ(2回目) */}
      <section className="py-16 md:py-20 bg-greige-light">
        <div className="container-content flex flex-col items-center text-center gap-6">
          <p className="text-lg md:text-xl font-bold text-charcoal-dark">
            ご相談・現地調査・お見積りは、何度でも無料です。
          </p>
          <FreeBadges />
          <Link
            href="/contact"
            className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-navy text-white font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} aria-hidden />
            無料相談はこちら
          </Link>
        </div>
      </section>

      {/* 9. お客様の声 */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Voice" ja="お客様の声" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reformTestimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delayMs={index * 80}>
                <div className="flex flex-col h-full bg-white rounded-card shadow-card border border-black/5 p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonialImages[index % testimonialImages.length]}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal-dark">{testimonial.name}</p>
                      <span className="text-xs font-semibold text-gold-dark">{testimonial.workType}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        aria-hidden
                        className={starIndex < testimonial.rating ? "fill-gold text-gold" : "text-black/15"}
                      />
                    ))}
                  </div>
                  <p className="text-base text-charcoal-light leading-loose">{testimonial.comment}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 担当者紹介 */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="Our Team"
              ja="担当者紹介"
              description="お問い合わせの前に、少しでも安心していただけたら。担当スタッフをご紹介します。"
            />
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {reformStaffMembers.map((staff, index) => (
              <Reveal key={staff.name} delayMs={index * 80}>
                <div className="flex flex-col items-center text-center bg-white rounded-card shadow-card border border-black/5 p-8 h-full">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-5">
                    <Image
                      src={staffPhotoImages[index % staffPhotoImages.length]}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-charcoal-dark text-lg">{staff.name}</h3>
                  <p className="text-sm font-semibold text-gold-dark mt-1">{staff.role}</p>
                  <p className="text-xs text-charcoal-light mt-2">得意分野：{staff.specialty}</p>
                  <p className="text-sm text-charcoal-light leading-loose mt-4">{staff.comment}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. 補助金相談 */}
      <section id="subsidy" className="py-24 md:py-32 lg:py-40 scroll-mt-20">
        <div className="container-content">
          <Reveal>
            <SectionTitle
              en="Subsidy"
              ja="補助金相談も承ります"
              description="お住まいのリフォームでは、国や自治体の補助金制度を活用できる場合があります。対象となるかどうかも含めてご相談ください。"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reformSubsidyItems.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <Reveal key={item.title} delayMs={index * 60}>
                  <div className="flex flex-col items-center text-center gap-4 bg-greige-light rounded-card p-7 h-full">
                    <div className="w-14 h-14 rounded-full bg-white text-navy flex items-center justify-center shrink-0 shadow-card">
                      <IconComponent size={24} aria-hidden />
                    </div>
                    <h3 className="font-bold text-charcoal-dark">{item.title}</h3>
                    <p className="text-sm text-charcoal-light leading-loose">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-10 text-sm text-charcoal-light text-center leading-relaxed">
            ※ 制度内容・対象要件・支給額は年度や自治体により異なります。詳しくはお問い合わせ時にご案内いたします。
          </p>
        </div>
      </section>

      {/* 12. お問い合わせへの誘導(強化版CTA) */}
      <section className="relative bg-charcoal-dark py-24 md:py-32 overflow-hidden">
        <Image src={contactBannerImage} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="relative container-content text-center flex flex-col items-center">
          <div className="mb-8">
            <FreeBadges />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-snug text-balance">
            住まいのお悩み、まずはお気軽にご相談ください。
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-6 max-w-xl leading-loose">
            リフォームの規模に関わらず、経験豊富なスタッフが丁寧にご対応いたします。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} aria-hidden />
              無料相談はこちら
            </Link>
            <a
              href={siteConfig.company.phoneHref}
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <Phone size={18} aria-hidden />
              電話で相談する（{siteConfig.company.phoneDisplay}）
            </a>
            {siteConfig.sns.line && (
              <a
                href={siteConfig.sns.line}
                className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-[#06C755] text-white font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle size={18} aria-hidden />
                LINEで相談する
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 13. よくある質問 */}
      <section className="py-24 md:py-32 lg:py-40 bg-greige-light">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="FAQ" ja="よくある質問" />
          </Reveal>
          <FaqAccordion items={reformFaqItems} />
          <p className="mt-10 text-center text-base text-charcoal-light">
            その他ご不明な点がございましたら、
            <Link href="/contact" className="text-navy font-semibold underline underline-offset-4">
              お気軽にお問い合わせください
            </Link>
            。
          </p>
        </div>
      </section>
    </>
  );
}
