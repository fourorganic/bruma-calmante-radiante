import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;