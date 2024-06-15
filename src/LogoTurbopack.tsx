import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

interface AccessibilityProps {
  style?: React.CSSProperties;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  cssClasses?: string;
  title?: string;
  shake?: boolean;
  beat?: boolean;
  rotate?: boolean;
  onClick?: () => void;
}

const LogoTurbopack: React.FC<AccessibilityProps> = (props) => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? true : false}
      shake={props.shake ? true : false}
      beat={props.beat ? true : false}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <g clip-path="url(#clip0_872_3187)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M7.26824e-06 2.99332C2.42358e-06 2.99555 0 2.99777 0 3V13C0 13.6479 0.205396 14.2479 0.554626 14.7383L2.03387 13.259C2.01178 13.1764 2 13.0896 2 13V8H7.26824e-06V2.99332ZM8.00001 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H8.50001V16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H8.00001V2ZM7.50001 16V14H3C2.91042 14 2.82359 13.9882 2.74098 13.9661L1.26173 15.4454C1.75214 15.7946 2.35208 16 3 16H7.50001Z" fill="url(#paint0_linear_872_3187)"></path>
                                  <mask id="path-2-inside-1_872_3187" fill="white">
                                    <rect x="3.5" y="3.5"   rx="0.5"></rect>
                                  </mask>
                                  <rect x="3.5" y="3.5"   rx="0.5" stroke="var(--ds-gray-1000)" fill="transparent" strokeWidth="4" mask="url(#path-2-inside-1_872_3187)"></rect>
                                </g>
                                <defs>
                                  <linearGradient id="paint0_linear_872_3187" x1="8.68832" y1="1.98437" x2="1.79792" y2="8.82805" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0096FF"></stop>
                                    <stop offset="1" stop-color="#FF1E56"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_872_3187">
                                    <rect   fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoTurbopack.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoTurbopack.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default LogoTurbopack