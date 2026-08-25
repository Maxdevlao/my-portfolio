import { profile } from "@/data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.18em] uppercase text-white/90 transition hover:text-white"
        >
          {profile.firstName}
        </a>
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {links.map((link) => (
            <li
              key={link.href}
              className={
                link.href === "#stack" ? "hidden md:list-item" : undefined
              }
            >
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
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm font-medium text-white transition hover:text-highlight"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
