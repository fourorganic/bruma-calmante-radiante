import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding gradient-sky">
      <div className="container mx-auto container-narrow text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
          Cuida tu piel hoy. Tu piel del futuro te lo agradecerá.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="gradient-cta text-primary-foreground font-medium text-lg px-10 py-6 rounded-full shadow-lg hover:opacity-90 transition-opacity">
            Comprar ahora
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Package className="w-5 h-5" />
          <span>Envíos en Colombia</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
