import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Rss = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M1 2.5C7.90356 2.5 13.5 8.09644 13.5 15H15C15 7.26801 8.73199 1 1 1V2.5ZM8 15C8 11.134 4.86599 8 1 8V6.5C5.69442 6.5 9.5 10.3056 9.5 15H8ZM2.5 15C2.5 14.1716 1.82843 13.5 1 13.5V12C2.65685 12 4 13.3431 4 15H2.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Rss.displayName = 'Rss';

export default Rss;
