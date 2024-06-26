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

const WebcamOff: React.FC<AccessibilityProps> = ({
  style = {},
  color = '#000000',
  height = '20px',
  width = '20px',
  className = '',
  cssClasses = '',
  title = '',
  shake = false,
  beat = false,
  rotate = false,
  onClick,

}) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      rotate={rotate ? true : false}
      shake={shake ? true : false}
      beat={beat ? true : false}
      className={className}
    >
      <svg style={style} className={cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 11.75V2H1.71047L10.3321 12.7771L11.6391 14.3616L12.1164 14.9401L10.9592 15.8946L10.482 15.3161L9.39642 14H2.25C1.00736 14 0 12.9926 0 11.75ZM8.18953 12.5L1.5 4.13809V11.75C1.5 12.1642 1.83579 12.5 2.25 12.5H8.18953ZM4.75 2H5.5H10.75H11.5V2.75V4.625L14.5 2.875L16 2V3.73656V12.2634V14L14.5 13.125L10.9923 11.0788C10.3778 10.7204 10 10.0626 10 9.35126V9.25V5.5V3.5H5.5H4.75V2ZM11.5 9.25V6.36156L14.5 4.61156V11.3884L11.7481 9.78315C11.5945 9.69354 11.5 9.52909 11.5 9.35126V9.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


WebcamOff.propTypes = {
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


export default WebcamOff