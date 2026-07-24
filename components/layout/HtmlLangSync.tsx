"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * /en, /zh, /vi 配下では <html lang> をそのページの言語に合わせる。
 * ルートレイアウトの <html lang="ja"> は変更せず、副作用として上書きするだけなので
 * 他の全ページの表示・構造には影響しない。
 */
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname.startsWith("/en")
      ? "en"
      : pathname.startsWith("/zh")
        ? "zh"
        : pathname.startsWith("/vi")
          ? "vi"
          : "ja";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
