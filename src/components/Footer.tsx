import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/30 relative overflow-hidden">
      {/* Subtle animated wave background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-24 opacity-5 animate-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,120 L0,120 Z"
            fill="hsl(256 59% 78%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <a href="tel:+918600418168" className="flex items-center gap-3 text-foreground/80 text-sm hover:text-primary transition-colors">
              <Phone size={16} className="text-primary" />
              <span>Call: +91 86004 18168</span>
            </a>
            <a href="mailto:admin@teksys-services.com" className="flex items-center gap-3 text-foreground/80 text-sm hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" />
              <span>Email: admin@teksys-services.com</span>
            </a>
            <div className="flex items-center gap-3 text-foreground/80 text-sm">
              <Linkedin size={16} className="text-primary" />
              <span>LinkedIn: Teksys Services</span>
            </div>
          </div>

          {/* Branches */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-foreground/80 text-sm font-medium">
              <MapPin size={16} className="text-primary" />
              <span>Our Branches</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/60 text-sm pl-6">
              <span>India</span>
              <span className="text-primary/50">•</span>
              <span>Singapore</span>
              <span className="text-primary/50">•</span>
              <span>USA</span>
            </div>
          </div>

          <div className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} TEKSYS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
