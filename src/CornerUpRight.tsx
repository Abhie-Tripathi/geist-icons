import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CornerUpRight = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5303 10.0303L11 10.5607L9.93934 9.50001L10.4697 8.96968L12.4393 7.00001H2.75C2.61193 7.00001 2.5 7.11193 2.5 7.25001V13.5V14.25H1V13.5V7.25001C1 6.28351 1.7835 5.50001 2.75 5.50001H12.4393L10.4697 3.53034L9.93934 3.00001L11 1.93935L11.5303 2.46968L14.7803 5.71968C15.0732 6.01257 15.0732 6.48744 14.7803 6.78034L11.5303 10.0303Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CornerUpRight.displayName = 'CornerUpRight';

export default CornerUpRight;
