import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Fulcrum = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M15.206 1.72114L15.9272 1.5151L15.5151 0.0728149L14.794 0.278856L0.793958 4.27886L0.0728149 4.4849L0.484897 5.92718L1.20604 5.72114L15.206 1.72114ZM7.11102 5.39697L8 4L8.88898 5.39697L14.0455 13.5L15 15H13.222H2.77796H0.999999L1.95454 13.5L7.11102 5.39697ZM3.73251 13.5L8 6.79394L12.2675 13.5H3.73251Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Fulcrum.displayName = 'Fulcrum';

export default Fulcrum;
