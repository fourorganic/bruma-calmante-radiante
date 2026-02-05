const steps = [
  { number: "1", title: "Pulveriza", description: "a unos 20 cm del rostro" },
  { number: "2", title: "Deja secar", description: "naturalmente" },
  { number: "3", title: "Reaplica", description: "cuando tu piel lo necesite" },
];

const HowToUseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Cómo se usa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="inline-block bg-secondary px-6 py-3 rounded-full text-foreground font-medium">
            No necesita enjuague
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
