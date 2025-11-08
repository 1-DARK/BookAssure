import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingUp } from "lucide-react";

export const Hero = () => {
  const [appointments, setAppointments] = useState(20);
  const [appointmentValue, setAppointmentValue] = useState(1000);
  const [noShowRate, setNoShowRate] = useState(25);

  const monthlyLoss = Math.round(appointments * appointmentValue * (noShowRate / 100) * 30);
  const potentialSavings = Math.round(monthlyLoss * 0.7);

  const scrollToForm = () => {
    document.getElementById('interest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-accent-light pt-20 pb-24 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Headlines & CTAs */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
                Stop Losing ₹50,000+ Every Month to Patient No-Shows
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl">
                Automated appointment reminders that get patients to show up. Built for busy Indian clinics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={scrollToForm}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-white transition-all duration-300"
                onClick={scrollToCalculator}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Loss
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - ROI Calculator */}
          <Card id="calculator" className="p-6 lg:p-8 shadow-xl bg-white/95 backdrop-blur-sm border-2 animate-scale-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b pb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">ROI Calculator</h3>
                  <p className="text-sm text-muted-foreground">See your potential savings</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Appointments per day
                  </label>
                  <Input
                    type="number"
                    value={appointments}
                    onChange={(e) => setAppointments(Number(e.target.value))}
                    className="text-lg"
                    min="1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Average appointment value (₹)
                  </label>
                  <Input
                    type="number"
                    value={appointmentValue}
                    onChange={(e) => setAppointmentValue(Number(e.target.value))}
                    className="text-lg"
                    min="100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Current no-show rate: {noShowRate}%
                  </label>
                  <input
                    type="range"
                    value={noShowRate}
                    onChange={(e) => setNoShowRate(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    min="0"
                    max="50"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Monthly Loss:</span>
                  <span className="text-2xl font-bold text-destructive">₹{monthlyLoss.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Potential Monthly Savings:</span>
                  <span className="text-2xl font-bold text-accent">₹{potentialSavings.toLocaleString()}</span>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  *Based on 70% reduction in no-shows with BookAssure
                </p>
              </div>

              <Button 
                className="w-full text-lg py-6" 
                size="lg"
                onClick={scrollToForm}
              >
                Get Started Free
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <div className="h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>
    </section>
  );
};
