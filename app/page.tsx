import HeroSection from "@/components/home/HeroSection";
import StatementSection from "@/components/home/StatementSection";
import JourneySection from "@/components/home/JourneySection";
import StoriesSection from "@/components/home/StoriesSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <StatementSection />
      <JourneySection />
      <StoriesSection />
    </main>
  );
}
