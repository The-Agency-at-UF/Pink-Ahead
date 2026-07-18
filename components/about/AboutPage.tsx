import HeroBanner from "@/components/about/HeroBanner";
import OurStorySection from "@/components/about/OurStorySection";
import FAQSection from "@/components/about/FAQSection";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <HeroBanner title="ABOUT" />
      <OurStorySection />
      <FAQSection />
    </div>
  );
}

