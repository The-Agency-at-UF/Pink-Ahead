import HeroBanner from "@/components/about/HeroBanner";
import LargeButton from "@/components/LargeButton";
import { DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const HEADERS = [
  { label: "HEADER 1", href: "/care/header1" },
  { label: "HEADER 2" },
  { label: "HEADER 3" },
  { label: "HEADER 4" },
];

export default function CarePage() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

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

        <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* shortcut: headers 2-4 have no destination yet, add an href once those pages exist */}
          {HEADERS.map(({ label, href }) => (
            <LargeButton
              key={label}
              label={label}
              href={href}
              className="max-w-none!"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
