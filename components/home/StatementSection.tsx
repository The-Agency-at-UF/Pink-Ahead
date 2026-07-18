import SmallButton from "@/components/SmallButton";
import { DARK, acuminBold, acuminRegular } from "@/app/styles/tokens";

export default function StatementSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      {/* Heading + body — padded to page margins */}
      <div className="px-5 sm:px-10 md:px-14 lg:px-20">
        <h2
          className="text-center mb-6 md:mb-10"
          style={{
            ...acuminBold,
            fontSize: "clamp(36px, 6vw, 64px)",
            color: DARK,
          }}
        >
          STATEMENT
        </h2>

        {/* No max-w cap — text fills between the page margins */}
        <div className="space-y-4 md:space-y-6">
          <p
            style={{
              ...acuminRegular,
              fontSize: "clamp(16px, 2.4vw, 28px)",
              color: DARK,
              letterSpacing: "-0.18px",
              lineHeight: "1.5",
            }}
          >
            At Pink Ahead, we believe caring for yourself starts long before a
            doctor&apos;s appointment. Breast health belongs in your self-care
            routine, not just on your calendar. Make it a ritual, not a
            reminder.
          </p>
          <p
            style={{
              ...acuminRegular,
              fontSize: "clamp(16px, 2.4vw, 28px)",
              color: DARK,
              letterSpacing: "-0.18px",
              lineHeight: "1.5",
            }}
          >
            Breast cancer doesn&apos;t just affect one person. It impacts
            families, friendships, and entire communities. That&apos;s why Pink
            Ahead exists. We&apos;re here to help you build the confidence to
            take action, advocate for yourself, and care for the people you
            love—so you can stay one step ahead.
          </p>
        </div>
      </div>

      {/* Video placeholder — 16:9, matches page margins at all sizes */}
      <div
        className="mt-8 md:mt-12 mx-5 sm:mx-10 md:mx-14 lg:mx-20"
        style={{ aspectRatio: "16 / 9", backgroundColor: DARK }}
      />

      <div className="mt-4 md:mt-6 px-5 sm:px-10 md:px-14 lg:px-20">
        <SmallButton label="WATCH" />
      </div>
    </section>
  );
}
