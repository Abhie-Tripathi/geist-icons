import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CornerRightDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.75 2.75H2V1.25H2.75H9C9.9665 1.25 10.75 2.0335 10.75 3V12.6893L12.7197 10.7197L13.25 10.1893L14.3107 11.25L13.7803 11.7803L10.5303 15.0303C10.2374 15.3232 9.76256 15.3232 9.46967 15.0303L6.21967 11.7803L5.68934 11.25L6.75 10.1893L7.28033 10.7197L9.25 12.6893V3C9.25 2.86193 9.13807 2.75 9 2.75H2.75Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CornerRightDown.displayName = 'CornerRightDown';

export default CornerRightDown;
