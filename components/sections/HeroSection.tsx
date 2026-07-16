import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/data/placeholderImages";

/**
 * トップページのファーストビュー。
 * メインビジュアルは data/placeholderImages.ts の heroImages.top を差し替えるだけで変更可能。
 */
export default function HeroSection() {
  return (
    <section className="relative h-[92vh] min-h-[600px] max-h-[900px] w-full overflow-hidden bg-charcoal-dark">
      <Image
        src={heroImages.top}
        alt="住宅街と建築現場、街並みを象徴するイメージ"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/45 to-charcoal-dark/20" />

      <div className="relative h-full container-content flex flex-col justify-center pt-16">
        <p className="font-display italic text-gold-light text-lg md:text-2xl mb-5 animate-fadeInUp">
          Architecture &amp; Real Estate
        </p>
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance animate-fadeInUp">
          建てる、直す、活かす。
          <br />
          建築と不動産で、未来の価値をつくる。
        </h1>
        <p className="text-white/85 mt-7 text-base md:text-lg leading-loose max-w-2xl animate-fadeInUp">
          住宅から店舗・施設、不動産の売買・賃貸・管理まで。
          <br className="hidden md:block" />
          建物と土地に関するご相談を、ワンストップで承ります。
        </p>

        <div className="mt-10 md:mt-12 flex flex-wrap gap-3 md:gap-4">
          <Link
            href="/personal"
            className="min-h-[52px] flex items-center px-7 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            個人のお客様
          </Link>
          <Link
            href="/corporate"
            className="min-h-[52px] flex items-center px-7 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            法人のお客様
          </Link>
          <Link
            href="/realestate"
            className="min-h-[52px] flex items-center px-7 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            不動産のご相談
          </Link>
          <Link
            href="/contact"
            className="min-h-[52px] flex items-center px-7 rounded-btn bg-navy text-white font-semibold text-sm md:text-base border border-white/15 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:bg-navy-light transition-all"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
