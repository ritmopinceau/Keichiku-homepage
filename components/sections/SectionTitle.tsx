interface SectionTitleProps {
  en: string;
  ja: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

/**
 * セクション見出し。英字(スタイリッシュな装飾)+日本語見出しの組み合わせ。
 */
export default function SectionTitle({ en, ja, description, align = "center", light = false }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-14`}>
      <span
        className={`font-display italic tracking-wide text-sm md:text-base mb-2 ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {en}
      </span>
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-charcoal-dark"
        }`}
      >
        {ja}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-sm md:text-base leading-relaxed ${light ? "text-white/80" : "text-charcoal-light"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
