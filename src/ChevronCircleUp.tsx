import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronCircleUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5898 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5898 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -5.4282e-07 8 -3.49691e-07C3.58172 -1.56562e-07 -5.4282e-07 3.58172 -3.49691e-07 8C-1.56562e-07 12.4183 3.58172 16 8 16ZM11.2803 8.46967L8.70004 5.88938C8.31342 5.50276 7.68658 5.50276 7.29996 5.88938L4.71967 8.46967L4.18934 9L5.25 10.0607L5.78033 9.53033L8 7.31066L10.2197 9.53033L10.75 10.0607L11.8107 9L11.2803 8.46967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronCircleUp.displayName = 'ChevronCircleUp';

export default ChevronCircleUp;
