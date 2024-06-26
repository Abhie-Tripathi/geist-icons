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

const Hook: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2.75C3.5 2.05964 4.05964 1.5 4.75 1.5C5.44036 1.5 6 2.05964 6 2.75C6 3.44036 5.44036 4 4.75 4C4.05964 4 3.5 3.44036 3.5 2.75ZM4.75 0C3.23122 0 2 1.23122 2 2.75C2 4.00878 2.84575 5.07002 4 5.39648V11.25C4 13.8734 6.12665 16 8.75 16H9.25C11.8734 16 14 13.8734 14 11.25V4.25V2.43934L12.7197 3.71967L10.4697 5.96967L9.93934 6.5L11 7.56066L11.5303 7.03033L12.5 6.06066V11.25C12.5 13.0449 11.0449 14.5 9.25 14.5H8.75C6.95507 14.5 5.5 13.0449 5.5 11.25V5.39648C6.65425 5.07002 7.5 4.00878 7.5 2.75C7.5 1.23122 6.26878 0 4.75 0Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Hook.propTypes = {
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


export default Hook