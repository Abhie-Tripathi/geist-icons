import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoTurborepo = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_872_3188)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0V2C11.3137 2 14 4.68629 14 8C14 11.1453 11.5798 13.7254 8.5 13.9795V15.9846C12.6854 15.7265 16 12.2504 16 8C16 3.58172 12.4183 0 8 0ZM7.5 15.9846V13.9795C6.2188 13.8738 5.05174 13.3655 4.12558 12.5815L2.70769 13.9994C4.00133 15.1415 5.66717 15.8716 7.5 15.9846ZM2.00058 13.2923C0.755509 11.882 0 10.0292 0 8H2C2 9.47685 2.53358 10.8291 3.41847 11.8744L2.00058 13.2923Z" fill="url(#paint0_linear_872_3188)"></path>
                                  <rect x="4.5" y="4.5" width="7" height="7" rx="3.5" stroke="var(--ds-gray-1000)" fill="transparent" strokeWidth="2"></rect>
                                </g>
                                <defs>
                                  <linearGradient id="paint0_linear_872_3188" x1="8.68832" y1="1.98437" x2="1.79792" y2="8.82805" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0096FF"></stop>
                                    <stop offset="1" stopColor="#FF1E56"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_872_3188">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

LogoTurborepo.displayName = 'LogoTurborepo';

export default LogoTurborepo;
