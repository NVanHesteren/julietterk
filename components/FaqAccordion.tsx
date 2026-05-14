"use client";

import { useState } from "react";
import BookButton from "./BookButton";

export interface FaqItem {
  q: string;
  a: string;
  showBook?: boolean;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
          <button
            type="button"
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {item.q}
          </button>
          <div className="faq-a">
            {item.a}
            {item.showBook && (
              <BookButton variant="text" showArrow={false} className="!text-sage !text-[15px] !p-0 !mt-4 !border-b !border-sage/50 !rounded-none block">
                Book a consultation
              </BookButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
