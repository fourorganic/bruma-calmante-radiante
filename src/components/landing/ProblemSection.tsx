import { AlertCircle, Sun, Wind, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: AlertCircle, text: "Irritación" },
  { icon: Heart, text: "Sensibilidad" },
  { icon: Sparkles, text: "Inflamación" },
  { icon: Sun, text: "Envejecimiento prematuro" },
];

const ProblemSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            El problema
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu piel se enfrenta todos los días a agresiones invisibles: sol, contaminación, estrés, maquillaje y productos demasiado fuertes.
          </p>
        </motion.div>

        <motion.div 
          className="bg-secondary/50 rounded-2xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-lg text-foreground/80 mb-8">
            Con el tiempo, esa agresión constante provoca:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 rounded-full bg-sky-light flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-ocean" />
                </div>
                <span className="text-foreground font-medium text-center">{problem.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            Muchas brumas y tónicos prometen equilibrio, pero contienen <strong className="text-foreground">alcohol, fragancias o activos agresivos</strong> que alteran la piel.
          </p>
          <p className="text-xl md:text-2xl font-serif text-primary font-medium">
            Tu piel necesita calma, no más químicos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;