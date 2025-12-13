import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const SkipForward = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M10.603 7.11102L10.6345 7.13103L11.2174 7.50201L11.6686 7.78909C11.8229 7.88733 11.8229 8.11268 11.6686 8.21092L11.2174 8.498L10.6345 8.86898L10.603 8.88899L2.5 14.0455L2.4192 14.0969L1.71566 14.5446L1.38422 14.7555C1.21779 14.8614 1 14.7419 1 14.5446V14.1517V13.3178V13.222V2.77797V2.6822V1.84828V1.45542C1 1.25815 1.21779 1.1386 1.38422 1.24451L1.71566 1.45542L2.4192 1.90313L2.5 1.95455L10.603 7.11102ZM2.5 3.73251L9.20606 8.00001L2.5 12.2675L2.5 3.73251ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z" fill="currentColor"></path>
      </svg>
    );
  }
);

SkipForward.displayName = 'SkipForward';

export default SkipForward;
