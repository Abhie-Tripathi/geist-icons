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

const MenuAltUnread: React.FC<AccessibilityProps> = ({
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
                                <circle cx="13.5" cy="2.5" r="2.5" fill="var(--ds-blue-900)"></circle>
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.53095 2H1.75H1V3.5H1.75H9.62602C9.54375 3.18038 9.5 2.8453 9.5 2.5C9.5 2.33067 9.51052 2.1638 9.53095 2ZM1.75 12H1V13.5H1.75H14.25H15V12H14.25H1.75ZM1 7H1.75H14.25H15V8.5H14.25H1.75H1V7Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


MenuAltUnread.propTypes = {
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


export default MenuAltUnread