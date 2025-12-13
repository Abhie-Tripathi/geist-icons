import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const SkipBack = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M5.14697 7.11102L5.11553 7.13103L4.53256 7.50201L4.08144 7.78909C3.92706 7.88733 3.92706 8.11268 4.08144 8.21092L4.53256 8.498L5.11553 8.86898L5.14697 8.88899L13.25 14.0455L13.3308 14.0969L14.0343 14.5446L14.3658 14.7555C14.5322 14.8614 14.75 14.7419 14.75 14.5446V14.1517V13.3178V13.222L14.75 2.77797V2.6822V1.84828V1.45542C14.75 1.25815 14.5322 1.1386 14.3658 1.24451L14.0343 1.45542L13.3308 1.90313L13.25 1.95455L5.14697 7.11102ZM13.25 3.73251L6.54394 8.00001L13.25 12.2675L13.25 3.73251ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z" fill="currentColor"></path>
      </svg>
    );
  }
);

SkipBack.displayName = 'SkipBack';

export default SkipBack;
