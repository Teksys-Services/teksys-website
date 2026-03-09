import { Button } from "@/components/ui/button";
import { Bot, FileText, Cpu, Smartphone, Globe, ArrowRight, Zap, BrainCircuit, BarChart3 } from "lucide-react";
import aiTechVisual from "@/assets/ai-tech-visual.png";
import aiChatbotVisual from "@/assets/ai-chatbot-visual.png";
import aiDocVisual from "@/assets/ai-doc-visual.png";

const services = [
  { icon: Bot, label: "AI-Powered Chatbot", tag: "AI" },
  { icon: FileText, label: "AI Doc Extraction", tag: "AI" },
  { icon: Cpu, label: "SemiTest Solutions", tag: "TECH" },
  { icon: Smartphone, label: "App Development", tag: "DEV" },
  { icon: Globe, label: "Website Development", tag: "DEV" },
];

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
            {/* AI badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <Zap className="h-3.5 w-3.5" />
              AI-Powered Innovation · Made in India
            </div>

            {/* Headline */}
            <h1 className="font-space-grotesk text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">AI-Powered IT Solutions</span>
              <br />
              <span className="text-foreground">at India's Lowest Prices</span>
            </h1>

            {/* USP subheading */}
            <p className="text-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed">
              We deliver <span className="text-primary font-semibold">AI-powered</span> IT services at unbeatable costs in India.
              Premium quality, intelligent automation — without the high price tag.
            </p>

            {/* CTA */}
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

          {/* Right: Hero visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src={aiTechVisual}
                alt="AI-powered technology dashboard visualization"
                className="w-3/5 mx-auto rounded-2xl shadow-2xl border border-border/30"
              />
              {/* Floating smaller images */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-xl overflow-hidden shadow-xl border-2 border-background">
                <img src={aiChatbotVisual} alt="AI Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl overflow-hidden shadow-xl border-2 border-background">
                <img src={aiDocVisual} alt="AI Document Extraction" className="w-full h-full object-cover" />
              </div>
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 -z-10 bg-primary/20 rounded-2xl blur-2xl scale-105" />
            </div>
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
  );
};
