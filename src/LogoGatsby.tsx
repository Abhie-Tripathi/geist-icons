import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoGatsby = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_872_3157)">
                                  <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM3.54286 12.4571C2.34286 11.2571 1.71429 9.65714 1.71429 8.11429L7.94286 14.2857C6.34286 14.2286 4.74286 13.6571 3.54286 12.4571ZM9.37143 14.1143L1.88571 6.62857C2.51429 3.82857 5.02857 1.71429 8 1.71429C10.1143 1.71429 11.9429 2.74286 13.0857 4.28571L12.2286 5.02857C11.2571 3.71429 9.71429 2.85714 8 2.85714C5.77143 2.85714 3.88571 4.28571 3.14286 6.28571L9.71429 12.8571C11.3714 12.2857 12.6286 10.8571 13.0286 9.14286H10.2857V8H14.2857C14.2857 10.9714 12.1714 13.4857 9.37143 14.1143Z" fill="#663399"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_872_3157">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

LogoGatsby.displayName = 'LogoGatsby';

export default LogoGatsby;
