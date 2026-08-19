import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import BuildSection from "../components/BuildSection";
import ProcessSection from "../components/ProcessSection";
import ContactSection from "../components/ContactSection";
import nexusLogo from "@/assets/nexus-labs-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <BuildSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <img src={nexusLogo} alt="" className="h-8 w-8 rounded-lg" />
                <span className="font-display text-sm font-bold">
                  Nexus Labs Ventures
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                An AI consultancy in New York. We build the thing, then hand you
                the keys.
              </p>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
              <div>
                <p className="label">Contact</p>
                <a
                  href="mailto:hi@nexuslabsventures.space"
                  className="mt-3 block text-sm text-muted-foreground transition-smooth hover:text-foreground"
                >
                  hi@nexuslabsventures.space
                </a>
                <a
                  href="tel:+16464848207"
                  className="mt-2 block text-sm text-muted-foreground transition-smooth hover:text-foreground"
                >
                  (646) 484-8207
                </a>
              </div>

              <div>
                <p className="label">Office</p>
                <address className="mt-3 text-sm not-italic text-muted-foreground">
                  1178 Broadway, 3rd Floor #1464
                  <br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
            © 2026 Nexus Labs Ventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
