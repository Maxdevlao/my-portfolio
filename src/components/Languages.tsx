import { languages } from "@/data/portfolio";

const languageMeta: Record<
  (typeof languages)[number]["name"],
  { script: string; code: string; segments: number }
> = {
  Lao: { script: "ລາວ", code: "LO", segments: 5 },
  English: { script: "Aa", code: "EN", segments: 3 },
  Thai: { script: "ไทย", code: "TH", segments: 4 },
};

export function Languages() {
  return (
    <section
      id="languages"
      className="border-t border-line bg-[linear-gradient(165deg,#f7f9f8_0%,#e8efec_48%,#eef1f0_100%)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-18 md:px-8 md:py-20">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted">
              Languages
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              How I communicate
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft md:text-right">
            Working across Lao, European, and Korean for teams and clients in the
            region.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {languages.map((language) => {
            const meta = languageMeta[language.name];

            return (
              <li key={language.name}>
                <article className="group relative h-full overflow-hidden border border-line bg-white/80 px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white">
                  <div className="absolute inset-x-0 top-0 h-1 bg-accent/80 transition group-hover:bg-accent" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted">
                      {meta.code}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {language.level}
                    </span>
                  </div>

                  <p
                    className="pointer-events-none absolute right-4 top-10 select-none font-display text-[5.5rem] leading-none font-bold text-accent/[0.07] transition duration-500 group-hover:text-accent/15"
                    aria-hidden
                  >
                    {meta.script}
                  </p>

                  <div className="relative mt-10">
                    <p className="mb-2 font-display text-3xl leading-none text-accent/70">
                      {meta.script}
                    </p>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      {language.name}
                    </h3>
                  </div>

                  <div
                    className="relative mt-8 flex gap-1.5"
                    role="meter"
                    aria-label={`${language.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={5}
                    aria-valuenow={meta.segments}
                    aria-valuetext={language.level}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 transition duration-300 ${
                          i < meta.segments
                            ? "bg-accent"
                            : "bg-line group-hover:bg-accent/20"
                        }`}
                      />
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
