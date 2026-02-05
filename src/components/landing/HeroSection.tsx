import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-bottle.jpeg";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Ácido Hipocloroso · Uso diario · Piel sensible
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 text-balance">
              Bruma facial que calma, purifica y protege tu piel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Ayuda a prevenir el envejecimiento prematuro sin irritar
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ácido hipocloroso sin alcohol ni sodio. Una bruma ligera y segura para uso diario, incluso en piel sensible.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 text-sm text-foreground/80 bg-card px-4 py-2 rounded-full shadow-sm border border-border">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Registro cosmético INVIMA
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/80 bg-card px-4 py-2 rounded-full shadow-sm border border-border">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Apta para todo tipo de piel
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/80 bg-card px-4 py-2 rounded-full shadow-sm border border-border">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Uso frecuente sin dermatitis
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-cta text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                Comprar ahora
              </Button>
              <Button variant="outline" size="lg" className="font-medium text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Descubrir beneficios
              </Button>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-sky-medium/30 rounded-full blur-3xl scale-75" />
              <img
                src={productImage}
                alt="Bruma Facial Calmante Fourmidable con Ácido Hipocloroso"
                className="relative w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
