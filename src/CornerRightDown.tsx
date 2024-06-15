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

const CornerRightDown: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 2.75H2V1.25H2.75H9C9.9665 1.25 10.75 2.0335 10.75 3V12.6893L12.7197 10.7197L13.25 10.1893L14.3107 11.25L13.7803 11.7803L10.5303 15.0303C10.2374 15.3232 9.76256 15.3232 9.46967 15.0303L6.21967 11.7803L5.68934 11.25L6.75 10.1893L7.28033 10.7197L9.25 12.6893V3C9.25 2.86193 9.13807 2.75 9 2.75H2.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CornerRightDown.defaultProps = {
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


CornerRightDown.propTypes = {
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


export default CornerRightDown