import { experience } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-[linear-gradient(180deg,#eef1f0_0%,#e4ebe8_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted">
            About me
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Path from campus to shipping products
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Full stack developer based in Vientiane, with experience across
            agencies, product teams, and image-detection work.
          </p>
        </div>

        <ol className="relative space-y-0 border-l border-line pl-8 md:pl-10">
          {experience.map((item) => (
            <li key={`${item.period}-${item.place}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-[2px] bg-accent md:-left-[2.85rem]" />
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-muted">
                {item.period}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">
                {item.role}
              </h3>
              <p className="mt-1 text-accent">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
                  >
                    {item.place}
                  </a>
                ) : (
                  item.place
                )}
              </p>
              <p className="mt-3 max-w-xl text-ink-soft">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
