"use client";

import { useState } from "react";
import CircleArrowIcon from "@/components/CircleArrowIcon";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

interface ChecklistItemProps {
  title: string;
  paragraphs: React.ReactNode[];
}

// Accordion styled like FAQItem, with a self-check box beside the title
export default function ChecklistItem({ title, paragraphs }: ChecklistItemProps) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full border-4" style={{ borderColor: PINK, backgroundColor: "white" }}>
      <div className="flex items-center gap-6 md:gap-10 px-6 md:px-10 min-h-[100px] md:min-h-[130px]">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          aria-label={title}
          onClick={() => setChecked((c) => !c)}
          className="flex-shrink-0 w-12 h-12 md:w-[68px] md:h-[68px] border-4 flex items-center justify-center cursor-pointer"
          style={{ borderColor: DARK }}
        >
          {checked && (
            <svg viewBox="0 0 60 60" className="w-full h-full" fill="none" aria-hidden="true">
              <path d="M8 30L24 46L54 12" stroke={PINK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex-1 flex items-center justify-between gap-4 self-stretch cursor-pointer text-left"
        >
          <span
            className="text-[28px] md:text-[36px] lg:text-[48px]"
            style={{ ...acuminBold, color: DARK, lineHeight: 0.83 }}
          >
            {title}
          </span>
          <CircleArrowIcon variant="default" direction={open ? "up" : "down"} size={36} />
        </button>
      </div>

      {open && (
        <>
          <div className="mx-6 md:mx-10" style={{ height: 4, backgroundColor: PINK }} />
          <div className="px-6 md:px-10 py-6 md:py-8 space-y-4">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[18px] md:text-[20px] lg:text-[24px]"
                style={{ ...acuminRegular, color: DARK, letterSpacing: "-0.18px", lineHeight: 1.5 }}
              >
                {para}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
