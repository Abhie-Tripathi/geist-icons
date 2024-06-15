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

const SkipBack: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.14697 7.11102L5.11553 7.13103L4.53256 7.50201L4.08144 7.78909C3.92706 7.88733 3.92706 8.11268 4.08144 8.21092L4.53256 8.498L5.11553 8.86898L5.14697 8.88899L13.25 14.0455L13.3308 14.0969L14.0343 14.5446L14.3658 14.7555C14.5322 14.8614 14.75 14.7419 14.75 14.5446V14.1517V13.3178V13.222L14.75 2.77797V2.6822V1.84828V1.45542C14.75 1.25815 14.5322 1.1386 14.3658 1.24451L14.0343 1.45542L13.3308 1.90313L13.25 1.95455L5.14697 7.11102ZM13.25 3.73251L6.54394 8.00001L13.25 12.2675L13.25 3.73251ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SkipBack.defaultProps = {
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


SkipBack.propTypes = {
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


export default SkipBack