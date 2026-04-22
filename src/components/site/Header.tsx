import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-black tracking-tightest text-lg md:text-xl">
          <span className="inline-block w-3 h-3 bg-primary" aria-hidden />
          AUTOMATE/OPS
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-[0.15em] hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#audit"
            className="inline-flex items-center justify-center h-11 px-6 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform"
          >
            Book a Call →
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#audit"
            className="inline-flex items-center justify-center h-11 px-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.1em] text-xs border-2 border-ink"
          >
            Book a Call
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="h-11 w-11 border-2 border-ink flex items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-ink bg-background">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-5 py-4 border-b-2 border-ink font-semibold uppercase tracking-[0.15em] text-sm"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;