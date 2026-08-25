import Image from "next/image";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
          alt="Modern workspace with soft natural light"
          fill
          priority
          className="animate-drift object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,18,16,0.88)_0%,rgba(8,18,16,0.62)_45%,rgba(8,18,16,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,107,92,0.35),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="animate-rise delay-1 mb-5 text-sm uppercase tracking-[0.28em] text-white/65">
          {profile.job} · {profile.location}
        </p>

        <h1 className="animate-rise delay-2 font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.9] font-extrabold tracking-tight text-white">
          {profile.fullName}
        </h1>

        <p className="animate-rise delay-3 mt-8 max-w-xl text-lg text-white/80 md:text-xl">
          {profile.tagline}
        </p>

        <div className="animate-rise delay-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-accent-deep"
          >
            Let&apos;s work together
          </a>
          <a
            href="#work"
            className="inline-flex items-center border border-white/35 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
