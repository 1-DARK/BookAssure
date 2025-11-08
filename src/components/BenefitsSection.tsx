import { TrendingUp, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce No-Shows by 70%",
      description: "More patients showing up means more revenue for your clinic",
      stat: "70%",
      color: "accent",
    },
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "No more manual reminder calls. Let automation handle it for you",
      stat: "10hrs",
      color: "primary",
    },
    {
      icon: Users,
      title: "Fill Cancelled Slots Instantly",
      description: "Waitlist automation ensures your schedule stays full",
      stat: "100%",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Clinics Love BookAssure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable results that transform your clinic's efficiency and revenue
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative space-y-6">
                {/* Icon and Stat */}
                <div className="flex items-start justify-between">
                  <div className={`inline-flex p-4 rounded-lg bg-${benefit.color}/10 group-hover:bg-${benefit.color}/20 transition-colors duration-300`}>
                    <benefit.icon className={`h-8 w-8 text-${benefit.color}`} />
                  </div>
                  <div className={`text-4xl font-bold text-${benefit.color}`}>
                    {benefit.stat}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
