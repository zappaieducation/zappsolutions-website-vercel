import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">About ZaPP Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in the heart of Dubai's thriving business district, ZaPP Solutions is a leading provider of AI and digital transformation services. We specialize in helping businesses leverage cutting-edge technology to automate operations, reduce costs, and scale efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced professionals combines deep technical expertise with strategic business insight to deliver solutions that drive real, measurable results for our clients.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="stat-card">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="stat-card">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Dubai skyline with modern skyscrapers and business district" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
