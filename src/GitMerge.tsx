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

const GitMerge: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M4 6.25V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12ZM9.079 12.6869C9.38957 14.0127 10.5795 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.6293 9 9.47333 9.91924 9.1149 11.1749C8.05096 10.9929 7.0611 10.4857 6.28769 9.71231C5.51428 8.9389 5.0071 7.94904 4.82513 6.8851C6.08076 6.52667 7 5.37069 7 4C7 2.34315 5.65685 1 4 1C2.34315 0.999999 1 2.34315 1 4C1 5.42051 1.98728 6.61042 3.3131 6.921C3.51279 8.37102 4.18025 9.72619 5.22703 10.773C6.2738 11.8197 7.62898 12.4872 9.079 12.6869ZM2.5 4C2.5 4.82843 3.17157 5.5 4 5.5C4.82843 5.5 5.5 4.82843 5.5 4C5.5 3.17157 4.82843 2.5 4 2.5C3.17157 2.5 2.5 3.17157 2.5 4Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


GitMerge.defaultProps = {
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


GitMerge.propTypes = {
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


export default GitMerge