import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoAzureDevops = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M16 2.99657V12.5L12 16L6 14V15.9806L2 11.5L12 12.5V3.5L16 2.99657ZM12 3.5L7 0V2.28686L1.5 4L0 5.56457V10.5L2 11.5V5.56457L12 3.5Z" fill="#0078D4"></path>
      </svg>
    );
  }
);

LogoAzureDevops.displayName = 'LogoAzureDevops';

export default LogoAzureDevops;
