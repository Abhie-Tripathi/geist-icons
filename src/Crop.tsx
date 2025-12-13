import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Crop = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M5 0.75V0H3.5V0.75V3.5H0.75H0V5H0.75H3.5V11.5C3.5 12.0523 3.94771 12.5 4.5 12.5H11V15.25V16H12.5V15.25V12.5H15.25H16V11H15.25H12.5V4.5C12.5 3.94772 12.0523 3.5 11.5 3.5H5V0.75ZM5 5V11H11V5H5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Crop.displayName = 'Crop';

export default Crop;
