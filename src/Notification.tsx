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

const Notification: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 3C14.5 3.82843 13.8284 4.5 13 4.5C12.1716 4.5 11.5 3.82843 11.5 3C11.5 2.17157 12.1716 1.5 13 1.5C13.8284 1.5 14.5 2.17157 14.5 3ZM13.5 5.95852C13.3374 5.9858 13.1704 6 13 6C11.3431 6 10 4.65685 10 3C10 2.82964 10.0142 2.6626 10.0415 2.5H4.75C3.50736 2.5 2.5 3.50736 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V5.95852ZM15 5.23611V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1 2.67893 2.67893 1 4.75 1H10.7639C11.3132 0.386251 12.1115 0 13 0C14.6569 0 16 1.34315 16 3C16 3.8885 15.6137 4.68679 15 5.23611Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Notification.propTypes = {
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


export default Notification