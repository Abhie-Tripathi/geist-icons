import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Speaker = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M6 10.5L6.67082 10.6584L12.5 13.5729V2.42705L6.67082 5.34164L6 5.5H3.5V10.5H6ZM12.5 0.75L6 4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H6L12.5 15.25L14 16V14.3229V1.67705V0L12.5 0.75Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Speaker.displayName = 'Speaker';

export default Speaker;
