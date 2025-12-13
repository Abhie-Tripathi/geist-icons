import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const TextUppercase = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2.21981 13.2149L2.72027 11.5043H2.85H6.15H6.27971L6.78016 13.2149L6.86483 13.5043H7.57227H8.4277H9.13514L9.21981 13.2149L9.72027 11.5043H9.85H13.15H13.2797L13.7802 13.2149L13.8648 13.5043H15.4277L15.2198 12.7937L12.2198 2.53943L10.7802 2.53943L7.99999 12.0423L5.21983 2.53943L3.78017 2.53943L0.780159 12.7937L0.572266 13.5043H2.13514L2.21981 13.2149ZM12.7824 9.80429L11.5 5.42105L10.2176 9.80429H12.7824ZM5.78236 9.80429H3.21762L4.5 5.42105L5.78236 9.80429Z" fill="currentColor"></path>
      </svg>
    );
  }
);

TextUppercase.displayName = 'TextUppercase';

export default TextUppercase;
