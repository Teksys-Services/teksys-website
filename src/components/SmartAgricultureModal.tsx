import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Truck, Scale, UserPlus, Package } from "lucide-react";

interface SmartAgricultureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const workflowSteps = [
  {
    icon: UserPlus,
    title: "Farmer Registration",
    description: "Farmer registers on the platform with basic details and location.",
  },
  {
    icon: Package,
    title: "Enter Produce Details",
    description: "Farmer enters vegetables/fruits type and total weight for transport.",
  },
  {
    icon: Scale,
    title: "Vehicle Allocation",
    description: "System automatically allocates a suitable vehicle based on weight capacity.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Vehicle picks up produce from farm and delivers it to the market.",
  },
];

export const SmartAgricultureModal = ({
  isOpen,
  onClose,
}: SmartAgricultureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-background border-border">
        <div className="flex flex-col md:grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* Left side - Animated Workflow */}
          <div className="relative min-h-[200px] h-[250px] md:h-auto md:min-h-[450px] bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/20 flex items-center justify-center p-4 md:p-8 overflow-hidden">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full max-w-[280px] max-h-[200px] md:max-w-[350px] md:max-h-[350px]"
            >
              {/* Background path/route */}
              <path
                d="M 80 320 Q 80 200 200 200 Q 320 200 320 80"
                fill="none"
                stroke="hsl(142.1 76.2% 36.3% / 0.2)"
                strokeWidth="4"
                strokeDasharray="8 8"
                className="dark:stroke-emerald-500/20"
              />
              
              {/* Animated route line */}
              <path
                d="M 80 320 Q 80 200 200 200 Q 320 200 320 80"
                fill="none"
                stroke="hsl(142.1 76.2% 36.3%)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-route-draw dark:stroke-emerald-400"
              />

              {/* Farm icon (bottom left) */}
              <g className="animate-farm-pulse">
                <circle cx="80" cy="320" r="28" fill="hsl(142.1 76.2% 36.3% / 0.15)" className="dark:fill-emerald-500/20" />
                <circle cx="80" cy="320" r="20" fill="hsl(142.1 76.2% 36.3% / 0.3)" className="dark:fill-emerald-500/30" />
                {/* Farm house */}
                <path d="M 68 325 L 80 310 L 92 325 L 92 332 L 68 332 Z" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-400" />
                <rect x="76" y="326" width="8" height="6" fill="hsl(142.1 50% 25%)" className="dark:fill-emerald-700" />
              </g>

              {/* Market icon (top right) */}
              <g className="animate-market-pulse">
                <circle cx="320" cy="80" r="28" fill="hsl(142.1 76.2% 36.3% / 0.15)" className="dark:fill-emerald-500/20" />
                <circle cx="320" cy="80" r="20" fill="hsl(142.1 76.2% 36.3% / 0.3)" className="dark:fill-emerald-500/30" />
                {/* Market building */}
                <rect x="306" y="72" width="28" height="18" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-400" />
                <path d="M 302 72 L 320 58 L 338 72 Z" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-400" />
                <rect x="312" y="78" width="6" height="12" fill="hsl(142.1 50% 25%)" className="dark:fill-emerald-700" />
                <rect x="322" y="78" width="6" height="6" fill="hsl(142.1 50% 25%)" className="dark:fill-emerald-700" />
              </g>

              {/* Farmer registration indicator */}
              <g className="animate-step-1">
                <circle cx="80" cy="280" r="16" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-500" />
                <path d="M 74 280 L 78 284 L 88 274" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Produce boxes with weight */}
              <g className="animate-step-2">
                <rect x="110" y="230" width="24" height="20" rx="3" fill="hsl(25 95% 53%)" className="dark:fill-orange-400" />
                <rect x="120" y="220" width="24" height="20" rx="3" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-500" />
                <rect x="130" y="235" width="18" height="15" rx="2" fill="hsl(47 96% 53%)" className="dark:fill-yellow-400" />
                {/* Weight indicator */}
                <rect x="115" y="255" width="40" height="16" rx="4" fill="hsl(142.1 50% 25%)" className="dark:fill-emerald-700" />
                <text x="135" y="267" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">50kg</text>
              </g>

              {/* Vehicle with glow effect */}
              <g className="animate-vehicle-move">
                {/* Glow effect */}
                <ellipse cx="200" cy="200" rx="35" ry="25" fill="hsl(142.1 76.2% 36.3% / 0.2)" className="animate-vehicle-glow dark:fill-emerald-400/30" />
                {/* Truck body */}
                <rect x="180" y="190" width="40" height="22" rx="4" fill="hsl(142.1 76.2% 36.3%)" className="dark:fill-emerald-500" />
                {/* Truck cab */}
                <rect x="172" y="196" width="14" height="16" rx="3" fill="hsl(142.1 50% 30%)" className="dark:fill-emerald-600" />
                {/* Wheels */}
                <circle cx="185" cy="215" r="5" fill="hsl(0 0% 30%)" className="dark:fill-neutral-700" />
                <circle cx="210" cy="215" r="5" fill="hsl(0 0% 30%)" className="dark:fill-neutral-700" />
                {/* Produce in truck */}
                <rect x="185" y="193" width="12" height="10" rx="2" fill="hsl(25 95% 53%)" className="dark:fill-orange-400" />
                <rect x="200" y="193" width="12" height="10" rx="2" fill="hsl(47 96% 53%)" className="dark:fill-yellow-400" />
              </g>

              {/* Connection dots along the path */}
              <circle cx="80" cy="260" r="4" fill="hsl(142.1 76.2% 36.3% / 0.5)" className="animate-dot-1 dark:fill-emerald-400/50" />
              <circle cx="120" cy="200" r="4" fill="hsl(142.1 76.2% 36.3% / 0.5)" className="animate-dot-2 dark:fill-emerald-400/50" />
              <circle cx="280" cy="200" r="4" fill="hsl(142.1 76.2% 36.3% / 0.5)" className="animate-dot-3 dark:fill-emerald-400/50" />
              <circle cx="320" cy="140" r="4" fill="hsl(142.1 76.2% 36.3% / 0.5)" className="animate-dot-4 dark:fill-emerald-400/50" />

              {/* Labels */}
              <text x="80" y="355" textAnchor="middle" fill="hsl(142.1 50% 25%)" fontSize="11" fontWeight="600" className="dark:fill-emerald-300">Farm</text>
              <text x="320" y="115" textAnchor="middle" fill="hsl(142.1 50% 25%)" fontSize="11" fontWeight="600" className="dark:fill-emerald-300">Market</text>
            </svg>
          </div>

          {/* Right side - Content */}
          <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
            <div className="mb-1">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                How It Works
              </span>
            </div>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 tracking-wide">
              Smart Agriculture
            </h2>
            <p className="text-foreground/70 text-xs md:text-sm mb-5 md:mb-6">
              Connecting farmers to markets with intelligent logistics
            </p>

            <div className="space-y-3 md:space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="flex gap-3 md:gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] md:text-xs font-medium text-primary/70">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-xs md:text-sm mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 text-[11px] md:text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
