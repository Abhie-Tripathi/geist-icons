import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LoaderCircle = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2393_1490)">
                                  <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.5" d="M8 16V12" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.9" d="M3.29773 1.52783L5.64887 4.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.1" d="M12.7023 1.52783L10.3511 4.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.4" d="M12.7023 14.472L10.3511 11.236" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.6" d="M3.29773 14.472L5.64887 11.236" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.2" d="M15.6085 5.52783L11.8043 6.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.7" d="M0.391602 10.472L4.19583 9.23598" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.3" d="M15.6085 10.4722L11.8043 9.2361" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.8" d="M0.391602 5.52783L4.19583 6.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_2393_1490">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

LoaderCircle.displayName = 'LoaderCircle';

export default LoaderCircle;
