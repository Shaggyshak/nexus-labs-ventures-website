const capabilities = [
  {
    title: "Agents that do the work",
    body: "Not a chatbot bolted to your docs. Agents that read what comes in, make the calls a capable junior would make, and write the result back into the systems your team already opens every morning.",
  },
  {
    title: "Workflow automation",
    body: "The manual chain between two systems, removed. Intake, routing, follow-up, reporting — the steps that quietly eat a day a week and never make it onto anyone's roadmap.",
  },
  {
    title: "Document and data pipelines",
    body: "PDFs, spreadsheets and scans turned into data you can query. Extraction is the easy half; the work is checking it, so a wrong number surfaces instead of settling silently into a total.",
  },
  {
    title: "The software around it",
    body: "Dashboards, admin tools, integrations, the boring authentication. The model is rarely the product — what makes it usable is everything built around it.",
  },
];

const domains = [
  {
    title: "Geospatial and 3D",
    body: "Mapping, routing, spatial data and 3D visualization. Location products live or die on the details: a geocoder that quietly pins Brooklyn to Jersey City is worse than no geocoder, because you will believe it.",
  },
  {
    title: "Monetization and metering",
    body: "Usage-based pricing for AI products — token metering, credits, overages, and knowing your margin per customer before the invoice from your model provider tells you.",
  },
];

const BuildSection = () => {
  return (
    <section id="build" className="border-t border-border bg-surface py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="label">What we build</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Working software, not recommendations.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border-t border-border pt-6">
              <h3 className="font-display text-xl font-bold">
                {capability.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {capability.body}
              </p>
            </div>
          ))}
        </div>

        {/* Domains sit apart from the AI capabilities: they are product
            categories in their own right, not applications of the above. */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="max-w-2xl">
            <p className="label">Product domains</p>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Categories we know from the inside.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Two areas we have shipped in for years, where the hard parts are
              not obvious until you have already got them wrong once.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {domains.map((domain) => (
              <div key={domain.title} className="panel p-7">
                <h4 className="font-display text-lg font-bold">{domain.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {domain.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
