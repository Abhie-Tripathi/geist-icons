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

const PhoneDevice: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.25 0C3.73122 0 2.5 1.23122 2.5 2.75V13.25C2.5 14.7688 3.73122 16 5.25 16H10.75C12.2688 16 13.5 14.7688 13.5 13.25V2.75C13.5 1.23122 12.2688 0 10.75 0H5.25ZM4 2.75C4 2.05964 4.55964 1.5 5.25 1.5H10.75C11.4404 1.5 12 2.05964 12 2.75V13.25C12 13.9404 11.4404 14.5 10.75 14.5H5.25C4.55964 14.5 4 13.9404 4 13.25V2.75ZM6.25 4.75C6.80228 4.75 7.25 4.30228 7.25 3.75C7.25 3.19772 6.80228 2.75 6.25 2.75C5.69772 2.75 5.25 3.19772 5.25 3.75C5.25 4.30228 5.69772 4.75 6.25 4.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


PhoneDevice.defaultProps = {
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


PhoneDevice.propTypes = {
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


export default PhoneDevice