const tools = ["n8n", "Make", "Zapier", "GoHighLevel", "OpenAI", "Airtable", "Supabase", "Slack"];

const Stack = () => {
  return (
    <section id="solutions" className="border-b-2 border-ink bg-ink text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-14">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            / The Stack
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            005
          </span>
        </div>
        <div className="flex gap-12 md:gap-20 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="font-black tracking-tightest text-4xl md:text-7xl">
              {t}
              <span className="text-primary">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;