import { Check } from "lucide-react";

const benefits = [
  "Calma rojeces y sensibilidad",
  "Ayuda a mantener la piel limpia y equilibrada",
  "Favorece una piel más confortable y saludable",
  "Contribuye a proteger la piel frente al estrés ambiental diario",
  "Ayuda a prevenir el envejecimiento prematuro causado por la inflamación y la irritación",
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
            Beneficios clave
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            ¿Qué hace esta bruma por tu piel?
          </h2>
        </div>

        <div className="bg-gradient-to-br from-sky-light to-secondary rounded-2xl p-8 md:p-12">
          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-serif text-primary font-medium italic">
            Una piel calmada envejece mejor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
