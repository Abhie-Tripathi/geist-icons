import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Cursor = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0.547184 1.51189L-0.0255737 -0.0255127L1.51183 0.547244L14.2618 5.29724L15.9637 5.93129L14.3103 6.68283L9.79559 8.73499L14.5303 13.4697L13.4697 14.5304L8.73493 9.79565L6.68277 14.3104L5.93123 15.9638L5.29718 14.2619L0.547184 1.51189ZM8.53103 7.6621L12.0363 6.06882L2.52556 2.52562L6.06876 12.0363L7.66204 8.53109C7.83713 8.1459 8.14584 7.83719 8.53103 7.6621Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Cursor.displayName = 'Cursor';

export default Cursor;
