import { Card, CardContent } from "@/components/ui/card";
import { Building, ShoppingCart, Heart, Code, Database, Cloud, Cpu, Brain, Server } from "lucide-react";

export default function PortfolioSection() {
  const testimonials = [
    {
      icon: Building,
      title: "Real Estate Firm",
      category: "Property Management",
      description: "ZaPP Solutions automated our property management processes, reducing manual work by 70% and improving client satisfaction significantly.",
      result: "40% Cost Reduction",
      color: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platform",
      category: "Retail Technology",
      description: "Their AI-powered inventory management system transformed our operations, leading to better stock control and increased sales.",
      result: "60% Efficiency Increase",
      color: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Heart,
      title: "Healthcare Clinic",
      category: "Medical Services",
      description: "The patient management system streamlined our appointment scheduling and improved patient experience dramatically.",
      result: "50% Time Savings",
      color: "bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  const technologies = [
    { icon: Code, name: "Python", color: "text-blue-600" },
    { icon: Brain, name: "Machine Learning", color: "text-purple-600" },
    { icon: Cloud, name: "AWS", color: "text-orange-500" },
    { icon: Code, name: "React", color: "text-cyan-500" },
    { icon: Database, name: "Databases", color: "text-green-600" },
    { icon: Server, name: "Docker", color: "text-blue-500" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses across various industries transform their operations with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`${testimonial.color} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <testimonial.icon className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.title}</h4>
                    <div className="text-muted-foreground text-sm">{testimonial.category}</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.description}</p>
                <div className="text-accent font-semibold">{testimonial.result}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <Card className="bg-muted/50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Technologies We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity">
                  <tech.icon className={`${tech.color} text-4xl mb-2 mx-auto`} />
                  <div className="text-sm font-medium text-foreground">{tech.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
