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

const CrossSmall: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.96966 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96966L9.06065 7.99999L11.0303 6.03032L11.5607 5.49999L10.5 4.43933L9.96966 4.96966L7.99999 6.93933L6.03032 4.96966L5.49999 4.43933L4.43933 5.49999L4.96966 6.03032L6.93933 7.99999L4.96966 9.96966L4.43933 10.5L5.49999 11.5607L6.03032 11.0303L7.99999 9.06065L9.96966 11.0303Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CrossSmall.defaultProps = {
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


CrossSmall.propTypes = {
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


export default CrossSmall