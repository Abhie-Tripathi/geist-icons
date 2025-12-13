import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronCircleLeftFill = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.46967 11.2803L9 11.8107L10.0607 10.75L9.53033 10.2197L7.31066 8L9.53033 5.78033L10.0607 5.25L9 4.18934L8.46967 4.71967L5.89645 7.29289C5.50592 7.68342 5.50592 8.31658 5.89645 8.70711L8.46967 11.2803Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronCircleLeftFill.displayName = 'ChevronCircleLeftFill';

export default ChevronCircleLeftFill;
