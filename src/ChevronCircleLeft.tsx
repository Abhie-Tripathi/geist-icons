import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ChevronCircleLeft = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5898 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5ZM16 8C16 3.58172 12.4183 -3.13124e-07 8 -6.99382e-07C3.58172 -1.08564e-06 1.08564e-06 3.58172 6.99382e-07 8C3.13124e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM8.46967 4.71967L5.88938 7.29996C5.50276 7.68658 5.50276 8.31342 5.88938 8.70004L8.46967 11.2803L9 11.8107L10.0607 10.75L9.53033 10.2197L7.31066 8L9.53033 5.78033L10.0607 5.25L9 4.18934L8.46967 4.71967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ChevronCircleLeft.displayName = 'ChevronCircleLeft';

export default ChevronCircleLeft;
