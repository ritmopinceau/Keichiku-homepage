import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import type { IntlContent } from "@/data/intlContent";
import { heroImages } from "@/data/placeholderImages";
import { siteConfig } from "@/data/siteConfig";

/**
 * /en, /zh, /vi のトップページ共通テンプレート。
 * data/intlContent.ts の該当ロケール分を渡すだけで表示内容が切り替わる。
 */
export default function IntlHomeTemplate({ content }: { content: IntlContent }) {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-charcoal-dark flex flex-col">
        <Image src={heroImages.top} alt="" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-charcoal-dark/20" />
        <div className="relative container-content flex-1 flex flex-col justify-center pt-16">
          <p className="font-display italic text-gold-light text-lg md:text-xl mb-4">{siteConfig.siteNameEn}</p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-balance max-w-3xl">
            {content.home.heroTitle}
          </h1>
          <p className="text-white/85 mt-6 text-base md:text-lg leading-loose max-w-2xl">{content.home.heroSubtitle}</p>
          <div className="mt-8">
            <Link
              href={`/${content.locale}/contact`}
              className="min-h-[52px] inline-flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} aria-hidden />
              {content.home.heroCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-dark text-center mb-12">
            {content.home.businessSectionTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.home.businesses.map((biz) => (
              <Link
                key={biz.href}
                href={biz.href}
                className="group flex flex-col h-full bg-white rounded-card shadow-card border border-black/5 p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-charcoal-dark text-lg mb-3">{biz.title}</h3>
                <p className="text-sm text-charcoal-light leading-loose mb-6">{biz.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all">
                  {content.home.moreLabel}
                  <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-greige-light">
        <div className="container-content max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-charcoal-light leading-loose">{content.home.noticeBody}</p>
        </div>
      </section>
    </>
  );
}
