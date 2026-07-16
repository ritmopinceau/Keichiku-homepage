"use client";

import Link from "next/link";
import { Phone, Mail, Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useMobileMenu } from "./MobileMenuContext";

/**
 * スマートフォン画面下部に固定表示するボタン群（電話 / お問い合わせ / メニュー）。
 * 電話番号は data/siteConfig.ts の company.phoneHref / phoneDisplay を編集すれば反映される。
 */
export default function MobileBottomNav() {
  const { toggle } = useMobileMenu();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/10 grid grid-cols-3">
      <a
        href={siteConfig.company.phoneHref}
        className="flex flex-col items-center justify-center gap-0.5 min-h-[56px] text-charcoal-dark active:bg-greige-light"
      >
        <Phone size={20} aria-hidden />
        <span className="text-[11px] font-medium">電話</span>
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-0.5 min-h-[56px] bg-navy text-white active:bg-navy-light"
      >
        <Mail size={20} aria-hidden />
        <span className="text-[11px] font-medium">お問い合わせ</span>
      </Link>
      <button
        type="button"
        onClick={toggle}
        className="flex flex-col items-center justify-center gap-0.5 min-h-[56px] text-charcoal-dark active:bg-greige-light"
        aria-label="メニューを開く"
      >
        <Menu size={20} aria-hidden />
        <span className="text-[11px] font-medium">メニュー</span>
      </button>
    </div>
  );
}
