/**
 * Numbered because this genuinely is a sequence — the order is the commitment,
 * and each phase has a stated end.
 */
const phases = [
  {
    week: "Week 1",
    title: "Scope",
    body: "We work the problem with you, then come back with what we would build, what it costs, and what it deliberately will not do. If the honest answer is that software is the wrong fix, you get that answer instead — and no invoice.",
  },
  {
    week: "Weeks 2–6",
    title: "Build",
    body: "You see working software every week. Not a status deck, not a percentage — the thing itself, running, with whatever is still wrong about it visible rather than smoothed over.",
  },
  {
    week: "Then",
    title: "Hand over",
    body: "It runs in your accounts, on your infrastructure, with the documentation to change it. You are not renting access to something we keep. If you never call us again, it keeps working.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="label">How we work</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Six weeks, not six months.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              No discovery phase that bills for a quarter before anything runs.
              The deliverable is software in production, and the engagement is
              shaped so you can tell early whether it is working.
            </p>
          </div>

          <ol className="space-y-px">
            {phases.map((phase, index) => (
              <li
                key={phase.title}
                className="grid grid-cols-[3rem_1fr] gap-5 border-t border-border py-8 last:border-b"
              >
                <span className="mono pt-1 text-[0.6875rem] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-bold">{phase.title}</h3>
                    <span className="mono text-[0.75rem] text-primary">
                      {phase.week}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
