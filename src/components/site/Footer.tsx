import { site } from "@/content/site";

const EMAIL = "clarkmangabat26@gmail.com";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-0 md:items-center md:justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-block w-3 h-3 bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © {site.footer.year} {site.brandMark} — {site.footer.tagline}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href={`mailto:${EMAIL}`} className="hover:text-primary">
            {EMAIL}
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={site.social.onlineJobs}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            OnlineJobs.ph
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;