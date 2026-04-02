import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin, Send, Clock, Globe, Zap, BrainCircuit, Cpu } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-enquiry", {
        body: {
          type: "contact",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending enquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "admin@teksys-services.com",
      subDetail: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 86004 18168",
      subDetail: "Mon-Fri, 9AM-6PM IST",
    },
    {
      icon: MapPin,
      title: "Our Company",
      detail: "Teksys Services",
      subDetail: "India · Singapore · USA",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
        <BrainCircuit className="absolute top-[15%] left-[8%] w-9 h-9 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Cpu className="absolute bottom-[20%] right-[10%] w-8 h-8 text-primary/10 dark:text-primary/15 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[35%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-[70%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-0 right-[30%] w-px h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`animate-section-enter ${isVisible ? "visible" : ""}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Zap className="h-3.5 w-3.5" />
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">LET'S CONNECT</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Need IETM systems, drone solutions, RF chip design, or AI analytics? 
              Let's discuss your aerospace & defense requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="group rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.detail}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.subDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl p-6 border border-border/50 bg-card/50 backdrop-blur-sm">
                <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Why Choose Us?
                </h4>
                <ul className="space-y-3">
                  {[
              "IETM, Drone, RF & AI analytics solutions for Aerospace & Defense",
                    "Domain experts in defense-grade systems engineering",
                    "End-to-end delivery from design to deployment",
                    "Made in India — serving global defense & enterprise clients",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 md:p-10 border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                    Send us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">Fill out the form below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-xl resize-none focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cta-gradient hover:opacity-90 !text-white font-semibold py-6 rounded-xl transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Enquiry
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
                <p className="text-center text-muted-foreground text-xs flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" />
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
