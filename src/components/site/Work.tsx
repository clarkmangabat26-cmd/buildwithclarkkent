import { useState } from "react";
import { ArrowUpRight, X, Play } from "lucide-react";

export type Project = {
  id: string;
  category: string;
  title: string;
  benefit: string;
  description: string;
  logic: string[];
  tools: string[];
};

const projects: Project[] = [
  {
    id: "lead-router",
    category: "Lead Management",
    title: "Inbound lead router with AI qualification",
    benefit: "Saves 20 hours/month",
    description:
      "Captures leads from 6 sources, enriches with Clearbit, scores with GPT, and routes to the right AE in Slack with a pre-drafted reply.",
    logic: [
      "Webhook intake from forms, ads, and email",
      "Enrichment + deduplication in Airtable",
      "GPT scoring against ICP rubric",
      "Round-robin assignment + Slack alert",
    ],
    tools: ["n8n", "OpenAI", "Slack"],
  },
  {
    id: "invoice-ops",
    category: "Finance Ops",
    title: "Invoice extraction & reconciliation",
    benefit: "Cuts AP time by 78%",
    description:
      "OCR-parses PDFs from inbox, extracts line items with AI, matches to POs, and posts to Xero with human-in-the-loop approval.",
    logic: [
      "Gmail watch → PDF parse",
      "GPT-4 structured extraction",
      "Match against purchase orders",
      "Approval workflow in Slack",
    ],
    tools: ["Make", "OpenAI", "Xero"],
  },
  {
    id: "content-engine",
    category: "Marketing",
    title: "Content repurposing engine",
    benefit: "10x content output",
    description:
      "Turns a single long-form video into 12 assets: blog, LinkedIn carousel, shorts, threads, newsletter, and landing copy.",
    logic: [
      "Loom/Zoom transcript pull",
      "Chapter detection + GPT rewriting",
      "Asset generation per platform",
      "Draft queue in Notion",
    ],
    tools: ["n8n", "OpenAI", "Notion"],
  },
  {
    id: "onboarding",
    category: "Client Ops",
    title: "Client onboarding autopilot",
    benefit: "Zero-touch onboarding",
    description:
      "Stripe payment triggers 14 actions: contract, workspace, intake form, kickoff call, welcome email, and CRM setup.",
    logic: [
      "Stripe webhook as trigger",
      "PandaDoc contract + workspace creation",
      "Cal.com booking link sent",
      "CRM record + Slack channel",
    ],
    tools: ["Zapier", "Stripe", "Cal.com"],
  },
  {
    id: "support-triage",
    category: "Support",
    title: "AI-triaged support inbox",
    benefit: "3min → 20s response",
    description:
      "Classifies tickets, drafts answers from your knowledge base, and escalates only what actually needs a human.",
    logic: [
      "Intercom + email unified intake",
      "Vector search over help center",
      "GPT drafts with citations",
      "Human review for sensitive tags",
    ],
    tools: ["n8n", "OpenAI", "Intercom"],
  },
  {
    id: "reporting",
    category: "Reporting",
    title: "Exec dashboard auto-brief",
    benefit: "Every Monday, 6am",
    description:
      "Pulls data from 9 tools, writes a plain-English weekly summary, and delivers it to leadership before standup.",
    logic: [
      "Scheduled multi-source sync",
      "Metric diff vs last week",
      "Narrative generation with GPT",
      "Email + Slack delivery",
    ],
    tools: ["Make", "OpenAI", "Google Sheets"],
  },
];

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4">/ Automation Catalog</div>
            <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95]">
              Systems I've<br />built<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {projects.length} case studies
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-ink">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className={`group text-left p-6 md:p-8 bg-background hover:bg-ink hover:text-background transition-all duration-200 relative
                hover:-translate-y-1 hover:shadow-[0_0_0_2px_hsl(var(--primary))]
                ${i % 3 !== 2 ? "lg:border-r-2" : ""} 
                ${i % 2 !== 1 ? "md:border-r-2 lg:border-r-2" : "md:border-r-0"}
                ${i < projects.length - 1 ? "border-b-2" : ""}
                ${i >= projects.length - 3 ? "lg:border-b-0" : "lg:border-b-2"}
                ${i >= projects.length - 2 ? "md:border-b-0" : "md:border-b-2"}
                border-ink min-h-[280px] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                    {String(i + 1).padStart(2, "0")} / {p.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition" />
                </div>
                <h3 className="font-black tracking-tightest text-2xl md:text-3xl leading-tight">
                  {p.title}
                </h3>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 self-start">
                <span className="h-2 w-2 bg-primary group-hover:bg-background" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] font-semibold">
                  {p.benefit}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectOverlay project={active} onClose={() => setActive(null)} />}
    </section>
  );
};

const ProjectOverlay = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-fade-up">
      <div className="sticky top-0 z-10 border-b-2 border-ink bg-background">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
            / Case Study — {project.category}
          </span>
          <button
            onClick={onClose}
            className="h-11 w-11 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-background transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95] max-w-4xl">
          {project.title}<span className="text-primary">.</span>
        </h2>
        <div className="mt-6 inline-flex items-center gap-3 border-2 border-ink px-4 py-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold">{project.benefit}</span>
        </div>
        <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
          {project.description}
        </p>

        {/* Video placeholder */}
        <div className="mt-12 md:mt-16">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">/ Video Demo — Loom</div>
          <div className="relative aspect-video border-2 border-ink bg-secondary flex items-center justify-center grid-lines">
            <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 md:h-24 md:w-24 bg-primary border-2 border-ink flex items-center justify-center">
                <Play className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground fill-current" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Loom walkthrough · 4:32</span>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-12 md:mt-16">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">/ Process Screenshots</div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-ink">
            {[1, 2, 3].map((n, i) => (
              <div
                key={n}
                className={`aspect-[4/3] grid-lines bg-secondary flex items-center justify-center
                  ${i < 2 ? "border-b-2 md:border-b-0 md:border-r-2 border-ink" : ""}`}
              >
                <span className="font-black tracking-tightest text-4xl md:text-6xl opacity-20">
                  0{n}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logic */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-ink">
          <div className="p-6 md:p-8 md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-ink bg-ink text-background">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 mb-4">/ The Logic</div>
            <h3 className="font-black tracking-tightest text-3xl md:text-4xl">How it flows.</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.15em] border border-background/40 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            {project.logic.map((step, i) => (
              <div
                key={i}
                className={`flex gap-6 p-6 md:p-8 ${i < project.logic.length - 1 ? "border-b-2 border-ink" : ""}`}
              >
                <div className="font-black tracking-tightest text-4xl md:text-5xl text-primary leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-semibold text-lg md:text-xl leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href="#audit"
            onClick={onClose}
            className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink"
          >
            Build something like this →
          </a>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:bg-ink hover:text-background transition-colors"
          >
            Back to Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;