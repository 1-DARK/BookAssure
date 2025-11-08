import { Stethoscope, Activity, UserCheck, Building2, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TargetCustomers = () => {
  const customers = [
    {
      icon: Stethoscope,
      title: "Dental Clinics",
      description: "Perfect for busy dental practices with multiple daily appointments",
    },
    {
      icon: Activity,
      title: "Physiotherapy Centers",
      description: "Ideal for physio clinics managing recurring treatment schedules",
    },
    {
      icon: UserCheck,
      title: "Specialist Doctors",
      description: "Great for specialists with high-value consultations",
    },
    {
      icon: Building2,
      title: "Multi-location Practices",
      description: "Manage appointments across multiple clinic locations",
    },
    {
      icon: FlaskConical,
      title: "Diagnostic Centers",
      description: "Streamline lab appointments and sample collection schedules",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-muted to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perfect For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BookAssure works for all types of healthcare practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {customers.map((customer, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <customer.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{customer.title}</h3>
              <p className="text-sm text-muted-foreground">{customer.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
