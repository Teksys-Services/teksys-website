import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChatbotModal } from "@/components/ChatbotModal";
import { DocAIModal } from "@/components/DocAIModal";
import chatbotService from "@/assets/chatbot-service.png";
import invoiceExtraction from "@/assets/invoice-extraction.png";

const services = [
  {
    id: "chatbot",
    title: "Chatbot (AI-based)",
    description:
      "AI-powered chatbots to automate customer interactions and support.",
    image: chatbotService,
    hasModal: true,
  },
  {
    id: "invoice",
    title: "Doc AI (PDF Extraction)",
    description:
      "AI-based invoice data extraction to accurately capture and process business documents.",
    image: invoiceExtraction,
    hasModal: true,
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
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            ref={ref}
            className={`animate-section-enter ${isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider text-foreground">
              IT-SERVICES
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  onClick={() => handleCardClick(service.id)}
                  className={`card-gradient card-hover rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/30 ${
                    service.hasModal ? "cursor-pointer" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-secondary/20">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                        {service.title}
                      </h3>
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
