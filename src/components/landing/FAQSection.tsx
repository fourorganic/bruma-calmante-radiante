import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Sirve para piel sensible?",
    answer: "Sí. Está formulada para uso diario en todo tipo de piel, incluso piel sensible.",
  },
  {
    question: "¿Puedo usarla varias veces al día?",
    answer: "Sí. No contiene alcohol ni sodio, por lo que no reseca ni irrita.",
  },
  {
    question: "¿Es un producto antienvejecimiento?",
    answer: "Ayuda a prevenir el envejecimiento prematuro al mantener la piel calmada, equilibrada y protegida del estrés diario.",
  },
  {
    question: "¿Tiene olor?",
    answer: "No. No contiene fragancias.",
  },
  {
    question: "¿Puedo usarla con maquillaje?",
    answer: "Sí. Puedes usarla antes o después del maquillaje.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
