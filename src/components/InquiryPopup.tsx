import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const InquiryPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", enquiry: "" });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.enquiry) return;

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-enquiry", {
        body: {
          name: form.name,
          email: form.email,
          phone: "",
          company: "",
          service: "General Enquiry",
          message: form.enquiry,
        },
      });
      if (error) throw error;
      toast({ title: "Enquiry sent!", description: "We'll get back to you soon." });
      setOpen(false);
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold gradient-text">Quick Enquiry</DialogTitle>
          <DialogDescription>Let us know how we can help you.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="popup-name">Name</Label>
            <Input
              id="popup-name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="popup-email">Email</Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="popup-enquiry">Enquiry</Label>
            <Textarea
              id="popup-enquiry"
              placeholder="How can we help you?"
              value={form.enquiry}
              onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
              required
              rows={3}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full !text-white bg-primary hover:bg-primary/90">
            {loading ? "Sending..." : "Submit Enquiry"} <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
