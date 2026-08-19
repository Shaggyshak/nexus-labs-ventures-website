import { ArrowUpRight } from "lucide-react";
import { systems } from "@/data/systems";

const WorkSection = () => {
  return (
    <section id="work" className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="label">Work</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Two systems in production.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Most AI consultancies have never shipped a product. These are ours —
            both live, both carrying real users, both built by the people who
            would build yours.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {systems.map((system, index) => (
            <article
              key={system.name}
              className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono text-[0.6875rem] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-bold">{system.name}</h3>
                </div>

                <p className="mt-3 text-lg text-foreground">{system.summary}</p>

                <dl className="mono mt-6 space-y-2 text-[0.8125rem]">
                  <div className="flex gap-3">
                    <dt className="w-20 flex-shrink-0 text-muted-foreground">For</dt>
                    <dd>{system.audience}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 flex-shrink-0 text-muted-foreground">Stack</dt>
                    <dd>{system.stack.join(" · ")}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 flex-shrink-0 text-muted-foreground">Live</dt>
                    <dd>
                      <a
                        href={system.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1 text-primary transition-smooth hover:underline"
                      >
                        {system.url}
                        <ArrowUpRight className="h-3 w-3 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {system.what}
                </p>

                <p className="label mt-8">What we built</p>
                <ul className="mt-4 space-y-3">
                  {system.built.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-[0.5rem] h-1 w-4 flex-shrink-0 bg-primary/40"
                      />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
