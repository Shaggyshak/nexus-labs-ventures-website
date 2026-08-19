import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_EMAIL = "hi@nexuslabsventures.space";

/**
 * The form composes a mail draft in the visitor's own client. There is no
 * backend to receive a POST, and a form that silently swallows submissions is
 * worse than no form at all.
 */
const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const problem = String(data.get("problem") ?? "").trim();

    const subject = company ? `Project enquiry — ${company}` : "Project enquiry";

    const details: string[] = [];
    if (name) details.push(`Name: ${name}`);
    if (company) details.push(`Company: ${company}`);
    if (email) details.push(`Email: ${email}`);

    const body = [...details, "", problem].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border bg-surface py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label">Contact</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Tell us what's broken.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Bring a real problem — a process that eats a day a week, a pile of
              documents nobody has time to read, a feature you cannot staff.
              We will tell you straight whether it is worth building, and say so
              plainly when it is not.
            </p>

            <div className="mt-10 space-y-px">
              <div className="grid grid-cols-[5rem_1fr] gap-4 border-t border-border py-4">
                <span className="label pt-0.5">Email</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm transition-smooth hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-4 border-t border-border py-4">
                <span className="label pt-0.5">Phone</span>
                <a
                  href="tel:+16464848207"
                  className="text-sm transition-smooth hover:text-primary"
                >
                  (646) 484-8207
                </a>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-4 border-y border-border py-4">
                <span className="label pt-0.5">Office</span>
                <address className="text-sm not-italic text-muted-foreground">
                  1178 Broadway, 3rd Floor #1464
                  <br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" autoComplete="organization" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">What are you trying to fix?</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  required
                  className="min-h-32"
                  placeholder="What happens today, who does it, and how long it takes."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-md bg-foreground text-background transition-smooth hover:bg-foreground/90"
              >
                Open this in your email app
              </Button>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {sent
                  ? `If your mail app did not open, write to ${CONTACT_EMAIL} directly.`
                  : `This composes a message in your own mail client addressed to ${CONTACT_EMAIL} — nothing is sent until you send it.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
