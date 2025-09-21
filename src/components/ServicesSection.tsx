import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Workflow, MapPin, Box, ArrowRight, CheckCircle, Bot } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: <Bot className="w-8 h-8" />,
    title: "Agentic AI",
    description: "Navigate the AI-powered future with strategic implementation of autonomous agents and intelligent automation systems.",
    features: ["AI Agent Strategy", "Autonomous Workflow Design", "LLM Integration Architecture", "AI Product Roadmapping"],
    gradient: "from-accent to-primary"
  }, {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Billing & Payments",
    description: "Design scalable billing systems for SaaS, subscriptions, and complex pricing models with seamless user experience.",
    features: ["Subscription Management", "Usage-Based Pricing", "Payment Flow Optimization", "Revenue Recovery Systems"],
    gradient: "from-primary to-primary-glow"
  }, {
    icon: <Workflow className="w-8 h-8" />,
    title: "Enterprise Workflows",
    description: "Build sophisticated workflow engines and approval processes that scale with your business complexity.",
    features: ["Multi-Step Approval Flows", "Role-Based Permissions", "Process Automation", "Integration Architecture"],
    gradient: "from-secondary to-secondary-glow"
  }, {
    icon: <MapPin className="w-8 h-8" />,
    title: "GIS & Mapping",
    description: "Navigate location-based products with expertise in spatial data, mapping interfaces, and geospatial analytics.",
    features: ["Spatial Data Strategy", "Interactive Map Design", "Location Intelligence", "Geographic Analytics"],
    gradient: "from-accent to-accent-glow"
  }, {
    icon: <Box className="w-8 h-8" />,
    title: "3D & Visualization",
    description: "Drive innovation in 3D applications, data visualization, and immersive user experiences across platforms.",
    features: ["3D Interface Design", "Data Visualization Strategy", "Performance Optimization", "Cross-Platform Experience"],
    gradient: "from-primary to-accent"
  }];
  return <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Product Area Expertise:</h2>
          <p className="text-xl text-muted-foreground">Deep domain expertise in complex systems</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="glass-card border-card-border p-8 hover:shadow-elevated transition-smooth group">
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
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-glow">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
              </Button>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card border-card-border p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Product Foundation?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your product challenges and how fractional PM can accelerate your startup's growth.
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;