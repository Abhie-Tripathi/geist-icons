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

const CornerLeftDown: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.25 2.75H14V1.25H13.25H6.99999C6.03349 1.25 5.24999 2.0335 5.24999 3V12.6893L3.28032 10.7197L2.74999 10.1893L1.68933 11.25L2.21966 11.7803L5.46966 15.0303C5.76255 15.3232 6.23743 15.3232 6.53032 15.0303L9.78032 11.7803L10.3107 11.25L9.24999 10.1893L8.71966 10.7197L6.74999 12.6893V3C6.74999 2.86193 6.86192 2.75 6.99999 2.75H13.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CornerLeftDown.defaultProps = {
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


CornerLeftDown.propTypes = {
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


export default CornerLeftDown