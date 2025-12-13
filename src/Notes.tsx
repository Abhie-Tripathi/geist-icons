import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Notes = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M13 2.5H3V4.5H13V2.5ZM3 7.5V5.75H4.75L4.75 7.5H3ZM4.75 8.75H3V10.5H4.75V8.75ZM6 10.5L6 8.75H13V10.5H6ZM4.75 11.75H3V12.5C3 13.0523 3.44772 13.5 4 13.5H4.75V11.75ZM6 13.5V11.75H13V12.5C13 13.0523 12.5523 13.5 12 13.5H6ZM6 7.5V5.75H13V7.5H6ZM3 1H1.5V2.5V12.5C1.5 13.8807 2.61929 15 4 15H12C13.3807 15 14.5 13.8807 14.5 12.5V2.5V1H13H3Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Notes.displayName = 'Notes';

export default Notes;
