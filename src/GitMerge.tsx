import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const GitMerge = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M4 6.25V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12ZM9.079 12.6869C9.38957 14.0127 10.5795 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.6293 9 9.47333 9.91924 9.1149 11.1749C8.05096 10.9929 7.0611 10.4857 6.28769 9.71231C5.51428 8.9389 5.0071 7.94904 4.82513 6.8851C6.08076 6.52667 7 5.37069 7 4C7 2.34315 5.65685 1 4 1C2.34315 0.999999 1 2.34315 1 4C1 5.42051 1.98728 6.61042 3.3131 6.921C3.51279 8.37102 4.18025 9.72619 5.22703 10.773C6.2738 11.8197 7.62898 12.4872 9.079 12.6869ZM2.5 4C2.5 4.82843 3.17157 5.5 4 5.5C4.82843 5.5 5.5 4.82843 5.5 4C5.5 3.17157 4.82843 2.5 4 2.5C3.17157 2.5 2.5 3.17157 2.5 4Z" fill="currentColor"></path>
      </svg>
    );
  }
);

GitMerge.displayName = 'GitMerge';

export default GitMerge;
