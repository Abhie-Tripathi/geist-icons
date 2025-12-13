import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const DataPointLow = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M8.5 10.75C8.5 11.7165 7.7165 12.5 6.75 12.5C5.7835 12.5 5 11.7165 5 10.75C5 9.7835 5.7835 9 6.75 9C7.7165 9 8.5 9.7835 8.5 10.75Z" fill="currentColor"></path>
                                <path opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M6.75 7C7.7165 7 8.5 6.2165 8.5 5.25C8.5 4.2835 7.7165 3.5 6.75 3.5C5.7835 3.5 5 4.2835 5 5.25C5 6.2165 5.7835 7 6.75 7ZM11.25 9.75C12.2165 9.75 13 8.9665 13 8C13 7.0335 12.2165 6.25 11.25 6.25C10.2835 6.25 9.5 7.0335 9.5 8C9.5 8.9665 10.2835 9.75 11.25 9.75Z" fill="currentColor"></path>
      </svg>
    );
  }
);

DataPointLow.displayName = 'DataPointLow';

export default DataPointLow;
