import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoVercelCircle = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_872_3186)">
                                  <circle cx="8" cy="8" r="7.25" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4.5L11.5 10.625H4.5L8 4.5Z" fill="var(--ds-gray-100)"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_872_3186">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

LogoVercelCircle.displayName = 'LogoVercelCircle';

export default LogoVercelCircle;
