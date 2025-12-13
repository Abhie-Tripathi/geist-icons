import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChartTrendingDown = forwardRef<SVGSVGElement, IconProps>(
  ({ color, size = 20, title, className, style, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        // The default SVG attributes (fill, stroke, strokeWidth, etc.) 
        // are REMOVED here so the raw SVG paths determine the appearance.
        className={className}
        style={color ? { color, ...style } : style} // Apply color via CSS property for inheritance if set
        {...props}
      >
        {/* If the original SVG has complex colors/fills, we want them here. */}
        {title && <title>{title}</title>}
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4382 11.5H10.8242H10.0742V13H10.8242H14.9988C15.5511 13 15.9988 12.5523 15.9988 12V7.82537V7.07537H14.4988V7.82537V10.4393L9.20706 5.14755C8.81659 4.75708 8.18353 4.75702 7.79298 5.14742L5.50009 7.43942L1.78032 3.71966L1.24999 3.18933L0.189331 4.24999L0.719662 4.78032L4.79292 8.85357C5.18339 9.24404 5.81645 9.2441 6.207 8.8537L8.49989 6.5617L13.4382 11.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChartTrendingDown.displayName = 'ChartTrendingDown';

export default ChartTrendingDown;
