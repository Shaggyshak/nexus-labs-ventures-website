import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">NL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nexus Labs Ventures
              </span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses through expert AI product management consulting
            </p>
            <p className="text-sm text-muted-foreground/80">
              Based in New York City
            </p>
            <p className="text-sm text-muted-foreground">© 2025 Nexus Labs Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;