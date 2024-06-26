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

const CornerUpLeft: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 10.0303L5 10.5607L6.06066 9.50001L5.53033 8.96968L3.56066 7.00001H13.25C13.3881 7.00001 13.5 7.11193 13.5 7.25001V13.5V14.25H15V13.5V7.25001C15 6.28351 14.2165 5.50001 13.25 5.50001H3.56066L5.53033 3.53034L6.06066 3.00001L5 1.93935L4.46967 2.46968L1.21967 5.71968C0.926777 6.01257 0.926777 6.48744 1.21967 6.78034L4.46967 10.0303Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CornerUpLeft.propTypes = {
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


export default CornerUpLeft