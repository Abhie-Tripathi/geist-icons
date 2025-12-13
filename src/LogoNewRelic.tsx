import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoNewRelic = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M12.261 5.53863V10.4613L7.99854 12.9232V16L14.9272 12.0002V3.99973L12.261 5.53863Z" fill="#00AC69" ></path>
                                <path d="M7.99893 3.07782L12.2614 5.53866L14.9275 3.99976L7.99893 0L1.07031 3.99976L3.73547 5.53866L7.99893 3.07782Z" fill="#1CE783" ></path>
                                <path d="M5.33352 9.53937V14.4621L7.99868 16V8.00046L1.07007 3.99969V7.07751L5.33352 9.53937Z" fill="#1D252C" ></path>
      </svg>
    );
  }
);

LogoNewRelic.displayName = 'LogoNewRelic';

export default LogoNewRelic;
