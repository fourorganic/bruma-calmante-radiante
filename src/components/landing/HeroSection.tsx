import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productImage from "@/assets/product-isolated.png";
import curcumaImage from "@/assets/curcuma-isolated.png";

interface SlideTheme {
  bg: string;
  tagline: string;
  checkIcon: string;
  ctaPrimary: string;
  ctaSecondaryBorder: string;
  ctaSecondaryText: string;
  ctaSecondaryHover: string;
  dotActive: string;
}

const defaultTheme: SlideTheme = {
  bg: "gradient-hero",
  tagline: "text-primary",
  checkIcon: "text-primary",
  ctaPrimary: "gradient-cta",
  ctaSecondaryBorder: "border-primary",
  ctaSecondaryText: "text-primary",
  ctaSecondaryHover: "hover:bg-primary hover:text-primary-foreground",
  dotActive: "bg-primary",
};

const curcumaTheme: SlideTheme = {
  bg: "gradient-curcuma",
  tagline: "text-orange-600",
  checkIcon: "text-orange-500",
  ctaPrimary: "gradient-cta-curcuma",
  ctaSecondaryBorder: "border-orange-500",
  ctaSecondaryText: "text-orange-600",
  ctaSecondaryHover: "hover:bg-orange-500 hover:text-white",
  dotActive: "bg-orange-500",
};

interface Slide {
  id: number;
  tagline: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaPrimary: { label: string; href?: string };
  ctaSecondary?: { label: string; href?: string };
  image: string;
  imageAlt: string;
  glowColor: string;
  theme: SlideTheme;
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: "Organic Health Care · Máximo 4 ingredientes",
    title: "Fourmidable",
    subtitle: "Productos orgánicos para el cuidado personal",
    bullets: [
      "Máximo 4 ingredientes por fórmula",
      "Rutinas simples, resultados visibles",
      "Hecho para uso diario",
    ],
    ctaPrimary: { label: "Ver Bruma Facial" },
    ctaSecondary: { label: "Ver Cúrcuma" },
    image: productImage,
    imageAlt: "Producto Fourmidable - Bruma Facial",
    glowColor: "bg-primary/20",
    theme: defaultTheme,
  },
  {
    id: 2,
    tagline: "Ácido Hipocloroso · Uso diario · Piel sensible",
    title: "Bruma facial que calma, purifica y protege tu piel",
    subtitle: "Ayuda a prevenir el envejecimiento prematuro sin irritar",
    bullets: [
      "Registro cosmético INVIMA",
      "Apta para todo tipo de piel",
      "Uso frecuente sin dermatitis",
    ],
    ctaPrimary: { label: "Comprar ahora" },
    ctaSecondary: { label: "Descubrir beneficios" },
    image: productImage,
    imageAlt: "Bruma Facial Calmante Fourmidable con Ácido Hipocloroso",
    glowColor: "bg-sky-medium/30",
    theme: defaultTheme,
  },
  {
    id: 3,
    tagline: "Alimento líquido concentrado · 100% Biodisponible",
    title: "Cúrcuma hidrosoluble",
    subtitle: "Una rutina diaria fácil de preparar",
    bullets: [
      "Se mezcla rápido en agua o bebidas",
      "Sabor suave y agradable",
      "Perfecta para tu \"ritual\" de mañana",
    ],
    ctaPrimary: { label: "Conocer Cúrcuma" },
    image: curcumaImage,
    imageAlt: "Cúrcuma Hidrosoluble Fourmidable",
    glowColor: "bg-orange-300/30",
    theme: curcumaTheme,
  },
];

const AUTOPLAY_INTERVAL = 6000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
  };

  return (
    <section className={`${slide.theme.bg} min-h-screen flex items-center relative overflow-hidden transition-colors duration-500`}>
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className={`text-sm font-medium tracking-widest ${slide.theme.tagline} uppercase mb-4`}>
                {slide.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 text-balance">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
                {slide.subtitle}
              </p>

              {/* Bullets */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {slide.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="inline-flex items-center gap-2 text-sm text-foreground/80 bg-card px-4 py-2 rounded-full shadow-sm border border-border"
                  >
                    <svg className={`w-4 h-4 ${slide.theme.checkIcon} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {bullet}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className={`${slide.theme.ctaPrimary} text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:opacity-90 transition-opacity`}>
                    {slide.ctaPrimary.label}
                  </Button>
                </motion.div>
                {slide.ctaSecondary && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="lg" className={`font-medium text-lg px-8 py-6 rounded-full border-2 ${slide.theme.ctaSecondaryBorder} ${slide.theme.ctaSecondaryText} ${slide.theme.ctaSecondaryHover} transition-colors`}>
                      {slide.ctaSecondary.label}
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Product Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className={`absolute inset-0 ${slide.glowColor} rounded-full blur-3xl scale-75`} />
                <motion.img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="relative w-full max-w-sm object-contain drop-shadow-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="p-2 rounded-full border border-border bg-card/80 hover:bg-card text-foreground/60 hover:text-foreground transition-colors" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? `w-8 ${slides[i].theme.dotActive}` : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next} className="p-2 rounded-full border border-border bg-card/80 hover:bg-card text-foreground/60 hover:text-foreground transition-colors" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
