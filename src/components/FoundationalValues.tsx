import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Shield, Handshake, Lightbulb, Lock, BarChart3, BrainCircuit } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Critical",
    description: "We build defense-grade solutions with the precision and reliability that aerospace platforms demand.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and strong ethical standards across all defense and enterprise engagements.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We believe in long-term collaboration with defense organizations and enterprises to achieve shared strategic goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously apply AI, sensor fusion, and RF engineering to build smarter, future-ready aerospace solutions.",
  },
  {
    icon: Lock,
    title: "Security & Trust",
    description: "We prioritize data security, system reliability, and compliance in every defense and enterprise solution we deliver.",
  },
];

export const FoundationalValues = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <BarChart3 className="absolute top-[20%] right-[12%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <BrainCircuit className="absolute bottom-[18%] left-[10%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-[25%] w-px h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            <Target className="h-3.5 w-3.5" />
            What Drives Us
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our Foundational Values
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card/50 backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
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
