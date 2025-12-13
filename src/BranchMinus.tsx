import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const BranchMinus = forwardRef<SVGSVGElement, IconProps>(
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
        <path fill="currentColor" fillRule="evenodd" d="M8 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.553a6.75 6.75 0 0 1-5.526 4.687A3.001 3.001 0 1 1 3.25 9.095V1h1.5V9.095a3.006 3.006 0 0 1 2.135 2.08A5.25 5.25 0 0 0 10.855 8H10a2 2 0 0 1-2-2V2Zm1.625 1.375h4.75v1.25h-4.75v-1.25ZM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"></path>
      </svg>
    );
  }
);

BranchMinus.displayName = 'BranchMinus';

export default BranchMinus;
