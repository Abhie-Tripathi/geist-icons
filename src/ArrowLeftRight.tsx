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

const ArrowLeftRight: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.46975 11.7803L4.00008 12.3106L5.06074 11.25L4.53041 10.7196L2.56076 8.75H13.4393L11.4697 10.7197L10.9393 11.25L12 12.3107L12.5303 11.7803L15.6036 8.70711C15.9941 8.31658 15.9941 7.68342 15.6036 7.29289L12.5303 4.21967L12 3.68934L10.9393 4.75L11.4697 5.28033L13.4393 7.25H2.56072L4.53042 5.28031L5.06075 4.74998L4.00009 3.68932L3.46975 4.21965L0.396531 7.29287C0.00600663 7.68339 0.00600657 8.31656 0.396531 8.70708L3.46975 11.7803Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ArrowLeftRight.propTypes = {
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


export default ArrowLeftRight