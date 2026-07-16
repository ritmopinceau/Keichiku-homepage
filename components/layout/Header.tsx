"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { headerNav, siteConfig } from "@/data/siteConfig";
import type { NavItem } from "@/data/types";
import { useMobileMenu } from "./MobileMenuContext";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isOpen: mobileOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu();
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setOpenMenu(null);
    closeMobile();
    setMobileSubOpen(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/5 shadow-sm">
      <div className="container-content flex items-center justify-between h-16 md:h-[76px]">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${siteConfig.siteName} トップページ`}>
          <span className="text-lg md:text-xl font-bold tracking-wide text-charcoal-dark">
            {siteConfig.siteName}
          </span>
        </Link>

        {/* PC nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="グローバルナビゲーション">
          {headerNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal-dark hover:text-navy transition-colors"
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                onClick={(e) => {
                  // 下層メニューを持つ項目は、未表示の状態でのクリック(主にタッチ操作)では
                  // まずメニューを開くだけにし、表示済みであればそのままリンク先へ遷移させる。
                  if (item.children && openMenu !== item.label) {
                    e.preventDefault();
                    setOpenMenu(item.label);
                  }
                }}
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={14} aria-hidden className={openMenu === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                )}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-0 min-w-[200px] bg-white border border-black/5 shadow-lg rounded-sm py-2 animate-fadeInUp">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-charcoal-dark hover:bg-greige-light hover:text-navy transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={siteConfig.company.phoneHref} className="flex items-center gap-1.5 text-sm text-charcoal-dark hover:text-navy">
            <Phone size={16} aria-hidden />
            <span className="font-semibold">{siteConfig.company.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-navy-light transition-colors"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-charcoal-dark"
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="container-content py-2" aria-label="モバイルナビゲーション">
            {headerNav.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isOpen={mobileSubOpen === item.label}
                onToggle={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)}
              />
            ))}
            <div className="py-4">
              <a
                href={siteConfig.company.phoneHref}
                className="flex items-center justify-center gap-2 border border-navy text-navy font-semibold py-3 rounded-sm mb-3 min-h-[48px]"
              >
                <Phone size={18} aria-hidden />
                電話で相談する（{siteConfig.company.phoneDisplay}）
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-navy text-white font-semibold py-3 rounded-sm min-h-[48px]"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (!item.children) {
    return (
      <Link href={item.href} className="flex items-center min-h-[48px] text-base font-medium text-charcoal-dark border-b border-black/5">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-black/5">
      <div className="flex items-center w-full min-h-[48px] text-base font-medium text-charcoal-dark">
        <Link href={item.href} className="flex-1">
          {item.label}
        </Link>
        <button
          type="button"
          className="p-3 -mr-3"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`${item.label}の下層メニューを${isOpen ? "閉じる" : "開く"}`}
        >
          <ChevronDown size={18} aria-hidden className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>
      </div>
      {isOpen && (
        <div className="pb-2 pl-4">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-center min-h-[44px] text-sm text-charcoal-light"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
