import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-bold text-sm uppercase tracking-[0.22em] text-muted">
              Education
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Learning that shaped the craft
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft md:text-right">
            From high school through university and language studies in
            Vientiane.
          </p>
        </div>

        <ol className="grid gap-0 border-t border-line md:grid-cols-3">
          {education.map((item, index) => (
            <li
              key={`${item.period}-${item.place}`}
              className="group relative border-b border-line py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="mb-6 inline-flex font-mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-accent">
                {item.period}
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition group-hover:text-accent">
                {item.role}
              </h3>
              <p className="mt-2 font-medium text-ink-soft">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-accent/30 underline-offset-4 transition hover:text-accent hover:decoration-accent"
                  >
                    {item.place}
                  </a>
                ) : (
                  item.place
                )}
              </p>
              <p className="mt-4 text-ink-soft">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
