import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const FunctionNode = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1534_28976)">
                                  <path d="M15.25 8V2.25C15.25 1.42157 14.5784 0.75 13.75 0.75H2.25C1.42157 0.75 0.75 1.42157 0.75 2.25V13.75C0.75 14.5784 1.42157 15.25 2.25 15.25H8" stroke="currentColor"  strokeWidth="1.5" fill="transparent"></path>
                                  <path d="M9.24618 4.25V4.25C8.00565 4.25 7 5.25565 7 6.49618L7 9.50439C7 10.7446 5.99461 11.75 4.75439 11.75V11.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                  <path d="M5.25 7.75H8.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                  <path d="M13 9L16 10.75V14.25L13 16L10 14.25V10.75L13 9Z" fill="#46A758" ></path>
                                </g>
      </svg>
    );
  }
);

FunctionNode.displayName = 'FunctionNode';

export default FunctionNode;
