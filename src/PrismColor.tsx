import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const PrismColor = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M9 7L12.5 2.5" stroke="var(--ds-red-700)" strokeWidth="1.5"></path>
                                <path d="M10.5 9.5L15.75 10.5" stroke="var(--ds-blue-600)" strokeWidth="1.5"></path>
                                <path d="M10 8L15.75 6" stroke="var(--ds-teal-600)" strokeWidth="1.5"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.14568 3.56625L7 2L7.85432 3.56625L12.1818 11.5L13 13H11.2914H2.70863H1L1.81818 11.5L3.31818 8.75H0V7.25H4.13636L6.14568 3.56625ZM3.52681 11.5L7 5.13249L10.4732 11.5H3.52681Z" fill="currentColor"></path>
      </svg>
    );
  }
);

PrismColor.displayName = 'PrismColor';

export default PrismColor;
