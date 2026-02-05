import { motion } from "framer-motion";

const steps = [
  { number: "1", title: "Pulveriza", description: "a unos 20 cm del rostro" },
  { number: "2", title: "Deja secar", description: "naturalmente" },
  { number: "3", title: "Reaplica", description: "cuando tu piel lo necesite" },
];

const HowToUseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Cómo se usa
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
              </motion.div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.p 
            className="inline-block bg-secondary px-6 py-3 rounded-full text-foreground font-medium"
            whileHover={{ scale: 1.05 }}
          >
            No necesita enjuague
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;