import HeroBanner from "@/components/about/HeroBanner";
import CareReferences from "@/components/care/CareReferences";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const h2Class = "text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]";
const h3Class = "mb-4 leading-none [text-box:trim-start_cap_alphabetic] text-[28px] md:text-[36px] lg:text-[48px]";
const bodyClass = "text-[18px] md:text-[20px] lg:text-[24px]";
const bodyStyle: React.CSSProperties = {
  ...acuminRegular,
  color: DARK,
  letterSpacing: "-0.18px",
  lineHeight: 1.5,
};

// Pink block standing in for a photo until real images are supplied
function ImagePlaceholder({ aspect }: { aspect: string }) {
  return <div className={`w-full ${aspect}`} style={{ backgroundColor: PINK }} />;
}

interface TestBlockProps {
  title: string;
  tagline: React.ReactNode;
  bullets: React.ReactNode[];
  closing?: React.ReactNode;
  images: string[];
  imageSide: "left" | "right";
}

function TestBlock({ title, tagline, bullets, closing, images, imageSide }: TestBlockProps) {
  return (
    <div
      className={`flex flex-col gap-8 lg:gap-12 ${imageSide === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col gap-8">
        {images.map((aspect, i) => (
          <ImagePlaceholder key={i} aspect={aspect} />
        ))}
      </div>

      <div className="flex-1">
        <h3 className={h3Class} style={{ ...acuminBold, color: DARK }}>
          {title}
        </h3>
        <p className={`${bodyClass} mb-4`} style={bodyStyle}>
          {tagline}
        </p>
        <ul className="list-disc pl-6 md:pl-8 space-y-2">
          {bullets.map((item, i) => (
            <li key={i} className={bodyClass} style={bodyStyle}>
              {item}
            </li>
          ))}
        </ul>
        {closing && <div className="mt-6 space-y-4">{closing}</div>}
      </div>
    </div>
  );
}

const TESTS: TestBlockProps[] = [
  {
    title: "MAMMOGRAMS",
    tagline: "You don’t have to feel something for a mammogram to find something.",
    images: ["aspect-[10/8]", "aspect-[10/8]"],
    imageSide: "right",
    bullets: [
      "A mammogram is a low-dose X-ray that creates images of breast tissue and can help identify masses, small calcium deposits called calcifications and differences in breast density.",
      <>
        Screening mammograms can sometimes detect breast cancer before symptoms appear, giving
        you and your healthcare team important information even when you don’t notice a change
        yourself.<sup>5</sup>
      </>,
      <>
        Diagnostic mammograms are a closer look. They may be recommended when there’s a specific
        concern, such as a lump, pain, nipple discharge or changes in the skin or breast.
        <sup>2–3</sup>
      </>,
      "And then there’s the infamous “squish.” Compression helps hold breast tissue still and spread it out while images are taken from different angles. It can be uncomfortable — and for some people, painful — but it’s over quickly.",
    ],
    closing: (
      <>
        <p className={bodyClass} style={bodyStyle}>
          A few seconds of discomfort can give you information that helps guide what comes next.
        </p>
        {/* shortcut: no scheduling destination yet, swap this for a link once there is one */}
        <p className={`${bodyClass} underline`} style={{ ...bodyStyle, color: PINK }}>
          How can I schedule my annual mammogram?
        </p>
      </>
    ),
  },
  {
    title: "BREAST ULTRASOUNDS",
    tagline: (
      <>
        A mammogram can help detect breast cancer, but it can’t confirm a diagnosis on its own.
        <sup>7</sup> An ultrasound may be the next step.
      </>
    ),
    images: ["aspect-[16/15]"],
    imageSide: "left",
    bullets: [
      "A breast ultrasound uses sound waves to create images of breast tissue. A technician moves a handheld device called a transducer over the area being examined. No radiation. No compression.",
      "It’s simple and relatively quick. An ultrasound typically takes about 30 minutes, with your healthcare team reviewing the images to determine whether anything needs a closer look.",
      <>
        Sometimes, more answers are needed. If an ultrasound doesn’t provide enough information
        or a concerning area is identified, your healthcare provider may recommend a biopsy for
        further evaluation.<sup>6</sup>
      </>,
    ],
  },
  {
    title: "BIOPSIES",
    tagline: "Sometimes, getting answers means looking beneath the surface.",
    images: ["aspect-square"],
    imageSide: "right",
    bullets: [
      "A biopsy involves removing a small sample of breast tissue or fluid so a pathologist can examine it under a microscope.",
      "There’s more than one way to do it. Fine-needle aspiration, core-needle, surgical and skin punch biopsies are among the different types. Your healthcare provider will recommend the approach based on what was found and where it’s located.",
      "The pathology report can tell you more. If cancer is found, the report can identify its type and provide important information about how it may behave and which treatments may be most effective.",
    ],
  },
];

export default function Header2() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
        {/* Intro */}
        <h2 className={h2Class} style={{ ...acuminBold, color: DARK }}>
          A FEW MOMENTS OF DISCOMFORT MAY SAVE YOUR LIFE
        </h2>
        <p className={bodyClass} style={bodyStyle}>
          Knowing your body also means knowing when it’s time to look a little deeper.
          Mammograms, ultrasounds, biopsies and MRIs can each play a different role in helping
          your healthcare team better understand what’s happening and determine next steps.
        </p>

        <div className="mt-12 lg:mt-16 flex flex-col gap-16 lg:gap-24">
          {TESTS.map((block) => (
            <TestBlock key={block.title} {...block} />
          ))}
        </div>

        {/* Outro */}
        <h2 className={`${h2Class} mt-16 lg:mt-24`} style={{ ...acuminBold, color: DARK }}>
          KNOW THE TESTS, KNOW THE WHY
        </h2>
        <p className={bodyClass} style={bodyStyle}>
          Mammograms, ultrasounds, biopsies and MRIs each have a different job. Understanding your
          options can help you feel more informed, prepared and confident about what comes next.
        </p>

        <CareReferences definitions="MRI, Magnetic Resonance Imaging" />
      </section>
    </div>
  );
}
