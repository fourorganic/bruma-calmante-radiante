import { Droplets, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Limpia y purifica suavemente",
  },
  {
    icon: Shield,
    title: "Respeta el equilibrio de la piel",
  },
  {
    icon: Leaf,
    title: "No daña la barrera cutánea",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding gradient-sky">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
            La solución
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Un ingrediente que tu piel reconoce
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            El ácido hipocloroso es una molécula que el propio cuerpo humano produce como parte de su sistema natural de defensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-border/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-serif text-foreground font-medium">
            Menos agresión. <span className="text-primary">Más equilibrio.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
