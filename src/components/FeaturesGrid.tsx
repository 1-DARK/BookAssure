import { MessageCircle, CheckCircle2, Users, BarChart3, TrendingDown, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Multi-channel Reminders",
      description: "Send reminders via WhatsApp, SMS, and Email to ensure maximum reach",
    },
    {
      icon: CheckCircle2,
      title: "One-click Confirmation",
      description: "Patients confirm attendance with a single tap on their phone",
    },
    {
      icon: Users,
      title: "Intelligent Waitlist",
      description: "Automatically notify waitlisted patients when slots open up",
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description: "Track appointments, confirmations, and no-shows in one place",
    },
    {
      icon: TrendingDown,
      title: "No-show Pattern Tracking",
      description: "Identify repeat no-show patients and take proactive measures",
    },
    {
      icon: RotateCcw,
      title: "Automated Reschedule",
      description: "Let patients reschedule instantly without calling your clinic",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features That Work for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to reduce no-shows and keep your schedule full
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
