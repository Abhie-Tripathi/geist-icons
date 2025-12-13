import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ToggleOffAltUnread = forwardRef<SVGSVGElement, IconProps>(
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
        <path fill="currentColor" fillRule="evenodd" d="M15.62 5.893A6 6 0 0 1 10 14H6A6 6 0 0 1 6 2h3.531a4.039 4.039 0 0 0 .095 1.5H6a4.5 4.5 0 0 0 0 9h4a4.5 4.5 0 0 0 4.22-6.065c.506-.092.98-.279 1.4-.542ZM6 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"></path>
                                <circle cx="13.5" cy="2.5" r="2.5" fill="var(--ds-blue-900)"></circle>
      </svg>
    );
  }
);

ToggleOffAltUnread.displayName = 'ToggleOffAltUnread';

export default ToggleOffAltUnread;
