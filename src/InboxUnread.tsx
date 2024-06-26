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

const InboxUnread: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2892 6.07849L15.8944 7.28885C15.9639 7.42771 16 7.58082 16 7.73607V12C16 13.3807 14.8807 14.5 13.5 14.5H2.5C1.11929 14.5 0 13.3807 0 12V7.73607C0 7.58082 0.0361451 7.42771 0.105573 7.28885L3 1.5H9.62602C9.54375 1.81962 9.5 2.1547 9.5 2.5C9.5 2.66933 9.51052 2.8362 9.53095 3H3.92705L1.67705 7.5H6H6.75V8.25C6.75 8.94036 7.30964 9.5 8 9.5C8.69036 9.5 9.25 8.94036 9.25 8.25V7.5H10H14.3229L13.8168 6.48764C14.3427 6.44643 14.8401 6.3035 15.2892 6.07849ZM1.5 12V9H5.35352C5.67998 10.1543 6.74122 11 8 11C9.25878 11 10.32 10.1543 10.6465 9H14.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


InboxUnread.propTypes = {
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


export default InboxUnread