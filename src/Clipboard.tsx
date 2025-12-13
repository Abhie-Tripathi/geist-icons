import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Clipboard = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M6.75 1.5H9.25C9.52614 1.5 9.75 1.72386 9.75 2C9.75 2.27614 9.52614 2.5 9.25 2.5H6.75C6.47386 2.5 6.25 2.27614 6.25 2C6.25 1.72386 6.47386 1.5 6.75 1.5ZM4.81301 1.5C5.03503 0.637386 5.81808 0 6.75 0H9.25C10.1819 0 10.965 0.637386 11.187 1.5H13.25H14V2.25V12.75C14 14.5449 12.5449 16 10.75 16H5.25C3.45507 16 2 14.5449 2 12.75V2.25V1.5H2.75H4.81301ZM5.01756 3H5H3.5V12.75C3.5 13.7165 4.2835 14.5 5.25 14.5H10.75C11.7165 14.5 12.5 13.7165 12.5 12.75V3H11H10.9824C10.6366 3.5978 9.99028 4 9.25 4H6.75C6.00972 4 5.36337 3.5978 5.01756 3Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Clipboard.displayName = 'Clipboard';

export default Clipboard;
