"use client";

import { useState } from "react";

// Inline SVG paths (circle fill + arrow chevron)
const CIRCLE_PATH =
  "M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z";
const ARROW_PATH = "M14 20H26M26 20L20 14M26 20L20 26";

/**
 * Circular arrow icon with three visual variants:
 *
 * variant="default"  → white-filled circle, pink-stroked arrow
 *                      Use on pink/dark backgrounds.
 *                      Hover (when onClick provided): swaps to pink fill, white arrow.
 *
 * variant="filled"   → pink-filled circle, white-stroked arrow
 *                      Use on light/white backgrounds.
 *                      Hover (when onClick provided): swaps to white fill, pink arrow.
 *
 * variant="outline"  → no fill, white-stroked circle + white arrow (transparent bg)
 *                      Use as a ghost icon over imagery.
 *                      Hover (when onClick provided): fills white, pink arrow.
 *
 * direction: "right" (default) | "left" | "down" | "up"
 * size: rendered px size, default 36
 */

interface CircleArrowIconProps {
  variant?: "default" | "filled" | "outline";
  direction?: "right" | "left" | "down" | "up";
  size?: number;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

const ROTATE: Record<string, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

export default function CircleArrowIcon({
  variant = "default",
  direction = "right",
  size,
  onClick,
  className = "",
  "aria-label": ariaLabel = "Navigate",
}: CircleArrowIconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = hovered && !!onClick;
  const rotation = ROTATE[direction] ?? 0;

  let circleFill: string;
  let circleStroke: string | undefined;
  let arrowStroke: string;

  if (variant === "default") {
    circleFill = isActive ? "#EC0B8C" : "white";
    circleStroke = isActive ? undefined : "#EC0B8C";
    arrowStroke = isActive ? "white" : "#EC0B8C";
  } else if (variant === "filled") {
    circleFill = isActive ? "white" : "#EC0B8C";
    circleStroke = undefined;
    arrowStroke = isActive ? "#EC0B8C" : "white";
  } else {
    // outline — transparent circle, white stroke
    circleFill = isActive ? "white" : "none";
    circleStroke = "white";
    arrowStroke = isActive ? "#EC0B8C" : "white";
  }

  // When no explicit size is given, scale responsively via CSS classes
  const hasFixedSize = size !== undefined;
  const sizeStyle = hasFixedSize ? { width: size, height: size } : undefined;
  const sizeClass = hasFixedSize
    ? ""
    : "w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10";

  const Component = onClick ? "button" : "div";
  const buttonProps = onClick ? { type: "button" as const } : {};

  return (
    <Component
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={onClick ? ariaLabel : undefined}
      aria-hidden={onClick ? undefined : "true"}
      className={`flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC0B8C] focus-visible:ring-offset-2 ${onClick ? "cursor-pointer" : "cursor-default pointer-events-none"} ${sizeClass} ${className}`}
      style={sizeStyle}
      {...buttonProps}
    >
      <svg
        fill="none"
        viewBox="0 0 40 40"
        width={size ?? "100%"}
        height={size ?? "100%"}
        overflow="visible"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-hidden="true"
      >
        <path
          d={CIRCLE_PATH}
          fill={circleFill}
          stroke={circleStroke}
          strokeWidth={circleStroke ? "4" : undefined}
        />
        <path
          d={ARROW_PATH}
          stroke={arrowStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
    </Component>
  );
}
