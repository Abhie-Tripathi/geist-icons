import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ArrowUpDiagonalScale = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M9.74944 1H8.99944V2.5H9.74944H12.4388L9.46911 5.46967L8.93878 6L9.99944 7.06066L10.5298 6.53033L13.4983 3.56182V6.25V7H14.9983V6.25V2C14.9983 1.44772 14.5506 1 13.9983 1H9.74944ZM2.50195 12.4382V9.75V9H1.00195V9.75V14C1.00195 14.5523 1.44967 15 2.00195 15H6.25079H7.00079V13.5H6.25079H3.56145L6.53112 10.5303L7.06145 10L6.00079 8.93934L5.47046 9.46967L2.50195 12.4382Z" fill="currentColor"></path>
      </svg>
    );
  }
);

ArrowUpDiagonalScale.displayName = 'ArrowUpDiagonalScale';

export default ArrowUpDiagonalScale;
