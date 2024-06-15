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

const LogoVisa: React.FC<AccessibilityProps> = (props) => {
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
                                <g clip-path="url(#clip0_4898_1862)">
                                  <path d="M0 0H16V16H0V0Z" fill="#1434CB" ></path>
                                  <path d="M9.70766 4.44446L7.85966 9.21868L7.08989 5.15557C6.98678 4.69868 6.62766 4.44446 6.26855 4.44446H3.60722L3.55566 4.64801C4.17166 4.80001 4.63478 4.95201 5.04544 5.15557C5.17344 5.21957 5.28011 5.33335 5.345 5.81601L6.67922 11.5556H8.57789L11.5557 4.44446H9.70766Z" fill="url(#paint0_linear_4898_1862)" ></path>
                                </g>
                                <defs>
                                  <linearGradient id="paint0_linear_4898_1862" x1="68.1717" y1="96.448" x2="69.5566" y2="40.8729" gradientUnits="userSpaceOnUse">
                                    <stop offset="1" stop-color="white" ></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_4898_1862">
                                    <rect   rx="2" fill="white" ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoVisa.defaultProps = {
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


LogoVisa.propTypes = {
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


export default LogoVisa