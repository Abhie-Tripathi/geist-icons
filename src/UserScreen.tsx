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

const UserScreen: React.FC<AccessibilityProps> = (props) => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? true : false}
      shake={props.shake ? true : false}
      beat={props.beat ? true : false}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447716 0.447715 0 1 0H15C15.5523 0 16 0.447716 16 1V10C16 10.5523 15.5523 11 15 11H12.5V9.5H14.5V1.5H1.5V9.5H3.5V11H1C0.447715 11 0 10.5523 0 10V1ZM8 14C6.84509 14 5.76659 14.5772 5.12596 15.5381L5 15.7271V16H3.5V15.5V15.2729L3.62596 15.084L3.87789 14.7061C4.79671 13.3278 6.34356 12.5 8 12.5C9.65644 12.5 11.2033 13.3278 12.1221 14.7061L12.374 15.084L12.5 15.2729V15.5V16H11V15.7271L10.874 15.5381C10.2334 14.5772 9.15491 14 8 14ZM7.75 6C6.50736 6 5.5 7.00736 5.5 8.25V8.75C5.5 9.99264 6.50736 11 7.75 11H8.25C9.49264 11 10.5 9.99264 10.5 8.75V8.25C10.5 7.00736 9.49264 6 8.25 6H7.75ZM7 8.25C7 7.83579 7.33579 7.5 7.75 7.5H8.25C8.66421 7.5 9 7.83579 9 8.25V8.75C9 9.16421 8.66421 9.5 8.25 9.5H7.75C7.33579 9.5 7 9.16421 7 8.75V8.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


UserScreen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


UserScreen.propTypes = {
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


export default UserScreen