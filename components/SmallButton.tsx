"use client";

import { useState } from "react";

import { acuminBold } from "@/app/styles/tokens";
interface SmallButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function SmallButton({
  label = "BUTTON",
  onClick,
  className = "",
  disabled = false,
}: SmallButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center
        h-[44px] px-6
        sm:h-[56px] sm:px-8
        md:h-[64px] md:px-9
        lg:h-[74px] lg:px-10
        cursor-pointer transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC0B8C] focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={
        hovered
          ? { backgroundColor: "white", border: "5px solid #EC0B8C" }
          : { backgroundColor: "#EC0B8C", border: "5px solid #EC0B8C" }
      }
    >
      <span
        className="leading-none whitespace-nowrap"
        style={{
          ...acuminBold,
          fontSize: "clamp(24px, 3.5vw, 48px)",
          color: hovered ? "#EC0B8C" : "white",
        }}
      >
        {label}
      </span>
    </button>
  );
}
