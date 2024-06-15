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

const SkipForward: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.603 7.11102L10.6345 7.13103L11.2174 7.50201L11.6686 7.78909C11.8229 7.88733 11.8229 8.11268 11.6686 8.21092L11.2174 8.498L10.6345 8.86898L10.603 8.88899L2.5 14.0455L2.4192 14.0969L1.71566 14.5446L1.38422 14.7555C1.21779 14.8614 1 14.7419 1 14.5446V14.1517V13.3178V13.222V2.77797V2.6822V1.84828V1.45542C1 1.25815 1.21779 1.1386 1.38422 1.24451L1.71566 1.45542L2.4192 1.90313L2.5 1.95455L10.603 7.11102ZM2.5 3.73251L9.20606 8.00001L2.5 12.2675L2.5 3.73251ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SkipForward.defaultProps = {
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


SkipForward.propTypes = {
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


export default SkipForward