import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronDoubleDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M4.53032 2.96966L3.99999 2.43933L2.93933 3.49999L3.46966 4.03032L7.29289 7.85355C7.68341 8.24407 8.31658 8.24407 8.7071 7.85354L12.5303 4.03032L13.0607 3.49999L12 2.43933L11.4697 2.96966L7.99999 6.43933L4.53032 2.96966ZM4.53032 7.96966L3.99999 7.43933L2.93933 8.49999L3.46966 9.03032L7.29289 12.8535C7.68341 13.2441 8.31658 13.2441 8.7071 12.8535L12.5303 9.03032L13.0607 8.49999L12 7.43933L11.4697 7.96966L7.99999 11.4393L4.53032 7.96966Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronDoubleDown.displayName = 'ChevronDoubleDown';

export default ChevronDoubleDown;
