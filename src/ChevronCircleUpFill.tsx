import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronCircleUpFill = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.71967 8.46967L4.18934 9L5.25 10.0607L5.78033 9.53033L8 7.31066L10.2197 9.53033L10.75 10.0607L11.8107 9L11.2803 8.46967L8.70711 5.89645C8.31658 5.50592 7.68342 5.50592 7.29289 5.89645L4.71967 8.46967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronCircleUpFill.displayName = 'ChevronCircleUpFill';

export default ChevronCircleUpFill;
