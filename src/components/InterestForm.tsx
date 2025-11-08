import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const InterestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noShowRate, setNoShowRate] = useState(25);
  const [formData, setFormData] = useState({
    clinicName: "",
    name: "",
    email: "",
    phone: "",
    clinicType: "",
    appointmentsPerDay: "",
    challenge: "",
    interestedInTrial: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "We'll send your custom savings report within 24 hours.",
    });

    // Reset form
    setFormData({
      clinicName: "",
      name: "",
      email: "",
      phone: "",
      clinicType: "",
      appointmentsPerDay: "",
      challenge: "",
      interestedInTrial: false,
    });
    setNoShowRate(25);
    setIsSubmitting(false);
  };

  return (
    <section id="interest-form" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Is Your Clinic Losing Money to No-Shows?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's calculate your potential savings with a custom report
            </p>
          </div>

          <Card className="p-8 shadow-xl border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="clinicName">Clinic Name *</Label>
                  <Input
                    id="clinicName"
                    required
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    placeholder="Enter your clinic name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="clinicType">Clinic Type *</Label>
                  <Select
                    required
                    value={formData.clinicType}
                    onValueChange={(value) => setFormData({ ...formData, clinicType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select clinic type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dental">Dental</SelectItem>
                      <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                      <SelectItem value="general">General Practice</SelectItem>
                      <SelectItem value="specialist">Specialist</SelectItem>
                      <SelectItem value="diagnostic">Diagnostic</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointmentsPerDay">Average Appointments/Day *</Label>
                  <Input
                    id="appointmentsPerDay"
                    type="number"
                    required
                    min="1"
                    value={formData.appointmentsPerDay}
                    onChange={(e) => setFormData({ ...formData, appointmentsPerDay: e.target.value })}
                    placeholder="e.g., 20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="noShowRate">Current No-Show Rate: {noShowRate}% *</Label>
                <input
                  id="noShowRate"
                  type="range"
                  value={noShowRate}
                  onChange={(e) => setNoShowRate(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  min="0"
                  max="50"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Biggest Challenge with No-Shows</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  placeholder="Tell us about your main challenges with patient no-shows..."
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trial"
                  checked={formData.interestedInTrial}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, interestedInTrial: checked as boolean })
                  }
                />
                <Label htmlFor="trial" className="font-normal cursor-pointer">
                  I'm interested in starting a free trial
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Custom Report"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
