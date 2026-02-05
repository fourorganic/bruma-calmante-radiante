import { ShieldCheck, Droplet, Ban, Leaf, Heart, Check } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { icon: ShieldCheck, text: "Registro cosmético INVIMA" },
  { icon: Heart, text: "Apta para todo tipo de piel" },
  { icon: Check, text: "Uso diario seguro" },
  { icon: Ban, text: "Sin alcohol" },
  { icon: Droplet, text: "Sin sodio" },
  { icon: Leaf, text: "Sin fragancias" },
  { icon: ShieldCheck, text: "No comedogénica" },
];

const TrustSection = () => {
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
            Seguridad y confianza
          </h2>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-cream to-secondary/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-muted-foreground italic">
            Formulada para acompañarte todos los días, sin dañar tu piel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;