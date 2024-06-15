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

const ShieldOff: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.55088 2.49023L3.57718 2.48334L3.71501 2.44727C4.64252 2.20472 5.53322 1.9718 6.21718 1.58176C6.88688 1.19985 7.24999 0.734016 7.24999 0H8.74999C8.74999 0.467199 8.89462 0.796772 9.12197 1.06132C9.36429 1.34329 9.73044 1.58432 10.2142 1.79681C10.6962 2.00853 11.2465 2.17155 11.8221 2.32558C11.9557 2.36133 12.0926 2.39704 12.2305 2.43301L12.2307 2.43305C12.6631 2.54586 13.1054 2.66124 13.4872 2.78849L14 2.95943V3.5V9.52717C14 10.4875 13.7378 11.409 13.2657 12.205L15.2803 14.2197L15.8107 14.75L14.75 15.8107L14.2197 15.2803L0.719661 1.78033L0.189331 1.25L1.24999 0.18934L1.78032 0.71967L3.55088 2.49023ZM12.1563 11.0956C12.379 10.6121 12.5 10.0787 12.5 9.52717V4.057C12.3094 4.00405 12.1074 3.9513 11.8932 3.89539C11.746 3.85699 11.5932 3.81709 11.4344 3.7746C10.8476 3.61758 10.204 3.43065 9.611 3.17017C9.02648 2.91343 8.44302 2.56509 7.99961 2.0566C7.70515 2.39333 7.34541 2.66513 6.96024 2.88478C6.29476 3.26428 5.5048 3.51732 4.77804 3.71738L12.1563 11.0956ZM3.49999 7.25V6.5H1.99999V7.25V9.52717C1.99999 11.4801 3.08399 13.2716 4.81395 14.1778L7.65199 15.6644L7.99999 15.8467L8.348 15.6644L9.50872 15.0564L10.1731 14.7084L9.47708 13.3796L8.81271 13.7276L7.99999 14.1533L5.50996 12.849C4.27428 12.2018 3.49999 10.9221 3.49999 9.52717V7.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ShieldOff.defaultProps = {
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


ShieldOff.propTypes = {
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


export default ShieldOff