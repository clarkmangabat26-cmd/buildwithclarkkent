import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found — Clark Kent Mangabat";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        const [a, v] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(a, v);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute(attr) ?? "";
      el.setAttribute(attr, value);
      return () => {
        if (created) el?.remove();
        else el?.setAttribute(attr, prev);
      };
    };

    const url = `https://buildwithclarkkent.lovable.app${location.pathname}`;
    const desc = "The page you're looking for doesn't exist. Return to Clark Kent Mangabat's homepage.";

    const restores = [
      setMeta('meta[name="description"]', "content", desc),
      setMeta('meta[property="og:title"]', "content", "Page Not Found — Clark Kent Mangabat"),
      setMeta('meta[property="og:description"]', "content", desc),
      setMeta('meta[property="og:url"]', "content", url),
      setMeta('meta[name="twitter:title"]', "content", "Page Not Found — Clark Kent Mangabat"),
      setMeta('meta[name="twitter:description"]', "content", desc),
    ];

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    canonical?.setAttribute("href", url);

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
      if (canonical && prevCanonical !== null) canonical.setAttribute("href", prevCanonical);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
