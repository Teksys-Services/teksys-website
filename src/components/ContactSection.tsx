import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`animate-section-enter ${isVisible ? "visible" : ""}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">
            <span className="gradient-text">CONTACT</span>
          </h2>

          <div className="max-w-md mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-xl font-semibold text-center mb-8 text-foreground tracking-wide">
                Enquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cta-gradient hover:opacity-90 text-foreground font-semibold py-6 rounded-xl transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
