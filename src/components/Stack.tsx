import { stacks } from "@/data/portfolio";

export function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted">
            Key stack
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Tools I use to ship products
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stacks.map((group) => (
            <div key={group.label} className="border-t border-line pt-5">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink md:text-[1.7rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
