import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: "BASIC PLAN",
    price: "₹9,999 / month",
    features: [
      "Rule-based chatbot",
      "Website integration",
      "Analytics",
      "1 language",
      "2,000 messages",
    ],
    footer: "Add-ons and extra features billed separately.",
  },
  {
    name: "STANDARD AI PLAN",
    price: "₹24,999 / month",
    features: [
      "AI chatbot",
      "20-document knowledge base",
      "Persona customization",
      "3 languages",
      "API & analytics",
      "Human handoff",
    ],
    footer: "Recommended for small teams and advanced support.",
  },
  {
    name: "BUSINESS ADVANCED",
    price: "₹49,999 / month",
    features: [
      "Unlimited flows",
      "50 documents",
      "30,000 messages",
      "CRM integrations",
      "Team analytics & automation",
      "Multi-channel deployment",
    ],
    footer: "Custom enterprise terms available.",
  },
];

const industries = ["Education", "E-commerce", "Finance", "Medical", "Other"];

export const ChatbotModal = ({ isOpen, onClose }: ChatbotModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredPlan: "",
    companyName: "",
    contactPerson: "",
    phoneNumber: "",
    industry: "",
    primaryPurpose: "",
    deploymentLocation: "",
    dailyInteractions: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      preferredPlan: "",
      companyName: "",
      contactPerson: "",
      phoneNumber: "",
      industry: "",
      primaryPurpose: "",
      deploymentLocation: "",
      dailyInteractions: "",
      requirements: "",
    });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I'm interested in your services and would like to request an RFQ. Please share more details."
    );
    window.open(`https://wa.me/918600418168?text=${message}`, "_blank");
  };

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
            Chatbot Development
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

        <div className="p-6 md:p-8 space-y-10">
          {/* Plans Section */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 tracking-wide">
              Plans
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className="card-gradient card-hover rounded-2xl p-5 border border-border/50 hover:border-primary/30 flex flex-col"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <h4 className="font-display text-lg font-semibold text-foreground tracking-wide mb-2">
                    {plan.name}
                  </h4>
                  <p className="text-primary font-bold text-xl mb-4">
                    {plan.price}
                  </p>
                  <ul className="space-y-2 flex-1 mb-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-foreground/80 text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-xs italic border-t border-border/30 pt-3">
                    {plan.footer}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm text-center mt-4">
              (For other customization price may vary)
            </p>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 tracking-wide">
              Chatbot Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Preferred Plan
                  </label>
                  <Select
                    value={formData.preferredPlan}
                    onValueChange={(value) =>
                      handleSelectChange("preferredPlan", value)
                    }
                  >
                    <SelectTrigger className="bg-secondary/30 border-border/50 text-foreground rounded-xl h-12">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      <SelectItem value="basic">Basic Plan</SelectItem>
                      <SelectItem value="standard">Standard AI Plan</SelectItem>
                      <SelectItem value="business">Business Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Contact Person
                  </label>
                  <Input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Industry
                  </label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) =>
                      handleSelectChange("industry", value)
                    }
                  >
                    <SelectTrigger className="bg-secondary/30 border-border/50 text-foreground rounded-xl h-12">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Primary Purpose of Chatbot
                  </label>
                  <Input
                    type="text"
                    name="primaryPurpose"
                    value={formData.primaryPurpose}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Deployment Location
                  </label>
                  <Input
                    type="text"
                    name="deploymentLocation"
                    value={formData.deploymentLocation}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Estimated Daily User Interactions
                  </label>
                  <Input
                    type="text"
                    name="dailyInteractions"
                    value={formData.dailyInteractions}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Requirements
                </label>
                <Textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-6 py-5 text-base font-medium rounded-xl transition-all duration-300"
                >
                  Request RFQ
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-gradient hover:opacity-90 text-foreground font-semibold px-6 py-5 rounded-xl transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
