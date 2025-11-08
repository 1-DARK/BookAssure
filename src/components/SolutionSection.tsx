import { Calendar, Bell, Users } from "lucide-react";

export const SolutionSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Patient Books Appointment",
      description: "Automatic scheduling and immediate system entry",
      color: "primary",
    },
    {
      icon: Bell,
      title: "Smart Reminders Sent",
      description: "48hr, 24hr, and 2hr before via WhatsApp/SMS/Email",
      color: "accent",
    },
    {
      icon: Users,
      title: "Confirmation & Waitlist",
      description: "Patient confirms or waitlist patients get auto-notified for empty slots",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-primary-light to-accent-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to eliminate no-shows and maximize your clinic's revenue
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-primary/20 -z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>
                )}

                <div className="text-center space-y-4">
                  {/* Icon Circle */}
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 rounded-full bg-${step.color} opacity-20 blur-xl`} />
                    <div className={`relative p-6 rounded-full bg-${step.color} shadow-lg`}>
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
