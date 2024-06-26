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

const Camera: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3.5H3.5L5 1H11L12.5 3.5H14.5H16V5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V5V3.5H1.5ZM4.78624 4.27174L5.84929 2.5H10.1507L11.2138 4.27174L11.6507 5H12.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V5H3.5H4.34929L4.78624 4.27174ZM9.75 8.5C9.75 9.4665 8.9665 10.25 8 10.25C7.0335 10.25 6.25 9.4665 6.25 8.5C6.25 7.5335 7.0335 6.75 8 6.75C8.9665 6.75 9.75 7.5335 9.75 8.5ZM11.25 8.5C11.25 10.2949 9.79493 11.75 8 11.75C6.20507 11.75 4.75 10.2949 4.75 8.5C4.75 6.70507 6.20507 5.25 8 5.25C9.79493 5.25 11.25 6.70507 11.25 8.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Camera.propTypes = {
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


export default Camera