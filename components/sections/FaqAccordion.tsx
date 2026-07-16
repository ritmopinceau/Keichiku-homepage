"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

/**
 * よくある質問のアコーディオン。クリック/タップで開閉する。
 */
export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-black/10 border-t border-b border-black/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[48px]"
              >
                <span className="flex gap-3 text-sm md:text-base font-semibold text-charcoal-dark">
                  <span className="text-gold font-display italic">Q</span>
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pl-6"
            >
              <p className="flex gap-3 text-sm text-charcoal-light leading-relaxed">
                <span className="text-navy font-display italic">A</span>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
