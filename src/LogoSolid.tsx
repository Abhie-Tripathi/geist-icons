import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const LogoSolid = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_872_3153)">
                                  <path d="M16 3.6782C16 3.6782 10.6667 -0.275745 6.5409 0.636705L6.23901 0.738088C5.63524 0.940855 5.13209 1.245 4.8302 1.65054L4.62894 1.95469L3.11951 4.59065L5.73587 5.09757C6.84279 5.80725 8.25159 6.1114 9.55977 5.80725L14.1887 6.7197L16 3.6782Z" fill="#76B3E1"></path>
                                  <path opacity="0.3" d="M16 3.6782C16 3.6782 10.6667 -0.275745 6.5409 0.636705L6.23901 0.738088C5.63524 0.940855 5.13209 1.245 4.8302 1.65054L4.62894 1.95469L3.11951 4.59065L5.73587 5.09757C6.84279 5.80725 8.25159 6.1114 9.55977 5.80725L14.1887 6.7197L16 3.6782Z" fill="url(#paint0_linear_872_3153)"></path>
                                  <path d="M4.8303 3.67821L4.42779 3.77959C2.71709 4.28651 2.21395 5.90864 3.11961 7.32801C4.1259 8.64599 6.23911 9.35567 7.94981 8.84876L14.1888 6.71971C14.1888 6.71971 8.85547 2.76576 4.8303 3.67821Z" fill="#518AC8"></path>
                                  <path opacity="0.3" d="M4.8303 3.67821L4.42779 3.77959C2.71709 4.28651 2.21395 5.90864 3.11961 7.32801C4.1259 8.64599 6.23911 9.35567 7.94981 8.84876L14.1888 6.71971C14.1888 6.71971 8.85547 2.76576 4.8303 3.67821Z" fill="url(#paint1_linear_872_3153)"></path>
                                  <path d="M13.0818 8.24045C12.5184 7.53133 11.7577 7.00778 10.8972 6.73686C10.0367 6.46593 9.1155 6.45996 8.25159 6.7197L2.01258 8.74737L0 12.2958L11.2705 14.2221L13.283 10.5723C13.6856 9.86259 13.5849 9.05152 13.0818 8.24045Z" fill="url(#paint2_linear_872_3153)"></path>
                                  <path d="M11.0692 11.7889C10.5058 11.0797 9.74516 10.5562 8.88464 10.2853C8.02412 10.0143 7.10292 10.0084 6.23901 10.2681L0 12.2958C0 12.2958 5.33335 16.3511 9.45914 15.3373L9.76103 15.2359C11.4717 14.729 12.0755 13.1069 11.0692 11.7889Z" fill="url(#paint3_linear_872_3153)"></path>
                                </g>
                                <defs>
                                  <linearGradient id="paint0_linear_872_3153" x1="2.36479" y1="0.433938" x2="14.9287" y2="6.49387" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.1" stopColor="#76B3E1"></stop>
                                    <stop offset="0.3" stopColor="#DCF2FD"></stop>
                                    <stop offset="1" stopColor="#76B3E1"></stop>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_872_3153" x1="9.23786" y1="3.43489" x2="7.01391" y2="10.7862" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#76B3E1"></stop>
                                    <stop offset="0.5" stopColor="#4377BB"></stop>
                                    <stop offset="1" stopColor="#1F3B77"></stop>
                                  </linearGradient>
                                  <linearGradient id="paint2_linear_872_3153" x1="1.44906" y1="6.6386" x2="14.1779" y2="15.2286" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#315AA9"></stop>
                                    <stop offset="0.5" stopColor="#518AC8"></stop>
                                    <stop offset="1" stopColor="#315AA9"></stop>
                                  </linearGradient>
                                  <linearGradient id="paint3_linear_872_3153" x1="7.1648" y1="7.68285" x2="1.98132" y2="26.5509" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4377BB"></stop>
                                    <stop offset="0.5" stopColor="#1A336B"></stop>
                                    <stop offset="1" stopColor="#1A336B"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_872_3153">
                                    <rect width="16" height="16" fill="white"></rect>
                                  </clipPath>
                                </defs>
      </svg>
    );
  }
);

LogoSolid.displayName = 'LogoSolid';

export default LogoSolid;
