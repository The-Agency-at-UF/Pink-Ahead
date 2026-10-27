import HeroBanner from "@/components/about/HeroBanner";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const h2Class = "text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]";
const h3Class = "mb-4 text-[28px] md:text-[36px] lg:text-[48px]";
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

interface AwarenessBlockProps {
  title: string;
  tagline: string;
  paragraphs: React.ReactNode[];
  images: string[];
  imageSide: "left" | "right";
}

function AwarenessBlock({ title, tagline, paragraphs, images, imageSide }: AwarenessBlockProps) {
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
        <p className={`${bodyClass} mb-4`} style={{ ...bodyStyle, fontStyle: "italic" }}>
          {tagline}
        </p>
        <div className="space-y-4">
          {paragraphs.map((para, i) => (
            <p key={i} className={bodyClass} style={bodyStyle}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header1() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
        {/* Intro */}
        <h2 className={h2Class} style={{ ...acuminBold, color: DARK }}>
          KNOW YOUR BREASTS BEST
        </h2>
        <p className={bodyClass} style={bodyStyle}>
          We’ve come to see breast cancer as more than a diagnosis — it’s a shared
          experience. We’re all connected to this community because, in one way or another,
          we’ve witnessed the reality of breast cancer through a friend, family member, loved
          one or even someone we’ve never met. Everyone is affected.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <h3 className={h3Class} style={{ ...acuminBold, color: DARK }}>
              WOULD YOU KNOW WHEN TO SPEAK UP ABOUT YOUR HEALTH?
            </h3>
            <p className={`${bodyClass} mb-10`} style={bodyStyle}>
              Kind-of, sort-of? We can change that.
            </p>

            <h3 className={h3Class} style={{ ...acuminBold, color: DARK }}>
              MOTIVATIONS
            </h3>
            <div className="space-y-4">
              <p className={bodyClass} style={bodyStyle}>
                Know your body, know your peace. Understanding what’s normal for you can
                bring confidence and peace of mind.
              </p>
              <p className={bodyClass} style={bodyStyle}>
                Feel empowered to act. Having the right information makes it easier to ask
                questions, seek care and make confident decisions about your health.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <ImagePlaceholder aspect="aspect-[16/15]" />
          </div>
        </div>

        {/* How aware are you */}
        <h2 className={`${h2Class} mt-16 lg:mt-24`} style={{ ...acuminBold, color: DARK }}>
          HOW AWARE ARE YOU, <em>REALLY?</em>
        </h2>
        <p className={bodyClass} style={bodyStyle}>
          Let’s close the knowledge gap—one boob at a time. Here are three simple ways to
          check in with yourself, get informed and take charge of your breast health.
        </p>

        <div className="mt-12 lg:mt-16 flex flex-col gap-16 lg:gap-24">
          <AwarenessBlock
            title="I KNOW MY PERSONAL RISK"
            tagline="Know what can shape your breast cancer risk."
            images={["aspect-[10/7]", "aspect-[10/7]"]}
            imageSide="left"
            paragraphs={[
              "Breast cancer can affect anyone. There’s no single age, gender, body type, family history or lifestyle that determines who should pay attention. Yes, men — we’re talking to you, too.",
              <>
                Your personal risk can be influenced by many factors, including your age, family
                history, breast density, inherited genetic mutations such as BRCA1* and BRCA1*,
                certain non-cancerous breast conditions and reproductive history, including when
                you started your period or entered menopause.
              </>,
              "You can’t choose every risk factor, but you can understand them. Knowing your personal risk gives you the power to have informed conversations with your healthcare provider and make decisions that are right for you.",
              <>
                And some risk factors may be more within your control, including physical
                activity, body weight and alcohol consumption. Small, informed choices
                can be part of taking a more active role in your breast health.
              </>,
            ]}
          />

          <AwarenessBlock
            title="I KNOW MY BODY"
            tagline="Pay attention to what’s normal for you."
            images={["aspect-[3/4]"]}
            imageSide="right"
            paragraphs={[
              "Knowing your breasts or chest means becoming familiar with how they normally look and feel. That way, when something changes, you’re more likely to notice it and know when it’s time to speak up.",
              <>
                A change could be a new lump, swelling, persistent pain, nipple discharge,
                dimpling, redness or a change in the nipple’s appearance. If
                something feels different or doesn’t seem right, talk to a healthcare
                professional.
              </>,
              "Breast health isn’t just something to think about during an appointment. Make checking in with yourself part of your routine. The better you know your body, the more confident you can be in recognizing and advocating for your health.",
              "Speak up when something changes.",
            ]}
          />

          <AwarenessBlock
            title="I KNOW WHEN TO ACT"
            tagline="Don’t wait to take care of you. When something changes, say something."
            images={["aspect-[5/6]"]}
            imageSide="left"
            paragraphs={[
              "If something looks, feels or seems different, don’t ignore it or wait until your next routine appointment. Talk to a healthcare provider and get the information you need.",
              <>
                Know your screening options. For women at average risk, ages 40–44 have the
                option to begin annual mammograms, with yearly screening recommended from ages
                45–54. At 55, women can continue annual screening or switch to every other year.
                Those at higher risk may need to start screening earlier or be screened more
                frequently.
              </>,
              "Your breast health doesn’t follow a calendar. Stay aware, know your risk and take action when something doesn’t feel right.",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
