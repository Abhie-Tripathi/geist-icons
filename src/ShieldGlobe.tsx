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

const ShieldGlobe: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M11.25 4.25V3.5C9.35033 2.86678 6 2.58921 6 0C6 2.58921 2.64967 2.86678 0.75 3.5V9.52717C0.75 11.2011 1.67915 12.7367 3.16197 13.5134L4.5 14.2143" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" fill="transparent"></path>
                                <circle cx="11.5" cy="11.5" r="3.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="transparent"></circle>
                                <path d="M8 11.5H15.25" stroke="currentColor" strokeLinejoin="bevel"></path>
                                <path d="M10.75 15V15C10.0964 12.7124 10.0964 10.2876 10.75 8V8" stroke="currentColor" strokeLinejoin="bevel"></path>
                                <path d="M12.25 15V15C12.9036 12.7124 12.9036 10.2876 12.25 8V8" stroke="currentColor" strokeLinejoin="bevel"></path>
                              </svg>
    </SvgContainer>
  )
}


ShieldGlobe.defaultProps = {
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


ShieldGlobe.propTypes = {
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


export default ShieldGlobe