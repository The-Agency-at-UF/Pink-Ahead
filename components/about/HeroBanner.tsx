import { PINK, acuminBold } from "@/app/styles/tokens";

interface HeroBannerProps {
  title: string;
}

export default function HeroBanner({ title }: HeroBannerProps) {
  return (
    <section
      className="w-full flex items-center justify-center h-[250px] md:h-[350px] lg:h-[486px]"
      style={{ backgroundColor: PINK }}
    >
      <h1 
        className="text-[64px] md:text-[96px] lg:text-[128px]"
        style={{ ...acuminBold, color: "white", lineHeight: "normal" }}
      >
        {title}
      </h1>
    </section>
  );
}
