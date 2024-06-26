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

const ChevronCircleLeft: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5898 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5ZM16 8C16 3.58172 12.4183 -3.13124e-07 8 -6.99382e-07C3.58172 -1.08564e-06 1.08564e-06 3.58172 6.99382e-07 8C3.13124e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM8.46967 4.71967L5.88938 7.29996C5.50276 7.68658 5.50276 8.31342 5.88938 8.70004L8.46967 11.2803L9 11.8107L10.0607 10.75L9.53033 10.2197L7.31066 8L9.53033 5.78033L10.0607 5.25L9 4.18934L8.46967 4.71967Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ChevronCircleLeft.propTypes = {
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


export default ChevronCircleLeft