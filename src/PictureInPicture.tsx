import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const PictureInPicture = forwardRef<SVGSVGElement, IconProps>(
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
        <path fillRule="evenodd" clipRule="evenodd" d="M6.75 13.5H1.5V2.5H14.5V6.75V7.5H16V6.75V2C16 1.44772 15.5523 1 15 1H1C0.447714 1 0 1.44772 0 2V14C0 14.5523 0.447716 15 1 15H6.75H7.5V13.5H6.75ZM10.5 10.5H14.5V13.5H10.5V10.5ZM9 9H10.5H14.5H16V10.5V13.5V15H14.5H10.5H9V13.5V10.5V9Z" fill="currentColor"></path>
      </svg>
    );
  }
);

PictureInPicture.displayName = 'PictureInPicture';

export default PictureInPicture;
