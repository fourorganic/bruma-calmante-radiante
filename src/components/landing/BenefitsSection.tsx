import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Calma rojeces y sensibilidad",
  "Ayuda a mantener la piel limpia y equilibrada",
  "Favorece una piel más confortable y saludable",
  "Contribuye a proteger la piel frente al estrés ambiental diario",
  "Ayuda a prevenir el envejecimiento prematuro causado por la inflamación y la irritación",
];

const BenefitsSection = () => {
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
          <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
            Beneficios clave
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            ¿Qué hace esta bruma por tu piel?
          </h2>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-sky-light to-secondary rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.2, type: "spring" }}
                >
                  <Check className="w-4 h-4 text-primary-foreground" />
                </motion.div>
                <span className="text-lg text-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-serif text-primary font-medium italic">
            Una piel calmada envejece mejor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;