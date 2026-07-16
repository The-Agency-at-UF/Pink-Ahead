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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-8 py-10 sm:px-12 md:flex-row md:items-center md:justify-between md:gap-8 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6">
          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-nav text-xl font-normal leading-none tracking-[0.04em] uppercase text-white transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="mailto:hello@pinkahead.org"
                aria-label="Email"
                className="inline-flex transition-opacity hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
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
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
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
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
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
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Rights text */}
          <p className="font-sans text-sm font-normal tracking-wide text-white">
            Rights Reserved / Disclaimers
          </p>
        </div>

        {/* Logo mark */}
        <a
          href="/"
          aria-label="Pink Ahead home"
          className="flex h-[5.5rem] w-[5.5rem] shrink-0 flex-col items-center justify-center gap-0.5 border-[3px] border-white px-1 text-center transition-opacity hover:opacity-80 md:self-center"
        >
          <span className="font-display text-2xl leading-[0.85] tracking-[0.02em] uppercase">
            Pink
          </span>
          <span className="font-display text-2xl leading-[0.85] tracking-[0.02em] uppercase">
            Ahead
          </span>
        </a>
      </div>
    </footer>
  );
}
