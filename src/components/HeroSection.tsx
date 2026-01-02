import { Button } from "@/components/ui/button";
import droneHero from "@/assets/drone-hero.png";
import smartAgriHero from "@/assets/smart-agriculture-hero-light.png";
import chatbotHero from "@/assets/chatbot-hero.png";
import invoiceHero from "@/assets/invoice-extraction.png";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Circuit lines - horizontal */}
        <svg className="absolute top-1/3 left-0 w-full h-32 opacity-[0.15] dark:opacity-[0.2]" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0 50 L300 50 L320 30 L400 30 L420 50 L600 50 L620 70 L700 70 L720 50 L1200 50" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
          <circle cx="320" cy="30" r="4" fill="hsl(var(--primary))" />
          <circle cx="420" cy="50" r="4" fill="hsl(var(--primary))" />
          <circle cx="620" cy="70" r="4" fill="hsl(var(--primary))" />
          <circle cx="720" cy="50" r="4" fill="hsl(var(--primary))" />
        </svg>
        
        {/* Circuit lines - diagonal */}
        <svg className="absolute bottom-1/4 right-0 w-1/2 h-48 opacity-[0.12] dark:opacity-[0.16]" viewBox="0 0 600 200" preserveAspectRatio="none">
          <path d="M0 100 L100 100 L150 50 L250 50 L300 100 L400 100 L450 150 L600 150" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
          <circle cx="150" cy="50" r="5" fill="hsl(var(--primary))" />
          <circle cx="300" cy="100" r="5" fill="hsl(var(--primary))" />
          <circle cx="450" cy="150" r="5" fill="hsl(var(--primary))" />
        </svg>
        
        {/* AI nodes pattern - left side */}
        <svg className="absolute top-1/2 left-10 w-64 h-64 -translate-y-1/2 opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="20" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
          <circle cx="100" cy="40" r="5" fill="hsl(var(--primary))" />
          <circle cx="100" cy="160" r="5" fill="hsl(var(--primary))" />
          <circle cx="40" cy="100" r="5" fill="hsl(var(--primary))" />
          <circle cx="160" cy="100" r="5" fill="hsl(var(--primary))" />
          <line x1="100" y1="40" x2="100" y2="160" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="40" y1="100" x2="160" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
        
        
        {/* Dot matrix pattern */}
        <div className="absolute bottom-20 left-1/4 w-64 h-32 opacity-[0.1] dark:opacity-[0.14]">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            {[...Array(5)].map((_, row) => (
              [...Array(10)].map((_, col) => (
                <circle 
                  key={`${row}-${col}`}
                  cx={col * 20 + 10} 
                  cy={row * 20 + 10} 
                  r="2" 
                  fill="hsl(var(--primary))" 
                />
              ))
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-section-enter visible">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              <span className="gradient-text">TEKSYS</span>
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Teksys is a technology-driven company delivering AI-powered IT
              services, drone solutions, and smart agriculture technologies.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-medium rounded-xl transition-all duration-300"
            >
              Contact
            </Button>
          </div>

          {/* Right Content - Hero Circles in 2x2 Formation */}
          <div className="relative flex justify-center items-center min-h-[350px] lg:min-h-[420px]">
            {/* Smart Agriculture Circle - Top Left */}
            <div
              className="hero-circle hero-circle-animated w-36 h-36 md:w-48 md:h-48 absolute top-0 left-8 lg:left-16 animate-float-1"
            >
              <img
                src={smartAgriHero}
                alt="Smart Agriculture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chatbot Circle - Top Right */}
            <div
              className="hero-circle hero-circle-animated w-36 h-36 md:w-48 md:h-48 absolute top-0 right-8 lg:right-16 animate-float-2"
            >
              <img
                src={chatbotHero}
                alt="AI Chatbot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Invoice Extraction Circle - Bottom Left */}
            <div
              className="hero-circle hero-circle-animated w-36 h-36 md:w-48 md:h-48 absolute bottom-0 left-8 lg:left-16 animate-float-3"
            >
              <img
                src={invoiceHero}
                alt="Data Invoice Extraction"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Drone Circle - Bottom Right */}
            <div
              className="hero-circle hero-circle-animated w-36 h-36 md:w-48 md:h-48 absolute bottom-0 right-8 lg:right-16 animate-float-1"
            >
              <img
                src={droneHero}
                alt="Drone Solution"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
