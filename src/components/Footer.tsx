import { Phone, Mail, Linkedin, Globe, ArrowUpRight, Zap, BrainCircuit, Cpu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import teksysLogo from "@/assets/teksys-logo-new.png";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "IT Services" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/20 border-t border-border/50">
      {/* Tech background matching hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
        <BrainCircuit className="absolute top-[20%] right-[8%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
        <Cpu className="absolute bottom-[30%] left-[12%] w-7 h-7 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[50%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-[30%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-5">
              <img 
                src={teksysLogo} 
                alt="TEKSYS" 
                className="h-10 w-auto"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-solutions company in Aerospace & Defense — delivering IETM systems, AI-powered drone solutions, RF & microwave engineering, and AI-driven data analytics.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium">
                <Zap className="h-3 w-3" />
                AI-Powered Innovation · Made in India
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-display font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-display font-semibold text-foreground uppercase tracking-wider">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+918600418168" 
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone size={14} className="text-primary" />
                    </div>
                    <span className="pt-1.5">+91 86004 18168</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:admin@teksys-services.com" 
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <span className="pt-1.5">admin@teksys-services.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/teksys-services-pvt-ltd/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Linkedin size={14} className="text-primary" />
                    </div>
                    <span className="pt-1.5">Teksys Services</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Locations Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-display font-semibold text-foreground uppercase tracking-wider">
                Our Locations
              </h4>
              <div className="space-y-4">
                {[
                  { country: "India", icon: "🇮🇳" },
                  { country: "Singapore", icon: "🇸🇬" },
                  { country: "USA", icon: "🇺🇸" },
                ].map((location) => (
                  <div 
                    key={location.country}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-base">{location.icon}</span>
                    </div>
                    <span>{location.country}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe size={12} className="text-primary" />
                  <span>Serving clients globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-border/50" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TEKSYS Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
