import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DroneModal } from "@/components/DroneModal";
import { IETMModal } from "@/components/IETMModal";
import { Zap, Cpu, BrainCircuit } from "lucide-react";
import droneHero from "@/assets/drone-hero.png";
import ietmHero from "@/assets/ietm-hero.png";
import rfChipHero from "@/assets/rf-chip-hero.png";
import itAnalyticsHero from "@/assets/it-analytics-hero.png";
import criticalMineralsHero from "@/assets/critical-minerals-hero.png";

const products = [
  {
    id: "drone",
    title: "Drone (AI & Sensors)",
    description: "Intelligent drones powered by AI and advanced sensors for precision monitoring, automation, and real-time insights in defense and surveillance.",
    image: droneHero,
    hasModal: true,
    tag: "DRONE",
  },
  {
    id: "ietm",
    title: "IETM",
    description: "Interactive Electronic Technical Manuals that streamline maintenance, training, and operational efficiency for aerospace & defense platforms.",
    image: ietmHero,
    hasModal: true,
    tag: "IETM",
  },
  {
    id: "rf-chip",
    title: "RF Chip Design",
    description: "Cutting-edge RF chip design enabling high-frequency, low-power communication systems for aerospace applications.",
    image: rfChipHero,
    hasModal: false,
    tag: "RF",
  },
  {
    id: "it-analytics",
    title: "IT (AI-Based Analytics)",
    description: "End-to-end IT solutions delivering scalable, secure, and high-performance AI-driven data analytics for defense and enterprise.",
    image: itAnalyticsHero,
    hasModal: false,
    tag: "AI",
  },
  {
    id: "critical-minerals",
    title: "Critical Minerals & Advanced Materials",
    description: "Sustainable extraction of lithium and rare-earth elements from spent batteries, enabling circular economy for defense and energy sectors.",
    image: criticalMineralsHero,
    hasModal: false,
    tag: "MINERALS",
  },
];

export const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isIETMModalOpen, setIsIETMModalOpen] = useState(false);

  const handleCardClick = (productId: string) => {
    if (productId === "drone") {
      setIsDroneModalOpen(true);
    } else if (productId === "ietm") {
      setIsIETMModalOpen(true);
    }
  };

  return (
    <>
      <section id="products" className="py-20 relative overflow-hidden">
        {/* Tech background */}
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
          <Cpu className="absolute top-[18%] right-[8%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
          <BrainCircuit className="absolute bottom-[22%] left-[10%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-[40%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-[65%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div
            ref={ref}
            className={`animate-section-enter ${isVisible ? "visible" : ""}`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                <Zap className="h-3.5 w-3.5" />
                Our Core Offerings
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                PRODUCTS
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => handleCardClick(product.id)}
                  className={`rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card/50 backdrop-blur-sm group relative ${
                    product.hasModal ? "cursor-pointer" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider text-primary/80 bg-primary/10 backdrop-blur-sm px-2 py-0.5 rounded">
                    {product.tag}
                  </span>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DroneModal isOpen={isDroneModalOpen} onClose={() => setIsDroneModalOpen(false)} />
      <IETMModal isOpen={isIETMModalOpen} onClose={() => setIsIETMModalOpen(false)} />
    </>
  );
};
