const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-0 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-primary" />
          <span className="font-black tracking-tightest">AUTOMATE/OPS</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href="mailto:hello@automate-ops.co" className="hover:text-primary">hello@automate-ops.co</a>
          <a href="#" className="hover:text-primary">LinkedIn</a>
          <a href="#" className="hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;