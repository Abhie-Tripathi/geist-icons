import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CornerLeftDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M13.25 2.75H14V1.25H13.25H6.99999C6.03349 1.25 5.24999 2.0335 5.24999 3V12.6893L3.28032 10.7197L2.74999 10.1893L1.68933 11.25L2.21966 11.7803L5.46966 15.0303C5.76255 15.3232 6.23743 15.3232 6.53032 15.0303L9.78032 11.7803L10.3107 11.25L9.24999 10.1893L8.71966 10.7197L6.74999 12.6893V3C6.74999 2.86193 6.86192 2.75 6.99999 2.75H13.25Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CornerLeftDown.displayName = 'CornerLeftDown';

export default CornerLeftDown;
