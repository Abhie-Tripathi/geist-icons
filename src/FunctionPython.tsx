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

const FunctionPython: React.FC<AccessibilityProps> = (props) => {
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
                                <g clip-path="url(#clip0_1534_28977)">
                                  <path d="M15.25 8V2.25C15.25 1.42157 14.5784 0.75 13.75 0.75H2.25C1.42157 0.75 0.75 1.42157 0.75 2.25V13.75C0.75 14.5784 1.42157 15.25 2.25 15.25H8" stroke="currentColor"  strokeWidth="1.5"></path>
                                  <path d="M9.24618 4.25V4.25C8.00565 4.25 7 5.25565 7 6.49618L7 9.50439C7 10.7446 5.99461 11.75 4.75439 11.75V11.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                  <path d="M5.25 7.75H8.75" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="square"></path>
                                  <path d="M14 15C14 15.5523 13.5523 16 13 16L12.5 16C11.9477 16 11.5 15.5523 11.5 15L11.5 13.5C11.5 12.9477 11.9477 12.5 12.5 12.5C13.0523 12.5 13.5 12.0523 13.5 11.5L13.5 11L14.25 11C15.2165 11 16 11.7835 16 12.75C16 13.7165 15.2165 14.5 14.25 14.5L14 14.5L14 15Z" fill="#FFC700" ></path>
                                  <path d="M11 10C11 9.44772 11.4477 9 12 9H12.5C13.0523 9 13.5 9.44772 13.5 10V11.5C13.5 12.0523 13.0523 12.5 12.5 12.5C11.9477 12.5 11.5 12.9477 11.5 13.5V14H10.75C9.7835 14 9 13.2165 9 12.25C9 11.2835 9.7835 10.5 10.75 10.5H11V10Z" fill="#338ED8" ></path>
                                </g>
                              </svg>
    </SvgContainer>
  )
}


FunctionPython.defaultProps = {
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


FunctionPython.propTypes = {
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


export default FunctionPython