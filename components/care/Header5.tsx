import HeroBanner from "@/components/about/HeroBanner";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const h2Class = "text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]";
const h3Class = "mb-4 leading-none [text-box:trim-start_cap_alphabetic] text-[28px] md:text-[32px] lg:text-[36px]";
const bodyClass = "text-[18px] md:text-[20px] lg:text-[24px]";
const bodyStyle: React.CSSProperties = {
  ...acuminRegular,
  color: DARK,
  letterSpacing: "-0.18px",
  lineHeight: 1.5,
};
const linkProps = {
  className: "underline",
  style: { color: PINK },
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
// shortcut: no on-site list of breast changes yet, point these at it once one exists
const SYMPTOMS_URL =
  "https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/breast-cancer-signs-and-symptoms.html";

// Pink block standing in for a photo until real images are supplied
function ImagePlaceholder({ aspect }: { aspect: string }) {
  return <div className={`w-full ${aspect}`} style={{ backgroundColor: PINK }} />;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`${bodyClass} ${className}`} style={bodyStyle}>
      {children}
    </p>
  );
}

const STEPS: { title: string; paragraphs: React.ReactNode[] }[] = [
  {
    title: "FEEL IN THE SHOWER",
    paragraphs: [
      "Using the pads of your three middle fingers, feel around your entire breast and armpit area. Apply light, medium and firm pressure as you check for lumps, thickening, hardened areas or other changes.",
      <>
        Not sure what counts as a change?{" "}
        <a href={SYMPTOMS_URL} {...linkProps}>
          See here
        </a>{" "}
        for a full list of what to look for.
      </>,
    ],
  },
  {
    title: "LOOK IN THE MIRROR",
    paragraphs: [
      "With your arms relaxed at your sides, check for differences in shape or contour, along with swelling, dimpling, skin irregularities or anything unusual around the nipples.",
      "Then, place your hands on your hips and press firmly to flex your chest muscles. Look again for any changes from your normal appearance. Remember, some asymmetry is completely normal.",
    ],
  },
  {
    title: "CHECK LYING DOWN",
    paragraphs: [
      "Place a pillow under one shoulder and raise that arm behind your head. With your opposite hand, use the pads of your three middle fingers to feel around the entire breast and armpit using light, medium and firm pressure.",
      "Gently squeeze the nipple to check for discharge, then switch sides and repeat.",
    ],
  },
];

export default function Header5() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
        {/* Intro */}
        <h2 className={h2Class} style={{ ...acuminBold, color: DARK }}>
          PINK RESPONSIBLY: YOUR GUIDE TO THE BREAST SELF-EXAM
        </h2>
        <div className="space-y-4">
          <Body>
            Breast self-exams are an early detection tool that can help you become familiar with
            the normal look and feel of your chest. By taking a few minutes each month to check for{" "}
            <a href={SYMPTOMS_URL} {...linkProps}>
              lumps, swelling, drainage or other changes
            </a>
            , you’ll be more prepared to recognize concerns and bring them up confidently with your
            healthcare provider.
          </Body>
          <Body>
            We know it’s a touchy subject. Literally. But knowing where to start and what to look
            for can make it a little less so.
          </Body>
        </div>

        {/* Check yourself */}
        <h2 className={`${h2Class} mt-16 lg:mt-24`} style={{ ...acuminBold, color: DARK }}>
          CHECK YOURSELF
        </h2>
        <Body className="italic mb-4">Ready to get hands-on?</Body>
        <Body>
          A thorough self-exam has three simple steps. Each gives you a different way to build
          breast self-awareness:
        </Body>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {STEPS.map(({ title, paragraphs }, i) => (
            <div key={title}>
              <ImagePlaceholder aspect="aspect-square" />
              <div className="mt-8 flex gap-4 lg:gap-6">
                <span
                  className="leading-none text-[72px] lg:text-[96px] [text-box:trim-both_cap_alphabetic]"
                  style={{ ...acuminBold, color: PINK }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className={h3Class} style={{ ...acuminBold, color: DARK }}>
                    <span className="sr-only">Step {i + 1}: </span>
                    {title}
                  </h3>
                  <div className="space-y-4">
                    {paragraphs.map((p, j) => (
                      <Body key={j}>{p}</Body>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Body className="italic mt-10 lg:mt-12 mb-4">Notice something different?</Body>
        <Body>
          Don’t panic, but don’t ignore it either. Make note of what you found and bring any new or
          concerning changes to a healthcare provider as soon as possible.
        </Body>

        {/* Pink flow */}
        <h2 className={`${h2Class} mt-16 lg:mt-24`} style={{ ...acuminBold, color: DARK }}>
          PINK FLOW
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <Body className="italic mb-4">Make it monthly.</Body>
            <Body>
              Breast self-exams are recommended once a month for adults of all ages. There’s no need
              to reinvent your routine. Just add a breast check to it.
            </Body>
            <ul className="list-disc pl-6 md:pl-8 my-4 space-y-2">
              <li className={bodyClass} style={bodyStyle}>
                If you have a period: Check in a few days after your last cycle, when your breasts
                may be less swollen or tender.
              </li>
              <li className={bodyClass} style={bodyStyle}>
                If you don’t have a period: Pick a date you’ll remember and stick with it. The first
                of the month, payday, rent day — anything that stands out.
              </li>
            </ul>
            <Body>
              Every time you perform a self-exam, think back to the last month and ask yourself if
              anything seems different. Knowing your normal over time gives you a better baseline
              for understanding your body and communicating concerns.
            </Body>
          </div>
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <ImagePlaceholder aspect="aspect-[21/20]" />
          </div>
        </div>

        {/* Reminder */}
        <h2 className={`${h2Class} mt-16 lg:mt-24`} style={{ ...acuminBold, color: DARK }}>
          A REMINDER TO KEEP CLOSE TO YOUR CHEST
        </h2>
        <Body className="italic mb-4">A self-exam doesn’t tell the whole story.</Body>
        <Body>
          Although breast self-exams can make a real difference in your diagnostic journey, some
          changes can’t be seen or felt on your own. Be sure to pair your routine with regular
          medical care and guideline-recommended screenings, which may detect signs of breast
          cancer before you notice symptoms yourself.
        </Body>
      </section>
    </div>
  );
}
