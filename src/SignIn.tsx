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

const SignIn: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 2.5L9.25 2.5V1H14C14.5523 1 15 1.44771 15 2L15 14C15 14.5523 14.5523 15 14 15H9.25V13.5H13.5L13.5 2.5ZM8.43934 7.24999L6.46967 5.28031L5.93934 4.74998L7 3.68932L7.53033 4.21965L10.6036 7.29288C10.9941 7.6834 10.9941 8.31657 10.6036 8.70709L7.53033 11.7803L7 12.3106L5.93934 11.25L6.46967 10.7197L8.43934 8.74999L1.75 8.74999H1V7.24999H1.75L8.43934 7.24999Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SignIn.propTypes = {
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


export default SignIn