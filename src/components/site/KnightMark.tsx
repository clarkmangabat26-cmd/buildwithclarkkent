import type { SVGProps } from "react";

/**
 * KnightMark — bespoke architectural chess-knight glyph.
 * Pure SVG, themed via props so we can reuse it both inside the
 * intro loader (large, with blue accents on eye + mane) and as the
 * compact site logo in the header.
 */
interface KnightMarkProps extends SVGProps<SVGSVGElement> {
  /** Outline + base color */
  outline?: string;
  /** Body fill */
  fill?: string;
  /** Accent color used for the eye + mane stripes */
  accent?: string;
  /** Stroke width for the outline */
  strokeWidth?: number;
}

const KnightMark = ({
  outline = "#000000",
  fill = "#FFFFFF",
  accent = "#007BFF",
  strokeWidth = 4,
  ...rest
}: KnightMarkProps) => {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
    >
      {/* Base / pedestal */}
      <rect
        x="14"
        y="100"
        width="72"
        height="14"
        fill={outline}
        stroke={outline}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
      />
      <rect
        x="22"
        y="92"
        width="56"
        height="10"
        fill={fill}
        stroke={outline}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
      />

      {/* Knight head silhouette — architectural, angular */}
      <path
        d="
          M 30 92
          L 30 70
          L 22 58
          L 30 42
          L 38 30
          L 50 18
          L 64 14
          L 78 22
          L 82 36
          L 80 50
          L 70 56
          L 60 56
          L 56 64
          L 64 72
          L 72 78
          L 72 92
          Z
        "
        fill={fill}
        stroke={outline}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
        strokeLinecap="square"
      />

      {/* Mane — three blue accent stripes along the back of the head */}
      <path
        d="M 64 16 L 80 24"
        stroke={accent}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <path
        d="M 70 26 L 82 34"
        stroke={accent}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <path
        d="M 72 38 L 80 46"
        stroke={accent}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />

      {/* Snout / nostril notch */}
      <path
        d="M 30 50 L 38 50"
        stroke={outline}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />

      {/* Eye — blue accent square */}
      <rect x="46" y="36" width="6" height="6" fill={accent} />
    </svg>
  );
};

export default KnightMark;