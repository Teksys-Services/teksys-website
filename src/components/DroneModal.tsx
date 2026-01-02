import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DroneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const droneApplications = [
  {
    id: "mines",
    title: "Drone for Mines",
    description:
      "Used for underground inspection, mapping, and safety monitoring in hazardous mining environments.",
  },
  {
    id: "agriculture",
    title: "Drone for Agriculture",
    description:
      "Enables precise spraying of fertilizers and pesticides to improve crop health and reduce manual effort.",
  },
  {
    id: "wildlife",
    title: "Drone for Wildlife",
    description:
      "Supports wildlife tracking, habitat monitoring, and conservation efforts in remote forest regions.",
  },
  {
    id: "surveillance",
    title: "Drone for Surveillance",
    description:
      "Provides real-time aerial surveillance for large areas, improving security and situational awareness.",
  },
];

export const DroneModal = ({ isOpen, onClose }: DroneModalProps) => {
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
        className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b border-border/30 bg-background/95 backdrop-blur-sm rounded-t-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground">
            Drone Solutions
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

        <div className="p-6 md:p-8">
          <p className="text-foreground/70 text-center mb-10 max-w-2xl mx-auto">
            Explore our specialized drone solutions designed for various industries and real-world applications.
          </p>

          {/* Drone Applications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {droneApplications.map((app, index) => (
              <DroneCard key={app.id} app={app} index={index} />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Interested in our drone solutions?
            </p>
            <Button
              onClick={() => {
                onClose();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cta-gradient hover:opacity-90 text-foreground font-semibold px-8 py-5 rounded-xl transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DroneCardProps {
  app: { id: string; title: string; description: string };
  index: number;
}

const DroneCard = ({ app, index }: DroneCardProps) => {
  return (
    <div
      className="card-gradient rounded-2xl border border-border/50 hover:border-primary/30 overflow-hidden transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animation Area */}
      <div className="relative h-56 bg-gradient-to-br from-secondary/40 to-background/80 overflow-hidden">
        {app.id === "mines" && <MinesAnimation />}
        {app.id === "agriculture" && <AgricultureAnimation />}
        {app.id === "wildlife" && <WildlifeAnimation />}
        {app.id === "surveillance" && <SurveillanceAnimation />}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-foreground tracking-wide mb-3">
          {app.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

// ============ MINES ANIMATION ============
const MinesAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Mine tunnel background */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-foreground/20" />
      
      {/* Rock formations */}
      <div className="absolute bottom-0 left-0 w-16 h-24 bg-foreground/15 rounded-tr-3xl" />
      <div className="absolute bottom-0 right-0 w-20 h-28 bg-foreground/12 rounded-tl-3xl" />
      <div className="absolute bottom-0 left-1/4 w-12 h-16 bg-foreground/10 rounded-t-xl" />
      <div className="absolute bottom-0 right-1/4 w-14 h-20 bg-foreground/13 rounded-t-xl" />
      
      {/* Tunnel entrance */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-40 h-32 rounded-t-full bg-foreground/8 border-t-4 border-x-4 border-foreground/25" />
      
      {/* Tunnel depth */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 w-32 h-20 bg-foreground/15 rounded-t-full" />
      
      {/* Drone with animation */}
      <div className="drone-mines-container">
        <div className="drone-mines">
          <DroneWithLights showLights={true} />
        </div>
      </div>
      
      {/* Scanning grid lines */}
      <svg className="absolute inset-0 w-full h-full scan-grid-mines">
        <defs>
          <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizontal scan lines */}
        <line x1="30%" y1="35%" x2="70%" y2="35%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-1" />
        <line x1="25%" y1="45%" x2="75%" y2="45%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-2" />
        <line x1="30%" y1="55%" x2="70%" y2="55%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-3" />
        {/* Vertical scan lines */}
        <line x1="35%" y1="30%" x2="35%" y2="65%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-4" />
        <line x1="50%" y1="25%" x2="50%" y2="70%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-5" />
        <line x1="65%" y1="30%" x2="65%" y2="65%" stroke="url(#scanGradient)" strokeWidth="1" className="scan-line-6" />
      </svg>
      
      {/* Warning markers */}
      <div className="warning-marker-1 absolute w-3 h-3 border-2 border-yellow-400/80 rounded-full" style={{ left: '35%', top: '50%' }} />
      <div className="warning-marker-2 absolute w-3 h-3 border-2 border-primary/80 rounded-full" style={{ left: '60%', top: '45%' }} />
      
      {/* Status display */}
      <div className="status-mines absolute top-4 right-4 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm rounded-lg border border-primary/30">
        <span className="text-[11px] text-primary font-mono">SCAN: ACTIVE</span>
      </div>
    </div>
  );
};

// ============ AGRICULTURE ANIMATION ============
const AgricultureAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10" />
      
      {/* Sun */}
      <div className="absolute top-4 right-8 w-10 h-10 rounded-full bg-yellow-400/20 animate-pulse" />
      
      {/* Ground/Field */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/25 to-primary/10" />
      
      {/* Crop rows - before state */}
      <div className="crop-rows absolute bottom-0 left-0 right-0 h-16 flex justify-around items-end px-4">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`crop-plant crop-plant-${i} w-1.5 rounded-t-full bg-primary/50`}
            style={{ height: `${8 + Math.random() * 8}px` }}
          />
        ))}
      </div>
      
      {/* Healthy crop overlay - after spray */}
      <div className="healthy-crops absolute bottom-0 left-0 right-0 h-16 flex justify-around items-end px-4">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`healthy-plant healthy-plant-${i} w-2 rounded-t-full bg-primary/80`}
            style={{ height: `${12 + Math.random() * 10}px` }}
          />
        ))}
      </div>
      
      {/* Drone with spray animation */}
      <div className="drone-agriculture-container">
        <div className="drone-agriculture">
          <DroneSpray />
        </div>
      </div>
      
      {/* Spray particles */}
      <div className="spray-container">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`spray-particle spray-particle-${i}`}
            style={{ left: `${45 + i * 2}%` }}
          />
        ))}
      </div>
      
      {/* Coverage indicator */}
      <div className="coverage-bar absolute bottom-4 left-4 right-4 h-2 bg-foreground/10 rounded-full overflow-hidden">
        <div className="coverage-fill h-full bg-primary/60 rounded-full" />
      </div>
      
      {/* Status display */}
      <div className="status-agri absolute top-4 left-4 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm rounded-lg border border-primary/30">
        <span className="text-[11px] text-primary font-mono">SPRAY: ACTIVE</span>
      </div>
    </div>
  );
};

// ============ WILDLIFE ANIMATION ============
const WildlifeAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Forest background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/15" />
      
      {/* Trees */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
        {/* Tree 1 */}
        <polygon points="30,180 50,100 70,180" fill="hsl(var(--primary) / 0.25)" />
        <rect x="45" y="180" width="10" height="15" fill="hsl(var(--foreground) / 0.15)" />
        
        {/* Tree 2 */}
        <polygon points="80,180 110,80 140,180" fill="hsl(var(--primary) / 0.3)" />
        <rect x="102" y="180" width="16" height="20" fill="hsl(var(--foreground) / 0.12)" />
        
        {/* Tree 3 */}
        <polygon points="160,180 185,90 210,180" fill="hsl(var(--primary) / 0.22)" />
        <rect x="178" y="180" width="14" height="18" fill="hsl(var(--foreground) / 0.13)" />
        
        {/* Tree 4 */}
        <polygon points="230,180 260,70 290,180" fill="hsl(var(--primary) / 0.28)" />
        <rect x="252" y="180" width="16" height="20" fill="hsl(var(--foreground) / 0.14)" />
      </svg>
      
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-primary/20" />
      
      {/* Drone with camera cone */}
      <div className="drone-wildlife-container">
        <div className="drone-wildlife">
          <DroneWithCamera />
        </div>
        {/* Camera scan cone */}
        <div className="scan-cone" />
      </div>
      
      {/* Animal silhouettes */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Deer silhouette */}
        <g className="animal-1">
          <ellipse cx="80" cy="155" rx="12" ry="8" fill="hsl(var(--foreground) / 0.3)" />
          <ellipse cx="80" cy="148" rx="6" ry="5" fill="hsl(var(--foreground) / 0.3)" />
          <line x1="76" y1="153" x2="74" y2="165" stroke="hsl(var(--foreground) / 0.25)" strokeWidth="2" />
          <line x1="84" y1="153" x2="86" y2="165" stroke="hsl(var(--foreground) / 0.25)" strokeWidth="2" />
        </g>
        
        {/* Bird silhouette */}
        <g className="animal-2">
          <ellipse cx="200" cy="140" rx="8" ry="5" fill="hsl(var(--foreground) / 0.25)" />
        </g>
        
        {/* Detection rings */}
        <circle className="detect-ring-1" cx="80" cy="155" r="18" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
        <circle className="detect-ring-2" cx="200" cy="140" r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
      </svg>
      
      {/* Protected zone boundary */}
      <div className="protected-zone absolute inset-x-8 bottom-8 top-16 border-2 border-dashed border-primary/40 rounded-lg" />
      
      {/* Status display */}
      <div className="status-wildlife absolute top-4 right-4 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm rounded-lg border border-primary/30">
        <span className="text-[11px] text-primary font-mono">TRACKING: 2</span>
      </div>
    </div>
  );
};

// ============ SURVEILLANCE ANIMATION ============
const SurveillanceAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/3 to-foreground/10" />
      
      {/* City/Area background */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        {/* Buildings */}
        <div className="absolute bottom-0 left-[8%] w-10 h-20 bg-foreground/15 rounded-t-sm" />
        <div className="absolute bottom-0 left-[22%] w-8 h-28 bg-foreground/12 rounded-t-sm" />
        <div className="absolute bottom-0 left-[35%] w-12 h-16 bg-foreground/18 rounded-t-sm" />
        <div className="absolute bottom-0 right-[35%] w-10 h-22 bg-foreground/14 rounded-t-sm" />
        <div className="absolute bottom-0 right-[20%] w-14 h-18 bg-foreground/16 rounded-t-sm" />
        <div className="absolute bottom-0 right-[5%] w-10 h-24 bg-foreground/13 rounded-t-sm" />
      </div>
      
      {/* Ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-foreground/20" />
      
      {/* Drone */}
      <div className="drone-surveillance-container">
        <div className="drone-surveillance">
          <DroneWithRadar />
        </div>
      </div>
      
      {/* Radar sweep */}
      <div className="radar-container absolute left-1/2 top-1/3 -translate-x-1/2">
        <div className="radar-circle" />
        <div className="radar-sweep" />
      </div>
      
      {/* Grid overlay on ground */}
      <svg className="grid-overlay absolute inset-0 w-full h-full">
        <defs>
          <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="10%" y="50%" width="80%" height="45%" fill="url(#gridPattern)" className="grid-rect" />
      </svg>
      
      {/* Moving targets */}
      <div className="target-1 absolute w-4 h-4 border-2 border-primary rounded-sm" style={{ bottom: '35%', left: '25%' }} />
      <div className="target-2 absolute w-4 h-4 border-2 border-primary rounded-sm" style={{ bottom: '40%', right: '30%' }} />
      
      {/* Live indicator */}
      <div className="status-surv absolute top-4 left-4 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm rounded-lg border border-primary/30 flex items-center gap-2">
        <span className="live-dot w-2 h-2 rounded-full bg-red-500" />
        <span className="text-[11px] text-primary font-mono">LIVE MONITORING</span>
      </div>
    </div>
  );
};

// ============ DRONE COMPONENTS ============
const DroneWithLights = ({ showLights }: { showLights: boolean }) => (
  <svg width="50" height="35" viewBox="0 0 50 35" fill="none" className="drop-shadow-lg">
    {/* Body */}
    <rect x="15" y="12" width="20" height="10" rx="3" className="fill-foreground/90" />
    {/* Arms */}
    <line x1="8" y1="17" x2="15" y2="17" className="stroke-foreground/70" strokeWidth="2" />
    <line x1="35" y1="17" x2="42" y2="17" className="stroke-foreground/70" strokeWidth="2" />
    {/* Rotors */}
    <ellipse cx="6" cy="17" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    <ellipse cx="44" cy="17" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    {/* Lights */}
    {showLights && (
      <>
        <circle cx="25" cy="24" r="3" className="fill-yellow-400/80 drone-light" />
        <ellipse cx="25" cy="30" rx="10" ry="4" className="fill-yellow-400/20 light-beam" />
      </>
    )}
  </svg>
);

const DroneSpray = () => (
  <svg width="50" height="35" viewBox="0 0 50 35" fill="none" className="drop-shadow-lg">
    {/* Body */}
    <rect x="15" y="10" width="20" height="10" rx="3" className="fill-foreground/90" />
    {/* Tank */}
    <rect x="18" y="20" width="14" height="6" rx="2" className="fill-primary/40" />
    {/* Arms */}
    <line x1="8" y1="15" x2="15" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    <line x1="35" y1="15" x2="42" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    {/* Rotors */}
    <ellipse cx="6" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    <ellipse cx="44" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    {/* Spray nozzles */}
    <rect x="20" y="26" width="2" height="3" className="fill-foreground/50" />
    <rect x="28" y="26" width="2" height="3" className="fill-foreground/50" />
  </svg>
);

const DroneWithCamera = () => (
  <svg width="50" height="35" viewBox="0 0 50 35" fill="none" className="drop-shadow-lg">
    {/* Body */}
    <rect x="15" y="10" width="20" height="10" rx="3" className="fill-foreground/90" />
    {/* Arms */}
    <line x1="8" y1="15" x2="15" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    <line x1="35" y1="15" x2="42" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    {/* Rotors */}
    <ellipse cx="6" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    <ellipse cx="44" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    {/* Camera gimbal */}
    <rect x="22" y="20" width="6" height="6" rx="1" className="fill-foreground/70" />
    <circle cx="25" cy="23" r="2" className="fill-primary/80" />
  </svg>
);

const DroneWithRadar = () => (
  <svg width="50" height="35" viewBox="0 0 50 35" fill="none" className="drop-shadow-lg">
    {/* Body */}
    <rect x="15" y="10" width="20" height="10" rx="3" className="fill-foreground/90" />
    {/* Arms */}
    <line x1="8" y1="15" x2="15" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    <line x1="35" y1="15" x2="42" y2="15" className="stroke-foreground/70" strokeWidth="2" />
    {/* Rotors */}
    <ellipse cx="6" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    <ellipse cx="44" cy="15" rx="6" ry="2.5" className="fill-primary/60 rotor" />
    {/* Camera */}
    <circle cx="25" cy="24" r="3" className="fill-foreground/80" />
    <circle cx="25" cy="24" r="1.5" className="fill-primary camera-pulse" />
  </svg>
);
