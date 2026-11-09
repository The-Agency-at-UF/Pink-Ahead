import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/about/HeroBanner";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

const h2Class =
  "text-center mb-6 lg:mb-10 text-[40px] md:text-[52px] lg:text-[64px]";
const bodyClass = "text-[18px] md:text-[20px] lg:text-[24px]";
const bodyStyle: React.CSSProperties = {
  ...acuminRegular,
  color: DARK,
  letterSpacing: "-0.18px",
  lineHeight: 1.5,
};
const linkClass = "underline";
const linkStyle = { color: PINK };
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

interface Org {
  logo: string;
  // logo files are all 120px tall; width keeps next/image at the right aspect
  logoWidth: number;
  name: string;
  body: React.ReactNode;
  bullets?: string[];
  note?: string;
  href: string;
}

interface Group {
  title: string;
  intro: React.ReactNode;
  orgs: Org[];
  closing: React.ReactNode;
}

function OrgCard({ logo, logoWidth, name, body, bullets, note, href }: Org) {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <Image
          src={`/assets/care/${logo}`}
          alt={`${name} logo`}
          width={logoWidth}
          height={120}
          className="h-[72px] lg:h-[100px] w-auto"
        />
      </div>
      <p className={bodyClass} style={bodyStyle}>
        {body}
      </p>
      {bullets && (
        <ul className="list-disc pl-6 md:pl-8 mt-4 space-y-1">
          {bullets.map((item) => (
            <li key={item} className={bodyClass} style={bodyStyle}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {note && (
        <p className={`${bodyClass} italic mt-4`} style={bodyStyle}>
          {note}
        </p>
      )}
      <a
        href={href}
        {...external}
        className={`${bodyClass} ${linkClass} inline-block mt-4`}
        style={{ ...bodyStyle, ...linkStyle }}
      >
        Learn more.
      </a>
    </div>
  );
}

const SHARE_LOGO = { logo: "scs.png", logoWidth: 443 };
const NBCF_LOGO = { logo: "nbcf.png", logoWidth: 433 };

const GROUPS: Group[] = [
  {
    title: "LOW-COST & FREE SCREENINGS",
    intro:
      "Cost shouldn’t stand between you and getting checked. Here are three programs that can help make breast screenings and diagnostic services more affordable.",
    orgs: [
      {
        logo: "abcf.png",
        logoWidth: 107,
        name: "American Breast Cancer Foundation",
        body: (
          <>
            The{" "}
            <strong>
              American Breast Cancer Foundation Breast Cancer Assistance Program
            </strong>{" "}
            helps cover the cost of mammograms and diagnostic testing for those
            facing financial barriers, including people who are uninsured,
            underinsured or managing out-of-pocket costs. Whatever your age,
            gender or background, you can reach out for support and gain:
          </>
        ),
        bullets: [
          "Coverage up to $200 for screening mammograms",
          "Coverage up to $250 for diagnostic mammograms",
          "Coverage up to $250 for breast ultrasounds",
        ],
        href: "https://www.abcf.org/breast-cancer-assistance-program",
      },
      {
        ...NBCF_LOGO,
        name: "National Breast Cancer Foundation",
        body: (
          <>
            <strong>
              National Breast Cancer Foundation National Mammography Program
            </strong>{" "}
            partners with medical facilities across the country to connect
            low-income, uninsured and underinsured individuals with free breast
            screenings and diagnostic services, including:
          </>
        ),
        bullets: [
          "Screening mammograms",
          "Diagnostic mammograms",
          "3D mammograms/tomosynthesis",
          "Computer-aided detection (CAD)",
          "Clinical breast exams",
          "Ultrasounds",
          "Limited biopsy services",
        ],
        href: "https://www.nationalbreastcancer.org/national-mammography-program/",
      },
      {
        logo: "cdc.png",
        logoWidth: 344,
        name: "CDC National Breast and Cervical Cancer Early Detection Program",
        body: (
          <>
            The{" "}
            <strong>
              CDC National Breast and Cervical Cancer Early Detection Program
            </strong>{" "}
            helps make screenings more accessible with free or low-cost breast
            and cervical cancer screenings and diagnostic services. You may
            qualify if you:
          </>
        ),
        bullets: [
          "Are uninsured or your insurance doesn’t cover screening exams",
          "Have an annual household income at or below 250% of the Federal Poverty Level",
          "Are between ages 40–64 for breast cancer screening*",
        ],
        note: "*Some individuals outside this range may also qualify.",
        href: "https://www.cdc.gov/breast-cervical-cancer-screening/about/index.html",
      },
    ],
    closing: (
      <>
        Everyone deserves to feel informed and confident about their breast
        health. Explore your{" "}
        <Link href="/care/header2" className={linkClass} style={linkStyle}>
          screening options
        </Link>{" "}
        and find what’s right for you.
      </>
    ),
  },
  {
    title: "HELP WITH EVERYDAY EXPENSES",
    intro:
      "Breast cancer treatment may change your routine, but the everyday expenses don’t go anywhere. These resources can help lighten the financial load.",
    orgs: [
      {
        logo: "pinkfund.png",
        logoWidth: 417,
        name: "The Pink Fund",
        body: (
          <>
            The <strong>Pink Fund</strong> provides up to $3,000 toward everyday
            living expenses for breast cancer patients whose income has been
            affected by treatment. Support can last up to 90 days, helping cover
            non-medical expenses while you focus on your health. Applicants
            must:
          </>
        ),
        bullets: [
          "Be in active treatment for a breast cancer diagnosis received within the past two years",
          "Have a household income at or below 300% of the Federal Poverty Level",
          "Have experienced a loss of household income due to breast cancer treatment",
        ],
        href: "https://pinkfund.org/",
      },
      {
        logo: "lbbc.png",
        logoWidth: 149,
        name: "Living Beyond Breast Cancer",
        body: (
          <>
            The <strong>Living Beyond Breast Cancer Fund</strong> offers
            one-time grants of $1,000–$1,250 to help ease the cost of everyday
            essentials during treatment, including rent, utilities and car
            payments. This support may be available to you if you:
          </>
        ),
        bullets: [
          "Are in active breast cancer treatment and experiencing financial need",
          "Have a household income below 400% of the Federal Poverty Level",
          "Live in the U.S. or the District of Columbia",
          "Have not previously received a grant from the Living Beyond Breast Cancer Fund",
        ],
        href: "https://www.lbbc.org/",
      },
    ],
    closing: "Focus on you. Find support for the rest.",
  },
  {
    title: "INSURANCE & FINANCIAL GUIDANCE",
    intro:
      "Navigating insurance can be complicated, but it doesn’t have to be. These services can help you better assess your options.",
    orgs: [
      {
        logo: "triagecancer.png",
        logoWidth: 432,
        name: "Triage Cancer",
        body: (
          <>
            <strong>Triage Cancer</strong> offers free, one-on-one guidance from
            legal professionals to help you manage health insurance, employment,
            finances and estate planning. Support is available to patients,
            caregivers, health workers and community advocates.
          </>
        ),
        href: "https://triagecancer.org/",
      },
      {
        logo: "cfac.png",
        logoWidth: 372,
        name: "Cancer Financial Assistance Coalition",
        body: (
          <>
            The <strong>Cancer Financial Assistance Coalition</strong> makes it
            easier to search for financial, practical and co-pay assistance from
            a network of cancer support organizations.
          </>
        ),
        href: "https://www.cancerfac.org/",
      },
      {
        ...SHARE_LOGO,
        name: "SHARE Cancer Support",
        body: (
          <>
            <strong>SHARE Cancer Support Financial Navigation</strong> helps
            patients understand their insurance coverage and work through the
            paperwork needed to access programs like Medicare, Medicaid and
            Social Security Disability.
          </>
        ),
        href: "https://www.sharecancersupport.org/patient-navigation/",
      },
    ],
    closing:
      "It’s okay to ask for help. That’s what our community is here for.",
  },
  {
    title: "TRANSPORTATION & FINANCIAL ASSISTANCE",
    // copy matches the mockup, which repeats the insurance intro
    intro:
      "Navigating insurance can be complicated, but it doesn’t have to be. These services can help you better assess your options.",
    orgs: [
      {
        logo: "rtr.png",
        logoWidth: 114,
        name: "American Cancer Society Road To Recovery",
        body: (
          <>
            The <strong>American Cancer Society Road to Recovery</strong>{" "}
            program offers free rides to cancer-related appointments for
            patients who don’t have transportation or are unable to drive
            themselves. Rides can be requested by calling 1-800-227-2345.
          </>
        ),
        href: "https://www.cancer.org/support-programs-and-services/road-to-recovery.html",
      },
      {
        logo: "mma.png",
        logoWidth: 298,
        name: "Mercy Medical Angels",
        body: (
          <>
            Traveling farther for treatment?{" "}
            <strong>Mercy Medical Angels</strong> helps financially
            disadvantaged patients with long-distance ground transportation,
            including gas cards, bus tickets and train tickets.
          </>
        ),
        href: "https://www.mercymedical.org/",
      },
      {
        logo: "acn.png",
        logoWidth: 304,
        name: "Air Charity Network",
        body: (
          <>
            When treatment is too far for a road trip,{" "}
            <strong>Air Charity Network</strong> helps patients get there with
            free flights for medical care.
          </>
        ),
        href: "https://aircharitynetwork.org/",
      },
      {
        logo: "fhf.png",
        logoWidth: 120,
        name: "Fisher House Foundation",
        body: (
          <>
            <strong>Fisher House Foundation</strong> supports military and
            veteran families traveling for medical care, offering free stays
            near treatment facilities. Its Hero Miles program also uses donated
            frequent flyer miles to help eligible family members travel to be
            with loved ones receiving care.
          </>
        ),
        href: "https://fisherhouse.org/programs/hero-miles/",
      },
    ],
    closing: "Distance shouldn’t put the care you need out of reach.",
  },
  {
    title: "PATIENT NAVIGATION",
    intro:
      "Not sure where to start? These patient navigator programs can help point you in the right direction.",
    orgs: [
      {
        ...NBCF_LOGO,
        name: "National Breast Cancer Foundation",
        body: (
          <>
            The{" "}
            <strong>
              National Breast Cancer Foundation Patient Navigator Program
            </strong>{" "}
            offers personalized guidance from screening and diagnosis through
            treatment and survivorship, including support with financial,
            administrative and emotional concerns.
          </>
        ),
        href: "https://www.nationalbreastcancer.org/patient-navigator-program/",
      },
      {
        ...SHARE_LOGO,
        name: "SHARE Cancer Support",
        body: (
          <>
            <strong>SHARE Cancer Support Patient Navigation</strong> works
            alongside patients and their care teams to find the resources that
            best fit their needs.
          </>
        ),
        href: "https://www.sharecancersupport.org/patient-navigation/",
      },
    ],
    closing: (
      <>
        {/* shortcut: Pink Life and Unhooked targets are guesses, point them at the real pages once they exist */}
        Support doesn’t stop here. Check out{" "}
        <Link href="/community" className={linkClass} style={linkStyle}>
          Pink Life
        </Link>{" "}
        and{" "}
        <Link href="/care/support" className={linkClass} style={linkStyle}>
          Unhooked
        </Link>{" "}
        to find more guidance and connection beyond your care.
      </>
    ),
  },
];

export default function Header3() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="CARE" />

      <section className="w-full bg-white pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 md:px-10 lg:px-20">
        <h2 className={h2Class} style={{ ...acuminBold, color: DARK }}>
          FINANCIAL &amp; PRACTICAL SUPPORT
        </h2>
        <p className={bodyClass} style={bodyStyle}>
          The costs that come with breast cancer can add up quickly. Whether
          you’re seeking preventive care, undergoing treatment or advocating for
          someone you love, resources are available to support you along the
          way.
        </p>

        {GROUPS.map(({ title, intro, orgs, closing }) => (
          <div key={title} className="mt-16 lg:mt-24">
            <h2 className={h2Class} style={{ ...acuminBold, color: DARK }}>
              {title}
            </h2>
            <p className={bodyClass} style={bodyStyle}>
              {intro}
            </p>
            {/* a lone last card sits centered under the two-column row */}
            <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-16 md:[&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:w-1/2 md:[&>*:last-child:nth-child(odd)]:mx-auto">
              {orgs.map((org) => (
                <OrgCard key={org.href} {...org} />
              ))}
            </div>
            <p className={`${bodyClass} mt-10 lg:mt-16`} style={bodyStyle}>
              {closing}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
