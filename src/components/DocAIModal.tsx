import { useEffect, useState } from "react";
import { X, FileText, Database, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const extractedFields = [
  { label: "Invoice number", delay: 0 },
  { label: "Vendor / supplier name", delay: 100 },
  { label: "Invoice date & due date", delay: 200 },
  { label: "Line items (product/service, quantity, price)", delay: 300 },
  { label: "Subtotal, tax, discounts", delay: 400 },
  { label: "Total amount payable", delay: 500 },
  { label: "GST / VAT / tax IDs", delay: 600 },
  { label: "Payment terms", delay: 700 },
];

export const DocAIModal = ({ isOpen, onClose }: DocAIModalProps) => {
  const [visibleFields, setVisibleFields] = useState<number[]>([]);
  const [hoveredField, setHoveredField] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Sequential fade-in for fields
      extractedFields.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFields(prev => [...prev, index]);
        }, 400 + index * 120);
      });
    } else {
      setVisibleFields([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b border-border/30 bg-background/95 backdrop-blur-sm rounded-t-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground">
            Doc AI – Invoice Data Extraction
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            <X size={24} />
          </Button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Data Processing Animation */}
          <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* PDF Icon */}
              <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <FileText className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                {/* Floating numbers animation */}
                <div className="absolute -right-2 top-2 animate-pulse">
                  <span className="text-xs font-mono text-primary/60">INV</span>
                </div>
                <div className="absolute -bottom-1 left-2 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <span className="text-xs font-mono text-primary/60">$</span>
                </div>
              </div>

              {/* Flowing Lines */}
              <div className="relative flex-1 max-w-32 md:max-w-40">
                <div className="h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow" />
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-flow" style={{ animationDelay: "0.3s" }} />
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow" style={{ animationDelay: "0.6s" }} />
                </div>
                {/* Floating data particles */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <div className="absolute top-1/2 left-3/4 -translate-y-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.8s" }} />
                </div>
              </div>

              {/* Database Icon */}
              <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <Database className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                {/* Structured data indication */}
                <div className="absolute -left-2 top-3 animate-pulse" style={{ animationDelay: "0.7s" }}>
                  <div className="flex flex-col gap-0.5">
                    <div className="h-0.5 w-3 bg-primary/50 rounded" />
                    <div className="h-0.5 w-2 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Subheading */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 tracking-wide flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              What data is extracted?
            </h3>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {extractedFields.map((field, index) => (
                <div
                  key={field.label}
                  onMouseEnter={() => setHoveredField(index)}
                  onMouseLeave={() => setHoveredField(null)}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                    visibleFields.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  } ${
                    hoveredField === index
                      ? "bg-primary/10 border-primary/30 shadow-sm"
                      : "card-gradient border-border/50"
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${
                      hoveredField === index ? "bg-primary" : "bg-primary/20"
                    }`}
                  >
                    <Check
                      className={`h-3 w-3 transition-colors duration-300 ${
                        hoveredField === index ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      hoveredField === index ? "text-foreground font-medium" : "text-foreground/80"
                    }`}
                  >
                    {field.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="cta-gradient hover:opacity-90 text-foreground font-semibold px-8 py-5 rounded-xl transition-all duration-300"
            >
              Automate Invoice Processing
            </Button>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-flow {
          animation: flow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
