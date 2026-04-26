import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, CTA_HREF } from "@/content/site";
import knightLogo from "@/assets/knight-logo.png";

const links = [
  { href: "#work", label: "Work" },
  { href: "#solutions", label: "Tools" },
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 h-20 md:h-24">
        <a
          href="#top"
          onClick={(e) => smoothTo(e, "#top")}
          className="flex min-w-0 max-w-[calc(100%-4.5rem)] items-center gap-2 pr-2 font-black uppercase leading-none tracking-[0.04em] text-[13px] sm:text-base md:text-2xl lg:max-w-none lg:gap-4 lg:pr-4 lg:tracking-[0.06em] lg:text-[34px]"
        >
          <img
            src={knightLogo}
            alt=""
            aria-hidden
            className="block h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            draggable={false}
          />
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
            Contact me →
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
              Contact me →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;