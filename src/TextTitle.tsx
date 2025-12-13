import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const TextTitle = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 0.75C1.94772 0.75 1.5 1.19772 1.5 1.75V2.75V3.5H3V2.75V2.25H7.25V13.5H6.75H6V15H6.75H7.25H8.75H9.25H10V13.5H9.25H8.75V2.25H13.25V2.75V3.5H14.75V2.75V1.75C14.75 1.19771 14.3023 0.75 13.75 0.75H2.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

TextTitle.displayName = 'TextTitle';

export default TextTitle;
