import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronUpSmall = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M3.93933 9.24999L4.46966 8.71966L7.29288 5.89644C7.68341 5.50592 8.31657 5.50592 8.7071 5.89644L11.5303 8.71966L12.0607 9.24999L11 10.3107L10.4697 9.78032L7.99999 7.31065L5.53032 9.78032L4.99999 10.3107L3.93933 9.24999Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronUpSmall.displayName = 'ChevronUpSmall';

export default ChevronUpSmall;
