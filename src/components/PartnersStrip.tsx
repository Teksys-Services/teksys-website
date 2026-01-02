export const PartnersStrip = () => {
  const partners = "We are globally connected, our partners are: Aligned Test · TechdataX · Semicom";
  
  return (
    <section className="py-6 partners-gradient overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-primary-foreground font-medium text-sm md:text-base mx-8">
            {partners}
          </span>
          <span className="text-primary-foreground font-medium text-sm md:text-base mx-8">
            {partners}
          </span>
          <span className="text-primary-foreground font-medium text-sm md:text-base mx-8">
            {partners}
          </span>
          <span className="text-primary-foreground font-medium text-sm md:text-base mx-8">
            {partners}
          </span>
        </div>
      </div>
    </section>
  );
};
