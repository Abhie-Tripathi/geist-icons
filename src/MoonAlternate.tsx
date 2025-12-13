import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const MoonAlternate = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_174_19363)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.88067 14.5 2.27454 12.3027 1.64496 9.37151C1.81218 9.77621 2.05228 10.1443 2.36758 10.4596C4.04598 12.138 7.21941 11.6857 9.45566 9.44949C11.6919 7.21325 12.1441 4.03981 10.4657 2.36142C10.1601 2.05583 9.80498 1.82087 9.41495 1.65445C12.3244 2.30033 14.5 4.8961 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_174_19363">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

MoonAlternate.displayName = 'MoonAlternate';

export default MoonAlternate;
