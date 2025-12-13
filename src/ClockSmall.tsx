import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ClockSmall = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M13.0138 8C13.0138 10.4853 10.999 12.5 8.51376 12.5C6.02848 12.5 4.01376 10.4853 4.01376 8C4.01376 5.51472 6.02848 3.5 8.51376 3.5C10.999 3.5 13.0138 5.51472 13.0138 8ZM14.5138 8C14.5138 11.3137 11.8275 14 8.51376 14C5.20005 14 2.51376 11.3137 2.51376 8C2.51376 4.68629 5.20005 2 8.51376 2C11.8275 2 14.5138 4.68629 14.5138 8ZM9.26376 5.75V5H7.76376V5.75V8V8.75H9.26376V8V5.75Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ClockSmall.displayName = 'ClockSmall';

export default ClockSmall;
