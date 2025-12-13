import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const SettingsSlider = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M5.77348 6.39779L4.75 7.5L3.72652 6.39779L1.76721 4.28776C1.59545 4.10279 1.5 3.85972 1.5 3.60731L1.5 0.999999C1.5 0.447715 1.94772 0 2.5 0H7C7.55229 0 8 0.447715 8 1L8 3.60731C8 3.85972 7.90455 4.1028 7.73279 4.28776L5.77348 6.39779ZM6.5 3.41096L4.75 5.29558L3 3.41096L3 1.5L6.5 1.5V3.41096ZM5.5 9.5V10.25V12L15.25 12H16L16 13.5H15.25L5.5 13.5V15.25V16H4V15.25V13.5L0.750001 13.5H0V12H0.749999L4 12V10.25V9.5H5.5Z" fill="currentColor"></path>
      </svg>
    );
  }
);

SettingsSlider.displayName = 'SettingsSlider';

export default SettingsSlider;
