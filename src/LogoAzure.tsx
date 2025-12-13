import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoAzure = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.402 13.8777C9.45763 13.4674 11.1555 13.128 11.175 13.1233L11.2104 13.1148L9.2697 10.507C8.2023 9.07276 7.32898 7.8937 7.32898 7.88691C7.32898 7.87404 9.33293 1.63997 9.3442 1.61779C9.34797 1.61037 10.7117 4.27017 12.65 8.06532C14.4647 11.6184 15.9608 14.5479 15.9747 14.5754L16 14.6253L9.83224 14.6244L3.66449 14.6235L7.402 13.8777ZM0 13.0824C0 13.0787 0.914457 11.2855 2.03212 9.09735L4.06425 5.11896L6.43245 2.87384C7.73497 1.63902 8.80417 0.627201 8.80845 0.625356C8.81274 0.623511 8.79561 0.672228 8.77038 0.733617C8.74515 0.795006 7.58796 3.59893 6.19884 6.96455L3.67317 13.0839L1.83659 13.0865C0.826464 13.0879 0 13.0861 0 13.0824Z" fill="#0089D6"></path>
      </svg>
    );
  }
);

LogoAzure.displayName = 'LogoAzure';

export default LogoAzure;
