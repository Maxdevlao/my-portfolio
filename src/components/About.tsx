import { experience } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-[linear-gradient(180deg,#eef1f0_0%,#e4ebe8_100%)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted">
            Experience
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Roles where I shipped real products
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Full stack developer based in Vientiane, with experience across
            agencies and product teams.
          </p>
        </div>

        <ol className="relative space-y-0 border-l border-line pl-8 md:pl-10">
          {experience.map((item) => (
            <li
              key={`${item.period}-${item.place}`}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-[2px] bg-accent md:-left-[2.85rem]" />
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-muted">
                {item.period}
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
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
              {item.details.length === 1 ? (
                <p className="mt-3 max-w-2xl text-ink-soft">{item.details[0]}</p>
              ) : (
                <ul className="mt-4 max-w-2xl space-y-2">
                  {item.details.map((point) => (
                    <li key={point} className="flex gap-3 text-ink-soft">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
