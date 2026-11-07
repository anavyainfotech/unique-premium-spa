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
    <div className="w-full max-w-5xl mx-auto my-12">
      {title && (
        <div className="text-center mb-10">
          {subtitle && (
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-primary)] block mb-2">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight">
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
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-[var(--color-primary)]/40 shadow-sm"
                  : "bg-white border-pink-100 hover:border-pink-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className={`text-sm sm:text-base font-bold transition-colors ${
                  isOpen ? "text-[var(--color-primary)]" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "bg-[var(--color-primary)] text-white rotate-180"
                      : "bg-pink-50 text-[var(--color-primary)]"
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed border-t border-pink-50">
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
