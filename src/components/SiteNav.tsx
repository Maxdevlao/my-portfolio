"use client";

import { useState } from "react";
import { HiOutlineMail, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-8">
        <a
          href="#top"
          onClick={close}
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.18em] uppercase text-white/90 transition hover:text-white"
        >
          {profile.firstName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-white transition hover:text-highlight md:inline-flex"
          aria-label={`Email ${profile.email}`}
        >
          <HiOutlineMail className="h-4 w-4" aria-hidden />
          Email
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <HiOutlineX className="h-5 w-5" aria-hidden />
          ) : (
            <HiOutlineMenu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="px-6 pb-4 md:hidden">
          <div className="rounded-2xl border border-white/15 bg-ink/90 px-5 py-3 backdrop-blur">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block border-b border-white/10 py-3.5 text-base text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
