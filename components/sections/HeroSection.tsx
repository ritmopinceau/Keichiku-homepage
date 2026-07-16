import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/data/placeholderImages";

/**
 * トップページのファーストビュー。
 * メインビジュアルは data/placeholderImages.ts の heroImages.top を差し替えるだけで変更可能。
 */
export default function HeroSection() {
  return (
    <section className="relative h-[92vh] min-h-[560px] max-h-[880px] w-full overflow-hidden bg-charcoal-dark">
      <Image
        src={heroImages.top}
        alt="住宅街と建築現場、街並みを象徴するイメージ"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-charcoal-dark/30" />

      <div className="relative h-full container-content flex flex-col justify-center pt-16">
        <p className="font-display italic text-gold-light text-lg md:text-2xl mb-4 animate-fadeInUp">
          Architecture &amp; Real Estate
        </p>
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-snug animate-fadeInUp">
          建てる、直す、活かす。
          <br />
          建築と不動産で、未来の価値をつくる。
        </h1>
        <p className="text-white/85 mt-6 text-sm md:text-lg leading-relaxed max-w-2xl animate-fadeInUp">
          住宅から店舗・施設、不動産の売買・賃貸・管理まで。
          <br className="hidden md:block" />
          建物と土地に関するご相談を、ワンストップで承ります。
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
          <Link
            href="/personal"
            className="min-h-[48px] flex items-center px-6 rounded-sm bg-white text-charcoal-dark font-semibold text-sm md:text-base hover:bg-greige transition-colors"
          >
            個人のお客様
          </Link>
          <Link
            href="/corporate"
            className="min-h-[48px] flex items-center px-6 rounded-sm bg-white text-charcoal-dark font-semibold text-sm md:text-base hover:bg-greige transition-colors"
          >
            法人のお客様
          </Link>
          <Link
            href="/realestate"
            className="min-h-[48px] flex items-center px-6 rounded-sm bg-white text-charcoal-dark font-semibold text-sm md:text-base hover:bg-greige transition-colors"
          >
            不動産のご相談
          </Link>
          <Link
            href="/contact"
            className="min-h-[48px] flex items-center px-6 rounded-sm bg-navy text-white font-semibold text-sm md:text-base hover:bg-navy-light transition-colors border border-white/20"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
