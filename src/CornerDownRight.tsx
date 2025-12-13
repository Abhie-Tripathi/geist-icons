import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CornerDownRight = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 3V2.25H1V3V9.25C1 10.2165 1.7835 11 2.75 11H12.4393L10.4697 12.9697L9.93934 13.5L11 14.5607L11.5303 14.0303L14.7803 10.7803C15.0732 10.4874 15.0732 10.0126 14.7803 9.71967L11.5303 6.46967L11 5.93934L9.93934 7L10.4697 7.53033L12.4393 9.5H2.75C2.61193 9.5 2.5 9.38807 2.5 9.25V3Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CornerDownRight.displayName = 'CornerDownRight';

export default CornerDownRight;
