import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import nexusLogo from "@/assets/nexus-labs-logo.png";

const links = [
  { href: "#work", label: "Work" },
  { href: "#build", label: "What we build" },
  { href: "#process", label: "How we work" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-background/85 backdrop-blur-md transition-smooth ${
        scrolled || open ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center space-x-3">
          <img src={nexusLogo} alt="" className="h-9 w-9 rounded-lg" />
          <span className="whitespace-nowrap font-display text-[0.98rem] font-bold tracking-tight">
            Nexus Labs Ventures
          </span>
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-md bg-foreground px-4 text-background transition-smooth hover:bg-foreground/90 md:inline-flex"
          >
            <a href="#contact">Start a project</a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 rounded-md p-2 text-muted-foreground transition-smooth hover:text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="container mx-auto px-6 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm text-muted-foreground transition-smooth hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="my-3 block rounded-md bg-foreground py-3 text-center text-sm font-medium text-background"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
