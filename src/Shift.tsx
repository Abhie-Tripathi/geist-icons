import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Shift = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0.189331L8.53033 0.719661L14.6036 6.79288C15.2335 7.42285 14.7874 8.49999 13.8964 8.49999H11V15.25V16H10.25H5.75H5V15.25V8.49999H2.10355C1.21265 8.49999 0.766481 7.42285 1.39645 6.79288L7.46967 0.719661L8 0.189331ZM3.31066 6.99999H5.75H6.5V7.74999V14.5H9.5V7.74999V6.99999H10.25H12.6893L8 2.31065L3.31066 6.99999Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Shift.displayName = 'Shift';

export default Shift;
