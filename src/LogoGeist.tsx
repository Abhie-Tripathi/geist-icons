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

const LogoGeist: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 4C8.82843 4 9.5 3.32843 9.5 2.5C9.5 1.67157 8.82843 1 8 1C7.17157 1 6.5 1.67157 6.5 2.5C6.5 3.32843 7.17157 4 8 4ZM8.97125 4.75725L9.57125 5.75725L10.4287 5.24275L9.82875 4.24275L8.97125 4.75725ZM6.42875 5.75725L7.02875 4.75725L6.17125 4.24275L5.57125 5.24275L6.42875 5.75725ZM10.1713 6.75725L10.7713 7.75725L11.6287 7.24275L11.0287 6.24275L10.1713 6.75725ZM5.22875 7.75725L5.82875 6.75725L4.97125 6.24275L4.37125 7.24275L5.22875 7.75725ZM11.3713 8.75725L11.9713 9.75725L12.8287 9.24275L12.2287 8.24275L11.3713 8.75725ZM4.02875 9.75725L4.62875 8.75725L3.77125 8.24275L3.17125 9.24275L4.02875 9.75725ZM12.5713 10.7572L13.1713 11.7572L14.0287 11.2428L13.4287 10.2428L12.5713 10.7572ZM2.82875 11.7572L3.42875 10.7572L2.57125 10.2428L1.97125 11.2428L2.82875 11.7572ZM3 13.5C3 13.8133 2.90396 14.1041 2.73971 14.3447V14.5H2.61805C2.34339 14.8069 1.94425 15 1.5 15C0.671573 15 0 14.3284 0 13.5C0 12.6716 0.671573 12 1.5 12C2.32843 12 3 12.6716 3 13.5ZM3.925 14.5H5.1103V13.5H3.925V14.5ZM6.29559 14.5H7.48089V13.5H6.29559V14.5ZM8.66618 14.5H9.85147V13.5H8.66618V14.5ZM11.0368 14.5H12.2221V13.5H11.0368V14.5ZM14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoGeist.defaultProps = {
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


LogoGeist.propTypes = {
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


export default LogoGeist