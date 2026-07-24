import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import type { IntlContent } from "@/data/intlContent";
import { siteConfig } from "@/data/siteConfig";

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Building2;
}

/**
 * /en/contact, /zh/contact, /vi/contact の共通テンプレート。
 * 問い合わせフォーム自体は日本語版(/contact)のみのため、連絡先情報の提示と
 * 日本語フォームへの導線を用意する構成にしている。
 */
export default function IntlContactTemplate({ content }: { content: IntlContent }) {
  const rows = [
    { icon: Phone, label: content.contact.phoneLabel, value: siteConfig.company.phoneDisplay, href: siteConfig.company.phoneHref },
    { icon: getIcon("Printer"), label: content.contact.faxLabel, value: siteConfig.company.faxDisplay },
    { icon: MapPin, label: content.contact.addressLabel, value: siteConfig.company.fullAddress },
    { icon: Clock, label: content.contact.hoursLabel, value: siteConfig.company.businessHours },
    { icon: getIcon("CalendarOff"), label: content.contact.closedLabel, value: content.contact.closedValue },
  ];

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-content max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-6">{content.contact.title}</h1>
        <p className="text-base text-charcoal-light leading-loose mb-10">{content.contact.intro}</p>

        <dl className="space-y-4 mb-10">
          {rows.map((row) => (
            <div key={row.label} className="flex items-start gap-4 bg-greige-light rounded-card px-6 py-5 border border-black/5">
              <row.icon size={20} className="text-navy shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="text-xs text-charcoal-light">{row.label}</dt>
                {row.href ? (
                  <dd className="text-base font-semibold text-charcoal-dark">
                    <a href={row.href} className="hover:text-navy transition-colors">
                      {row.value}
                    </a>
                  </dd>
                ) : (
                  <dd className="text-base font-semibold text-charcoal-dark">{row.value}</dd>
                )}
              </div>
            </div>
          ))}
        </dl>

        <div className="bg-white border border-black/10 rounded-card p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-charcoal-light leading-loose">{content.contact.formNote}</p>
          <Link
            href="/contact"
            className="min-h-[48px] flex items-center gap-2 px-6 rounded-btn bg-navy text-white font-semibold text-sm shrink-0 hover:bg-navy-light hover:-translate-y-0.5 transition-all"
          >
            {content.contact.formButtonLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
