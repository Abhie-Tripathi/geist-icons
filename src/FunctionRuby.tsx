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

const FunctionRuby: React.FC<AccessibilityProps> = ({
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
                                <path d="M15.25 8V2.25C15.25 1.42157 14.5784 0.75 13.75 0.75H2.25C1.42157 0.75 0.75 1.42157 0.75 2.25V13.75C0.75 14.5784 1.42157 15.25 2.25 15.25H8" stroke="currentColor"  strokeWidth="1.5"></path>
                                <path d="M9.24618 4.25V4.25C8.00565 4.25 7 5.25565 7 6.49618L7 9.50439C7 10.7446 5.99461 11.75 4.75439 11.75V11.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                <path d="M5.25 7.75H8.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                <path d="M15.7247 11.3855L14.5481 10.0481H10.4519L9.27523 11.3855C8.92446 11.7841 8.94646 12.3874 9.32532 12.7595L12.5 15.8773L15.6746 12.7595C16.0534 12.3874 16.0754 11.7842 15.7247 11.3855Z" fill="#CA2A30" ></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.466 9.48833C13.6685 9.4926 14.8003 9.91651 14.7972 10.5166C14.794 11.1166 13.7446 11.5332 12.5423 11.5287C11.34 11.5242 10.1983 11.1295 10.2016 10.5296C10.2044 9.92963 11.2637 9.48385 12.466 9.48833Z" fill="#F87274" ></path>
                              </svg>
    </SvgContainer>
  )
}


FunctionRuby.propTypes = {
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


export default FunctionRuby