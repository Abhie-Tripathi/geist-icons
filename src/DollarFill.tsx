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

const DollarFill: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.625 3.375V4V4.375H9C10.1736 4.375 11.125 5.3264 11.125 6.5H9.875C9.875 6.01675 9.48325 5.625 9 5.625H8.625V7.375H9C10.1736 7.375 11.125 8.3264 11.125 9.5C11.125 10.6736 10.1736 11.625 9 11.625H8.625V12V12.625H7.375V12V11.625H7C5.8264 11.625 4.875 10.6736 4.875 9.5H6.125C6.125 9.98325 6.51675 10.375 7 10.375H7.375V8.625H7C5.8264 8.625 4.875 7.6736 4.875 6.5C4.875 5.3264 5.8264 4.375 7 4.375H7.375V4V3.375H8.625ZM7.375 5.625H7C6.51675 5.625 6.125 6.01675 6.125 6.5C6.125 6.98325 6.51675 7.375 7 7.375H7.375V5.625ZM8.625 8.625V10.375H9C9.48325 10.375 9.875 9.98325 9.875 9.5C9.875 9.01675 9.48325 8.625 9 8.625H8.625Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


DollarFill.propTypes = {
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


export default DollarFill