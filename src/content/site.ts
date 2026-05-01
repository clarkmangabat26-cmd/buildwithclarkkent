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
  workflowTag?: string; // small pill badge above category, e.g. "SPEED TO LEAD"
  hasVideoPlaceholder?: boolean; // shows a "coming soon" video embed placeholder
  videoPlaceholderText?: string; // caption under the play button
  loomEmbedId?: string; // Loom share id; when set, an embedded Loom iframe replaces the placeholder

  // ---- Visuals ----
  thumbnail?: string; // 800x500 card image
  fullImage?: string; // 1600x1000 case-study image
  gallery?: { src: string; alt: string }[]; // optional multi-image gallery for modal

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
    linkedin: "https://www.linkedin.com/in/clark-kent-mangabat-81183725a",
    onlineJobs: "https://v2.onlinejobs.ph/jobseekers/info/3243744",
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
    subtext: "7 CASE STUDIES",
  },

  // ---------- Workflow categories ----------
  workflowCategories: {
    eyebrow: "WORKFLOW CATEGORIES",
    headline: "Types of workflows I build for businesses.",
    cards: [
      {
        title: "Speed to Lead",
        benefits: [
          "Faster response times",
          "Higher close rates",
          "Revenue loss prevention",
        ],
      },
      {
        title: "Document Processing",
        benefits: [
          "Labor cost savings",
          "Cut processing time by 80%+",
          "Eliminate data entry errors",
        ],
      },
      {
        title: "Follow-Up Sequences",
        benefits: [
          "More customer touchpoints",
          "Increased close rates",
          "Never miss a follow-up",
        ],
      },
      {
        title: "Database Reactions",
        benefits: [
          "Churned leads get personalized sequences",
          "Automated re-engagement",
          "Behavior-triggered workflows",
        ],
      },
      {
        title: "Status Notifications",
        benefits: [
          "Weekly pipeline reports",
          "Compiled client KPI reports",
          "Automated status updates",
        ],
      },
      {
        title: "AI Voice Automation",
        benefits: [
          "24/7 availability",
          "Zero hiring costs",
          "Human-level conversations",
        ],
      },
      {
        title: "Content Automation",
        benefits: [
          "One input → multiple outputs",
          "Zero manual content creation",
          "Brand safety checks built in",
        ],
      },
    ],
  },

  // ---------- Stack ----------
  stack: {
    label: "Tools I Use",
    tools: [
      "Make",
      "Zapier",
      "n8n",
      "GoHighLevel",
      "Asana",
      "Notion",
      "Google Workspace",
      "Xero",
      "PayPal",
    ],
  },

  // ---------- Projects ----------
  projects: [
    {
      id: "ai-voice-receptionist",
      category: "AI Voice Automation",
      title: "AI Voice Receptionist for Health Clinics",
      benefit: "24/7 AVAILABILITY",
      workflowTag: "AI VOICE AGENT",
      loomEmbedId: "4640467f36f8481fa60a31f1eab74403",
      summary:
        "Amy answers the phone, books appointments, reschedules them, and handles cancellations. Everything syncs to Google Calendar automatically. No receptionist needed — it runs 24/7 on its own.",
      tools: ["Vapi", "n8n", "ElevenLabs", "Google Calendar", "Airtable"],
      thumbnail: "/work/ai-receptionist-thumbnail.png",
      fullImage: "/work/ai-receptionist-full.png",
      client: "Portfolio demonstration — built for Wellness Partners, a multi-specialty health clinic",
      problem:
        "Amy is a voice assistant powered by Vapi and ElevenLabs that answers calls on behalf of a health clinic. She can check open slots, book new appointments, reschedule existing ones, and process cancellations — all without a human receptionist in the loop.\n\nThe system handles errors gracefully: if a requested slot is no longer available, Amy offers alternatives in real time. Urgent or complex situations are escalated to clinic staff rather than handled by AI.",
      solution:
        "Four separate n8n workflows are triggered by Vapi tool calls. Each handles one part of the appointment lifecycle:\n\nGetSlots — Fetches available Google Calendar events, computes open 30-minute windows within business hours, returns formatted availability to Amy.\n\nBookSlots — Creates a new calendar event with patient details, includes timezone conversion and a friendly error response if the time is already taken.\n\nUpdateSlots — Finds the existing appointment by patient name and email, deletes it, and creates a new one at the rescheduled time.\n\nCancelSlots — Locates and removes the calendar event. Cancellation notes are passed back to the system for logging.\n\nAfter each call, a fifth workflow captures the full transcript, recording URL, call summary, cost, and patient details into Airtable — giving the clinic a complete call log without any manual entry.",
      flow: [
        "Timezone handling built in — Vapi passes times in UTC. A dedicated conversion step normalizes all times to America/Chicago (CST) before writing to Google Calendar — preventing double-booking across timezone mismatches.",
        "Error paths on every workflow — Each workflow has a dedicated error branch that returns a human-readable message to Amy rather than failing silently — so the caller always gets a clear response even when something goes wrong.",
        "Human escalation preserved — Amy is prompted to escalate urgent or clinical situations to a triage nurse rather than attempt to handle them. AI handles logistics; clinical judgment stays human.",
      ],
      flowNote:
        "Status: Built and tested to production spec as a portfolio demonstration. End-to-end tested across all four appointment actions. Available to adapt for live clinic deployment.",
      impact: [
        { label: "Automation workflows", from: "Manual reception", to: "4 workflows" },
        { label: "Availability", from: "Business hours", to: "24/7" },
        { label: "Manual steps to book", from: "Multiple", to: "0" },
      ],
      toolsDetail: "Vapi, n8n (4 workflows), ElevenLabs, Google Calendar, Airtable",
    },
    {
      id: "lead-router",
      category: "Lead Management",
      title: "AI lead qualification + CRM routing pipeline",
      benefit: "47 HOURS → 60 SECONDS",
      workflowTag: "SPEED TO LEAD",
      summary:
        "Leads get scored by AI and sent to the right sales rep automatically. Hot leads get contacted in under 60 seconds. No one touches the data — it all happens on its own.",
      tools: ["n8n", "GoHighLevel", "OpenAI", "Tally", "Slack"],
      thumbnail: "/work/lead-router-thumbnail.png",
      fullImage: "/work/lead-router-full.png",
      gallery: [
        { src: "/work/lead-router-full.png", alt: "n8n workflow — lead scoring + routing" },
        { src: "/work/lead-router-ghl.png", alt: "GoHighLevel automation — tag-based branching" },
      ],
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
      title: "Export Account Transactions from Xero",
      benefit: "ZERO MANUAL ENTRY",
      summary:
        "Pulls transactions from Xero and turns them into Asana tasks. The accounting team doesn't type anything — the system does it all.",
      tools: ["Make", "Xero", "Asana", "CSV"],
      thumbnail: "/work/xero-invoice-thumbnail.png",
      fullImage: "/work/xero-invoice-full.png",
      problem:
        "Finance and project teams worked in silos — transactions lived in Xero while task tracking lived in Asana. Reconciling the two meant hours of manual exports, reformatting, and copy-paste, with errors creeping in at every step.",
      solution:
        "I built a seamless workflow to bridge the gap between accounting and project management. This automation ensures financial transactions are accurately tracked as actionable tasks without manual data entry.",
      flow: [
        "Extract: Automatically exports account transactions from Xero",
        "Format: Converts complex financial data into clean CSV format compatible with Asana",
        "Sync: Uploads CSV directly to Asana, creating structured tasks for the team",
        "Efficiency: Eliminates human error and ensures real-time visibility into financial movements",
      ],
      impact: [
        { label: "Manual data entry", from: "Hours/week", to: "Zero" },
        { label: "Finance ↔ project sync", from: "Manual exports", to: "Automatic" },
        { label: "Data entry errors", from: "Frequent", to: "Eliminated" },
      ],
      toolsDetail: "Make, Xero, Asana",
    },
    {
      id: "onboarding",
      category: "CRM Automation",
      title: "29-step Asana client onboarding CRM",
      benefit: "ZERO FORGOTTEN CLIENTS",
      summary:
        "When a client pays, the system sets up their folders, sends their welcome email, and schedules follow-ups. The team doesn't lift a finger.",
      tools: ["Asana", "Google Drive", "Gmail", "Zapier"],
      thumbnail: "/work/asana-29step-thumbnail.png",
      fullImage: "/work/asana-29step-full.png",
      problem:
        "Leads were slipping through the cracks — files scattered across drives, follow-ups forgotten, and onboarding handled manually for every new client. The team had no consistent system for nurturing prospects or delivering post-sale guidance.",
      solution:
        "Turned Asana into a full CRM. Status changes drive automation: folders auto-created in Google Drive with linked subtasks, unresponsive leads get SMS/Email nurture sequences, approved clients receive welcome emails with PDFs, and service-specific maintenance advice goes out automatically.",
      flow: [
        "Lead reaches 'Ready' status in Asana",
        "Google Drive folder structure auto-created with organized subfolders",
        "Asana subtasks automatically linked to corresponding Drive folders",
        "Automated SMS/Email sequences trigger for unresponsive leads",
        "Welcome email with PDF attachments sent when lead approved",
        "Post-sale maintenance advice delivered based on service type purchased",
      ],
      impact: [
        { label: "Forgotten follow-ups", from: "Frequent", to: "Zero" },
        { label: "Onboarding steps", from: "29 manual", to: "Fully automated" },
        { label: "File organization", from: "Manual", to: "Automatic" },
      ],
      toolsDetail: "Asana, Google Drive, Gmail, Zapier, SMS integration",
    },
    {
      id: "lead-enrichment",
      category: "Lead Management",
      title: "Automated lead enrichment + AI scoring",
      benefit: "SALES-READY LEADS",
      workflowTag: "SPEED TO LEAD",
      summary:
        "Form submission triggers Apollo.io to pull company data. Zapier sorts leads into hot or cold, logs them in Google Sheets, and alerts the sales team in Slack. AI summarizes everything so reps know exactly who they're calling.",
      tools: ["Zapier", "Tally", "Apollo.io", "Google Sheets", "Slack", "AI by Zapier"],
      thumbnail: "/work/lead-enrichment-thumbnail.png",
      fullImage: "/work/lead-enrichment-full.png",
      flow: [
        "Prospect fills out Tally form with basic info",
        "Zapier triggers Apollo.io webhook to pull company data (size, revenue, industry)",
        "Zapier Paths sort leads into High Priority vs Low Priority",
        "High-value leads logged in Google Sheets",
        "Slack notification fires to sales team with lead summary",
        "AI by Zapier analyzes all data and writes a 2-sentence brief for the rep",
      ],
      toolsDetail: "Zapier, Tally, Apollo.io, Google Sheets, Slack, AI by Zapier",
    },
    {
      id: "content-repurposing",
      category: "Content Automation",
      title: "AI content repurposing engine",
      benefit: "1 VIDEO → 10 ASSETS",
      summary:
        "Drop a video in Google Drive and the system transcribes it, writes 2 blog posts and social captions, scans for brand-risk words, then posts to Facebook and LinkedIn. One video becomes 10 content pieces without lifting a finger.",
      tools: ["Zapier", "Google Drive", "AI (Whisper)", "Facebook", "LinkedIn"],
      thumbnail: "/work/content-repurposing-thumbnail.png",
      fullImage: "/work/content-repurposing-full.png",
      flow: [
        "Video uploaded to Google Drive folder",
        "AI (Whisper) transcribes audio to text instantly",
        "AI generates 2 blog posts and social captions from transcript",
        "\"Brand Guard\" scans content for reputation-risk keywords (refund, lawsuit, scandal)",
        "If flagged words found, workflow pauses for manual review",
        "Clean content routed via Zapier Paths to Facebook and LinkedIn for posting",
      ],
      flowNote:
        "Brand safety built in — A custom filter checks every piece of AI-generated content before it goes live. If risky language is detected, the system stops and alerts the team instead of auto-posting potentially damaging content.",
      toolsDetail: "Zapier, Google Drive, AI (Whisper), AI content generation, Facebook, LinkedIn",
    },
    {
      id: "gmail-sort",
      category: "Document Processing",
      title: "Auto-sort Gmail attachments to Drive",
      benefit: "ZERO MANUAL FILING",
      summary:
        "Watches Gmail for attachments, downloads them, uses Gemini to read the content and generate a smart filename, renames the file, uploads to the right Google Drive folder, and logs everything in Google Sheets. No one touches the files.",
      tools: ["Make", "Gmail", "Gemini", "Google Drive", "Google Sheets"],
      thumbnail: "/work/gmail-sort-thumbnail.png",
      fullImage: "/work/gmail-sort-full.png",
      flow: [
        "Gmail monitor watches for new emails with attachments",
        "Make downloads all attachments (PDFs, DOCX, XLSX, CSV)",
        "Gemini (via OpenAI API) analyzes file content",
        "AI generates a short, descriptive filename based on what's inside",
        "File renamed automatically",
        "Uploaded to specific Google Drive folder",
        "Results logged in Google Sheets (timestamp, original name, new name, file type)",
        "Optional summary email sent after each file is processed",
      ],
      flowNote:
        "Smart naming — Instead of \"invoice_final_v3.pdf\", files get renamed to something like \"2024_Q3_Acme_Corp_Invoice.pdf\" based on the actual content. Makes searching and organizing instant.",
      toolsDetail: "Make, Gmail, Gemini, Google Drive, Google Sheets",
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
