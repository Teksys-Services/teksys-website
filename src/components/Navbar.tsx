import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import teksysLogo from "@/assets/teksys-logo.png";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "IT Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur py-2" : "bg-background/40 backdrop-blur-sm py-3"
      }`}
    >
      {/* Top Contact Bar - Desktop Only */}
      <div className="hidden lg:block pb-2 mb-2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-end gap-6 text-xs text-foreground/70">
            <a 
              href="tel:+918600418168" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone size={12} />
              <span>+91 86004 18168</span>
            </a>
            <a 
              href="mailto:admin@teksys-services.com" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail size={12} />
              <span>admin@teksys-services.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between min-h-[48px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="hover:opacity-80 transition-opacity flex items-center"
          >
            <img 
              src={teksysLogo} 
              alt="TEKSYS" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
            {/* Contact info in mobile menu */}
            <div className="flex flex-col gap-2 px-4 py-3 border-b border-border/30 text-xs text-foreground/70">
              <a 
                href="tel:+918600418168" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={12} />
                <span>+91 86004 18168</span>
              </a>
              <a 
                href="mailto:admin@teksys-services.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={12} />
                <span>admin@teksys-services.com</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
