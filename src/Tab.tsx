import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Tab = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M16 0.75V0H14.5V0.75V15.25V16H16V15.25V0.75ZM7.53033 3.21967L7 2.68934L5.93934 3.75L6.46967 4.28033L9.43934 7.25H0.75H0V8.75H0.75H9.43934L6.46967 11.7197L5.93934 12.25L7 13.3107L7.53033 12.7803L11.7803 8.53033C12.0732 8.23744 12.0732 7.76256 11.7803 7.46967L7.53033 3.21967Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Tab.displayName = 'Tab';

export default Tab;
