import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { footerNav, siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const { sns } = siteConfig;
  const hasSns = sns.instagram || sns.facebook || sns.x;

  return (
    <footer className="bg-charcoal-dark text-white/90 pb-20 lg:pb-0">
      <div className="container-content py-12 md:py-16 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xl font-bold text-white">{siteConfig.siteName}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {siteConfig.company.fullAddress}
            <br />
            TEL: <a href={siteConfig.company.phoneHref} className="hover:text-white">{siteConfig.company.phoneDisplay}</a>
            <br />
            営業時間: {siteConfig.company.businessHours}（定休日: {siteConfig.company.holidays}）
          </p>

          {hasSns && (
            <div className="flex gap-4 mt-6">
              {sns.instagram && (
                <a href={sns.instagram} aria-label="Instagram" className="text-white/70 hover:text-white">
                  <Instagram size={20} />
                </a>
              )}
              {sns.facebook && (
                <a href={sns.facebook} aria-label="Facebook" className="text-white/70 hover:text-white">
                  <Facebook size={20} />
                </a>
              )}
              {sns.x && (
                <a href={sns.x} aria-label="X" className="text-white/70 hover:text-white">
                  <Twitter size={20} />
                </a>
              )}
            </div>
          )}
        </div>

        <nav aria-label="フッターナビゲーション">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <Link href="/privacy" className="hover:text-white/80">
            プライバシーポリシー
          </Link>
          <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}</p>
        </div>
      </div>
    </footer>
  );
}
