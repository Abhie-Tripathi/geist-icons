import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const TextBold = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M3 1H2V2V7V8V9V14V15H3H10C12.2091 15 14 13.2091 14 11C14 9.54567 13.2239 8.27263 12.0632 7.57246C12.6478 6.87702 13 5.97964 13 5C13 2.79086 11.2091 1 9 1H3ZM9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3H4V7H9ZM4 9V13H10C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9H9H4Z" fill="currentColor"></path>
      </svg>
    );
  }
);

TextBold.displayName = 'TextBold';

export default TextBold;
