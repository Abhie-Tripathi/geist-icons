import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const AcronymJs = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H13.5C14.8807 0 16 1.11929 16 2.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V2.5ZM7.5 8V12.125C7.5 12.3321 7.33211 12.5 7.125 12.5C6.91789 12.5 6.75 12.3321 6.75 12.125V11.75H5.25V12.125C5.25 13.1605 6.08947 14 7.125 14C8.16053 14 9 13.1605 9 12.125V8H7.5ZM11.75 9.875C11.75 9.66789 11.9179 9.5 12.125 9.5H13.5V8H12.125C11.0895 8 10.25 8.83947 10.25 9.875C10.25 10.9105 11.0895 11.75 12.125 11.75C12.3321 11.75 12.5 11.9179 12.5 12.125C12.5 12.3321 12.3321 12.5 12.125 12.5H10.5V14H12.125C13.1605 14 14 13.1605 14 12.125C14 11.0895 13.1605 10.25 12.125 10.25C11.9179 10.25 11.75 10.0821 11.75 9.875Z" fill="currentColor"></path>
      </svg>
    );
  }
);

AcronymJs.displayName = 'AcronymJs';

export default AcronymJs;
