import HeroBanner from "@/components/about/HeroBanner";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

// Hook positions measured from the Figma frame (left tab is 357x200 at full width)
const HOOK_X = [28, 146, 265];
const HOOK_Y = [40, 120];
const HOOK = 42;

// An open bra clasp: the hook side runs in from the left edge, the plain eye side from the right
function BraClaspBand() {
  return (
    <div className="w-full flex justify-between" aria-hidden="true">
      <div
        className="relative w-[40%] max-w-[357px] aspect-[357/200] rounded-r-xl lg:rounded-r-[18px]"
        style={{ backgroundColor: PINK }}
      >
        <svg viewBox="0 0 357 200" className="absolute inset-0 w-full h-full">
          {HOOK_X.flatMap((x) =>
            HOOK_Y.map((y) => (
              <path
                key={`${x}-${y}`}
                d={`M${x} ${y} H${x + 28} Q${x + HOOK} ${y} ${x + HOOK} ${y + 14} V${y + 28} Q${x + HOOK} ${y + HOOK} ${x + 28} ${y + HOOK} H${x}`}
                fill="none"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            ))
          )}
        </svg>
      </div>
      <div
        className="w-[43%] max-w-[384px] aspect-[384/200] rounded-l-xl lg:rounded-l-[18px]"
        style={{ backgroundColor: PINK }}
      />
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-24 px-6 md:px-10 lg:px-20">
        <h2
          className="text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]"
          style={{ ...acuminBold, color: DARK }}
        >
          SUPPORT: NOT THE KIND WITH UNDERWIRE
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
          A breast cancer diagnosis comes with a lot of things no one asks for: appointments,
          questions, medical jargon and more time in waiting rooms than anyone should have to
          spend. We believe a supportive community should be part of the package, too.
        </p>
      </section>

      <BraClaspBand />

      <div className="h-16 lg:h-24" />
    </div>
  );
}
