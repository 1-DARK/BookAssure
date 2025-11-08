import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the reminder system work?",
      answer: "BookAssure automatically sends reminders at 48 hours, 24 hours, and 2 hours before each appointment via WhatsApp, SMS, or Email. Patients receive a link to confirm or reschedule with one click.",
    },
    {
      question: "What channels do you support?",
      answer: "We support WhatsApp, SMS, and Email. You can choose which channels to use for your clinic. WhatsApp typically has the highest engagement rate in India.",
    },
    {
      question: "Can patients reschedule appointments?",
      answer: "Yes! Patients can reschedule directly through the reminder link without calling your clinic. The system automatically updates your schedule and notifies waitlisted patients for the now-available slot.",
    },
    {
      question: "Do you integrate with existing clinic software?",
      answer: "Yes, BookAssure integrates with most popular clinic management systems. During onboarding, our team will help set up the integration with your existing software.",
    },
    {
      question: "What happens during the free trial?",
      answer: "You get full access to all features for 14 days with no credit card required. Our team will help you set up and get started. You can cancel anytime during the trial with no charges.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! We help you get started for free. Most clinics are up and running within 5 minutes.",
    },
    {
      question: "How secure is patient data?",
      answer: "We follow strict HIPAA-compliant security standards. All patient data is encrypted both in transit and at rest. We never share your data with third parties.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about BookAssure
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-2 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
