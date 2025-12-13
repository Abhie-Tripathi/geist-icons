import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ArrowUpDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M4.21968 3.46975L3.68935 4.00008L4.75001 5.06074L5.28034 4.53041L7.24999 2.56076L7.24999 13.4393L5.28031 11.4697L4.74998 10.9393L3.68932 12L4.21965 12.5303L7.29288 15.6036C7.6834 15.9941 8.31657 15.9941 8.70709 15.6036L11.7803 12.5303L12.3106 12L11.25 10.9393L10.7197 11.4697L8.74999 13.4393L8.74999 2.56072L10.7197 4.53041L11.25 5.06075L12.3107 4.00009L11.7803 3.46975L8.70712 0.396531C8.31659 0.00600645 7.68343 0.00600637 7.2929 0.396531L4.21968 3.46975Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ArrowUpDown.displayName = 'ArrowUpDown';

export default ArrowUpDown;
