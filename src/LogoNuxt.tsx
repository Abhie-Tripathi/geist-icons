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

const LogoNuxt: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M8.97614 13.3333H14.924C15.1129 13.3333 15.2985 13.2841 15.4621 13.1905C15.6257 13.0968 15.7616 12.9621 15.856 12.8C15.9504 12.6378 16.0001 12.4538 16 12.2666C15.9999 12.0794 15.9501 11.8955 15.8555 11.7334L11.8611 4.87625C11.7667 4.71411 11.6309 4.57946 11.4673 4.48585C11.3037 4.39225 11.1182 4.34295 10.9293 4.34295C10.7404 4.34295 10.5549 4.39225 10.3913 4.48585C10.2277 4.57946 10.0919 4.71411 9.99751 4.87625L8.97614 6.63074L6.97922 3.19987C6.88473 3.03776 6.74885 2.90313 6.58524 2.80953C6.42162 2.71594 6.23604 2.66666 6.04713 2.66666C5.85822 2.66666 5.67264 2.71594 5.50903 2.80953C5.3454 2.90313 5.20953 3.03776 5.11504 3.19987L0.144471 11.7334C0.0499099 11.8955 8.22996e-05 12.0794 1.01863e-07 12.2666C-8.20958e-05 12.4538 0.0495838 12.6378 0.144003 12.8C0.238421 12.9621 0.374263 13.0968 0.537867 13.1905C0.701468 13.2841 0.887063 13.3333 1.07598 13.3333H4.80956C6.28885 13.3333 7.37977 12.6893 8.13042 11.4329L9.95287 8.3048L10.929 6.63074L13.8586 11.6593H9.95287L8.97614 13.3333ZM4.74869 11.6575L2.14313 11.657L6.04887 4.95264L7.99769 8.3048L6.69287 10.5453C6.19436 11.3605 5.62804 11.6575 4.74869 11.6575Z" fill="#00DC82"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoNuxt.defaultProps = {
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


LogoNuxt.propTypes = {
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


export default LogoNuxt