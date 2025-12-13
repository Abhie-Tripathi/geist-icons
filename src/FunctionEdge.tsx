import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const FunctionEdge = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.25C0 1.00736 1.00736 0 2.25 0H13.75C14.9926 0 16 1.00736 16 2.25V8H14.5V2.25C14.5 1.83579 14.1642 1.5 13.75 1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25V13.75C1.5 14.1642 1.83579 14.5 2.25 14.5H8V16H2.25C1.00736 16 0 14.9926 0 13.75V2.25ZM9.24618 5C8.41986 5 7.75 5.66986 7.75 6.49618V7H8.75H9.5V8.5H8.75H7.75V9.50439C7.75 11.1588 6.40882 12.5 4.75439 12.5H4.00439V11H4.75439C5.58039 11 6.25 10.3304 6.25 9.50439V8.5H5.25H4.5V7H5.25H6.25V6.49618C6.25 4.84144 7.59144 3.5 9.24618 3.5H9.99618V5H9.24618Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 11.875C11.5 11.6679 11.6679 11.5 11.875 11.5H15.25H16V10H15.25H11.875C10.8395 10 10 10.8395 10 11.875C10 12.2971 10.1395 12.6866 10.3749 13C10.1395 13.3134 10 13.7029 10 14.125C10 15.1605 10.8395 16 11.875 16H15.25H16V14.5H15.25H11.875C11.6679 14.5 11.5 14.3321 11.5 14.125C11.5 13.9179 11.6679 13.75 11.875 13.75H14.25H15V12.25H14.25H11.875C11.6679 12.25 11.5 12.0821 11.5 11.875Z" fill="var(--ds-purple-700)"></path>
      </svg>
    );
  }
);

FunctionEdge.displayName = 'FunctionEdge';

export default FunctionEdge;
