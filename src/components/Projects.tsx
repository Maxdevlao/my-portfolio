import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted">
              Selected work
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Projects I&apos;ve helped bring to life
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Apps and web platforms across lottery, marketplace, rental, and
            booking experiences.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className="group grid gap-3 py-7 transition md:grid-cols-[4rem_1fr_10rem] md:items-center md:gap-8 md:py-8"
            >
              <span className="font-mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink transition group-hover:text-accent md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-ink-soft">{project.note}</p>
              </div>
              <span className="text-sm uppercase tracking-[0.16em] text-muted md:text-right">
                {project.type}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
