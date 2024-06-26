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

const Alpha: React.FC<AccessibilityProps> = ({
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
                                <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"></circle>
                                <path opacity="0.33" fillRule="evenodd" clipRule="evenodd" d="M5 1H7V3H5V1ZM5 5V3H3V5H1V7H3V9H1V11H3V13H5V15H7V13H9V15H11V13H13V11H15V9H13V7H15V5H13V3H11V1H9V3H7V5H5ZM5 7H3V5H5V7ZM7 7V5H9V7H7ZM7 9V7H5V9H3V11H5V13H7V11H9V13H11V11H13V9H11V7H13V5H11V3H9V5H11V7H9V9H7ZM9 9H11V11H9V9ZM7 9V11H5V9H7Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Alpha.propTypes = {
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


export default Alpha