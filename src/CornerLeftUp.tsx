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

const CornerLeftUp: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.78032 4.71967L10.3107 5.25L9.24999 6.31066L8.71966 5.78033L6.74999 3.81066V13.5C6.74999 13.6381 6.86192 13.75 6.99999 13.75H13.25H14V15.25H13.25H6.99999C6.03349 15.25 5.24999 14.4665 5.24999 13.5V3.81066L3.28032 5.78033L2.74999 6.31066L1.68933 5.25L2.21966 4.71967L5.46966 1.46967C5.76255 1.17678 6.23743 1.17678 6.53032 1.46967L9.78032 4.71967Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CornerLeftUp.defaultProps = {
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


CornerLeftUp.propTypes = {
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


export default CornerLeftUp