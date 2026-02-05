import { Sparkles, Sun, Droplet, Dumbbell, ThermometerSun } from "lucide-react";
import { motion } from "framer-motion";

const occasions = [
  { icon: Sparkles, text: "Después de la limpieza facial" },
  { icon: Sun, text: "Antes o después del maquillaje" },
  { icon: Droplet, text: "Durante el día para refrescar la piel" },
  { icon: Dumbbell, text: "Después del sol o del ejercicio" },
  { icon: ThermometerSun, text: "En climas cálidos o ambientes secos" },
];

const WhenToUseSection = () => {
  return (
    <section className="section-padding gradient-sky">
      <div className="container mx-auto container-narrow">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Cuándo usarla
          </h2>
          <p className="text-lg text-foreground/80">
            Un gesto simple que suma con el tiempo
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <occasion.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-foreground font-medium">{occasion.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToUseSection;