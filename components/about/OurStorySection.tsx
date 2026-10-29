import Image from "next/image";
import imgWomen from "@/public/group-three-happy-women-different-260nw-2669729125 1.png";
import SmallButton from "@/components/SmallButton";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const WHO_WE_ARE = [
  "Pink Ahead is a breast health education and advocacy platform created to empower younger generations with the knowledge, resources and confidence to take charge of their health.",
  "Breast cancer doesn’t wait for a certain age, time or circumstance. As diagnoses continue to rise in younger adults, too many people are still falling through the cracks. Without access to routine mammograms, people may not know what changes to look for, when to seek medical attention or how to feel confident speaking up when something doesn’t feel right.",
  "Pink Ahead is here to help change that. We believe education is the first line of defense. Through accessible information, practical resources and a supportive community, we help women and men ages 18–40 learn about their bodies and understand their personal risk so they can recognize changes early and feel confident advocating for their health.",
  "Because knowing your body is powerful. Trusting your instincts is powerful. And speaking up for your health should be, too.",
];

const WHY_WE_EXIST = [
  "Breast health shouldn’t begin with a scare, screening or diagnosis. It should begin with understanding.",
  "Pink Ahead was created to close the education and advocacy gap surrounding breast cancer in younger adults. All too often, there is a common belief that breast cancer is something that only happens later in life. But being young doesn’t mean zero risk. When routine screenings aren’t yet part of the picture or only occur annually, knowing your body and recognizing when something changes becomes even more important. That’s why education can be the first line of defense.",
  "For us at Pink Ahead, self-advocacy means putting your health first. It means learning your body, performing regular self-checks, staying informed, asking questions and trusting yourself enough to speak up when something doesn’t feel right.",
];

const HOW_WE_GOT_HERE = [
  "Pink Ahead began with an experience no one plans for, but many must face.",
  "In 2025, founder Dana Webber was diagnosed with Stage II breast cancer and underwent chemotherapy, radiation and a double mastectomy. A few months later, her family lost their beloved relative, Lisa, to breast cancer.",
  "Dana was fortunate to receive successful treatment, but this is not always the case for everyone. Through these deeply personal experiences, one thing became clear: early detection isn’t simply a matter of luck. It’s a matter of education, awareness and self-advocacy.",
  "Pink Ahead was created to ensure more people have the knowledge and support to recognize the signs, take action early and never face breast cancer alone.",
];

const LOOKING_FORWARD = [
  "We envision Pink Ahead becoming a trusted community where breast health education and advocacy no longer feel sterile — a place people turn to for reliable information, practical resources, inspiring stories and connections that remind you that you are never alone.",
  "We aren’t stopping there, though. We want Pink Ahead to be more than a resource. We want it to become a movement, empowering people to know their bodies, prioritize early detection, trust their instincts and advocate for both themselves and the people they love.",
];

function Heading({ children }: { children: string }) {
  return (
    <h2
      className="text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]"
      style={{ ...acuminBold, color: DARK }}
    >
      {children}
    </h2>
  );
}

function Paragraphs({ paras }: { paras: string[] }) {
  return (
    <div className="flex-1 space-y-6">
      {paras.map((para, i) => (
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
  );
}

export default function OurStorySection() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-20 pb-0 px-6 md:px-10 lg:px-20 space-y-16 lg:space-y-24">
      <div>
        <Heading>WHO WE ARE</Heading>
        <Paragraphs paras={WHO_WE_ARE} />
      </div>

      {/* Two-column: text left, photo right */}
      <div>
        <Heading>WHY PINK AHEAD EXISTS</Heading>
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <Paragraphs paras={WHY_WE_EXIST} />

          {/* Photo — max 340x384 px */}
          <div className="w-full max-w-[340px] aspect-[340/384] flex-shrink-0 overflow-hidden relative">
            <Image
              src={imgWomen}
              alt="Three women smiling"
              fill
              className="object-cover"
              sizes="340px"
            />
          </div>
        </div>
      </div>

      {/* Two-column: photo left, text right */}
      <div>
        <Heading>HOW WE GOT HERE</Heading>
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:items-start">
          {/* shortcut: pink block stands in for the founder photo until we have it */}
          <div
            className="w-full max-w-[420px] aspect-[420/440] flex-shrink-0"
            style={{ backgroundColor: PINK }}
          />
          <Paragraphs paras={HOW_WE_GOT_HERE} />
        </div>
      </div>

      <div>
        <Heading>LOOKING FORWARD</Heading>
        <Paragraphs paras={LOOKING_FORWARD} />

        {/* Video placeholder with WATCH button inside */}
        <div
          className="mt-12 lg:mt-16 relative h-[300px] md:h-[500px] lg:h-[720px]"
          style={{ backgroundColor: DARK }}
        >
          <div className="absolute bottom-10 left-10">
            <SmallButton label="WATCH" />
          </div>
        </div>
      </div>
    </section>
  );
}
