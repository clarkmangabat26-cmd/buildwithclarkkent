// ============================================================
// SITE CONTENT — single source of truth for all copy.
// Edit this file to update headlines, projects, contact, etc.
// ============================================================

export type ImpactRow = { label: string; from: string; to: string };

export type Project = {
  id: string;
  category: string;
  title: string;
  benefit: string; // outcome badge
  summary: string; // short card description
  tools: string[];

  // ---- Visuals ----
  thumbnail?: string; // 800x500 card image
  fullImage?: string; // 1600x1000 case-study image

  // ---- Modal / case study ----
  client?: string;
  problem?: string;
  solution?: string;
  flow?: string[];
  flowNote?: string;
  rubric?: { label: string; detail: string }[];
  impact?: ImpactRow[];
  toolsDetail?: string; // e.g. "n8n (14 nodes), GoHighLevel, ..."
};

export const site = {
  // ---------- Identity ----------
  name: "Clark Kent Mangabat",
  firstName: "Clark",
  role: "AI Automation Specialist",
  availability: "Available Now",
  brandMark: "CLARK KENT MANGABAT",
  email: "hello@yourdomain.com",
  social: {
    linkedin: "#",
    twitter: "#",
  },

  // ---------- Hero ----------
  hero: {
    tag: "AI AUTOMATION SPECIALIST / AVAILABLE NOW",
    headline: "I build Make, Zapier, and n8n workflows that run your operations.",
    sub: "No-code automation for teams that need things done reliably. Based in the Philippines, working with businesses that want workflows shipped fast.",
    primaryCta: "See what I've built",
    primaryCtaTarget: "#work",
    secondaryCta: "Contact me",
    secondaryCtaTarget: "#contact",
  },

  // ---------- About ----------
  about: {
    imageUrl: "/clark-portrait.png",
    headline: "Hi, I'm Clark Kent Mangabat",
    bio: "I build automation workflows for operations teams — turning manual processes into reliable systems that run themselves. I completed certifications in Make Intermediate and Google Prompting Essentials, and have built 8+ real-world automation projects covering lead management, CRM workflows, invoice processing, and AI-powered data enrichment. I work with businesses that need workflows shipped fast without the consultant overhead.",
    principles: [
      {
        n: "01",
        t: "You get the workflow + the process map.",
        d: "Every build includes a visual process diagram showing how data flows, what triggers what, and where things can break. No black boxes.",
      },
      {
        n: "02",
        t: "Tested before handoff.",
        d: "I run test scenarios with real data before I deliver. If it breaks during testing, you don't see it. If it works during testing, it'll work in production.",
      },
      {
        n: "03",
        t: "Execution over strategy.",
        d: "I'm here to build and ship workflows, not consult on digital transformation. You tell me what's broken, I build the fix.",
      },
    ],
  },

  // ---------- Work section header ----------
  workSection: {
    eyebrow: "Selected Builds",
    headline: "Systems I've built.",
    subtext: "3 CASE STUDIES",
  },

  // ---------- Stack ----------
  stack: {
    label: "Tools I Use",
    tools: ["Make", "Zapier", "n8n", "GoHighLevel"],
  },

  // ---------- Projects ----------
  projects: [
    {
      id: "lead-router",
      category: "Lead Management",
      title: "AI lead qualification + CRM routing pipeline",
      benefit: "47 HOURS → 60 SECONDS",
      summary:
        "Built for Prestige Auto Detail. Tally form triggers n8n workflow that runs duplicate checks, scores leads 1-10 using weighted AI rubric (vehicle type, service, budget, timeline), routes into GoHighLevel CRM by tier (hot/warm/cold), fires Slack alerts with lead summary, and triggers tier-specific follow-up sequences. Hot leads get contacted in under 60 seconds, 24/7.",
      tools: ["n8n", "GoHighLevel", "OpenAI", "Tally", "Slack"],
      thumbnail: "/work/lead-router-thumbnail.png",
      fullImage: "/work/lead-router-full.png",
      client: "Prestige Auto Detail",
      problem:
        "Most service businesses lose leads because no one follows up fast enough. Average response time was 47 hours — by then the lead already booked with a competitor. Manual qualification took 15-20 minutes per lead, hot leads only got followed up 60% of the time, and coverage was business hours only.",
      solution:
        "Fully automated pipeline that captures inbound leads via Tally form, scores them using weighted AI rubric (vehicle type, service, budget, timeline, referral status), routes into GoHighLevel CRM by tier, and triggers immediate follow-up — all within 60 seconds of form submission, 24/7.",
      flow: [
        "Prospect submits Tally form (vehicle, service, budget, timeline, source)",
        "n8n receives webhook, runs duplicate check against GoHighLevel",
        "AI scores lead 1-10 using weighted rubric across 5 criteria",
        "Switch node routes into hot (7-10) / warm (4-6) / cold (1-3) tiers",
        "Contact created in GHL with correct tag, placed in Detailing Leads pipeline",
        "Slack alert fires to sales team with score, vehicle, service, GHL link",
        "Hot leads get 30-min Slack reminder if no reply",
        "GHL triggers tier-specific outbound (SMS for hot, nurture for warm, drip for cold)",
      ],
      flowNote:
        "Budget mismatch logic: If lead requests ceramic coating or paint correction but budgets under $200, AI flags the mismatch so team can manage expectations before contact.",
      rubric: [
        { label: "Vehicle type", detail: "Exotic/Classic (3 pts) → Standard (1 pt)" },
        { label: "Service", detail: "Ceramic/Paint correction (3 pts) → Full detail (2 pts) → Basic wash (1 pt)" },
        { label: "Budget", detail: "$1,000+ (3 pts) → $500-999 (2 pts) → $200-499 (1 pt) → Under $200 (0 pts)" },
        { label: "Timeline", detail: "This week (3 pts) → This month (2 pts) → Exploring (0 pts)" },
        { label: "Referral bonus", detail: "+1 pt" },
        { label: "Max score", detail: "13 → normalized to 1-10 scale" },
      ],
      impact: [
        { label: "Response time", from: "47 hours", to: "60 seconds" },
        { label: "Manual qualification", from: "15-20 min/lead", to: "0 minutes" },
        { label: "Hot lead follow-up rate", from: "60%", to: "100%" },
        { label: "Coverage", from: "Business hours", to: "24/7" },
        { label: "Cost per lead qualification", from: "$12-18", to: "$0.01" },
      ],
      toolsDetail: "n8n (14 nodes), GoHighLevel, OpenAI, Tally, Slack",
    },
    {
      id: "invoice-ops",
      category: "Finance Ops",
      title: "Xero invoice extraction to Asana",
      benefit: "ZERO MANUAL DATA ENTRY",
      summary:
        "Automated invoice reconciliation with Make.com. System monitors Xero for new invoices, extracts line items with GPT-4, matches against POs in Google Sheets, then queues mismatches for AP review in Asana with one-click approval actions.",
      tools: ["Make", "Xero", "OpenAI", "Google Sheets", "Asana"],
      problem:
        "AP team spent 3 days a month manually keying invoices from Xero into review spreadsheets, with frequent matching errors and missed mismatches.",
      solution:
        "Make.com scenario monitors Xero, extracts invoice line items with GPT-4, matches against POs in Google Sheets, and queues mismatches for AP review in Asana with one-click approval actions.",
      flow: [
        "Make.com watches Xero for new invoices",
        "GPT-4 extracts structured line items from each invoice",
        "Match line items against PO list in Google Sheets",
        "Clean matches auto-approved and logged",
        "Mismatches create Asana task with approval/reject buttons",
      ],
      impact: [
        { label: "Manual data entry", from: "3 days/month", to: "0 minutes" },
        { label: "Mismatch detection", from: "Spotty", to: "100%" },
      ],
      toolsDetail: "Make.com, Xero, OpenAI (GPT-4), Google Sheets, Asana",
    },
    {
      id: "onboarding",
      category: "CRM Automation",
      title: "29-step Asana client onboarding CRM",
      benefit: "HANDS-OFF ONBOARDING",
      summary:
        "Built a full client lifecycle system in Asana with conditional logic. New client triggers create workspace, assign onboarding checklist, schedule follow-up sequences, and auto-archive after 90 days of inactivity. Zero human intervention from signup to first deliverable.",
      tools: ["Asana", "Stripe", "PandaDoc", "Cal.com", "Slack"],
      problem:
        "New clients waited 3-5 days for kickoff while ops manually sent contracts, set up workspaces, and chased intake forms. A single Stripe payment now triggers 14 actions end-to-end — client is onboarded before the team logs in.",
      solution:
        "Full client lifecycle system in Asana with conditional logic. Stripe payment triggers workspace creation, contracts, kickoff scheduling, intake, and follow-up sequences — with auto-archive after 90 days of inactivity.",
      flow: [
        "Stripe webhook as trigger",
        "Create client workspace in Asana",
        "Send PandaDoc contract via email",
        "Create Cal.com booking link for kickoff call",
        "Log client record in CRM + create Slack channel",
      ],
      impact: [
        { label: "Time to kickoff", from: "3-5 days", to: "Same day" },
        { label: "Manual onboarding steps", from: "29", to: "0" },
      ],
      toolsDetail: "Asana, Stripe, PandaDoc, Cal.com, Slack",
    },
  ] as Project[],

  // ---------- Contact ----------
  contactSection: {
    eyebrow: "GET IN TOUCH",
    headline: "Need a workflow built?",
    description:
      "I'm available for hourly or project-based automation work. Fill out the form and I'll respond within 24 hours.",
    formLabels: {
      name: "01 / Name",
      email: "02 / Email",
      bottleneck: "03 / What workflow do you need built?",
    },
    placeholders: {
      name: "Your name",
      email: "you@company.com",
      bottleneck: "Our team spends ~15h/week copying data between...",
    },
    submitButton: "Send message",
    submittingText: "Sending…",
  },

  // ---------- Footer ----------
  footer: {
    tagline: "AUTOMATION SPECIALIST BASED IN THE PHILIPPINES",
    year: 2026,
  },
};

export const CTA_HREF = "#contact";
export const CTA_LABEL = "Contact me";
export const CTA_LABEL_SHORT = "Contact";
