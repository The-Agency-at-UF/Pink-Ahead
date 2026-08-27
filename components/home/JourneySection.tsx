import Image from "next/image";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

interface StepCardProps {
  src: string;
  alt: string;
  step: string;
  subtitle: string;
  blurb: string;
}

function StepCard({ src, alt, step, subtitle, blurb }: StepCardProps) {
  return (
    <div className="group relative overflow-hidden flex-1 min-h-[280px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[600px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top sm:object-top"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Pink overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: PINK, opacity: 0.5 }}
      />
      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4 md:group-hover:-translate-y-6">
        <p
          style={{
            ...acuminBold,
            fontSize: "clamp(22px, 3vw, 48px)",
            color: "white",
            lineHeight: "normal",
          }}
        >
          {step}
        </p>
        <p
          style={{
            ...acuminRegular,
            fontSize: "clamp(14px, 1.6vw, 24px)",
            color: "white",
            letterSpacing: "-0.18px",
            lineHeight: "normal",
          }}
        >
          {subtitle}
        </p>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p
            className="overflow-hidden"
            style={{
              ...acuminRegular,
              fontSize: "clamp(12px, 1.2vw, 18px)",
              color: "white",
              letterSpacing: "-0.18px",
              lineHeight: "1.4",
            }}
          >
            {blurb}
          </p>
        </div>
      </div>
    </div>
  );
}

const STEPS: StepCardProps[] = [
  {
    src: "/assets/Step1_Image.png",
    alt: "Step 1: Care",
    step: "STEP 1: CARE",
    subtitle: "Caring for yourself comes first.",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "/assets/Step2_Image.png",
    alt: "Step 2: Resources",
    step: "STEP 2: RESOURCES",
    subtitle: "Knowing more means worrying less.",
    blurb:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/assets/Step3_Image.png",
    alt: "Step 3: Community",
    step: "STEP 3: COMMUNITY",
    subtitle: "No one should face it alone.",
    blurb:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function JourneySection() {
  return (
    <section className="w-full bg-white pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20">
      <h2
        className="text-center mb-6 md:mb-10"
        style={{
          ...acuminBold,
          fontSize: "clamp(36px, 6vw, 64px)",
          color: DARK,
        }}
      >
        YOUR JOURNEY
      </h2>

      {/* Stack on mobile/sm, row on md+ */}
      <div className="flex flex-col sm:flex-row gap-1 px-4 sm:px-8 md:gap-4 lg:gap-10 md:px-14 lg:px-20">
        {STEPS.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
    </section>
  );
}
