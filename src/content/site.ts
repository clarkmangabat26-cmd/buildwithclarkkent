// ============================================================
// SITE CONTENT — edit this file to update the portfolio.
// Replace [Your Full Name], bio, projects, stack, etc.
// ============================================================

export type Project = {
  id: string;
  category: string;
  title: string;
  benefit: string; // ROI badge, e.g. "Saves 20 hours/month"
  description: string;
  screenshotUrl: string; // hero screenshot for detail view
  loomUrl: string; // Loom embed URL
  logic: string[]; // Logic Breakdown — ordered steps
  tools: string[];
};

export const site = {
  // ---------- Identity ----------
  name: "[Your Full Name]",
  firstName: "[Your Name]",
  role: "AI Automation Specialist",
  availability: "Available for Q2",
  brandMark: "[Your Full Name]",
  email: "hello@yourdomain.com",
  social: {
    linkedin: "#",
    twitter: "#",
  },

  // ---------- Hero ----------
  hero: {
    headline: "I build systems that handle your repetitive work.",
    sub: "Specializing in n8n, Make, and Zapier to automate your operations. Move faster, reduce errors, and scale without hiring.",
    metrics: [
      { k: "140+", v: "Workflows shipped" },
      { k: "3,200h", v: "Saved per year" },
      { k: "99.4%", v: "Uptime on prod flows" },
      { k: "<2wk", v: "Average delivery" },
    ] as { k: string; v: string }[],
  },

  // ---------- About ----------
  about: {
    imageUrl: "/about-portrait.jpg", // replace this file in /public
    headline: "Hi, I’m [Your Name]",
    bio: "I architect digital infrastructure for operators — replacing brittle manual work with reliable, measured systems. Seven years across ops + engineering, partnering with founders and COOs to turn spreadsheets and inboxes into software that runs itself.",
    principles: [
      {
        n: "01",
        t: "Systems, not scripts.",
        d: "Every build is documented, monitored, and handed off with a runbook. No black boxes.",
      },
      {
        n: "02",
        t: "Measure before building.",
        d: "We start with a time-audit. If an automation doesn't return 5x its cost, we don't build it.",
      },
      {
        n: "03",
        t: "Boring reliability.",
        d: "Retries, logs, alerts. Your flows run at 3am without waking anyone.",
      },
    ],
  },

  // ---------- Stack ----------
  stack: {
    label: "Industry-Standard Infrastructure",
    tools: ["n8n", "Make", "Zapier", "GoHighLevel"],
  },

  // ---------- Projects ----------
  projects: [
    {
      id: "lead-router",
      category: "Lead Management",
      title: "Inbound lead router with AI qualification",
      benefit: "Saves 20 hours/month",
      description:
        "Captures leads from 6 sources, enriches with Clearbit, scores with GPT, and routes to the right AE in Slack with a pre-drafted reply.",
      screenshotUrl: "/projects/lead-router.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
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
      screenshotUrl: "/projects/invoice-ops.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
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
      screenshotUrl: "/projects/content-engine.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
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
      screenshotUrl: "/projects/onboarding.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
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
      screenshotUrl: "/projects/support-triage.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
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
      screenshotUrl: "/projects/reporting.jpg",
      loomUrl: "https://www.loom.com/embed/REPLACE_ID",
      logic: [
        "Scheduled multi-source sync",
        "Metric diff vs last week",
        "Narrative generation with GPT",
        "Email + Slack delivery",
      ],
      tools: ["Make", "OpenAI", "Google Sheets"],
    },
  ] as Project[],

  // ---------- Contact / CTA ----------
  contact: {
    eyebrow: "Free Discovery Call",
    headline: "Find your\nbottleneck.",
    sub: "45 minutes. I'll map your current ops, identify the three highest-leverage automations, and tell you what they'd save — before you pay a dollar.",
    bullets: ["No sales pitch", "Written report delivered in 48h", "Yours to keep"],
    ctaLabel: "Book My Discovery Call →",
  },

  // ---------- Footer ----------
  footer: {
    tagline: "Built for high-performance operations.",
    year: 2026,
  },
};

export const CTA_HREF = "#audit";
export const CTA_LABEL = "Book a Discovery Call";
export const CTA_LABEL_SHORT = "Discovery Call";