import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Function = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8.75 4C8.75 2.61929 9.86929 1.5 11.25 1.5H12V0H11.25C9.04086 0 7.25 1.79086 7.25 4V6H4.75H4V7.5H4.75H7.25V12C7.25 13.3807 6.13071 14.5 4.75 14.5H4V16H4.75C6.95914 16 8.75 14.2091 8.75 12V7.5H11.25H12V6H11.25H8.75V4Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Function.displayName = 'Function';

export default Function;
