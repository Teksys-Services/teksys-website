import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, FileText, Cpu, Smartphone, Globe, ArrowRight, Zap, BrainCircuit, BarChart3 } from "lucide-react";
import droneHero from "@/assets/drone-hero.png";
import ietmHero from "@/assets/ietm-hero.png";
import rfChipHero from "@/assets/rf-chip-hero.png";
import itAnalyticsHero from "@/assets/it-analytics-hero.png";
import { DroneModal } from "@/components/DroneModal";
import { IETMModal } from "@/components/IETMModal";
const heroCards = [
  {
    id: "drone",
    title: "Drone (AI & sensors)",
    description: "Intelligent drones powered by AI and advanced sensors for precision monitoring, automation, and real-time insights.",
    image: droneHero,
  },
  {
    id: "ietm",
    title: "IETM",
    description: "Interactive Electronic Technical Manuals that streamline maintenance, training, and operational efficiency.",
    image: ietmHero,
  },
  {
    id: "rf-chip",
    title: "RF Chip Design",
    description: "Cutting-edge RF chip design enabling high-frequency, low-power communication systems.",
    image: rfChipHero,
  },
  {
    id: "it-analytics",
    title: "IT (AI based analytics)",
    description: "End-to-end IT solutions delivering scalable, secure, and high-performance digital transformation.",
    image: itAnalyticsHero,
  },
];

const services = [
  { icon: Bot, label: "AI-Powered Chatbot", tag: "AI" },
  { icon: FileText, label: "AI Doc Extraction", tag: "AI" },
  { icon: Cpu, label: "SemiTest Solutions", tag: "TECH" },
  { icon: Smartphone, label: "App Development", tag: "DEV" },
  { icon: Globe, label: "Website Development", tag: "DEV" },
];

export const HeroSection = () => {
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [isIETMModalOpen, setIsIETMModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (cardId: string) => {
    if (cardId === "drone") {
      setIsDroneModalOpen(true);
    } else if (cardId === "ietm") {
      setIsIETMModalOpen(true);
    } else {
      scrollToContact();
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center pt-32 lg:pt-40 pb-16 relative overflow-hidden"
      >
        {/* Tech-style background visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/12 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          <BrainCircuit className="absolute top-[18%] left-[8%] w-10 h-10 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <BarChart3 className="absolute top-[22%] right-[10%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <Zap className="absolute bottom-[28%] left-[12%] w-7 h-7 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '3s' }} />
          <Cpu className="absolute bottom-[25%] right-[8%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2.5s' }} />

          <div className="absolute top-[40%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-[60%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-0 left-[30%] w-px h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
          <div className="absolute top-0 right-[25%] w-px h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-section-enter visible">
            {/* Left: Text content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
                <Zap className="h-3.5 w-3.5" />
                AI-Powered Innovation · Made in India
              </div>

              <h1 className="font-space-grotesk text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">AI-Solutions Company</span>
                <br />
                <span className="text-foreground text-2xl md:text-3xl lg:text-4xl">in Aerospace & Defense</span>
              </h1>

              <ul className="text-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed space-y-2 list-none">
                <li className="flex items-center gap-2"><span className="text-primary">★</span> <span className="font-semibold">IETM Services</span></li>
                <li className="flex items-center gap-2"><span className="text-primary">★</span> <span className="font-semibold">AI-Powered Drone Solutions</span></li>
                <li className="flex items-center gap-2"><span className="text-primary">★</span> <span className="font-semibold">RF & Microwave Engineering</span></li>
                <li className="flex items-center gap-2"><span className="text-primary">★</span> <span className="font-semibold">AI-Driven Data Analytics</span></li>
              </ul>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <Button
                  onClick={scrollToContact}
                  className="!text-white bg-primary hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground">No hidden costs · Fast delivery</p>
              </div>
            </div>

            {/* Right: 4 Description Cards */}
            <div className="grid grid-cols-2 gap-4">
              {heroCards.map((card, index) => (
                <div
                  key={card.title}
                  onClick={() => handleCardClick(card.id)}
                  className="cursor-pointer group rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 font-bold text-sm md:text-base text-white drop-shadow-lg leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-card">
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="pt-12 lg:pt-16 animate-section-enter visible">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 text-center">
              Our AI-Powered Services
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="card-gradient rounded-2xl p-4 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group relative"
                >
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider text-primary/60 bg-primary/5 px-1.5 py-0.5 rounded">
                    {service.tag}
                  </span>
                  <service.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {service.label}
                  </p>
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
