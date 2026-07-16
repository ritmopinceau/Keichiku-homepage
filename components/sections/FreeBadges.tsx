import { CheckCircle2 } from "lucide-react";

/** ご相談・現地調査・お見積りが無料であることを伝えるバッジ列。CVページ全般で繰り返し使用する。 */
export default function FreeBadges() {
  const items = ["ご相談無料", "現地調査無料", "お見積り無料"];
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {items.map((label) => (
        <div
          key={label}
          className="flex items-center gap-2 bg-white rounded-full border border-gold/30 shadow-card px-5 py-2.5"
        >
          <CheckCircle2 size={18} className="text-gold-dark" aria-hidden />
          <span className="text-sm md:text-base font-bold text-charcoal-dark">{label}</span>
        </div>
      ))}
    </div>
  );
}
