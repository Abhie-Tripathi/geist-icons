import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Anchor = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C7.17157 1.5 6.5 2.17157 6.5 3C6.5 3.82843 7.17157 4.5 8 4.5C8.82843 4.5 9.5 3.82843 9.5 3C9.5 2.17157 8.82843 1.5 8 1.5ZM5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3C11 4.39788 10.0439 5.57245 8.75 5.90549V14.459C11.7467 14.1291 14.0982 11.846 14.4535 9H13.75H13V7.5H13.75H15.25H16V8.25C16 12.5548 12.3933 16 8 16C3.60675 16 0 12.5548 0 8.25V7.5H0.75H2.25H3V9H2.25H1.54652C1.90183 11.846 4.25327 14.1291 7.25 14.459V5.90549C5.95608 5.57245 5 4.39788 5 3Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Anchor.displayName = 'Anchor';

export default Anchor;
