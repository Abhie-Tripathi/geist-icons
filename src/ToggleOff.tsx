import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ToggleOff = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8.57072 4.5H11C12.933 4.5 14.5 6.067 14.5 8C14.5 9.933 12.933 11.5 11 11.5H8.57072C9.45484 10.5981 10 9.36273 10 8C10 6.63727 9.45484 5.40188 8.57072 4.5ZM5 4.5C3.067 4.5 1.5 6.067 1.5 8C1.5 9.933 3.067 11.5 5 11.5C6.933 11.5 8.5 9.933 8.5 8C8.5 6.067 6.933 4.5 5 4.5ZM0 8C0 5.23858 2.23858 3 5 3H11C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13H5C2.23858 13 0 10.7614 0 8Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ToggleOff.displayName = 'ToggleOff';

export default ToggleOff;
