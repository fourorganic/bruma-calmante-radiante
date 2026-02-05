import { ShieldCheck, Droplet, Ban, Leaf, Heart, Check } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Registro cosmético INVIMA" },
  { icon: Heart, text: "Apta para todo tipo de piel" },
  { icon: Check, text: "Uso diario seguro" },
  { icon: Ban, text: "Sin alcohol" },
  { icon: Droplet, text: "Sin sodio" },
  { icon: Leaf, text: "Sin fragancias" },
  { icon: ShieldCheck, text: "No comedogénica" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Seguridad y confianza
          </h2>
        </div>

        <div className="bg-gradient-to-br from-cream to-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground italic">
            Formulada para acompañarte todos los días, sin dañar tu piel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
