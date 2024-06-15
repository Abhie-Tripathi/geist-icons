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

const LogoNewRelic: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M12.261 5.53863V10.4613L7.99854 12.9232V16L14.9272 12.0002V3.99973L12.261 5.53863Z" fill="#00AC69" ></path>
                                <path d="M7.99893 3.07782L12.2614 5.53866L14.9275 3.99976L7.99893 0L1.07031 3.99976L3.73547 5.53866L7.99893 3.07782Z" fill="#1CE783" ></path>
                                <path d="M5.33352 9.53937V14.4621L7.99868 16V8.00046L1.07007 3.99969V7.07751L5.33352 9.53937Z" fill="#1D252C" ></path>
                              </svg>
    </SvgContainer>
  )
}


LogoNewRelic.defaultProps = {
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


LogoNewRelic.propTypes = {
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


export default LogoNewRelic