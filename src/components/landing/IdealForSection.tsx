const audiences = [
  { label: "Piel sensible o reactiva", emoji: "🌸" },
  { label: "Piel con acné adulto", emoji: "✨" },
  { label: "Piel con rosácea", emoji: "💧" },
  { label: "Piel expuesta al sol y la contaminación", emoji: "☀️" },
  { label: "Personas que buscan prevención, no tratamientos agresivos", emoji: "🌿" },
];

const IdealForSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Ideal para
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{audience.emoji}</span>
              <span className="text-foreground font-medium">{audience.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
