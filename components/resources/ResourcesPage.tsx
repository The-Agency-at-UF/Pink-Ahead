"use client";

import { useState } from "react";

import HeroBanner from "@/components/about/HeroBanner";
import { DARK, PINK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const TABS = ["MAP", "DOCUMENTS", "NEWSLETTERS"] as const;
type Tab = (typeof TABS)[number];

export default function ResourcesPage() {
  const [active, setActive] = useState<Tab>("MAP");

  return (
    <div className="w-full bg-white">
      <HeroBanner title="RESOURCES" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
        <h2
          className="text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]"
          style={{ ...acuminBold, color: DARK }}
        >
          SUBTEXT
        </h2>

        <p
          className="text-[18px] md:text-[20px] lg:text-[24px]"
          style={{
            ...acuminRegular,
            color: DARK,
            letterSpacing: "-0.18px",
            lineHeight: 1.5,
          }}
        >
          {LOREM}
        </p>

        <div
          role="tablist"
          className="mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8"
        >
          {TABS.map((tab) => {
            const selected = tab === active;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab)}
                className="flex items-center justify-center h-[52px] md:h-[64px] lg:h-[74px] px-4
                  cursor-pointer transition-colors duration-150 hover:bg-white! hover:text-[#EC0B8C]!
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC0B8C] focus-visible:ring-offset-2"
                style={{
                  ...acuminBold,
                  fontSize: "clamp(24px, 3vw, 48px)",
                  lineHeight: 1,
                  border: `3px solid ${PINK}`,
                  backgroundColor: selected ? "white" : PINK,
                  color: selected ? PINK : "white",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={active}
          className="mt-8 lg:mt-12 w-full aspect-[16/9]"
          style={{ backgroundColor: DARK }}
        >
          {/* shortcut: documents/newsletters keep the dark placeholder until their content exists */}
          {active === "MAP" && (
            <iframe
              title="Map of the United States"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sUnited+States!6i4"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </section>
    </div>
  );
}
