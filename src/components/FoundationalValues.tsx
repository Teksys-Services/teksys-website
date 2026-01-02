import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    title: "Excellence",
    description: "We deliver high-quality solutions with precision, reliability, and attention to detail."
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and strong ethical standards in everything we do."
  },
  {
    title: "Partnership",
    description: "We believe in long-term collaboration to achieve shared growth and success."
  },
  {
    title: "Innovation",
    description: "We continuously apply AI and emerging technologies to build smarter, future-ready solutions."
  },
  {
    title: "Security & Trust",
    description: "We prioritize data security, privacy, and system reliability in every digital solution we deliver."
  }
];

export const FoundationalValues = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-wider">
            Our Foundational Values
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="text-primary text-2xl mb-3">★</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
