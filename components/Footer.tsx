import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Care", href: "/care" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-brand text-white">
      <div className="flex w-full flex-col-reverse items-center gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:py-12 lg:px-16">
        {/* Left: links + socials + copy */}
        <div className="flex w-full flex-col items-center gap-5 md:items-start md:gap-6">
          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6 md:justify-start md:gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-nav text-xl font-normal leading-none tracking-[0.04em] uppercase text-white transition-opacity hover:opacity-80 sm:text-2xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="mailto:hello@pinkahead.org"
                aria-label="Email"
                className="inline-flex transition-opacity hover:opacity-80"
              >
                <span className="icon-[ic--outline-email] size-7" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition-opacity hover:opacity-80"
              >
                <span className="icon-[ic--baseline-facebook] size-7" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition-opacity hover:opacity-80"
              >
                <span className="icon-[mdi--instagram] size-7" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition-opacity hover:opacity-80"
              >
                <span className="icon-[mdi--youtube] size-7" />
              </a>
            </li>
          </ul>

          {/* Rights text */}
          <p className="font-sans text-sm font-normal tracking-wide text-white text-center md:text-left md:text-base">
            Rights Reserved / Disclaimers
          </p>
        </div>

        {/* Logo mark */}
        <Link
          href="/"
          aria-label="Pink Ahead home"
          className="flex h-24 w-24 shrink-0 items-center justify-center transition-opacity hover:opacity-80 md:h-32 md:w-32"
        >
          <Image
            src="/assets/PinkAheadFooter.svg"
            alt="Pink Ahead"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}
