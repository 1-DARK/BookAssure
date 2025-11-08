import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, TrendingUp, Calendar, Users } from "lucide-react";

export const DashboardDemo = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Control Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time visibility into every appointment with actionable insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 border-l-4 border-l-accent">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Today's Appointments</span>
                <Calendar className="h-4 w-4 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">28</div>
            </Card>

            <Card className="p-4 border-l-4 border-l-primary">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Confirmation Rate</span>
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">92%</div>
            </Card>

            <Card className="p-4 border-l-4 border-l-destructive">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">No-shows Prevented</span>
                <TrendingUp className="h-4 w-4 text-destructive" />
              </div>
              <div className="text-2xl font-bold text-foreground">18</div>
            </Card>

            <Card className="p-4 border-l-4 border-l-accent">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Revenue Saved</span>
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">₹18k</div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Today's Appointments List */}
            <Card className="lg:col-span-2 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Appointments
              </h3>
              <div className="space-y-3">
                {[
                  { time: "9:00 AM", patient: "Rajesh Kumar", status: "confirmed", type: "Dental Checkup" },
                  { time: "9:30 AM", patient: "Priya Sharma", status: "confirmed", type: "Root Canal" },
                  { time: "10:00 AM", patient: "Amit Patel", status: "pending", type: "Consultation" },
                  { time: "10:30 AM", patient: "Sneha Reddy", status: "confirmed", type: "Cleaning" },
                  { time: "11:00 AM", patient: "Vikram Singh", status: "pending", type: "Filling" },
                ].map((apt, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-muted-foreground min-w-[70px]">
                        {apt.time}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{apt.patient}</div>
                        <div className="text-sm text-muted-foreground">{apt.type}</div>
                      </div>
                    </div>
                    {apt.status === "confirmed" ? (
                      <div className="flex items-center gap-1 text-accent text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4" />
                        Confirmed
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-warning text-sm font-medium">
                        <Clock className="h-4 w-4" />
                        Pending
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Analytics Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                No-show Reduction
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Before BookAssure</span>
                    <span className="text-sm font-bold text-destructive">30%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-destructive" style={{ width: "30%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">After BookAssure</span>
                    <span className="text-sm font-bold text-accent">8%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: "8%" }} />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-3xl font-bold text-accent mb-1">73%</div>
                  <div className="text-sm text-muted-foreground">Reduction in no-shows</div>
                </div>

                <div className="p-3 bg-accent-light rounded-lg">
                  <div className="text-sm font-medium text-foreground mb-1">Monthly Impact</div>
                  <div className="text-2xl font-bold text-accent">₹52,000</div>
                  <div className="text-xs text-muted-foreground">Revenue recovered</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
