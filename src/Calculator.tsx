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

const Calculator: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 1.5H3V4H13V1.5ZM3 13.5V5.25H13V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5ZM3 0H1.5V1.5V13.5C1.5 14.8807 2.61929 16 4 16H12C13.3807 16 14.5 14.8807 14.5 13.5V1.5V0H13H3ZM5.25 8C5.66421 8 6 7.66421 6 7.25C6 6.83579 5.66421 6.5 5.25 6.5C4.83579 6.5 4.5 6.83579 4.5 7.25C4.5 7.66421 4.83579 8 5.25 8ZM5.25 10.5C5.66421 10.5 6 10.1642 6 9.75C6 9.33579 5.66421 9 5.25 9C4.83579 9 4.5 9.33579 4.5 9.75C4.5 10.1642 4.83579 10.5 5.25 10.5ZM6 12.5C6 12.9142 5.66421 13.25 5.25 13.25C4.83579 13.25 4.5 12.9142 4.5 12.5C4.5 12.0858 4.83579 11.75 5.25 11.75C5.66421 11.75 6 12.0858 6 12.5ZM8 8C8.41421 8 8.75 7.66421 8.75 7.25C8.75 6.83579 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.83579 7.25 7.25C7.25 7.66421 7.58579 8 8 8ZM8.75 9.75C8.75 10.1642 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.1642 7.25 9.75C7.25 9.33579 7.58579 9 8 9C8.41421 9 8.75 9.33579 8.75 9.75ZM8 13.25C8.41421 13.25 8.75 12.9142 8.75 12.5C8.75 12.0858 8.41421 11.75 8 11.75C7.58579 11.75 7.25 12.0858 7.25 12.5C7.25 12.9142 7.58579 13.25 8 13.25ZM11.5 7.25C11.5 7.66421 11.1642 8 10.75 8C10.3358 8 10 7.66421 10 7.25C10 6.83579 10.3358 6.5 10.75 6.5C11.1642 6.5 11.5 6.83579 11.5 7.25ZM10.75 10.5C11.1642 10.5 11.5 10.1642 11.5 9.75C11.5 9.33579 11.1642 9 10.75 9C10.3358 9 10 9.33579 10 9.75C10 10.1642 10.3358 10.5 10.75 10.5ZM11.5 12.5C11.5 12.9142 11.1642 13.25 10.75 13.25C10.3358 13.25 10 12.9142 10 12.5C10 12.0858 10.3358 11.75 10.75 11.75C11.1642 11.75 11.5 12.0858 11.5 12.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Calculator.defaultProps = {
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


Calculator.propTypes = {
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


export default Calculator