import Image from "next/image";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const GRAY = "#4A4A4A";

interface StepCardProps {
  src: string;
  alt: string;
  step: string;
  subtitle: string;
}

function StepCard({ src, alt, step, subtitle }: StepCardProps) {
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
        className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0"
        style={{ backgroundColor: PINK, opacity: 0.5 }}
      />
      {/* Gray overlay (hover only) */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-50"
        style={{ backgroundColor: GRAY }}
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
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p
            className="overflow-hidden"
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
        </div>
      </div>
    </div>
  );
}

const STEPS: StepCardProps[] = [
  {
    src: "/assets/Step1_Image.png",
    alt: "Step 1: You Come First",
    step: "STEP 1: YOU COME FIRST",
    subtitle: "Caring for yourself comes first.",
  },
  {
    src: "/assets/Step2_Image.png",
    alt: "Step 2: Know More, Fear Less",
    step: "STEP 2: KNOW MORE, FEAR LESS",
    subtitle:
      "The more you understand your breast health, the more confident you'll feel taking action.",
  },
  {
    src: "/assets/Step3_Image.png",
    alt: "Step 3: Show Up",
    step: "STEP 3: SHOW UP",
    subtitle: "No one should face breast cancer alone.",
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
