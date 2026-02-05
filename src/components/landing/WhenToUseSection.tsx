import { Sparkles, Sun, Droplet, Dumbbell, ThermometerSun } from "lucide-react";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Cuándo usarla
          </h2>
          <p className="text-lg text-foreground/80">
            Un gesto simple que suma con el tiempo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <occasion.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground font-medium">{occasion.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToUseSection;
