/**
 * The systems we have in production. The hero ledger and the work section read
 * from this one list so they can never drift apart.
 */
export type System = {
  name: string;
  summary: string;
  url: string;
  href: string;
  shipped: string;
  audience: string;
  what: string;
  built: string[];
  stack: string[];
};

export const systems: System[] = [
  {
    name: "Teez",
    summary: "AI underwriting agent, inside Excel",
    url: "app.teez.live",
    href: "https://app.teez.live",
    shipped: "2026",
    audience: "Commercial real estate sponsors",
    what: "An agent that underwrites a deal in the analyst's own spreadsheet. It reads the offering memo, the rent roll and the T-12, then writes the model — live formulas and all — into the template the firm already uses, instead of exporting one more file nobody trusts.",
    built: [
      "Document extraction over PDFs, spreadsheets and scans, with every figure traced back to the page it came from",
      "A deterministic pro-forma engine — DCF, IRR, equity multiple — so the numbers do not depend on a model's mood",
      "An Excel add-in that writes cells and formulas live, and a review step that lets the analyst reject any write",
    ],
    stack: ["Claude", "Next.js", "Office JS", "Postgres"],
  },
  {
    name: "AirOps",
    summary: "AI field operations for contractors",
    url: "airops.nyc",
    href: "https://airops.nyc",
    shipped: "2026",
    audience: "HVAC and trades businesses",
    what: "The back office of a contracting business, run by software. It finds and qualifies shops, plans the day's route, and runs tracked outreach a one-person operation can actually keep up with — the work that otherwise happens on a clipboard and in someone's head.",
    built: [
      "A geocoding pipeline that routes New York addresses and New Jersey ones to different services, because the cheap answer pins Brooklyn to Jersey City",
      "A CRM the owner can read, built on the spreadsheet they were already keeping",
      "Outreach with delivery, reply and opt-out tracking wired end to end, and suppression that is honoured before every send",
    ],
    stack: ["Node", "SQLite", "Gmail API", "GCP"],
  },
];
