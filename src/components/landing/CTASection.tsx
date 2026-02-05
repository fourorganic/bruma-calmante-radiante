import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding gradient-sky">
      <div className="container mx-auto container-narrow text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cuida tu piel hoy. Tu piel del futuro te lo agradecerá.
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="gradient-cta text-primary-foreground font-medium text-lg px-10 py-6 rounded-full shadow-lg hover:opacity-90 transition-opacity">
              Comprar ahora
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Package className="w-5 h-5" />
          <span>Envíos en Colombia</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
