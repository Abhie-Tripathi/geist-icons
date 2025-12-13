import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const TabletDevice = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.75 0C1.7835 0 1 0.783501 1 1.75V14.25C1 15.2165 1.7835 16 2.75 16H13.25C14.2165 16 15 15.2165 15 14.25V1.75C15 0.783502 14.2165 0 13.25 0H2.75ZM2.5 1.75C2.5 1.61193 2.61193 1.5 2.75 1.5H13.25C13.3881 1.5 13.5 1.61193 13.5 1.75V14.25C13.5 14.3881 13.3881 14.5 13.25 14.5H2.75C2.61193 14.5 2.5 14.3881 2.5 14.25V1.75ZM4.75 4.75C5.30228 4.75 5.75 4.30228 5.75 3.75C5.75 3.19772 5.30228 2.75 4.75 2.75C4.19772 2.75 3.75 3.19772 3.75 3.75C3.75 4.30228 4.19772 4.75 4.75 4.75Z" fill="currentColor"></path>
      </svg>
    );
  }
);

TabletDevice.displayName = 'TabletDevice';

export default TabletDevice;
