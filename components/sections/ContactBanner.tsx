import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { contactBannerImage } from "@/data/placeholderImages";

interface ContactBannerProps {
  title?: string;
  description?: string;
}

/**
 * ページ下部に配置する、お問い合わせ誘導セクション。全ページ共通で使用する。
 */
export default function ContactBanner({
  title = "建築・不動産に関することは、お気軽にご相談ください。",
  description = "住宅リフォーム、新築、法人向け工事、不動産の売買・賃貸・買取・管理まで、ご相談内容に合わせて対応いたします。",
}: ContactBannerProps) {
  return (
    <section className="relative bg-charcoal-dark py-16 md:py-20 overflow-hidden">
      <Image
        src={contactBannerImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="relative container-content text-center flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold max-w-2xl leading-snug">{title}</h2>
        <p className="text-white/80 text-sm md:text-base mt-4 max-w-xl leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="min-h-[48px] flex items-center gap-2 px-7 rounded-sm bg-white text-charcoal-dark font-semibold text-sm md:text-base hover:bg-greige transition-colors"
          >
            <Mail size={18} aria-hidden />
            お問い合わせフォーム
          </Link>
          <a
            href={siteConfig.company.phoneHref}
            className="min-h-[48px] flex items-center gap-2 px-7 rounded-sm border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-colors"
          >
            <Phone size={18} aria-hidden />
            電話で相談する（{siteConfig.company.phoneDisplay}）
          </a>
        </div>
      </div>
    </section>
  );
}
