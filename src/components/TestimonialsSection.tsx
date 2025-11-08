import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Reduced our no-shows from 25% to 7% in just one month! The ROI was immediate and our revenue has increased significantly.",
      author: "Dr. Sharma",
      role: "Dental Clinic, Mumbai",
      rating: 5,
    },
    {
      quote: "Saves my receptionist 2 hours every day. She can now focus on patient care instead of making reminder calls.",
      author: "Dr. Mehta",
      role: "Physiotherapy Center, Bangalore",
      rating: 5,
    },
    {
      quote: "The waitlist feature alone paid for the subscription 3x over. We're filling cancelled slots within minutes now.",
      author: "Dr. Gupta",
      role: "Skin Specialist, Delhi",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-primary-light to-accent-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what clinic owners are saying about BookAssure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t">
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
