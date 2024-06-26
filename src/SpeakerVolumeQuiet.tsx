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

const SpeakerVolumeQuiet: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.74421 10.6976L3 10.5H1.5V5.5H3L3.74421 5.30236L8.5 2.58477V13.4152L3.74421 10.6976ZM3 4L8.5 0.857143L10 0V1.72763V14.2724V16L8.5 15.1429L3 12H1C0.447715 12 0 11.5523 0 11V5C0 4.44772 0.447715 4 1 4H3ZM13.9115 5.64655L13.5581 4.98506L12.2351 5.69195L12.5885 6.35345C12.8503 6.84344 12.9991 7.40324 12.9991 8C12.9991 8.59676 12.8503 9.15657 12.5885 9.64655L12.2351 10.3081L13.558 11.0149L13.9115 10.3534C14.2867 9.65129 14.4991 8.84933 14.4991 8C14.4991 7.15067 14.2867 6.34871 13.9115 5.64655Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SpeakerVolumeQuiet.propTypes = {
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


export default SpeakerVolumeQuiet