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

const PreviewEye: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.02174 4.76932C6.11625 2.33698 9.8838 2.33698 11.9783 4.76932L14.7603 7.99999L13.6664 9.27031L14.6934 10.3764L16.3184 8.48938V7.5106L13.115 3.79054C10.422 0.663244 5.57803 0.663247 2.88509 3.79054L-0.318298 7.5106V8.48938L2.88509 12.2094C4.7342 14.3568 7.59749 15.0297 10.0822 14.2281L8.9183 12.9747C7.16767 13.2832 5.28865 12.7019 4.02174 11.2307L1.23978 7.99999L4.02174 4.76932ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 8.63488 11.331 9.23028 11.0354 9.74364L14.0496 12.9897L14.5599 13.5393L13.4607 14.5599L12.9504 14.0103L10.0223 10.857C9.4512 11.262 8.7534 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


PreviewEye.propTypes = {
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


export default PreviewEye