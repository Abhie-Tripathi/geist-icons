import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ShieldGlobe = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M11.25 4.25V3.5C9.35033 2.86678 6 2.58921 6 0C6 2.58921 2.64967 2.86678 0.75 3.5V9.52717C0.75 11.2011 1.67915 12.7367 3.16197 13.5134L4.5 14.2143" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" fill="transparent"></path>
                                <circle cx="11.5" cy="11.5" r="3.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="transparent"></circle>
                                <path d="M8 11.5H15.25" stroke="currentColor" strokeLinejoin="bevel"></path>
                                <path d="M10.75 15V15C10.0964 12.7124 10.0964 10.2876 10.75 8V8" stroke="currentColor" strokeLinejoin="bevel"></path>
                                <path d="M12.25 15V15C12.9036 12.7124 12.9036 10.2876 12.25 8V8" stroke="currentColor" strokeLinejoin="bevel"></path>
      </svg>
    );
  }
);

ShieldGlobe.displayName = 'ShieldGlobe';

export default ShieldGlobe;
