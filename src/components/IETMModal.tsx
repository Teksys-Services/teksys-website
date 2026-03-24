import { X, FileText, Search, Eye, Wrench, AlertTriangle, BookOpen, Monitor, Blocks, Flag, Globe, Rocket, CheckCircle2, Info, Database, RefreshCw, ClipboardList, Layout, Video, Server, Shield } from "lucide-react";
import ietmChallenges from "@/assets/ietm-challenges.jpg";
import ietmSolution from "@/assets/ietm-solution.jpg";
import ietmFeatures from "@/assets/ietm-features.jpg";
import ietmPilot from "@/assets/ietm-pilot.jpg";
import ietmObjectives from "@/assets/ietm-objectives.jpg";
import ietmStandards from "@/assets/ietm-standards.jpg";
import ietmDeliverables from "@/assets/ietm-deliverables.jpg";

interface IETMModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const challenges = [
  { icon: FileText, title: "Static PDFs are difficult to navigate" },
  { icon: Search, title: "Maintenance teams struggle with information retrieval" },
  { icon: Eye, title: "No interactive visualization of systems" },
  { icon: AlertTriangle, title: "Lack of real-time updates and version control" },
  { icon: BookOpen, title: "High dependency on manual interpretation" },
  { icon: Wrench, title: "Inefficiencies in training and maintenance workflows" },
];

const solutionFeatures = [
  { icon: Monitor, title: "Interactive, Web-based Technical Manuals" },
  { icon: Blocks, title: "Modular and Structured Content" },
  { icon: Search, title: "Searchable and Navigable System" },
  { icon: ClipboardList, title: "Visual + Text-Based Maintenance Workflows" },
  { icon: Server, title: "Scalable Architecture for Complex Defence Systems" },
];

const keyFeatures = [
  "Interactive UI",
  "Search functionality",
  "Clickable illustrations",
  "Step-by-step maintenance",
  "Fault workflows",
  "Version control",
];

const pilotScope = [
  { icon: Shield, label: "Handling & safety" },
  { icon: Info, label: "System overview" },
  { icon: Wrench, label: "Maintenance procedures" },
  { icon: AlertTriangle, label: "Fault isolation" },
  { icon: BookOpen, label: "Illustrated parts" },
];

const objectives = [
  { icon: Monitor, text: "Build a working IETM demo system" },
  { icon: Rocket, text: "Showcase TekSys capability to defence clients" },
  { icon: Blocks, text: "Develop reusable content architecture" },
  { icon: Globe, text: "Deploy live on TekSys website" },
  { icon: Flag, text: "Enable future DRDO / ISRO engagements" },
];

const deliverables = [
  { icon: Monitor, title: "Web-Based IETM Demo System" },
  { icon: Blocks, title: "8–10 Structured Content Modules" },
  { icon: Eye, title: "Interactive Illustrations" },
  { icon: Layout, title: "Admin Panel for Content Updates" },
  { icon: Globe, title: "Website Deployment" },
  { icon: Video, title: "Demo Video & Sales Kit" },
];

const standards = [
  { title: "Designed with Indian Defence IETM Workflows in Mind", icon: Flag },
  { title: "Structured for S1000D-Style Modular Content", icon: Blocks },
];

const standardsSupports = [
  { icon: Database, label: "Data Modularity" },
  { icon: RefreshCw, label: "Reusability" },
  { icon: ClipboardList, label: "Lifecycle Documentation" },
];

export const IETMModal = ({ isOpen, onClose }: IETMModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-4 pt-8 pb-8">
      <div className="relative w-full max-w-5xl bg-background border border-border rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur-sm rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-space-grotesk">TekSys IETM Solution</h2>
            <p className="text-sm text-muted-foreground">Interactive Electronic Technical Manuals</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-10">
          {/* Section 1: Challenges */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Challenges in Defence Technical Documentation
            </h3>
            <img src={ietmChallenges} alt="Challenges in Defence Technical Documentation" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                  <item.icon className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Solution */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              TekSys IETM Solution
            </h3>
            <img src={ietmSolution} alt="TekSys IETM Solution" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutionFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Key Features */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Key Features
            </h3>
            <img src={ietmFeatures} alt="Key Features" className="w-full max-w-md rounded-xl border border-border/50 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Pilot Use Case */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Pilot Use Case
            </h3>
            <img src={ietmPilot} alt="Pilot Use Case" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="rounded-xl bg-muted/50 border border-border/50 p-5">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Shoulder-Launched Rocket System (Training Module)
              </h4>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Scope includes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pilotScope.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/50 border border-accent">
                <Info className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground italic">Non-operational, sanitized demonstration only</span>
              </div>
            </div>
          </section>

          {/* Section 5: Pilot Demonstration Objective */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Pilot Demonstration Objective
            </h3>
            <img src={ietmObjectives} alt="Pilot Demonstration Objective" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="space-y-3">
              {objectives.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Standards Positioning */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Standards Positioning
            </h3>
            <img src={ietmStandards} alt="Standards Positioning" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {standards.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-muted/50 border border-border/50 p-4">
              <p className="text-sm font-medium text-muted-foreground mb-3">Supports:</p>
              <div className="flex flex-wrap gap-3">
                {standardsSupports.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/50">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm italic text-muted-foreground">"Aligned architecture, scalable for compliance"</p>
            </div>
          </section>

          {/* Section 7: Project Deliverables */}
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk border-l-4 border-primary pl-3">
              Project Deliverables
            </h3>
            <img src={ietmDeliverables} alt="Project Deliverables" className="w-full rounded-xl border border-border/50 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
