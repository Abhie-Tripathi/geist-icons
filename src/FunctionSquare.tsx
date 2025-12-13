import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const FunctionSquare = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.25C0 1.00736 1.00736 0 2.25 0H13.75C14.9926 0 16 1.00736 16 2.25V13.75C16 14.9926 14.9926 16 13.75 16H2.25C1.00736 16 0 14.9926 0 13.75V2.25ZM2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25V13.75C1.5 14.1642 1.83579 14.5 2.25 14.5H13.75C14.1642 14.5 14.5 14.1642 14.5 13.75V2.25C14.5 1.83579 14.1642 1.5 13.75 1.5H2.25ZM10.2462 5C9.41986 5 8.75 5.66986 8.75 6.49618V7H9.75H10.5V8.5H9.75H8.75V9.50439C8.75 11.1588 7.40882 12.5 5.75439 12.5H5.00439V11H5.75439C6.58039 11 7.25 10.3304 7.25 9.50439V8.5H6.25H5.5V7H6.25H7.25V6.49618C7.25 4.84144 8.59144 3.5 10.2462 3.5H10.9962V5H10.2462Z" fill="currentColor"></path>
      </svg>
    );
  }
);

FunctionSquare.displayName = 'FunctionSquare';

export default FunctionSquare;
