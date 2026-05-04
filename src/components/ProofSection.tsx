const metrics = [
  { value: "500+", label: "Companies" },
  { value: "50,000+", label: "Farmers" },
  { value: "20", label: "Countries" },
];

const ProofSection = () => {
  return (
    <section className="section-gray py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Trusted by <span className="gradient-primary-text">500+ Agribusinesses</span> Across 20 Countries
        </h2>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary">{m.value}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
