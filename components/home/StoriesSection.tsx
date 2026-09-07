"use client";

import { useState } from "react";
import SmallButton from "@/components/SmallButton";
import CircleArrowIcon from "@/components/CircleArrowIcon";
import { DARK, acuminBold } from "@/app/styles/tokens";

const TOTAL_STORIES = 2;

export default function StoriesSection() {
  const [mobileIdx, setMobileIdx] = useState(0);

  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16">
      <h2
        className="text-center mb-6 md:mb-10"
        style={{
          ...acuminBold,
          fontSize: "clamp(36px, 6vw, 64px)",
          color: DARK,
        }}
      >
        YOUR STORIES
      </h2>

      {/* ── Mobile: single card with arrows on the sides ── */}
      <div className="md:hidden relative mx-14">
        {/* Video card */}
        <div
          className="relative w-full aspect-video"
          style={{ backgroundColor: DARK }}
        >
          <div className="absolute bottom-4 left-4">
            <SmallButton label="WATCH" />
          </div>
        </div>

        {/* Left arrow — overlaps the left margin */}
        <div className="absolute -left-[44px] top-0 aspect-video w-full flex items-center justify-start pointer-events-none">
          <div className="pointer-events-auto">
            <CircleArrowIcon
              variant="default"
              direction="left"
              size={34}
              aria-label="Previous story"
              onClick={() =>
                setMobileIdx((s) => Math.max(0, s - 1))
              }
            />
          </div>
        </div>

        {/* Right arrow — overlaps the right margin */}
        <div className="absolute -right-[44px] top-0 aspect-video w-full flex items-center justify-end pointer-events-none">
          <div className="pointer-events-auto">
            <CircleArrowIcon
              variant="default"
              direction="right"
              size={34}
              aria-label="Next story"
              onClick={() =>
                setMobileIdx((s) => Math.min(TOTAL_STORIES - 1, s + 1))
              }
            />
          </div>
        </div>
      </div>

      {/* ── md+: two cards side by side with outer-edge arrows ── */}
      <div className="hidden md:block relative px-20">
        <div className="flex gap-6 lg:gap-10">
          {[0, 1].map((i) => (
            <div key={i} className="flex-1 flex flex-col">
              <div
                className="relative h-[240px] lg:h-[349px]"
                style={{ backgroundColor: DARK }}
              >
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <SmallButton label="WATCH" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <div className="absolute left-[22px] top-0 h-[240px] lg:h-[349px] flex items-center">
          <CircleArrowIcon
            variant="default"
            direction="left"
            size={36}
            aria-label="Previous story"
            onClick={() => {}}
          />
        </div>

        {/* Right arrow */}
        <div className="absolute right-[22px] top-0 h-[240px] lg:h-[349px] flex items-center">
          <CircleArrowIcon
            variant="default"
            direction="right"
            size={36}
            aria-label="Next story"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
