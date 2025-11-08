import { TrendingDown, Clock, DollarSign, Frown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProblemSection = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: "20-30%",
      label: "Average no-show rate across Indian clinics",
    },
    {
      icon: DollarSign,
      value: "₹2.4L+",
      label: "Lost annually for small practices",
    },
    {
      icon: Clock,
      value: "15 min",
      label: "Wasted per no-show on follow-up calls",
    },
  ];

  const painPoints = [
    {
      icon: DollarSign,
      title: "Lost Revenue",
      description: "Empty appointment slots mean lost income that can never be recovered.",
    },
    {
      icon: Clock,
      title: "Wasted Staff Time",
      description: "Hours spent on manual reminder calls and rescheduling patients.",
    },
    {
      icon: TrendingDown,
      title: "Disrupted Schedules",
      description: "Last-minute cancellations create gaps that are hard to fill.",
    },
    {
      icon: Frown,
      title: "Stressed Clinic Staff",
      description: "Constant follow-ups and schedule changes increase team burnout.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Hidden Cost of No-Shows
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Patient no-shows are silently draining your clinic's revenue and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-destructive"
            >
              <div className="inline-flex p-2 rounded-lg bg-destructive/10 mb-4">
                <point.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
