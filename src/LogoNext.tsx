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

const LogoNext: React.FC<AccessibilityProps> = ({
  style = {},
  color = '#000000',
  height = '20px',
  width = '20px',
  className = '',
  cssClasses = '',
  title = '',
  shake = false,
  beat = false,
  rotate = false,
  onClick,

}) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      rotate={rotate ? true : false}
      shake={shake ? true : false}
      beat={beat ? true : false}
      className={className}
    >
      <svg style={style} className={cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <g clip-path="url(#clip0_53_108)">
                                  <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" stroke strokeLinecap="round" strokeLinejoin="round"></circle>
                                  <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108e2vto2pfa)" stroke strokeMiterlimit="1.41421"></path>
                                  <path fillRule="evenodd" cliprule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108e2vto2pfa)"></path>
                                </g>
                                <defs>
                                  <linearGradient id="paint0_linear_53_108e2vto2pfa" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="0.609375" stop-color="white" stop-opacity="0.57"></stop>
                                    <stop offset="0.796875" stop-color="white" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_53_108e2vto2pfa" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_53_108">
                                    <rect   fill="red"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoNext.propTypes = {
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


export default LogoNext