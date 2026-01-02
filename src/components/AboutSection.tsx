import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`animate-section-enter ${isVisible ? "visible" : ""}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 tracking-wider">
            <span className="gradient-text">ABOUT</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="space-y-6 text-center">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Teksys is a technology-driven company delivering AI-powered IT services,
                  drone solutions, and smart agriculture technologies. We build intelligent
                  digital systems that enhance efficiency, enable data-driven decisions, and
                  support sustainable growth.
                </p>
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                  By combining artificial intelligence, drones, and smart platforms, Teksys
                  helps businesses and the agriculture sector optimize operations, improve
                  productivity, and adopt modern, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
