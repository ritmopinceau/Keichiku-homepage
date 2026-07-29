import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

/**
 * 「西淀川区で働く・暮らす」ページへの案内枠。トップページ・不動産・法人ページに設置する。
 */
export default function WorkLifeCallout() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-content">
        <div className="bg-navy rounded-card p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-white/10 text-gold-light flex items-center justify-center shrink-0">
              <Globe size={22} aria-hidden />
            </div>
            <div>
              <p className="text-white font-bold text-base md:text-lg mb-1.5">
                外国人スタッフの採用・住居でお困りの企業様へ
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                西淀川区の暮らしや交通、外国人の方のお部屋探しについてご案内しています。
              </p>
            </div>
          </div>
          <Link
            href="/work-and-life"
            className="min-h-[48px] flex items-center gap-2 px-6 rounded-btn bg-white text-charcoal-dark font-semibold text-sm shrink-0 hover:-translate-y-0.5 transition-all"
          >
            西淀川区で働く・暮らす
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
