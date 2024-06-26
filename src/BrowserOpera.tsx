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

const BrowserOpera: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.124969 8.00014C0.124969 3.651 3.65068 0.125282 7.99983 0.125282L8.01475 0.125302L8.0271 0.125319H8.02942V0.125324C10.0341 0.132768 11.8627 0.889889 13.2486 2.12968L13.2486 2.12972C14.859 3.57062 15.875 5.66759 15.875 8.00053C15.875 10.3338 14.859 12.4298 13.2483 13.8708L13.2482 13.8709C11.8555 15.1163 10.0159 15.875 7.99993 15.875C7.87317 15.875 7.74845 15.8717 7.6253 15.8659C3.44984 15.6703 0.124969 12.2236 0.124969 8.00014ZM7.99983 1.37528C4.34104 1.37528 1.37497 4.34135 1.37497 8.00014C1.37497 11.5529 4.17205 14.4527 7.6838 14.6172L7.68399 14.6173C7.79019 14.6223 7.89518 14.625 7.99993 14.625C8.03505 14.625 8.0701 14.6248 8.10508 14.6242C6.92485 14.233 5.89648 13.4732 5.12728 12.4785C4.22579 11.4082 3.67054 9.87054 3.63256 8.18488L3.63224 8.1708H3.6324V7.82938V7.81531L3.63256 7.81531C3.67052 6.12973 4.22574 4.59174 5.1271 3.52165C5.89631 2.52713 6.92454 1.7673 8.10458 1.37608C8.07818 1.37567 8.05175 1.37542 8.02527 1.37532C8.02511 1.37532 8.02494 1.37532 8.02478 1.37532L8.01218 1.3753L7.99983 1.37528ZM12.4489 3.09169C11.7037 2.60682 10.8426 2.33226 9.92614 2.33226C9.79092 2.33226 9.65681 2.33825 9.52403 2.35004C10.2164 2.66681 10.8168 3.19947 11.2874 3.85772C12.063 4.94255 12.5232 6.40923 12.5232 8.00048C12.5232 9.59173 12.063 11.0584 11.2874 12.1432C10.8171 12.801 10.2171 13.3334 9.52543 13.6502C9.65782 13.662 9.79152 13.6679 9.92634 13.6679C10.8425 13.6679 11.7034 13.3934 12.4486 12.9088C13.7861 11.6958 14.625 9.94671 14.625 8.00053C14.625 6.0545 13.786 4.30455 12.4489 3.09169ZM8.07681 3.28079C7.36234 3.28079 6.66589 3.63896 6.09036 4.31839L6.09034 4.31841C5.39541 5.1387 4.91637 6.39137 4.8824 7.83657V8.16362C4.9164 9.60882 5.39541 10.8612 6.09054 11.6818L6.09062 11.6819C6.66617 12.3615 7.36263 12.7202 8.07681 12.7202C8.87812 12.7202 9.66226 12.267 10.2705 11.4162C10.878 10.5666 11.2732 9.36098 11.2732 8.00048C11.2732 6.63996 10.878 5.4343 10.2706 4.58472C9.66233 3.73399 8.87819 3.28079 8.07681 3.28079Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


BrowserOpera.propTypes = {
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


export default BrowserOpera