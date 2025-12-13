import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronDoubleUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8.7071 3.14644C8.31657 2.75591 7.68341 2.75592 7.29288 3.14644L3.46966 6.96966L2.93933 7.49999L3.99999 8.56065L4.53032 8.03032L7.99999 4.56065L11.4697 8.03032L12 8.56065L13.0607 7.49999L12.5303 6.96966L8.7071 3.14644ZM8.7071 8.14644C8.31657 7.75592 7.68341 7.75592 7.29288 8.14644L3.46966 11.9697L2.93933 12.5L3.99999 13.5607L4.53032 13.0303L7.99999 9.56065L11.4697 13.0303L12 13.5607L13.0607 12.5L12.5303 11.9697L8.7071 8.14644Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronDoubleUp.displayName = 'ChevronDoubleUp';

export default ChevronDoubleUp;
