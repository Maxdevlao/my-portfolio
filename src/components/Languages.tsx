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
        <div data-reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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

        <ul className="grid grid-cols-3 gap-2 sm:gap-3">
          {languages.map((language) => {
            const meta = languageMeta[language.name];

            return (
              <li key={language.name} data-reveal>
                <article className="group relative h-full overflow-hidden border border-line bg-white/80 px-2.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white sm:px-4 sm:py-4">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-accent/80 transition group-hover:bg-accent" />

                  <div className="relative flex items-center justify-between gap-1.5">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-muted sm:text-[11px] sm:tracking-[0.18em]">
                      {meta.code}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-[11px] sm:tracking-[0.16em]">
                      {language.level}
                    </span>
                  </div>

                  <p
                    className="pointer-events-none absolute right-2 top-6 select-none font-display text-4xl leading-none font-bold text-accent/[0.08] transition duration-500 group-hover:text-accent/15 sm:right-3 sm:top-7 sm:text-5xl"
                    aria-hidden
                  >
                    {meta.script}
                  </p>

                  <div className="relative mt-4 flex items-end gap-2 sm:mt-5 sm:gap-3">
                    <p className="font-display text-base leading-none text-accent/70 sm:text-xl">
                      {meta.script}
                    </p>
                    <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-2xl">
                      {language.name}
                    </h3>
                  </div>

                  <div
                    className="relative mt-4 flex gap-1"
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
                        className={`h-1 flex-1 transition duration-300 ${
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
