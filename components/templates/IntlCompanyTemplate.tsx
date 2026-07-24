import type { IntlContent } from "@/data/intlContent";

/**
 * /en/company, /zh/company, /vi/company の共通テンプレート。
 */
export default function IntlCompanyTemplate({ content }: { content: IntlContent }) {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-content max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-10">{content.company.title}</h1>

        <dl className="divide-y divide-black/10 border-t border-b border-black/10 mb-14">
          {content.company.fields.map((field) => (
            <div key={field.label} className="grid sm:grid-cols-3 gap-1 sm:gap-4 py-4">
              <dt className="text-sm font-semibold text-charcoal-light">{field.label}</dt>
              <dd className="sm:col-span-2 text-base text-charcoal-dark">{field.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-5">{content.company.businessTitle}</h2>
        <ul className="space-y-3">
          {content.company.businessItems.map((item) => (
            <li
              key={item}
              className="text-base text-charcoal-dark bg-greige-light rounded-card px-5 py-4 border border-black/5"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
