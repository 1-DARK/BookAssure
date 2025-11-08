import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,499",
      period: "month",
      description: "Perfect for small clinics getting started",
      popular: false,
      features: [
        "Up to 200 appointments/month",
        "Multi-channel reminders (WhatsApp, SMS, Email)",
        "Basic dashboard",
        "Email support",
        "14-day free trial",
      ],
    },
    {
      name: "Professional",
      price: "2,999",
      period: "month",
      description: "Most popular for growing practices",
      popular: true,
      features: [
        "Up to 500 appointments/month",
        "Everything in Starter",
        "Waitlist management",
        "Advanced analytics",
        "Priority support",
        "14-day free trial",
      ],
    },
    {
      name: "Enterprise",
      price: "4,999",
      period: "month",
      description: "For established multi-location clinics",
      popular: false,
      features: [
        "Unlimited appointments",
        "Everything in Professional",
        "Multi-location support",
        "Custom integrations",
        "Dedicated account manager",
        "14-day free trial",
      ],
    },
  ];

  const scrollToForm = () => {
    document.getElementById('interest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your clinic. All plans include 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "border-primary border-2 shadow-xl scale-105" : "border-2 hover:-translate-y-2"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  MOST POPULAR
                </Badge>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full py-6"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToForm}
                >
                  Start Free Trial
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  No credit card required
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial. Cancel anytime. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};
