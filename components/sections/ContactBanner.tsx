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
    <section className="relative bg-charcoal-dark py-24 md:py-32 overflow-hidden">
      <Image
        src={contactBannerImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="relative container-content text-center flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-snug text-balance">{title}</h2>
        <p className="text-white/80 text-base md:text-lg mt-6 max-w-xl leading-loose">{description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn bg-white text-charcoal-dark font-semibold text-sm md:text-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} aria-hidden />
            お問い合わせフォーム
          </Link>
          <a
            href={siteConfig.company.phoneHref}
            className="min-h-[52px] flex items-center gap-2 px-8 rounded-btn border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <Phone size={18} aria-hidden />
            電話で相談する（{siteConfig.company.phoneDisplay}）
          </a>
        </div>
      </div>
    </section>
  );
}
