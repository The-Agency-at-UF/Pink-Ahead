"use client";

import { useState } from "react";
import CircleArrowIcon from "@/components/CircleArrowIcon";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

// ── FAQItem ───────────────────────────────────────────────────────────────────

export interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="w-full border-4 transition-all duration-200"
      style={{ borderColor: PINK, backgroundColor: "white" }}
    >
      {/* Question row */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 md:px-10 cursor-pointer min-h-[80px] md:min-h-[113px]"
      >
        <span 
          className="text-[28px] md:text-[36px] lg:text-[48px]"
          style={{ ...acuminBold, color: PINK, lineHeight: 0.83 }}
        >
          {question}
        </span>
        <CircleArrowIcon
          variant="default"
          direction={open ? "up" : "down"}
          size={36}
          aria-label={open ? "Collapse" : "Expand"}
        />
      </button>

      {/* Answer */}
      {open && (
        <>
          {/* Pink divider */}
          <div className="mx-6 md:mx-10" style={{ height: 4, backgroundColor: PINK }} />
          <div className="px-6 md:px-10 py-6 md:py-8">
            <p
              className="text-[18px] md:text-[20px] lg:text-[24px]"
              style={{
                ...acuminRegular,
                color: DARK,
                letterSpacing: "-0.18px",
                lineHeight: 1.5,
              }}
            >
              {answer}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// ── FAQSection ────────────────────────────────────────────────────────────────

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function FAQSection() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
      <h2
        className="text-center mb-8 lg:mb-12 text-[40px] md:text-[52px] lg:text-[64px]"
        style={{ ...acuminBold, color: DARK }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="flex flex-col gap-6">
        <FAQItem question="QUESTION 1" answer={LOREM} />
        <FAQItem question="QUESTION 2" answer={LOREM} defaultOpen />
      </div>
    </section>
  );
}
