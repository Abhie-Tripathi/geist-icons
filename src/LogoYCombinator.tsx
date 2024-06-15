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

const LogoYCombinator: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M16 0H0V16H16V0Z" fill="#FB651E"></path>
                                <path d="M7.46089 9.04661L4.7146 3.90197H5.96969L7.58516 7.15776C7.61001 7.21575 7.63901 7.27581 7.67215 7.33795C7.70528 7.40008 7.73428 7.46428 7.75913 7.53056C7.7757 7.55541 7.78813 7.5782 7.79641 7.59891C7.8047 7.61962 7.81298 7.63826 7.82127 7.65483C7.86269 7.73767 7.89997 7.81844 7.93311 7.89715C7.96624 7.97585 7.99524 8.04834 8.02009 8.11461C8.08637 7.97378 8.15886 7.82259 8.23756 7.66104C8.31626 7.49949 8.39703 7.33173 8.47988 7.15776L10.1202 3.90197H11.2883L8.51716 9.10875V12.4267H7.46089V9.04661Z" fill="white"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoYCombinator.defaultProps = {
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


LogoYCombinator.propTypes = {
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


export default LogoYCombinator