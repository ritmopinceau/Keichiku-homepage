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
    <div className={`flex flex-col ${alignClass} mb-14 md:mb-20`}>
      <span
        className={`font-display italic tracking-wide text-base md:text-lg mb-3 ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {en}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance ${
          light ? "text-white" : "text-charcoal-dark"
        }`}
      >
        {ja}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base md:text-lg leading-loose ${
            light ? "text-white/80" : "text-charcoal-light"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
