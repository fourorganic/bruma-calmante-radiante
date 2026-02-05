import { motion } from "framer-motion";

const audiences = [
  { label: "Piel sensible o reactiva", emoji: "🌸" },
  { label: "Piel con acné adulto", emoji: "✨" },
  { label: "Piel con rosácea", emoji: "💧" },
  { label: "Piel expuesta al sol y la contaminación", emoji: "☀️" },
  { label: "Personas que buscan prevención, no tratamientos agresivos", emoji: "🌿" },
];

const IdealForSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Ideal para
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-full px-6 py-3 flex items-center gap-3 shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <span className="text-2xl">{audience.emoji}</span>
              <span className="text-foreground font-medium">{audience.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;