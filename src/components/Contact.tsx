import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-ink text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,107,92,0.28)_0%,transparent_48%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/50">
          Contact
        </p>
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-6xl">
          Have a product in mind? Let&apos;s talk.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/70">
          Open to full stack roles, freelance builds, and collaboration on
          mobile and web platforms.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-accent-deep"
          >
            Message on WhatsApp
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center border-b border-white/40 pb-1 text-sm font-medium text-white transition hover:border-highlight hover:text-highlight"
          >
            GitHub — @Maxdevlao
          </a>
        </div>

        <p className="mt-8 text-white/55">{profile.whatsappDisplay}</p>
      </div>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>Full Stack Developer · Vientiane</p>
        </div>
      </footer>
    </section>
  );
}
