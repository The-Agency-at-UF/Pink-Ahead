"use client";

import { useState } from "react";

import { acuminBold } from "@/app/styles/tokens";
interface LargeButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function LargeButton({
  label = "BUTTON",
  onClick,
  className = "",
  disabled = false,
}: LargeButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center
        h-[52px] w-full max-w-[240px] px-6
        sm:h-[64px] sm:max-w-[300px]
        md:h-[74px] md:max-w-[360px]
        lg:h-[83px] lg:max-w-[400px]
        cursor-pointer transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC0B8C] focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={
        hovered
          ? { backgroundColor: "white", border: "3px solid #EC0B8C" }
          : { backgroundColor: "#EC0B8C", border: "3px solid #EC0B8C" }
      }
    >
      <span
        className="leading-none whitespace-nowrap"
        style={{
          ...acuminBold,
          fontSize: "clamp(28px, 4.5vw, 64px)",
          color: hovered ? "#EC0B8C" : "white",
        }}
      >
        {label}
      </span>
    </button>
  );
}
