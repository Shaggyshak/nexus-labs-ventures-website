import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Fractional AI Product Management</span>
          </div>
          
          {/* Hero Headline */}
          <h1 className="hero-text leading-tight">
            Transform Your Business
            <br />
            with AI Product
            <br />
            <span className="text-accent">Manager Today</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Struggling to find or afford a unicorn AI Product Manager? Get expert Individual Contributor Product Management to build your product foundation, scale your processes, and bridge to your first hire.</p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth group">
              Start Your AI Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-white/20 text-foreground hover:bg-white/5 transition-smooth">
              View Case Studies
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-16 space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by Enterprise Leaders
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">10+ YoE working in NYC and Bay Area tech hubs</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold">0-1 early stage AI-powered products</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold"> Real leaders and team builders</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;