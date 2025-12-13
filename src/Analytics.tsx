import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const Analytics = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M1 1V12.75C1 13.9926 2.00736 15 3.25 15H15V13.5H3.25C2.83579 13.5 2.5 13.1642 2.5 12.75V1H1ZM14.2971 6.01303L14.8101 5.46596L13.716 4.43989L13.2029 4.98697L9.98259 8.42099L7.707 6.14629C7.31646 5.75589 6.6834 5.75595 6.29293 6.14642L4.21967 8.21967L3.68934 8.75L4.75 9.81066L5.28033 9.28033L7.0001 7.56057L9.28723 9.84681C9.68667 10.2461 10.3373 10.2356 10.7236 9.82361L14.2971 6.01303Z" fill="currentColor"></path>
      </svg>
    );
  }
);

Analytics.displayName = 'Analytics';

export default Analytics;
