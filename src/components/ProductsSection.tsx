import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SmartAgricultureModal } from "@/components/SmartAgricultureModal";
import { DroneModal } from "@/components/DroneModal";
import droneProduct from "@/assets/drone-product.png";
import smartAgriProduct from "@/assets/smart-agriculture-product-lightgreen.png";

const products = [
  {
    id: "drone",
    title: "AI-driven Drone Solutions",
    description: (
      <>
        AI-powered drones designed for <strong className="italic">mines</strong>, <strong className="italic">agriculture</strong>, <strong className="italic">wildlife</strong>, and <strong className="italic">surveillance</strong>.
      </>
    ),
    image: droneProduct,
    hasModal: true,
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture",
    description:
      "Farmer-focused logistics platform for fast and reliable produce transportation.",
    image: smartAgriProduct,
    hasModal: true,
    bgClass: "bg-[hsl(var(--primary)/0.06)] dark:bg-[hsl(var(--primary)/0.12)]",
  },
];

export const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [isSmartAgriModalOpen, setIsSmartAgriModalOpen] = useState(false);
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);

  const handleCardClick = (productId: string) => {
    if (productId === "smart-agriculture") {
      setIsSmartAgriModalOpen(true);
    } else if (productId === "drone") {
      setIsDroneModalOpen(true);
    }
  };

  return (
    <>
      <section id="products" className="py-20 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            ref={ref}
            className={`animate-section-enter ${isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider text-foreground">
              PRODUCTS
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  onClick={() => handleCardClick(product.id)}
                  className={`card-gradient card-hover rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/30 ${
                    product.hasModal ? "cursor-pointer" : ""
                  } ${product.bgClass || ""}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-secondary/20">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SmartAgricultureModal
        isOpen={isSmartAgriModalOpen}
        onClose={() => setIsSmartAgriModalOpen(false)}
      />

      <DroneModal
        isOpen={isDroneModalOpen}
        onClose={() => setIsDroneModalOpen(false)}
      />
    </>
  );
};