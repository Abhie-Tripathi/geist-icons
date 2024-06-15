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

const LogoMastercard: React.FC<AccessibilityProps> = (props) => {
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
                                <g clip-path="url(#clip0_4898_1881)">
                                  <path d="M0 0H16V16H0V0Z" fill="black" ></path>
                                  <path d="M6.04466 10.9333C6.42987 10.9333 6.81131 10.8575 7.1672 10.7101C7.52309 10.5626 7.84646 10.3466 8.11884 10.0742C8.39123 9.80181 8.60729 9.47844 8.75471 9.12255C8.90212 8.76666 8.97799 8.38523 8.97799 8.00001C8.97799 7.6148 8.90212 7.23336 8.75471 6.87748C8.60729 6.52159 8.39123 6.19822 8.11884 5.92583C7.84646 5.65345 7.52309 5.43738 7.1672 5.28997C6.81131 5.14255 6.42987 5.06668 6.04466 5.06668C5.26669 5.06668 4.52059 5.37573 3.97048 5.92583C3.42037 6.47594 3.11133 7.22205 3.11133 8.00001C3.11133 8.77798 3.42037 9.52409 3.97048 10.0742C4.52059 10.6243 5.26669 10.9333 6.04466 10.9333Z" fill="#EB001B" ></path>
                                  <path d="M9.95579 10.9333C10.341 10.9333 10.7224 10.8575 11.0783 10.7101C11.4342 10.5626 11.7576 10.3466 12.03 10.0742C12.3024 9.80181 12.5184 9.47844 12.6658 9.12255C12.8133 8.76666 12.8891 8.38523 12.8891 8.00001C12.8891 7.6148 12.8133 7.23336 12.6658 6.87748C12.5184 6.52159 12.3024 6.19822 12.03 5.92583C11.7576 5.65345 11.4342 5.43738 11.0783 5.28997C10.7224 5.14255 10.341 5.06668 9.95579 5.06668C9.17783 5.06668 8.43172 5.37573 7.88161 5.92583C7.33151 6.47594 7.02246 7.22205 7.02246 8.00001C7.02246 8.77798 7.33151 9.52409 7.88161 10.0742C8.43172 10.6243 9.17783 10.9333 9.95579 10.9333Z" fill="#F79E1B" ></path>
                                  <path d="M8.00024 10.1867C8.30834 9.91184 8.55475 9.57491 8.72328 9.19802C8.8918 8.82114 8.97862 8.41284 8.97802 7.99999C8.97862 7.58714 8.8918 7.17884 8.72328 6.80196C8.55475 6.42507 8.30834 6.08814 8.00024 5.81332C7.69228 6.08825 7.44596 6.4252 7.27744 6.80206C7.10892 7.17892 7.02203 7.58717 7.02246 7.99999C7.02186 8.41284 7.10868 8.82114 7.27721 9.19802C7.44573 9.57491 7.69215 9.91184 8.00024 10.1867Z" fill="#FF5F00" ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_4898_1881">
                                    <rect   rx="2" fill="white" ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoMastercard.defaultProps = {
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


LogoMastercard.propTypes = {
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


export default LogoMastercard