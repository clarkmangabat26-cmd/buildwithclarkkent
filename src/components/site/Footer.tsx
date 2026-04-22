import { site } from "@/content/site";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-0 md:items-center md:justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-block w-3 h-3 bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © {site.footer.year} {site.name} — {site.footer.tagline}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href={`mailto:${site.email}`} className="hover:text-primary">
            {site.email}
          </a>
          <a href={site.social.linkedin} className="hover:text-primary">
            LinkedIn
          </a>
          <a href={site.social.twitter} className="hover:text-primary">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;