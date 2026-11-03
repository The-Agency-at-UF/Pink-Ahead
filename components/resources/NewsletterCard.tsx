import Image from "next/image";
import CircleArrowIcon from "@/components/CircleArrowIcon";
import { PINK, DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

export interface NewsletterCardProps {
  date: string;
  title: string;
  excerpt: string;
}

// Bordered card styled like FAQItem: date, pink title + underline, excerpt clipped to 3 lines
export default function NewsletterCard({ date, title, excerpt }: NewsletterCardProps) {
  return (
    <article
      className="relative w-full border-4 px-6 md:px-10 py-6 md:py-8 pr-20 md:pr-28"
      style={{ borderColor: PINK, backgroundColor: "white" }}
    >
      <Image
        src="/assets/Ribbon Icon.svg"
        alt=""
        aria-hidden="true"
        width={27}
        height={40}
        className="absolute top-6 right-6 md:top-8 md:right-10 h-7 md:h-9 w-auto"
      />
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2">
        <CircleArrowIcon variant="default" direction="right" size={32} aria-label="Read newsletter" />
      </div>

      <p
        className="text-[14px] md:text-[16px] lg:text-[18px] mb-3"
        style={{ ...acuminRegular, color: DARK }}
      >
        {date}
      </p>
      <h3
        className="text-[22px] md:text-[28px] lg:text-[36px] leading-none"
        style={{ ...acuminBold, color: PINK }}
      >
        {title}
      </h3>
      <div className="mt-3 mb-4 md:mb-6 h-[3px] w-1/4" style={{ backgroundColor: PINK }} />
      <p
        className="overflow-hidden text-[16px] md:text-[18px] lg:text-[20px]"
        style={{
          ...acuminRegular,
          color: DARK,
          letterSpacing: "-0.18px",
          lineHeight: 1.5,
          maxHeight: "4.5em",
        }}
      >
        {excerpt}
      </p>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-none" style={{ ...acuminBold, color: PINK }}>
        ...
      </p>
    </article>
  );
}
