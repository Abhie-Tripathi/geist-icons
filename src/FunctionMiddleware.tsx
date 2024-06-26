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

const FunctionMiddleware: React.FC<AccessibilityProps> = ({
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
                                <g clip-path="url(#clip0_53_135u27hv0egu)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2.25 0C1.00736 0 0 1.00736 0 2.25V13.75C0 14.9926 1.00736 16 2.25 16H13.75C14.9926 16 16 14.9926 16 13.75V2.25C16 1.00736 14.9926 0 13.75 0H2.25ZM1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H13.75C14.1642 1.5 14.5 1.83579 14.5 2.25V13.75C14.5 14.1642 14.1642 14.5 13.75 14.5H2.25C1.83579 14.5 1.5 14.1642 1.5 13.75V2.25ZM5.5 10V7.125C5.5 6.64175 5.89175 6.25 6.375 6.25C6.85825 6.25 7.25 6.64175 7.25 7.125V10.5V11.25H8.75V10.5V7.125V7.12497C8.75 6.64172 9.14175 6.24997 9.625 6.24997C10.1082 6.24997 10.5 6.64172 10.5 7.12497V10.5V11.25H12V10.5V7.12497C12 5.81329 10.9367 4.74997 9.625 4.74997C8.99638 4.74997 8.42481 4.99419 7.99998 5.39292C7.57516 4.99421 7.0036 4.75 6.375 4.75C6.066 4.75 5.77078 4.80901 5.5 4.91638V4.75H4V5.5V7.125V10V10.5V10.75V11.25H5.5V10.75V10.5V10Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_53_135u27hv0egu">
                                    <rect   fill="currentColor"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


FunctionMiddleware.propTypes = {
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


export default FunctionMiddleware