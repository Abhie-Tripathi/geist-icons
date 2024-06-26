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

const SettingsSlider: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.77348 6.39779L4.75 7.5L3.72652 6.39779L1.76721 4.28776C1.59545 4.10279 1.5 3.85972 1.5 3.60731L1.5 0.999999C1.5 0.447715 1.94772 0 2.5 0H7C7.55229 0 8 0.447715 8 1L8 3.60731C8 3.85972 7.90455 4.1028 7.73279 4.28776L5.77348 6.39779ZM6.5 3.41096L4.75 5.29558L3 3.41096L3 1.5L6.5 1.5V3.41096ZM5.5 9.5V10.25V12L15.25 12H16L16 13.5H15.25L5.5 13.5V15.25V16H4V15.25V13.5L0.750001 13.5H0V12H0.749999L4 12V10.25V9.5H5.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SettingsSlider.propTypes = {
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


export default SettingsSlider