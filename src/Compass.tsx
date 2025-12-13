import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Compass = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M15.7329 1.15933L15.9807 0.0192871L14.8407 0.267122L5.22524 2.35744C3.79024 2.66939 2.66939 3.79024 2.35744 5.22523L0.267122 14.8407L0.0192871 15.9807L1.15933 15.7329L10.7748 13.6426C12.2098 13.3306 13.3306 12.2098 13.6426 10.7748L15.7329 1.15933ZM5.54388 3.8232L14.0193 1.98072L12.1768 10.4561C11.9896 11.3171 11.3171 11.9896 10.4561 12.1768L1.98072 14.0193L3.8232 5.54388C4.01037 4.68288 4.68288 4.01037 5.54388 3.8232ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8ZM10.5 8C10.5 9.38072 9.38072 10.5 8 10.5C6.61929 10.5 5.5 9.38072 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38072 5.5 10.5 6.61929 10.5 8Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Compass.displayName = 'Compass';

export default Compass;
