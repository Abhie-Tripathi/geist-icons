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

const FunctionRectangleFill: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M1 0H15V13.5C15 14.8807 13.8807 16 12.5 16H3.5C2.11929 16 1 14.8807 1 13.5V0ZM9.75 4.5C9.19772 4.5 8.75 4.94772 8.75 5.5V6.5H9.75H10.5V8H9.75H8.75V10.5C8.75 11.8807 7.63071 13 6.25 13H5.5V11.5H6.25C6.80228 11.5 7.25 11.0523 7.25 10.5V8H6.25H5.5V6.5H6.25H7.25V5.5C7.25 4.11929 8.36929 3 9.75 3H10.5V4.5H9.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


FunctionRectangleFill.defaultProps = {
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


FunctionRectangleFill.propTypes = {
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


export default FunctionRectangleFill