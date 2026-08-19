import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { systems } from "@/data/systems";

/**
 * The hero leads with evidence rather than a pitch: the claim on the left, and
 * on the right the actual ledger of what we have running in production.
 */
const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* The claim */}
          <div>
            <p className="label">AI consultancy · New York</p>

            <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              We build AI
              <br />
              that ships.
            </h1>

            <div className="rule-gradient mt-8 w-32" />

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Agents, automations, and the software around them — built end to
              end and handed over running. For operators still working out of
              spreadsheets, and for startups who needed it shipped yesterday.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group rounded-md bg-foreground text-background transition-smooth hover:bg-foreground/90"
              >
                <a href="#contact">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-md border-border bg-surface transition-smooth hover:bg-muted"
              >
                <a href="#work">See what we've built</a>
              </Button>
            </div>
          </div>

          {/* The ledger */}
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="label">In production</span>
              <span className="mono text-[0.6875rem] text-muted-foreground">
                {systems.length} systems
              </span>
            </div>

            <ul>
              {systems.map((system) => (
                <li key={system.name} className="border-b border-border last:border-b-0">
                  <a
                    href={system.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 px-5 py-5 transition-smooth hover:bg-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-2 w-2 flex-shrink-0 rounded-full bg-live"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-lg font-bold">
                          {system.name}
                        </span>
                        <span className="mono text-[0.6875rem] text-muted-foreground">
                          {system.shipped}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {system.summary}
                      </span>
                      <span className="mono mt-2 flex items-center gap-1 text-[0.75rem] text-primary">
                        {system.url}
                        <ArrowUpRight className="h-3 w-3 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="border-t border-border bg-muted/60 px-5 py-4 text-sm text-muted-foreground">
              Both are our own products, live and serving real users. We build
              for clients the way we build for ourselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
