import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI Product Management Experts</span>
          </div>
          
          {/* Hero Headline */}
          <h1 className="hero-text leading-tight">
            Transform Your Business
            <br />
            with AI Product
            <br />
            <span className="text-accent">Strategy</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From strategic planning to flawless execution and expert sourcing, 
            we guide enterprises through their AI transformation journey with proven methodologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth group"
            >
              Start Your AI Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="glass-card border-white/20 text-foreground hover:bg-white/5 transition-smooth"
            >
              View Case Studies
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-16 space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by Enterprise Leaders
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold">Startups</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold">Scale-ups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;