import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Lens = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M9.753 14.2609C9.19532 14.4167 8.60739 14.5 8 14.5C5.49509 14.5 3.32112 13.0831 2.23586 11.007H9.753V14.2609ZM11.007 13.7641C13.0831 12.6789 14.5 10.5049 14.5 8C14.5 7.3926 14.4167 6.80466 14.2609 6.24699H11.007V13.7641ZM13.7641 4.99299H11.007H10.38H6.24699V1.73913C6.80466 1.58331 7.3926 1.5 8 1.5C10.5049 1.5 12.6789 2.91692 13.7641 4.99299ZM4.99299 2.23587C2.91692 3.32113 1.5 5.4951 1.5 8C1.5 8.60739 1.58331 9.19532 1.73913 9.753H4.99299V5.61999V4.99299V2.23587ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.24699 6.24699H9.75299V9.75299H6.24699V6.24699Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Lens.displayName = 'Lens';

export default Lens;
