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

const KeyOld: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.25 1.5C9.45507 1.5 7.99999 2.95507 7.99999 4.75C7.99999 6.54493 9.45507 8 11.25 8C13.0449 8 14.5 6.54493 14.5 4.75C14.5 2.95507 13.0449 1.5 11.25 1.5ZM6.49999 4.75C6.49999 2.12665 8.62664 0 11.25 0C13.8733 0 16 2.12665 16 4.75C16 7.37335 13.8733 9.5 11.25 9.5C10.209 9.5 9.24618 9.16512 8.46345 8.5972L7.06065 10L9.03032 11.9697L9.56065 12.5L9.03032 13.0303L6.78032 15.2803L6.24999 15.8107L5.71966 15.2803L3.74999 13.3107L1.78032 15.2803L1.24999 15.8107L0.189331 14.75L0.719661 14.2197L2.68933 12.25L3.21966 11.7197L5.46966 9.46967L5.99999 8.93934L7.40279 7.53654C6.83488 6.75381 6.49999 5.79101 6.49999 4.75ZM4.81065 12.25L6.24999 13.6893L7.43933 12.5L5.99999 11.0607L4.81065 12.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


KeyOld.defaultProps = {
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


KeyOld.propTypes = {
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


export default KeyOld