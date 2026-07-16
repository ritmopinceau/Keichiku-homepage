import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="container-content py-20 md:py-32 text-center">
      <p className="font-display italic text-gold text-lg mb-2">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-4">
        お探しのページが見つかりませんでした
      </h1>
      <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-xl mx-auto mb-10">
        ページが削除されたか、URLが変更・入力間違いになっている可能性があります。
        下記のリンクから、お探しの情報をご確認ください。
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-[48px] px-7 rounded-sm bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors"
        >
          <Home size={16} aria-hidden />
          トップページへ戻る
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 min-h-[48px] px-7 rounded-sm border border-navy text-navy font-semibold text-sm hover:bg-navy/5 transition-colors"
        >
          <Phone size={16} aria-hidden />
          お問い合わせ
        </Link>
      </div>

      <div className="max-w-md mx-auto text-left">
        <p className="flex items-center gap-2 text-sm font-semibold text-charcoal-dark mb-3">
          <Search size={16} aria-hidden />
          よく見られているページ
        </p>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li><Link href="/personal" className="text-navy hover:underline">個人のお客様</Link></li>
          <li><Link href="/corporate" className="text-navy hover:underline">法人のお客様</Link></li>
          <li><Link href="/realestate" className="text-navy hover:underline">不動産</Link></li>
          <li><Link href="/projects" className="text-navy hover:underline">施工事例</Link></li>
          <li><Link href="/properties" className="text-navy hover:underline">物件情報</Link></li>
          <li><Link href="/company" className="text-navy hover:underline">会社案内</Link></li>
        </ul>
        <p className="text-xs text-charcoal-light/70 mt-6">
          お困りの際はお電話でもお問い合わせいただけます：{siteConfig.company.phoneDisplay}
        </p>
      </div>
    </div>
  );
}
