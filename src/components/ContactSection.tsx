import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Calendar, ArrowRight } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Get Your First PM Without the Hiring Hassle
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Ready to move fast with expert product management? Skip the months-long hiring process and get a seasoned PM who understands startups, technical challenges, and how to build products that matter. </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <Card className="glass-card border-card-border p-6 hover:shadow-secondary transition-smooth group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">hi@nexuslabsventures.space</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card border-card-border p-6 hover:shadow-secondary transition-smooth group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-glow flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <Calendar className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Book a Free Consultation</h3>
                    <p className="text-muted-foreground">Discuss your product challenges</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card border-card-border p-6 hover:shadow-secondary transition-smooth group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <MessageSquare className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Chat</h3>
                    <p className="text-muted-foreground">Get instant answers to your questions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="glass-card border-card-border p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-muted-foreground">Tell us about your product challenges</p>
                </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-muted/50 border-border focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-muted/50 border-border focus:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-muted/50 border-border focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" className="bg-muted/50 border-border focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Product Challenges</Label>
                  <Textarea 
                    id="message" 
                    placeholder="What product management challenges are you facing? Are you struggling to hire a PM, need help with product strategy, or looking to scale your processes?" 
                    className="bg-muted/50 border-border focus:ring-primary min-h-24" 
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:shadow-primary transition-smooth group" size="lg">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;