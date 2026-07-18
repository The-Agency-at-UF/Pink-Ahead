"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "HOME",      href: "/"          },
  { label: "ABOUT",     href: "/about"     },
  { label: "CARE",      href: "/care"      },
  { label: "RESOURCES", href: "/resources" },
  { label: "COMMUNITY", href: "/community" },
];

const linkStyle = {
  fontFamily: "'acumin-variable', 'Barlow Condensed', 'Arial Narrow', sans-serif",
  fontVariationSettings: "'wdth' 50",
  fontWeight: 700,
} as React.CSSProperties;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // "/" is active only on exact match; others match by prefix
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full bg-white border-b border-gray-100 relative z-50">
      {/* Main bar */}
      <div className="flex items-center h-[80px] md:h-[120px] px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/" aria-label="Pink Ahead home">
            <Image
              src="/assets/Pink Ahead Primary.svg"
              alt="Pink Ahead"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop nav links — right-aligned, flush with icons */}
        <nav aria-label="Main navigation" className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-8 mr-10 xl:mr-12">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[28px] xl:text-[36px] 2xl:text-[40px] leading-none font-bold tracking-wide transition-colors duration-150 whitespace-nowrap"
              style={{
                ...linkStyle,
                color: isActive(href) ? "#EC0B8C" : "#0c0c0c",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-6 md:gap-12 flex-shrink-0 ml-auto lg:ml-0">
          <button
            className="cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <Image
              src="/assets/SearchIcon.svg"
              alt="Search"
              width={40}
              height={40}
              className="h-7 w-7 md:h-9 md:w-9"
            />
          </button>
          <Image
            src="/assets/Ribbon Icon.svg"
            alt="Ribbon"
            width={27}
            height={40}
            className="h-8 md:h-10 w-auto"
          />

          {/* Hamburger — mobile/tablet only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-[3px] w-6 bg-[#EC0B8C] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 bg-[#EC0B8C] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 bg-[#EC0B8C] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-2xl font-bold tracking-wide transition-colors duration-150"
                style={{
                  ...linkStyle,
                  color: isActive(href) ? "#EC0B8C" : "#0c0c0c",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
