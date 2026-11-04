"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions", subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      {title && (
        <div className="text-center mb-8">
          {subtitle && (
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
      )}

      <div className="space-y-4">
        {items.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-[var(--color-primary)]/40 shadow-md shadow-pink-500/5"
                  : "bg-white/80 border-pink-100 hover:border-pink-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                  isOpen ? "text-[var(--color-primary)]" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "bg-[var(--color-primary)] text-white rotate-180"
                      : "bg-pink-50 text-[var(--color-primary)]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 font-light leading-relaxed border-t border-pink-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
