import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChartTrendingUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M10.8242 3H10.0742V4.5H10.8242H13.4382L8.49989 9.43829L6.207 7.14629C5.81645 6.75589 5.18339 6.75595 4.79292 7.14642L0.719662 11.2197L0.189331 11.75L1.24999 12.8107L1.78032 12.2803L5.50009 8.56057L7.79298 10.8526C8.18353 11.243 8.81659 11.2429 9.20706 10.8524L14.4988 5.56066V8.17462V8.92462H15.9988V8.17462V4C15.9988 3.44772 15.5511 3 14.9988 3H10.8242Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChartTrendingUp.displayName = 'ChartTrendingUp';

export default ChartTrendingUp;
