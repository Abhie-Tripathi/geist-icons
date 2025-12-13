import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ArrowUpLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M1.99939 10.25V11H3.49939V10.25V4.56008L12.7191 13.7798L13.2495 14.3101L14.3101 13.2494L13.7798 12.7191L4.56121 3.50058H10.25H11V2.00058H10.25H2.99939C2.4471 2.00058 1.99939 2.4483 1.99939 3.00058V10.25Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
