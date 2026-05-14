"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BookButton from "./BookButton";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] px-[5vw] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-cream border-b border-ink/10"
            : "bg-cream border-b border-transparent"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Mobile hamburger - left of logo */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

          <Link href="/" className="flex flex-col gap-[2px] no-underline">
            <span className="font-serif font-normal text-[18px] text-ink tracking-[-0.012em] leading-none">
              Juliette Reese-Kari
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-light font-medium">
              Paediatric Dietitian
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 items-center list-none m-0 p-0">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[12px] tracking-[0.14em] uppercase text-ink-mid font-medium hover:text-sage-deep transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <BookButton variant="primary" className={`!py-[11px] !px-[22px] !text-[13px] !rounded-full ${menuOpen ? "!hidden md:!inline-flex" : ""}`}>
            <span className="hidden sm:inline">Book a consultation</span>
            <span className="sm:hidden">Book</span>
          </BookButton>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: 72 }}
      >
        <div className="flex flex-col items-center justify-center gap-8 pt-16">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif font-normal text-2xl text-ink tracking-[-0.012em] no-underline hover:text-sage transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4">
            <BookButton>Book a consultation</BookButton>
          </div>
        </div>
      </div>
    </>
  );
}
