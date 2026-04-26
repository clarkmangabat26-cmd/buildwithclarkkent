import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** Wrapper className (controls aspect/box). Image itself fills it. */
  wrapperClassName?: string;
  /** Optional skeleton tone. Defaults to muted. */
  skeletonClassName?: string;
};

/**
 * Image with a subtle pulsing skeleton until the asset loads or errors.
 * Always lazy-loads + async-decodes for mobile performance.
 * `alt` is required by the underlying img — pass a descriptive value.
 */
const SmartImage = ({
  wrapperClassName,
  skeletonClassName,
  className,
  onLoad,
  onError,
  alt = "",
  loading = "lazy",
  decoding = "async",
  ...rest
}: Props) => {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className={cn("relative w-full h-full", wrapperClassName)}>
      {state === "loading" && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 animate-pulse bg-secondary",
            skeletonClassName,
          )}
        />
      )}
      <img
        {...rest}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={(e) => {
          setState("loaded");
          onLoad?.(e);
        }}
        onError={(e) => {
          setState("error");
          onError?.(e);
        }}
        className={cn(
          "block w-full h-full transition-opacity duration-300",
          state === "loaded" ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
};

export default SmartImage;