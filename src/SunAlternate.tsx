import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const SunAlternate = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_174_19347)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.8095 13.5C14.2386 13.0469 14.6152 12.5437 14.9297 12H1.07026C1.38476 12.5437 1.76141 13.0469 2.1905 13.5H13.8095ZM15.9381 9C15.851 9.69864 15.6738 10.3693 15.4185 11H0.581517C0.326218 10.3693 0.149013 9.69864 0.0618937 9H15.9381ZM15.9997 8.06438C15.9999 8.04294 16 8.02148 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8H15.9997V8.06438ZM3.33528 14.5C4.64841 15.444 6.25928 16 8 16C9.74072 16 11.3516 15.444 12.6647 14.5H3.33528Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_174_19347">
                                    <rect width="16" height="16" fill="var(--ds-background-100)"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

SunAlternate.displayName = 'SunAlternate';

export default SunAlternate;
