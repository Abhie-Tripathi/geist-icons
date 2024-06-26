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

const GitPullRequest: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5.5C3.17157 5.5 2.5 4.82843 2.5 4C2.5 3.17157 3.17157 2.5 4 2.5C4.82843 2.5 5.5 3.17157 5.5 4C5.5 4.82843 4.82843 5.5 4 5.5ZM4.75 6.90549C6.04392 6.57245 7 5.39788 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.39788 1.95608 6.57245 3.25 6.90549V14.25V15H4.75V14.25V6.90549ZM9.5 3.25H8.75V4.75H9.5H11C11.1381 4.75 11.25 4.86193 11.25 5V9.09451C9.95608 9.42754 9 10.6021 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.6021 14.0439 9.42754 12.75 9.09451V5C12.75 4.0335 11.9665 3.25 11 3.25H9.5ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


GitPullRequest.propTypes = {
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


export default GitPullRequest