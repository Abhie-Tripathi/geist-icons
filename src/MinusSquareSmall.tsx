import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const MinusSquareSmall = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M5 4.25H11C11.4142 4.25 11.75 4.58579 11.75 5V11C11.75 11.4142 11.4142 11.75 11 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11V5C4.25 4.58579 4.58579 4.25 5 4.25ZM3 5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11C13 12.1046 12.1046 13 11 13H5C3.89543 13 3 12.1046 3 11V5ZM6.25 7.375H5.625V8.625H6.25H9.75H10.375V7.375H9.75H6.25Z" fill="currentColor"></path>
      </svg>
    );
  }
);

MinusSquareSmall.displayName = 'MinusSquareSmall';

export default MinusSquareSmall;
