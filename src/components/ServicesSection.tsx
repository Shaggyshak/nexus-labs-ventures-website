import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Rocket, 
  Users, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Product Strategy",
      description: "Define your AI roadmap with market research, competitive analysis, and strategic planning tailored to your business goals.",
      features: [
        "Market Opportunity Analysis",
        "AI Readiness Assessment", 
        "Technology Stack Planning",
        "ROI Modeling & Forecasting"
      ],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Execution & Delivery",
      description: "Turn strategy into reality with agile methodologies, cross-functional team coordination, and milestone-driven development.",
      features: [
        "Agile Project Management",
        "Cross-functional Coordination",
        "Quality Assurance & Testing",
        "Performance Optimization"
      ],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Sourcing",
      description: "Connect with top-tier AI talent and specialized vendors through our curated network of vetted professionals.",
      features: [
        "AI Talent Acquisition",
        "Vendor Assessment & Selection",
        "Team Scaling Solutions",
        "Knowledge Transfer Programs"
      ],
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            End-to-end AI product management services designed to accelerate your digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-card-border p-8 hover:shadow-elevated transition-smooth group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
                <div className="text-background">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-glow">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card border-card-border p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our AI expertise can accelerate your product development and market success.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;