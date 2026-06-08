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
  workflowTags?: string[]; // multiple stacked tags (overrides workflowTag display when present)
  hasVideoPlaceholder?: boolean; // shows a "coming soon" video embed placeholder
  videoPlaceholderText?: string; // caption under the play button
  loomEmbedId?: string; // Loom share id; when set, an embedded Loom iframe replaces the placeholder
  loomShareUrl?: string; // Clickable Loom badge URL for grid cards


  // ---- Visuals ----
  thumbnail?: string; // 800x500 card image
  thumbnails?: string[]; // 2+ card images rendered as a split grid in the card thumbnail box
  fullImage?: string; // 1600x1000 case-study image
  gallery?: { src: string; alt: string }[]; // optional multi-image gallery for modal

  // ---- Grid card overrides ----
  outcome?: string; // one-line capability statement shown beneath the thumbnail on the grid card
  clientWork?: boolean; // when true, renders a small "Client Work" badge on the thumbnail
  gridThumbnail?: string; // 16:9 image URL rendered as the grid card thumbnail

  // ---- Modal / case study ----
  client?: string;
  problem?: string;
  solution?: string;
  flow?: string[];
  flowNote?: string;
  flowLabel?: string; // overrides the "How It Flows" label in the modal
  howItWorks?: { label: string; detail: string }[]; // labeled bullet list rendered in modal
  dataNote?: { label: string; body: string }; // standalone labeled paragraph rendered in modal
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
    headline: "Your business runs because you show up. That's the problem.",
    sub: "I build automation systems for service business founders who are still the ones holding everything together, so the operation keeps running whether you're there or not.",
    primaryCta: "SEE WHAT I'VE BUILT",
    primaryCtaTarget: "#work",
    secondaryCta: "CONTACT ME",
    secondaryCtaTarget: "#contact",
  },

  // ---------- About ----------
  about: {
    imageUrl: "/work/Untitled%20design%20(7).png",
    headline: "I build systems that run without me",
    bio: "I work with service founders who are still the ones every process routes back to. I take what lives in your head and turn it into documented, automated systems that run without you.\n\nI build for founders who are tired of being the only one who knows how everything works.",
    principles: [
      {
        n: "01",
        t: "What if it breaks after you hand it over?",
        d: "Every build ships with documentation and test logs. You know exactly what triggers what, where it can fail, and how to fix it. No black boxes. No dependency on me to keep it running.",
      },
      {
        n: "02",
        t: "Will it actually fit how my business works?",
        d: "I scope every system to your exact process before building anything. No templates dropped into your operation. If your workflow is unusual, that is not a problem. That is the brief.",
      },
      {
        n: "03",
        t: "I build. I do not consult.",
        d: "You tell me what is broken. I build the fix and hand it over documented and ready to run. No strategy decks, no retainer for advice.",
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
      "Vapi",
      "ElevenLabs",
      "Airtable",
      "Asana",
      "Notion",
      "Google Workspace",
      "Xero",
      "PayPal",
    ],
  },

  // ---------- Projects ----------
  // NOTE: Array order = display order. Build 1 is index 0. Insert new case studies at index 0.
  projects: [
    {
      id: "multi-source-lead-scraper",
      category: "Lead Generation",
      title: "This Scraper Hits Every Directory. Scored. One Webhook. Done in 3 Minutes.",
      outcome: "Multi-source scraping, scored and delivered automatically",
      benefit: "LEADS IN 3 MINUTES",
      gridThumbnail: "/work/Multi-Source%20Lead%20Scrper.png",
      thumbnail: "/work/Multi-Source%20Lead%20Scrper.png",
      summary:
        "An automation that scrapes multiple lead directories simultaneously, scores every lead against custom criteria, and delivers a ranked list to your inbox — all from a single webhook trigger.",
      tools: ["n8n", "Apify", "Apollo.io", "Google Sheets", "Gmail"],
      loomShareUrl: "https://www.loom.com/share/d1be23028f034e489c55c72c9243d091",
      problem:
        "Sourcing leads from multiple directories is time-consuming and inconsistent. Manual copying, scoring, and organizing takes hours. By the time the list is ready, the best leads have already been contacted by competitors.",
      solution:
        "Built a fully automated lead scraping pipeline that hits multiple directories at once, scores each lead using a custom rubric, and delivers a clean, ranked list to Gmail — all triggered by a single webhook and completed in under 3 minutes.",
      flow: [
        "Webhook triggers the n8n workflow on demand",
        "Apify actors scrape multiple lead directories in parallel",
        "Apollo.io enriches each lead with company and contact data",
        "Custom scoring rubric ranks leads by priority",
        "Results are written to Google Sheets for tracking",
        "Ranked lead list is delivered via Gmail to the sales team",
      ],
      impact: [
        { label: "Lead sourcing time", from: "Hours", to: "3 minutes" },
        { label: "Directories covered", from: "1", to: "Multiple" },
        { label: "Manual scoring", from: "Manual", to: "Automated" },
      ],
      toolsDetail: "n8n, Apify, Apollo.io, Google Sheets, Gmail",
    },
    {
      id: "ai-voice-receptionist",
      category: "AI Voice Automation",
      title: "This AI Answers the Phone, Books Appointments, and Never Calls In Sick",
      outcome: "Handles all four appointment actions end-to-end",
      benefit: "24/7 AVAILABILITY",
      workflowTag: "AI VOICE AGENT",
      loomEmbedId: "4640467f36f8481fa60a31f1eab74403",
      gridThumbnail: "/work/AI%20RECEPTIONIST%20THUMBNAIL.png",
      summary:
        "Amy answers the phone, books appointments, reschedules them, and handles cancellations. Everything syncs to Google Calendar automatically. No receptionist needed. It runs 24/7 on its own.",
      tools: ["Vapi", "n8n", "ElevenLabs", "Google Calendar", "Airtable"],
      thumbnail: "/work/AI%20RECEPTIONIST%20THUMBNAIL.png",
      fullImage: "/work/ai-receptionist-full.png",
      client: "Portfolio demonstration: built for Wellness Partners, a multi-specialty health clinic",
      problem:
        "Amy is a voice assistant powered by Vapi and ElevenLabs that answers calls on behalf of a health clinic. She can check open slots, book new appointments, reschedule existing ones, and process cancellations, all without a human receptionist in the loop.\n\nThe system handles errors gracefully: if a requested slot is no longer available, Amy offers alternatives in real time. Urgent or complex situations are escalated to clinic staff rather than handled by AI.",
      solution:
        "Four separate n8n workflows are triggered by Vapi tool calls. Each handles one part of the appointment lifecycle:\n\nGetSlots: Fetches available Google Calendar events, computes open 30-minute windows within business hours, returns formatted availability to Amy.\n\nBookSlots: Creates a new calendar event with patient details, includes timezone conversion and a friendly error response if the time is already taken.\n\nUpdateSlots: Finds the existing appointment by patient name and email, deletes it, and creates a new one at the rescheduled time.\n\nCancelSlots: Locates and removes the calendar event. Cancellation notes are passed back to the system for logging.\n\nAfter each call, a fifth workflow captures the full transcript, recording URL, call summary, cost, and patient details into Airtable, giving the clinic a complete call log without any manual entry.",
      flow: [
        "Timezone handling built in: Vapi passes times in UTC. A dedicated conversion step normalizes all times to America/Chicago (CST) before writing to Google Calendar, preventing double-booking across timezone mismatches.",
        "Error paths on every workflow: Each workflow has a dedicated error branch that returns a human-readable message to Amy rather than failing silently, so the caller always gets a clear response even when something goes wrong.",
        "Human escalation preserved: Amy is prompted to escalate urgent or clinical situations to a triage nurse rather than attempt to handle them. AI handles logistics; clinical judgment stays human.",
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
      title: "Hot Leads Get Called. Cold Leads Get Nurtured. No One Touches It.",
      outcome: "Scores and routes leads in under 60 seconds",
      benefit: "47 HOURS → 60 SECONDS",
      workflowTag: "SPEED TO LEAD",
      loomEmbedId: "4f4fc37aa3d94d14b625ba993f78064c",
      gridThumbnail: "/work/LEAD%20CRM%20SCORE%20PIPELINE%20THUMBNAIL.png",
      summary:
        "Leads get scored by AI and sent to the right sales rep automatically. Hot leads get contacted in under 60 seconds. No one touches the data. It all happens on its own.",
      tools: ["n8n", "GoHighLevel", "OpenAI", "Tally", "Slack"],
      thumbnail: "/work/LEAD%20CRM%20SCORE%20PIPELINE%20THUMBNAIL.png",
      fullImage: "/work/lead-router-full.png",
      gallery: [
        { src: "/work/lead-router-full.png", alt: "n8n workflow: lead scoring + routing" },
        { src: "/work/lead-router-ghl.png", alt: "GoHighLevel automation: tag-based branching" },
      ],
      client: "Prestige Auto Detail",
      problem:
        "Most service businesses lose leads because no one follows up fast enough. Average response time was 47 hours. By then the lead already booked with a competitor. Manual qualification took 15-20 minutes per lead, hot leads only got followed up 60% of the time, and coverage was business hours only.",
      solution:
        "Fully automated pipeline that captures inbound leads via Tally form, scores them using weighted AI rubric (vehicle type, service, budget, timeline, referral status), routes into GoHighLevel CRM by tier, and triggers immediate follow-up, all within 60 seconds of form submission, 24/7.",
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
      title: "Finance and Project Management Finally Talking to Each Other",
      outcome: "Transactions exported, formatted, and synced to Asana",
      benefit: "ZERO MANUAL ENTRY",
      gridThumbnail: "/work/MAKE%20XERO%20THUMBNAIL.png",
      summary:
        "Pulls transactions from Xero and turns them into Asana tasks. The accounting team doesn't type anything. The system does it all.",
      tools: ["Make", "Xero", "Asana", "CSV"],
      thumbnail: "/work/MAKE%20XERO%20THUMBNAIL.png",
      fullImage: "/work/xero-invoice-full.png",
      problem:
        "Finance and project teams worked in silos. Transactions lived in Xero while task tracking lived in Asana. Reconciling the two meant hours of manual exports, reformatting, and copy-paste, with errors creeping in at every step.",
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
      title: "A Status Change in Asana Triggers 29 Steps. Zero Manual Work.",
      outcome: "Full client lifecycle automated from one status field",
      benefit: "ZERO FORGOTTEN CLIENTS",
      gridThumbnail: "/work/ZAPIER%20ASANA%2029%20STEPS%20THUMBNAIL.png",
      summary:
        "When a client pays, the system sets up their folders, sends their welcome email, and schedules follow-ups. The team doesn't lift a finger.",
      tools: ["Asana", "Google Drive", "Gmail", "Zapier"],
      thumbnail: "/work/ZAPIER%20ASANA%2029%20STEPS%20THUMBNAIL.png",
      fullImage: "/work/asana-29step-full.png",
      problem:
        "Leads were slipping through the cracks. Files scattered across drives, follow-ups forgotten, and onboarding handled manually for every new client. The team had no consistent system for nurturing prospects or delivering post-sale guidance.",
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
      title: "Your Sales Rep Sees a Lead Brief Before They Even Pick Up the Phone",
      outcome: "Enriches, scores, and briefs leads automatically",
      benefit: "SALES-READY LEADS",
      workflowTag: "SPEED TO LEAD",
      gridThumbnail: "/work/ZAPIER%20LEAD%20ENRICHMENT%20THUMBNAIL.png",
      summary:
        "Form submission triggers Apollo.io to pull company data. Zapier sorts leads into hot or cold, logs them in Google Sheets, and alerts the sales team in Slack. AI summarizes everything so reps know exactly who they're calling.",
      tools: ["Zapier", "Tally", "Apollo.io", "Google Sheets", "Slack", "AI by Zapier"],
      thumbnail: "/work/ZAPIER%20LEAD%20ENRICHMENT%20THUMBNAIL.png",
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
      title: "One Video Upload. Two Blog Posts. Social Captions. Brand-Safe. Auto-Posted.",
      outcome: "Full content repurposing pipeline with brand safety filter",
      benefit: "1 VIDEO → 10 ASSETS",
      gridThumbnail: "/work/ZAPIER%20CONTENT%20ENGINE%20THUMBNAIL.png",
      summary:
        "Drop a video in Google Drive and the system transcribes it, writes 2 blog posts and social captions, scans for brand-risk words, then posts to Facebook and LinkedIn. One video becomes 10 content pieces without lifting a finger.",
      tools: ["Zapier", "Google Drive", "AI (Whisper)", "Facebook", "LinkedIn"],
      thumbnail: "/work/ZAPIER%20CONTENT%20ENGINE%20THUMBNAIL.png",
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
        "Brand safety built in: A custom filter checks every piece of AI-generated content before it goes live. If risky language is detected, the system stops and alerts the team instead of auto-posting potentially damaging content.",
      toolsDetail: "Zapier, Google Drive, AI (Whisper), AI content generation, Facebook, LinkedIn",
    },
    {
      id: "gmail-sort",
      category: "Document Processing",
      title: "AI Reads Every Attachment and Files It Better Than You Would",
      outcome: "Auto-renames and organizes files by content",
      benefit: "ZERO MANUAL FILING",
      gridThumbnail: "/work/MAKE%20GMAIL%20ATTACHMENTS%20THUMBNAIL.png",
      summary:
        "Watches Gmail for attachments, downloads them, uses Gemini to read the content and generate a smart filename, renames the file, uploads to the right Google Drive folder, and logs everything in Google Sheets. No one touches the files.",
      tools: ["Make", "Gmail", "Gemini", "Google Drive", "Google Sheets"],
      thumbnail: "/work/MAKE%20GMAIL%20ATTACHMENTS%20THUMBNAIL.png",
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
        "Smart naming: Instead of \"invoice_final_v3.pdf\", files get renamed to something like \"2024_Q3_Acme_Corp_Invoice.pdf\" based on the actual content. Makes searching and organizing instant.",
      toolsDetail: "Make, Gmail, Gemini, Google Drive, Google Sheets",
    },
  ] as Project[],

  // ---------- Contact ----------
  contactSection: {
    availabilityNote:
      "Available for hourly or project-based work. Currently taking on 2-3 new clients per month.",
    whatsapp: {
      eyebrow: "QUICK RESPONSE",
      headline: "Need a workflow built?",
      subtext:
        "Message me on WhatsApp for the fastest response. I typically reply within 2-4 hours during business hours (PHT).",
      number: "+63 960 289 4958",
      note: "Save this number and send me a message describing what you need automated.",
    },
    calendly: {
      eyebrow: "PREFER A SCHEDULED CALL?",
      headline: "Book a 30-minute discovery call",
      url: "https://calendly.com/clarkmangabat26/30min-discovery-call-with-clark",
    },
    email: {
      label: "Or email me at:",
      address: "clarkmangabat26@gmail.com",
    },
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
