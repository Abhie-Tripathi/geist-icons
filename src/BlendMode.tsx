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

const BlendMode: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.9923 9.9923C9.91219 9.99741 9.8314 10 9.75 10C7.67893 10 6 8.32107 6 6.25C6 6.1686 6.00259 6.08781 6.0077 6.0077C6.08781 6.0026 6.1686 6 6.25 6C8.32107 6 10 7.67893 10 9.75C10 9.8314 9.99741 9.91219 9.9923 9.9923ZM11.4969 9.56909C11.4036 6.81342 9.18658 4.59637 6.43091 4.50306C7.05913 3.31194 8.30974 2.5 9.75 2.5C11.8211 2.5 13.5 4.17893 13.5 6.25C13.5 7.69026 12.6881 8.94087 11.4969 9.56909ZM11.2751 11.2751C13.4308 10.6217 15 8.61909 15 6.25C15 3.35051 12.6495 1 9.75 1C7.38091 1 5.37832 2.56921 4.72494 4.72494C2.56921 5.37832 1 7.38091 1 9.75C1 12.6495 3.35051 15 6.25 15C8.61909 15 10.6217 13.4308 11.2751 11.2751ZM9.56909 11.4969C6.81342 11.4036 4.59637 9.18658 4.50306 6.43091C3.31194 7.05913 2.5 8.30974 2.5 9.75C2.5 11.8211 4.17893 13.5 6.25 13.5C7.69026 13.5 8.94087 12.6881 9.56909 11.4969Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


BlendMode.defaultProps = {
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


BlendMode.propTypes = {
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


export default BlendMode