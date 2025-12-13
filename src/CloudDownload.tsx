import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const CloudDownload = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M4.875 1.5C3.01104 1.5 1.5 3.01104 1.5 4.875V6.40385C1.5 7.22166 1.87727 7.95083 2.47018 8.42791L3.0545 8.89808L2.11415 10.0667L1.52982 9.59656C0.598275 8.84699 0 7.69502 0 6.40385V4.875C0 2.18261 2.18261 0 4.875 0C6.79184 0 8.44888 1.1064 9.2449 2.71201C9.35322 2.93049 9.51183 3 9.60112 3H12.25C14.3211 3 16 4.67893 16 6.75C16 7.8785 15.5006 8.89123 14.7133 9.57758L14.1479 10.0704L13.1622 8.93972L13.7276 8.44689C14.202 8.03329 14.5 7.42688 14.5 6.75C14.5 5.50736 13.4926 4.5 12.25 4.5H9.60112C8.79547 4.5 8.1902 3.96162 7.901 3.37829C7.34838 2.26364 6.20018 1.5 4.875 1.5ZM8.75 13.4393L10.7197 11.4697L11.25 10.9393L12.3107 12L11.7803 12.5303L8.70711 15.6036C8.31658 15.9941 7.68342 15.9941 7.29289 15.6036L4.21967 12.5303L3.68934 12L4.75 10.9393L5.28033 11.4697L7.25 13.4393V7.75V7H8.75V7.75V13.4393Z" fill="currentColor"></path>
      </svg>
    );
  }
);

CloudDownload.displayName = 'CloudDownload';

export default CloudDownload;
