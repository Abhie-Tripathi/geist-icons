import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Hook = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2.75C3.5 2.05964 4.05964 1.5 4.75 1.5C5.44036 1.5 6 2.05964 6 2.75C6 3.44036 5.44036 4 4.75 4C4.05964 4 3.5 3.44036 3.5 2.75ZM4.75 0C3.23122 0 2 1.23122 2 2.75C2 4.00878 2.84575 5.07002 4 5.39648V11.25C4 13.8734 6.12665 16 8.75 16H9.25C11.8734 16 14 13.8734 14 11.25V4.25V2.43934L12.7197 3.71967L10.4697 5.96967L9.93934 6.5L11 7.56066L11.5303 7.03033L12.5 6.06066V11.25C12.5 13.0449 11.0449 14.5 9.25 14.5H8.75C6.95507 14.5 5.5 13.0449 5.5 11.25V5.39648C6.65425 5.07002 7.5 4.00878 7.5 2.75C7.5 1.23122 6.26878 0 4.75 0Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Hook.displayName = 'Hook';

export default Hook;
