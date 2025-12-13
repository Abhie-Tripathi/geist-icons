import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ArrowLeftRight = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M3.46975 11.7803L4.00008 12.3106L5.06074 11.25L4.53041 10.7196L2.56076 8.75H13.4393L11.4697 10.7197L10.9393 11.25L12 12.3107L12.5303 11.7803L15.6036 8.70711C15.9941 8.31658 15.9941 7.68342 15.6036 7.29289L12.5303 4.21967L12 3.68934L10.9393 4.75L11.4697 5.28033L13.4393 7.25H2.56072L4.53042 5.28031L5.06075 4.74998L4.00009 3.68932L3.46975 4.21965L0.396531 7.29287C0.00600663 7.68339 0.00600657 8.31656 0.396531 8.70708L3.46975 11.7803Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ArrowLeftRight.displayName = 'ArrowLeftRight';

export default ArrowLeftRight;
