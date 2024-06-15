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

const Notes: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 2.5H3V4.5H13V2.5ZM3 7.5V5.75H4.75L4.75 7.5H3ZM4.75 8.75H3V10.5H4.75V8.75ZM6 10.5L6 8.75H13V10.5H6ZM4.75 11.75H3V12.5C3 13.0523 3.44772 13.5 4 13.5H4.75V11.75ZM6 13.5V11.75H13V12.5C13 13.0523 12.5523 13.5 12 13.5H6ZM6 7.5V5.75H13V7.5H6ZM3 1H1.5V2.5V12.5C1.5 13.8807 2.61929 15 4 15H12C13.3807 15 14.5 13.8807 14.5 12.5V2.5V1H13H3Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Notes.defaultProps = {
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


Notes.propTypes = {
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


export default Notes