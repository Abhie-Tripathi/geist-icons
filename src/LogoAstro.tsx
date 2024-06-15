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

const LogoAstro: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M5.53468 13.4411C4.73241 12.7283 4.49823 11.2306 4.83247 10.1456C5.41202 10.8297 6.21502 11.0464 7.04678 11.1687C8.33085 11.3575 9.5919 11.2869 10.7847 10.7164C10.9212 10.6511 11.0473 10.5642 11.1964 10.4763C11.3083 10.7919 11.3374 11.1105 11.2984 11.4348C11.2033 12.2247 10.7989 12.8348 10.1557 13.2972C9.89855 13.4822 9.6264 13.6476 9.36077 13.822C8.54473 14.3581 8.32393 14.9867 8.63058 15.9011C8.63787 15.9234 8.64439 15.9457 8.66087 16C8.24422 15.8188 7.93987 15.5549 7.70798 15.2079C7.46305 14.8417 7.34652 14.4366 7.34039 13.9983C7.33733 13.785 7.33733 13.5698 7.30781 13.3595C7.23576 12.8468 6.98814 12.6173 6.52167 12.6041C6.04293 12.5905 5.66423 12.8782 5.5638 13.3312C5.55614 13.3659 5.54503 13.4003 5.53391 13.4407L5.53468 13.4411Z" fill="url(#paint0_linear_1427_1479)" ></path>
                                <path d="M1.5 10.4778C1.5 10.4778 3.69363 9.42783 5.89339 9.42783L7.55193 4.38471C7.61401 4.14081 7.79533 3.97508 8 3.97508C8.20469 3.97508 8.38599 4.14081 8.44809 4.38471L10.1066 9.42783C12.7119 9.42783 14.5 10.4778 14.5 10.4778C14.5 10.4778 10.7739 0.504764 10.7667 0.484756C10.6597 0.1899 10.4792 0 10.2358 0H5.7646C5.5212 0 5.34796 0.1899 5.23372 0.484756C5.22567 0.504387 1.5 10.4778 1.5 10.4778Z" fill="currentColor"></path>
                                <defs>
                                  <linearGradient id="paint0_linear_1427_1479" x1="4.68506" y1="16" x2="12.3496" y2="12.2743" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D83333" ></stop>
                                    <stop offset="1" stop-color="#F041FF" ></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoAstro.defaultProps = {
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


LogoAstro.propTypes = {
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


export default LogoAstro