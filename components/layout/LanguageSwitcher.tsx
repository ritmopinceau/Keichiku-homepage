"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import type { Locale } from "@/data/intlContent";

export const languageLabels: Record<Locale | "ja", string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
};

/**
 * 現在地に対応する言語版のURLを組み立てる。
 * /en, /zh, /vi は トップ・会社概要・お問い合わせ の3ページのみ用意しているため、
 * それ以外の日本語ページからは各言語のトップページへ、
 * /en/company 等の翻訳ページ間では対応するページへ切り替わる。
 */
export function resolveLocalePath(pathname: string, target: Locale | "ja"): string {
  const match = pathname.match(/^\/(en|zh|vi)(\/.*)?$/);
  let subPath = "/";
  if (match) {
    subPath = match[2] || "/";
  } else if (pathname === "/company" || pathname === "/contact") {
    subPath = pathname;
  }
  if (target === "ja") return subPath;
  return subPath === "/" ? `/${target}` : `/${target}${subPath}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const match = pathname.match(/^\/(en|zh|vi)(\/.*)?$/);
  const current: Locale | "ja" = (match?.[1] as Locale | undefined) ?? "ja";

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-charcoal-dark hover:text-navy transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Globe size={16} aria-hidden />
        {languageLabels[current]}
        <ChevronDown size={14} aria-hidden className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      {open && (
        <div className="absolute top-full right-0 min-w-[160px] bg-white border border-black/5 shadow-card-hover rounded-btn py-2 animate-fadeInUp">
          {(["ja", "en", "zh", "vi"] as const).map((lang) => (
            <Link
              key={lang}
              href={resolveLocalePath(pathname, lang)}
              className={`block px-4 py-2.5 text-sm hover:bg-greige-light hover:text-navy transition-colors ${
                current === lang ? "font-bold text-navy" : "text-charcoal-dark"
              }`}
            >
              {languageLabels[lang]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
