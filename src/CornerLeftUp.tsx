import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CornerLeftUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M9.78032 4.71967L10.3107 5.25L9.24999 6.31066L8.71966 5.78033L6.74999 3.81066V13.5C6.74999 13.6381 6.86192 13.75 6.99999 13.75H13.25H14V15.25H13.25H6.99999C6.03349 15.25 5.24999 14.4665 5.24999 13.5V3.81066L3.28032 5.78033L2.74999 6.31066L1.68933 5.25L2.21966 4.71967L5.46966 1.46967C5.76255 1.17678 6.23743 1.17678 6.53032 1.46967L9.78032 4.71967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CornerLeftUp.displayName = 'CornerLeftUp';

export default CornerLeftUp;
