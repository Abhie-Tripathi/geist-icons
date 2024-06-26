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

const Droplet: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.47471 5.7366L8 2.14221L11.5253 5.73661C13.4916 7.74143 13.4916 11.0037 11.5253 13.0086C9.57493 14.9971 6.42507 14.9971 4.47471 13.0086C2.50843 11.0037 2.50843 7.74143 4.47471 5.7366ZM3.40381 4.68629L6.94949 1.07111L8 0L9.05051 1.07111L12.5962 4.68629C15.1346 7.27446 15.1346 11.4707 12.5962 14.0589C10.0578 16.647 5.94221 16.647 3.40381 14.0589C0.865397 11.4707 0.865399 7.27446 3.40381 4.68629ZM11.25 9.5V8.75H9.75V9.5C9.75 10.4665 8.9665 11.25 8 11.25H7.25V12.75H8C9.79493 12.75 11.25 11.2949 11.25 9.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Droplet.propTypes = {
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


export default Droplet