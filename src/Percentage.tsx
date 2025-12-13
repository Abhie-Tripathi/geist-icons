import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Percentage = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M11.4749 1.33217L11.1964 2.02853L6.19636 14.5285L5.91781 15.2249L4.5251 14.6678L4.80364 13.9714L9.80364 1.47144L10.0822 0.775085L11.4749 1.33217ZM4 5.49999C4.82843 5.49999 5.5 4.82841 5.5 3.99999C5.5 3.17156 4.82843 2.49999 4 2.49999C3.17157 2.49999 2.5 3.17156 2.5 3.99999C2.5 4.82841 3.17157 5.49999 4 5.49999ZM7 3.99999C7 5.65684 5.65685 6.99999 4 6.99999C2.34315 6.99999 1 5.65684 1 3.99999C1 2.34313 2.34315 0.999986 4 0.999986C5.65685 0.999986 7 2.34313 7 3.99999ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM12 15C13.6569 15 15 13.6568 15 12C15 10.3431 13.6569 8.99999 12 8.99999C10.3431 8.99999 9 10.3431 9 12C9 13.6568 10.3431 15 12 15Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Percentage.displayName = 'Percentage';

export default Percentage;
