import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ArrowDownLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M4.5595 12.5H10.25H11V14H10.25H3C2.44772 14 2 13.5523 2 13V5.75001V5.00001H3.5V5.75001V11.4382L12.7185 2.21968L13.2488 1.68935L14.3095 2.75001L13.7792 3.28034L4.5595 12.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;
