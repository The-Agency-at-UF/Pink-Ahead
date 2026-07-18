import HeroBanner from "@/components/about/HeroBanner";

export const metadata = {
  title: "Resources | Pink Ahead",
  description: "Helpful resources and information from Pink Ahead.",
};

export default function ResourcesPage() {
  return (
    <main className="flex flex-col w-full">
      <HeroBanner title="RESOURCES" />
    </main>
  );
}
