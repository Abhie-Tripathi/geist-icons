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

const TabletDevice: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 0C1.7835 0 1 0.783501 1 1.75V14.25C1 15.2165 1.7835 16 2.75 16H13.25C14.2165 16 15 15.2165 15 14.25V1.75C15 0.783502 14.2165 0 13.25 0H2.75ZM2.5 1.75C2.5 1.61193 2.61193 1.5 2.75 1.5H13.25C13.3881 1.5 13.5 1.61193 13.5 1.75V14.25C13.5 14.3881 13.3881 14.5 13.25 14.5H2.75C2.61193 14.5 2.5 14.3881 2.5 14.25V1.75ZM4.75 4.75C5.30228 4.75 5.75 4.30228 5.75 3.75C5.75 3.19772 5.30228 2.75 4.75 2.75C4.19772 2.75 3.75 3.19772 3.75 3.75C3.75 4.30228 4.19772 4.75 4.75 4.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


TabletDevice.propTypes = {
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


export default TabletDevice