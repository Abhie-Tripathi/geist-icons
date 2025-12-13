import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Inspect = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M4.75 13.5H2.5L2.5 2.5L13.5 2.5V4.75V5.5H15V4.75V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44771 1 2V14C1 14.5523 1.44771 15 2 15H4.75H5.5V13.5H4.75ZM7.5 13.4252V12.6752V8.50054C7.5 7.94825 7.94771 7.50054 8.5 7.50054H12.6746H13.4246V9.00054H12.6746H10.0606L15.0298 13.9697L15.5601 14.5L14.4995 15.5607L13.9691 15.0303L9 10.0612V12.6752V13.4252H7.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Inspect.displayName = 'Inspect';

export default Inspect;
