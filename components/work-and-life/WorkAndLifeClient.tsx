"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Phone, Mail, ArrowRight, Building2 } from "lucide-react";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/sections/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import WorkLifeMap from "@/components/sections/WorkLifeMap";
import { workLifeContent, workLifeLangLabels, type WorkLifeLang } from "@/data/workAndLife";
import { workLifeImages, propertyImages } from "@/data/placeholderImages";
import { siteConfig } from "@/data/siteConfig";

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

const langOrder: WorkLifeLang[] = ["ja", "easyJa", "vi"];

export default function WorkAndLifeClient() {
  const [lang, setLang] = useState<WorkLifeLang>("ja");
  const content = workLifeContent[lang];

  return (
    <>
      {/* 言語切り替え */}
      <div className="sticky top-16 md:top-[76px] z-40 bg-white border-b border-black/5">
        <div className="container-content py-2.5 flex items-center justify-center gap-1">
          {langOrder.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`min-h-[36px] px-4 rounded-full text-sm font-medium transition-colors ${
                lang === code ? "bg-navy text-white" : "text-charcoal-dark hover:bg-greige-light"
              }`}
            >
              {workLifeLangLabels[code]}
            </button>
          ))}
        </div>
      </div>

      {/* 1. ファーストビュー */}
      <section className="relative min-h-[560px] md:min-h-[680px] w-full overflow-hidden bg-charcoal-dark flex flex-col">
        <Image
          src={workLifeImages.osakaStreet}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/40 to-charcoal-dark/20" />
        <div className="relative container-content flex-1 flex flex-col justify-center py-24">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-balance max-w-3xl">
            {content.hero.title}
          </h1>
          <p className="text-gold-light font-semibold text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            {content.hero.catchphrase}
          </p>
          <p className="text-white/85 mt-5 text-base md:text-lg leading-loose max-w-2xl">{content.hero.body}</p>
          <div className="mt-9 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#areas"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              {content.hero.ctaPrimary}
              <ArrowRight size={16} aria-hidden />
            </a>
            <Link
              href="/realestate/rent"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              {content.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 地図 */}
      <section id="areas" className="py-20 md:py-28 scroll-mt-24">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Where is Nishiyodogawa?" ja={content.mapSection.heading} description={content.mapSection.body} />
          </Reveal>
          <div className="max-w-xl mx-auto bg-greige-light rounded-card p-6 md:p-8">
            <WorkLifeMap centralArea={content.centralArea.items} dayTrip={content.dayTrip.items} centerLabel="西淀川区" />
          </div>
          <p className="mt-6 text-sm text-charcoal-light text-center max-w-xl mx-auto">{content.mapSection.footnote}</p>
        </div>
      </section>

      {/* 3. 大阪の中心部に近い */}
      <section className="py-20 md:py-28 bg-greige-light">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Central Osaka" ja={content.centralArea.heading} />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.centralArea.items.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <Reveal key={item.title} delayMs={index * 60}>
                  <div className="flex flex-col h-full bg-white rounded-card shadow-card border border-black/5 p-6">
                    <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
                      <IconComponent size={22} aria-hidden />
                    </div>
                    <h3 className="font-bold text-charcoal-dark">{item.title}</h3>
                    <p className="text-xs font-bold text-gold-dark mt-1 mb-3">{item.time}</p>
                    <p className="text-sm text-charcoal-light leading-loose">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 大きな一枚写真 */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <Image src={workLifeImages.kyotoStreet} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-charcoal-dark/5 to-transparent" />
      </section>

      {/* 4. 休日には京都・神戸・奈良へ */}
      <section className="py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Kansai Day Trips" ja={content.dayTrip.heading} />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.dayTrip.items.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <Reveal key={item.title} delayMs={index * 60}>
                  <div className="flex flex-col h-full bg-greige-light rounded-card p-6">
                    <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center mb-4 shadow-card">
                      <IconComponent size={22} aria-hidden />
                    </div>
                    <h3 className="font-bold text-charcoal-dark">{item.title}</h3>
                    <p className="text-xs font-bold text-gold-dark mt-1 mb-3">{item.time}</p>
                    <p className="text-sm text-charcoal-light leading-loose">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-charcoal-light text-center">{content.dayTrip.footnote}</p>
        </div>
      </section>

      {/* 5. 毎日の生活にも便利 */}
      <section className="py-20 md:py-28 bg-greige-light">
        <div className="container-content grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative h-64 md:h-80 w-full rounded-card overflow-hidden">
              <Image src={workLifeImages.marketProduce} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <SectionTitle en="Daily Life" ja={content.dailyLife.heading} align="left" description={content.dailyLife.body} />
            <div className="grid grid-cols-2 gap-3">
              {content.dailyLife.items.map((item) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-card border border-black/5 px-4 py-3">
                    <IconComponent size={18} className="text-navy shrink-0" aria-hidden />
                    <span className="text-sm text-charcoal-dark">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. ベトナムの方にも安心 */}
      <section className="py-20 md:py-28">
        <div className="container-content grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <SectionTitle en="Housing Support" ja={content.reassurance.heading} align="left" description={content.reassurance.body} />
            <ul className="space-y-3 mb-4">
              {content.reassurance.examples.map((example) => (
                <li key={example} className="flex items-start gap-3 bg-greige-light rounded-card px-5 py-4 text-sm text-charcoal-dark">
                  <Icons.CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" aria-hidden />
                  {example}
                </li>
              ))}
            </ul>
            <p className="text-xs text-charcoal-light leading-relaxed">{content.reassurance.disclaimer}</p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="relative h-64 md:h-80 w-full rounded-card overflow-hidden">
              <Image src={propertyImages[0]} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. 工場・企業の担当者へ */}
      <section className="py-20 md:py-28 bg-charcoal-dark">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="For Employers" ja={content.forCompanies.heading} light description={content.forCompanies.body} />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {content.forCompanies.examples.map((example, index) => (
              <Reveal key={example} delayMs={index * 40}>
                <p className="flex items-start gap-3 bg-white/5 border border-white/15 rounded-card px-5 py-4 text-sm text-white/90">
                  <Building2 size={16} className="text-gold-light shrink-0 mt-0.5" aria-hidden />
                  {example}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link
              href="/corporate"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              {content.forCompanies.ctaPrimary}
            </Link>
            <Link
              href="/realestate/rent"
              className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              {content.forCompanies.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. 住まい探しの流れ */}
      <section className="py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <SectionTitle en="Process" ja={content.process.heading} />
          </Reveal>
          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.process.steps.map((step, index) => (
              <Reveal key={step} delayMs={index * 60}>
                <li className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm text-charcoal-dark leading-snug">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. よくある質問 */}
      <section className="py-20 md:py-28 bg-greige-light">
        <div className="container-content max-w-3xl">
          <Reveal>
            <SectionTitle en="FAQ" ja={content.faq.heading} />
          </Reveal>
          <FaqAccordion
            items={content.faq.items.map((item, index) => ({
              id: `work-life-faq-${index}`,
              question: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </section>

      {/* 10. 最後のお問い合わせ */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-content text-center flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold max-w-2xl leading-snug text-balance">
            {content.finalCta.heading}
          </h2>
          <p className="text-white/80 text-base mt-5 max-w-xl leading-loose">{content.finalCta.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/realestate/rent"
              className="min-h-[52px] flex items-center gap-2 px-7 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Mail size={16} aria-hidden />
              {content.finalCta.ctaHousing}
            </Link>
            <Link
              href="/corporate"
              className="min-h-[52px] flex items-center gap-2 px-7 rounded-btn bg-gold text-white font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Building2 size={16} aria-hidden />
              {content.finalCta.ctaCompany}
            </Link>
            <a
              href={siteConfig.company.phoneHref}
              className="min-h-[52px] flex items-center gap-2 px-7 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <Phone size={16} aria-hidden />
              {content.finalCta.ctaPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
