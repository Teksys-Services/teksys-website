import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plane, Radio, BarChart3, BookOpen, Zap, BrainCircuit, Cpu } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Drone Solutions",
    description: "AI-powered drones with advanced sensors for precision monitoring, automation, and real-time battlefield insights.",
    tag: "DRONE",
  },
  {
    icon: BookOpen,
    title: "IETM Systems",
    description: "Interactive Electronic Technical Manuals that streamline maintenance, training, and operational efficiency for defense platforms.",
    tag: "IETM",
  },
  {
    icon: Radio,
    title: "RF Chip Design",
    description: "Cutting-edge RF & microwave chip design enabling high-frequency, low-power communication for aerospace systems.",
    tag: "RF",
  },
  {
    icon: BarChart3,
    title: "AI-Based Analytics",
    description: "End-to-end IT solutions delivering scalable, secure, and high-performance AI-driven data analytics.",
    tag: "AI",
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Tech background matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
        <BrainCircuit className="absolute top-[15%] right-[10%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-[20%] left-[8%] w-7 h-7 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[50%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-[30%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`animate-section-enter ${isVisible ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Cpu className="h-3.5 w-3.5" />
              Who We Are
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">ABOUT</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-foreground/80 text-center text-base md:text-lg leading-relaxed">
              Teksys is an AI-solutions company in Aerospace & Defense, delivering
              IETM systems, AI-powered drone solutions, RF & microwave engineering,
              and AI-driven data analytics — helping defense and enterprise clients
              build mission-critical, deployment-ready technology stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 text-center border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card/50 backdrop-blur-sm group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider text-primary/60 bg-primary/5 px-1.5 py-0.5 rounded">
                  {feature.tag}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
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
