import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChatbotModal } from "@/components/ChatbotModal";
import { DocAIModal } from "@/components/DocAIModal";
import { Zap, Cpu, BrainCircuit } from "lucide-react";
import chatbotService from "@/assets/chatbot-service.png";
import invoiceExtraction from "@/assets/invoice-extraction.png";
import semitestService from "@/assets/semitest-service.png";
import appDevelopmentService from "@/assets/app-development-service.png";
import websiteDevelopmentService from "@/assets/website-development-service.png";

const services = [
  {
    id: "chatbot",
    title: "Chatbot (AI-based)",
    description: "AI-powered chatbots to automate customer interactions and support.",
    image: chatbotService,
    hasModal: true,
    tag: "AI",
  },
  {
    id: "invoice",
    title: "Doc AI (PDF Extraction)",
    description: "AI-based invoice data extraction to accurately capture and process business documents.",
    image: invoiceExtraction,
    hasModal: true,
    tag: "AI",
  },
  {
    id: "semitest",
    title: "SemiTest",
    description: "A software tool that automates electrical testing and measurement of semiconductor devices.",
    image: semitestService,
    hasModal: false,
    tag: "TECH",
  },
  {
    id: "appdev",
    title: "App Development",
    description: "AI-driven mobile and web application development tailored to your business needs.",
    image: appDevelopmentService,
    hasModal: false,
    tag: "DEV",
  },
  {
    id: "webdev",
    title: "Website Development",
    description: "Custom, responsive website design and development to establish your online presence and drive business growth.",
    image: websiteDevelopmentService,
    hasModal: false,
    tag: "DEV",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);
  const [isDocAIModalOpen, setIsDocAIModalOpen] = useState(false);

  const handleCardClick = (serviceId: string) => {
    if (serviceId === "chatbot") {
      setIsChatbotModalOpen(true);
    } else if (serviceId === "invoice") {
      setIsDocAIModalOpen(true);
    }
  };

  return (
    <>
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Tech background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
          <Cpu className="absolute top-[18%] left-[8%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
          <BrainCircuit className="absolute bottom-[22%] right-[10%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-[40%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-[65%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-0 left-[35%] w-px h-28 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div
            ref={ref}
            className={`animate-section-enter ${isVisible ? "visible" : ""}`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                <Zap className="h-3.5 w-3.5" />
                Engineering Services
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                IT-SERVICES
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
                Supporting our aerospace & defense solutions with AI-powered software services — from intelligent chatbots to semiconductor testing tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  onClick={() => handleCardClick(service.id)}
                  className={`rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card/50 backdrop-blur-sm group relative ${
                    service.hasModal ? "cursor-pointer" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-primary/60 bg-primary/5 px-1.5 py-0.5 rounded">
                    {service.tag}
                  </span>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-border/50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-wide mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChatbotModal
        isOpen={isChatbotModalOpen}
        onClose={() => setIsChatbotModalOpen(false)}
      />

      <DocAIModal
        isOpen={isDocAIModalOpen}
        onClose={() => setIsDocAIModalOpen(false)}
      />
    </>
  );
};
