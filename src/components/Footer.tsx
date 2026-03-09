import { Phone, Mail, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import teksysLogo from "@/assets/teksys-logo-new.png";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "IT Services" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/teksys-services-pvt-ltd/", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#F5F5F3] to-[#E8E8E6] dark:from-[#0A1445] dark:to-[#040C38] border-t border-[#040C38]/10 dark:border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-32 opacity-[0.03] dark:opacity-[0.08]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,120 L0,120 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
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
              <p className="text-sm text-[#040C38]/70 dark:text-white/70 leading-relaxed">
                Empowering businesses with innovative AI-driven solutions and cutting-edge technology services across the globe.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-semibold text-[#040C38] dark:text-white uppercase tracking-wider">
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
                      className="group flex items-center gap-2 text-sm text-[#040C38]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors"
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
              <h4 className="text-sm font-semibold text-[#040C38] dark:text-white uppercase tracking-wider">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+918600418168" 
                    className="flex items-start gap-3 text-sm text-[#040C38]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors group"
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
                    className="flex items-start gap-3 text-sm text-[#040C38]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors group"
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
                    className="flex items-start gap-3 text-sm text-[#040C38]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors group"
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
              <h4 className="text-sm font-semibold text-[#040C38] dark:text-white uppercase tracking-wider">
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
                    className="flex items-center gap-3 text-sm text-[#040C38]/70 dark:text-white/70"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-base">{location.icon}</span>
                    </div>
                    <span>{location.country}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-[#040C38]/50 dark:text-white/50">
                  <Globe size={12} className="text-primary" />
                  <span>Serving clients globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-[#040C38]/10 dark:bg-white/10" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#040C38]/60 dark:text-white/60">
            © {new Date().getFullYear()} TEKSYS Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#040C38]/50 dark:text-white/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
