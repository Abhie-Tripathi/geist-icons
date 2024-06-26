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

const LoaderCircle: React.FC<AccessibilityProps> = ({
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
                                <g clip-path="url(#clip0_2393_1490)">
                                  <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.5" d="M8 16V12" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.9" d="M3.29773 1.52783L5.64887 4.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.1" d="M12.7023 1.52783L10.3511 4.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.4" d="M12.7023 14.472L10.3511 11.236" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.6" d="M3.29773 14.472L5.64887 11.236" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.2" d="M15.6085 5.52783L11.8043 6.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.7" d="M0.391602 10.472L4.19583 9.23598" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.3" d="M15.6085 10.4722L11.8043 9.2361" stroke="currentColor" strokeWidth="1.5"></path>
                                  <path opacity="0.8" d="M0.391602 5.52783L4.19583 6.7639" stroke="currentColor" strokeWidth="1.5"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_2393_1490">
                                    <rect   fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LoaderCircle.propTypes = {
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


export default LoaderCircle