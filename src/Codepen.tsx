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

const Codepen: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 0.0994263L8.40611 0.360987L15.6561 5.03048L16 5.25197V5.66102V10.3305V10.7396L15.6561 10.961L8.40611 15.6305L8 15.8921L7.59389 15.6305L0.343892 10.961L0 10.7396V10.3305V5.66102V5.25197L0.343892 5.03048L7.59389 0.360987L8 0.0994263ZM1.5 9.16029L3.24781 7.99577L1.5 6.83124V9.16029ZM2.0654 5.70591L4.375 7.24474L7.375 5.24591L7.375 2.28616L2.0654 5.70591ZM11.625 7.24474L8.625 5.24591V2.28616L13.9346 5.70591L11.625 7.24474ZM14.5 6.83124L12.7522 7.99577L14.5 9.16029V6.83124ZM10.4978 7.99577L8 6.33153L5.50219 7.99577L8 9.66L10.4978 7.99577ZM7.375 10.7456L4.375 8.74679L2.0654 10.2856L7.375 13.7054V10.7456ZM8.625 13.7054L13.9346 10.2856L11.625 8.74679L8.625 10.7456V13.7054Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Codepen.defaultProps = {
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


Codepen.propTypes = {
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


export default Codepen