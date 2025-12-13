import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Tabs = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V7H9.14987C8.1619 7 7.2666 6.41816 6.86534 5.51535L5.52519 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5ZM7.16667 2.5L8.23606 4.90614C8.39656 5.26727 8.75468 5.5 9.14987 5.5H14.5V2.5H7.16667ZM13.5 15C14.8807 15 16 13.8807 16 12.5V6.5V2.5V1H14.5H6.5H1.5H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
