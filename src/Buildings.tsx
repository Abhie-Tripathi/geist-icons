import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Buildings = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.25C2.5 1.83579 2.83579 1.5 3.25 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25V7.5V14.5H2.5V2.25ZM7.5 16H1.75H1V15.25V2.25C1 1.00736 2.00736 0 3.25 0H6.75C7.99264 0 9 1.00736 9 2.25V6.5H12.25C13.4926 6.5 14.5 7.50736 14.5 8.75V15.25V16H13.75H9H8.25H7.5ZM9 14.5H13V8.75C13 8.33579 12.6642 8 12.25 8H9V14.5ZM4.75 3.5H4V5H4.75H5.25H6V3.5H5.25H4.75ZM4 6.5H4.75H5.25H6V8H5.25H4.75H4V6.5ZM10.75 9.5H10V11H10.75H11.25H12V9.5H11.25H10.75ZM4 9.5H4.75H5.25H6V11H5.25H4.75H4V9.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Buildings.displayName = 'Buildings';

export default Buildings;
