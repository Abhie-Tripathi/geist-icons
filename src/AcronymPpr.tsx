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

const AcronymPpr: React.FC<AccessibilityProps> = ({
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
      <svg style={style} className={cssClasses}   strokeLinejoin="round"  viewBox="0 0 20 16" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.25H17.5C18.1904 2.25 18.75 2.80964 18.75 3.5V12.5C18.75 13.1904 18.1904 13.75 17.5 13.75H2.5C1.80964 13.75 1.25 13.1904 1.25 12.5V3.5C1.25 2.80964 1.80964 2.25 2.5 2.25ZM0 3.5C0 2.11929 1.11929 1 2.5 1H17.5C18.8807 1 20 2.11929 20 3.5V12.5C20 13.8807 18.8807 15 17.5 15H2.5C1.11929 15 0 13.8807 0 12.5V3.5ZM14.5 11V9.16841C15.0912 9.44927 15.5 10.0519 15.5 10.75V11H17V10.75C17 9.96416 16.7211 9.24347 16.2569 8.68151C16.7064 8.36477 17 7.84167 17 7.25V6.75C17 5.7835 16.2165 5 15.25 5H14.5H13.75H13V5.75V8.25V9V11H14.5ZM15.25 7.5H14.5V6.5H15.25C15.3881 6.5 15.5 6.61193 15.5 6.75V7.25C15.5 7.38807 15.3881 7.5 15.25 7.5ZM4.5 9V11H3V9V8.25V5.75V5H3.75H4.5H5.25C6.2165 5 7 5.7835 7 6.75V7.25C7 8.2165 6.2165 9 5.25 9H4.5ZM4.5 7.5H5.25C5.38807 7.5 5.5 7.38807 5.5 7.25V6.75C5.5 6.61193 5.38807 6.5 5.25 6.5H4.5V7.5ZM9.55 11V9H10.3C11.2665 9 12.05 8.2165 12.05 7.25V6.75C12.05 5.7835 11.2665 5 10.3 5H9.55H8.8H8.05V5.75V8.25V9V11H9.55ZM10.3 7.5H9.55V6.5H10.3C10.4381 6.5 10.55 6.61193 10.55 6.75V7.25C10.55 7.38807 10.4381 7.5 10.3 7.5Z" fill="currentColor" ></path>
                              </svg>
    </SvgContainer>
  )
}


AcronymPpr.propTypes = {
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


export default AcronymPpr