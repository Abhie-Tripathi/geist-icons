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

const Inspect: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.75 13.5H2.5L2.5 2.5L13.5 2.5V4.75V5.5H15V4.75V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44771 1 2V14C1 14.5523 1.44771 15 2 15H4.75H5.5V13.5H4.75ZM7.5 13.4252V12.6752V8.50054C7.5 7.94825 7.94771 7.50054 8.5 7.50054H12.6746H13.4246V9.00054H12.6746H10.0606L15.0298 13.9697L15.5601 14.5L14.4995 15.5607L13.9691 15.0303L9 10.0612V12.6752V13.4252H7.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Inspect.propTypes = {
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


export default Inspect