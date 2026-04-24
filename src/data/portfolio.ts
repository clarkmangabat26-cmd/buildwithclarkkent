// ============================================================
// PORTFOLIO DATA — single source of truth re-exported here.
// Edit src/content/site.ts to change About, CTA, Projects copy.
// This module exists so consumers can import from one canonical
// path: `@/data/portfolio`.
// ============================================================

export { site as portfolio, site, CTA_HREF, CTA_LABEL, CTA_LABEL_SHORT } from "@/content/site";
export type { Project } from "@/content/site";