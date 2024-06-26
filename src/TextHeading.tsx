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

const TextHeading: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 1H2V2.5H2.75H3V7.5V9V13.5H2.75H2V15H2.75H3H4.5H4.75H5.5V13.5H4.75H4.5V9H12V13.5H11.75H11V15H11.75H12H13.5H13.75H14.5V13.5H13.75H13.5V2.5H13.75H14.5V1H13.75H13.5H12H11.75H11V2.5H11.75H12V7.5H4.5V2.5H4.75H5.5V1H4.75H4.5H3H2.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


TextHeading.propTypes = {
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


export default TextHeading