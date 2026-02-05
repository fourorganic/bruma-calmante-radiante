import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import productImage from "@/assets/product-isolated.png";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-sm font-medium tracking-widest text-primary uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ácido Hipocloroso · Uso diario · Piel sensible
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Bruma facial que calma, purifica y protege tu piel
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ayuda a prevenir el envejecimiento prematuro sin irritar
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ácido hipocloroso sin alcohol ni sodio. Una bruma ligera y segura para uso diario, incluso en piel sensible.
            </motion.p>

            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["Registro cosmético INVIMA", "Apta para todo tipo de piel", "Uso frecuente sin dermatitis"].map((badge, i) => (
                <motion.span 
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 bg-card px-4 py-2 rounded-full shadow-sm border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="gradient-cta text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                  Comprar ahora
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="font-medium text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Descubrir beneficios
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-sky-medium/30 rounded-full blur-3xl scale-75"
                animate={{ 
                  scale: [0.75, 0.85, 0.75],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={productImage}
                alt="Bruma Facial Calmante Fourmidable con Ácido Hipocloroso"
                className="relative w-full max-w-sm object-contain drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
