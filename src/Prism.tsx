import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Prism = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M6.14568 3.56625L7 2L7.85432 3.56625L9.03582 5.73233L11.908 2.03954L13.092 2.96046L9.81914 7.16843L9.86518 7.25282L15.5036 5.29163L15.9964 6.70837L10.5933 8.58771L10.6947 8.7736L15.8903 9.76325L15.6097 11.2368L11.6241 10.4776L12.1818 11.5L13 13H11.2914H2.70863H1L1.81818 11.5L3.31818 8.75H0V7.25H4.13636L6.14568 3.56625ZM3.52681 11.5L7 5.13249L10.4732 11.5H3.52681Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Prism.displayName = 'Prism';

export default Prism;
