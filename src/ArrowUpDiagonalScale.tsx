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

const ArrowUpDiagonalScale: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.74944 1H8.99944V2.5H9.74944H12.4388L9.46911 5.46967L8.93878 6L9.99944 7.06066L10.5298 6.53033L13.4983 3.56182V6.25V7H14.9983V6.25V2C14.9983 1.44772 14.5506 1 13.9983 1H9.74944ZM2.50195 12.4382V9.75V9H1.00195V9.75V14C1.00195 14.5523 1.44967 15 2.00195 15H6.25079H7.00079V13.5H6.25079H3.56145L6.53112 10.5303L7.06145 10L6.00079 8.93934L5.47046 9.46967L2.50195 12.4382Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ArrowUpDiagonalScale.propTypes = {
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


export default ArrowUpDiagonalScale