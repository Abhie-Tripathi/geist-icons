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

const ChevronCircleUp: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5898 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5898 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -5.4282e-07 8 -3.49691e-07C3.58172 -1.56562e-07 -5.4282e-07 3.58172 -3.49691e-07 8C-1.56562e-07 12.4183 3.58172 16 8 16ZM11.2803 8.46967L8.70004 5.88938C8.31342 5.50276 7.68658 5.50276 7.29996 5.88938L4.71967 8.46967L4.18934 9L5.25 10.0607L5.78033 9.53033L8 7.31066L10.2197 9.53033L10.75 10.0607L11.8107 9L11.2803 8.46967Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ChevronCircleUp.propTypes = {
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


export default ChevronCircleUp