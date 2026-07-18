import Image from "next/image";
import imgWomen from "@/public/group-three-happy-women-different-260nw-2669729125 1.png";
import SmallButton from "@/components/SmallButton";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function OurStorySection() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-20 pb-0 px-6 md:px-10 lg:px-20">
      <h2
        className="text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]"
        style={{ ...acuminBold, color: DARK }}
      >
        OUR STORY
      </h2>

      {/* Two-column: text left, photo right */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Text — fills remaining width */}
        <div className="flex-1 space-y-6">
          {[LOREM, LOREM, LOREM.slice(0, 220)].map((para, i) => (
            <p
              key={i}
              className="text-[18px] md:text-[20px] lg:text-[24px]"
              style={{
                ...acuminRegular,
                color: DARK,
                letterSpacing: "-0.18px",
                lineHeight: 1.5,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Photo — max 420x564 px */}
        <div
          className="w-full max-w-[420px] aspect-[420/564] flex-shrink-0 overflow-hidden relative"
        >
          <Image
            src={imgWomen}
            alt="Three women smiling"
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
      </div>

      {/* Video placeholder with WATCH button inside */}
      <div
        className="mt-12 relative h-[300px] md:h-[500px] lg:h-[720px]"
        style={{ backgroundColor: DARK }}
      >
        <div className="absolute bottom-10 left-10">
          <SmallButton label="WATCH" />
        </div>
      </div>
    </section>
  );
}
