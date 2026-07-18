"use client";

import Image from "next/image";
import { useState } from "react";
import CircleArrowIcon from "@/components/CircleArrowIcon";

import { PINK } from "@/app/styles/tokens";


const SLIDES = [
  {
    src: "/assets/Hero_PinkAhead.png",
    alt: "Pink Ahead hero image",
  },
  {
    src: "/assets/Hero_PinkAhead.png",
    alt: "Pink Ahead hero image 2",
  },
  {
    src: "/assets/Hero_PinkAhead.png",
    alt: "Pink Ahead hero image 3",
  },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const total = SLIDES.length;
  const isFirst = slide === 0;
  const isLast = slide === total - 1;

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Image */}
      <Image
        src={SLIDES[slide].src}
        alt={SLIDES[slide].alt}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Pink overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: PINK, opacity: 0.5 }}
      />

      {/* TCOY R — bottom left, clamped so it never reaches the dots */}
      <div className="absolute bottom-14 left-4 md:bottom-20 md:left-14 lg:left-20">
        <Image
          src="/assets/TCOY R.svg"
          alt="Take Care Of You R"
          width={720}
          height={239}
          className="h-auto w-[clamp(140px,38vw,550px)]"
          priority
        />
      </div>

      {/* Left arrow */}
      {!isFirst && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-6">
          <CircleArrowIcon
            variant="outline"
            direction="left"
            size={36}
            aria-label="Previous slide"
            onClick={() => setSlide((s) => Math.max(0, s - 1))}
          />
        </div>
      )}

      {/* Right arrow */}
      {!isLast && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:right-6">
          <CircleArrowIcon
            variant="outline"
            direction="right"
            size={36}
            aria-label="Next slide"
            onClick={() => setSlide((s) => Math.min(total - 1, s + 1))}
          />
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full transition-opacity duration-150"
            style={{ backgroundColor: "white", opacity: i === slide ? 1 : 0.45 }}
          />
        ))}
      </div>
    </section>
  );
}
