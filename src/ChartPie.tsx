import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChartPie = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M14.4572 8.75C14.0853 11.9866 11.3362 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.66381 4.01342 1.91465 7.25 1.5428V7.75C7.25 8.30229 7.69772 8.75 8.25 8.75H14.4572ZM14.4572 7.25H8.75V1.5428C11.7405 1.88638 14.1136 4.2595 14.4572 7.25ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChartPie.displayName = 'ChartPie';

export default ChartPie;
