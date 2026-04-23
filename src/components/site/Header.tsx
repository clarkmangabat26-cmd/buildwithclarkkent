import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, CTA_HREF, CTA_LABEL_SHORT } from "@/content/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
];

const smoothTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <a
          href="#top"
          onClick={(e) => smoothTo(e, "#top")}
          className="flex min-w-0 max-w-[calc(100%-4.5rem)] items-center gap-3 pr-4 font-black tracking-tightest text-base md:text-lg lg:max-w-none lg:text-xl"
        >
          <span className="inline-block h-3 w-3 shrink-0 bg-primary" aria-hidden />
          <span className="truncate">{site.brandMark}</span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => smoothTo(e, l.href)}
              className="text-sm font-semibold uppercase tracking-[0.15em] hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CTA_HREF}
            onClick={(e) => smoothTo(e, CTA_HREF)}
            className="inline-flex items-center justify-center h-11 px-6 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform"
          >
            Book a Discovery Call →
          </a>
        </nav>
        <div className="lg:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t-2 border-ink bg-background">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  smoothTo(e, l.href);
                }}
                className="px-6 py-4 border-b-2 border-ink font-semibold uppercase tracking-[0.15em] text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CTA_HREF}
              onClick={(e) => {
                setOpen(false);
                smoothTo(e, CTA_HREF);
              }}
              className="m-6 inline-flex items-center justify-center h-12 px-6 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink"
            >
              Book a Discovery Call →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;