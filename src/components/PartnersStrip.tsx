import { Zap } from "lucide-react";

export const PartnersStrip = () => {
  const partners = [
    "Aligned Test",
    "TechdataX",
    "Semicom",
  ];

  const partnerList = partners.join(" · ");
  const text = `Global Partners: ${partnerList}`;

  return (
    <section className="py-5 partners-gradient overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(0 0% 100%) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-primary-foreground font-medium text-sm md:text-base mx-8 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 inline-block" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
