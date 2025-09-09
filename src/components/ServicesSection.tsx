import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Rocket, 
  Users, 
  Map,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Startup PM Foundation",
      description: "Build essential product management processes from scratch. Get your roadmap, user research framework, and analytics foundation in place.",
      features: [
        "Product Strategy & Roadmapping",
        "User Research & Validation", 
        "Analytics & KPI Framework",
        "Cross-functional Process Setup"
      ],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth Stage Scaling",
      description: "Scale your product processes as you grow. Implement advanced PM practices, optimize workflows, and prepare for team expansion.",
      features: [
        "Advanced PM Methodologies",
        "Team Workflow Optimization",
        "Product-Market Fit Analysis",
        "Scaling Process Design"
      ],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Product Leadership",
      description: "Navigate complex technical products with specialized PM expertise in AI, marketplaces, billing systems, and enterprise workflows.",
      features: [
        "AI & ML Product Strategy",
        "Marketplace & Platform Design",
        "Complex System Architecture",
        "Technical Roadmap Planning"
      ],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "PM Team Building",
      description: "Prepare your organization for hiring full-time PMs. Train existing team members and establish hiring criteria and processes.",
      features: [
        "PM Hiring Strategy & Process",
        "Team Training & Mentorship",
        "Interview Process Design",
        "Transition Planning"
      ],
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Fractional PM Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Get expert product management support tailored to your startup's growth stage and technical needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Product Foundation?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your product challenges and how fractional PM can accelerate your startup's growth.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;