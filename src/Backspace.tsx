import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Backspace = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.75V0H1.5V0.75V15.25V16H0V15.25V0.75ZM8.46967 3.21967L9 2.68934L10.0607 3.75L9.53033 4.28033L6.56066 7.25H15.25H16V8.75H15.25H6.56066L9.53033 11.7197L10.0607 12.25L9 13.3107L8.46967 12.7803L4.21967 8.53033C3.92678 8.23744 3.92678 7.76256 4.21967 7.46967L8.46967 3.21967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Backspace.displayName = 'Backspace';

export default Backspace;
