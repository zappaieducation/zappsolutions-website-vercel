import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, GraduationCap, ServerCog, Check } from "lucide-react";

export default function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Search,
      title: "IDENTIFY",
      color: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "bg-primary",
      description: "We help you identify high-impact AI opportunities and build a step-by-step transformation strategy to bring them to life.",
      features: [
        "AI Opportunity Assessment",
        "Digital Transformation Roadmap", 
        "Technology Stack Analysis"
      ]
    },
    {
      icon: GraduationCap,
      title: "EDUCATE",
      color: "bg-green-50 dark:bg-green-950/20",
      iconColor: "bg-accent",
      description: "We train and support your team with the right tools and knowledge to embed AI across your entire organization.",
      features: [
        "Team Training Programs",
        "Change Management",
        "Best Practices Implementation"
      ]
    },
    {
      icon: ServerCog,
      title: "DEVELOP",
      color: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "bg-purple-600",
      description: "We leverage our extensive experience to develop custom AI systems that are proven to deliver results for your business.",
      features: [
        "Custom AI Solutions",
        "Automation Implementation",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We guide companies through our comprehensive 3-step transformation journey to help you become an AI-first organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} border-0 hover:shadow-lg transition-shadow`}>
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 ${service.iconColor} rounded-full flex items-center justify-center mx-auto`}>
                  <service.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-left space-y-2 text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-accent mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-foreground text-background border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">We don't sell AI. We sell Results.</h3>
            <p className="text-background/80 mb-6">Ready to transform your business with proven AI solutions?</p>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Your Transformation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
