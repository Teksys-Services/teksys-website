import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Shield, Code, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Intelligent systems that enhance efficiency and enable data-driven decisions.",
  },
  {
    icon: Code,
    title: "Digital Platforms",
    description: "Scalable web and mobile platforms tailored to your business needs.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Data security and system reliability at the core of every solution we deliver.",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Emerging technologies applied to build smarter, next-generation solutions.",
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`animate-section-enter ${isVisible ? "visible" : ""}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 tracking-wider">
            <span className="gradient-text">ABOUT</span>
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-foreground/90 text-center text-base md:text-lg leading-relaxed">
              Teksys is a technology-driven company delivering AI-powered IT services
              and intelligent digital systems. We build solutions that enhance efficiency,
              enable data-driven decisions, and support sustainable growth — helping
              businesses optimize operations and adopt modern, scalable technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
