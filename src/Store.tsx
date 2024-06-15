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

const Store: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.7496 1.89953C13.2746 1.32956 12.571 1 11.8291 1H4.17093C3.42897 1 2.72535 1.32956 2.25037 1.89955L1.07944 3.30467C0.705039 3.75395 0.5 4.32028 0.5 4.90512V5V13.5V15H2H6.04951H9.95049H14H15.5V13.5V5V4.90513C15.5 4.32029 15.295 3.75395 14.9205 3.30466L13.7496 1.89953ZM14 5V4.90513C14 4.67119 13.918 4.44466 13.7682 4.26494L14.9205 3.30466L13.7682 4.26494L12.5973 2.85981C12.4073 2.63182 12.1258 2.5 11.8291 2.5H4.17093C3.87415 2.5 3.5927 2.63182 3.4027 2.85982L2.23178 4.26494C2.08202 4.44465 2 4.67119 2 4.90512V5C2 5.82843 2.67157 6.5 3.5 6.5C4.32843 6.5 5 5.82843 5 5H6.5C6.5 5.82843 7.17157 6.5 8 6.5C8.82843 6.5 9.5 5.82843 9.5 5H11C11 5.82843 11.6716 6.5 12.5 6.5C13.3284 6.5 14 5.82843 14 5ZM14 7.59865C13.5587 7.85391 13.0464 8 12.5 8C11.604 8 10.7997 7.60718 10.25 6.98437C9.70029 7.60718 8.89602 8 8 8C7.10398 8 6.29971 7.60718 5.75 6.98437C5.20029 7.60718 4.39602 8 3.5 8C2.95357 8 2.44126 7.85391 2 7.59865V13.5H6V12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12V13.5H14V7.59865ZM8.5 12V13.5H7.5V12C7.5 11.7239 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.7239 8.5 12Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Store.defaultProps = {
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


Store.propTypes = {
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


export default Store