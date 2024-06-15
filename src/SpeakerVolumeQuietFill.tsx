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

const SpeakerVolumeQuietFill: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 5V11C0 11.5523 0.447715 12 1 12H3L10 16V0L3 4H1C0.447715 4 0 4.44772 0 5ZM13.9115 5.64655L13.5581 4.98506L12.2351 5.69195L12.5885 6.35345C12.8503 6.84344 12.9991 7.40324 12.9991 8C12.9991 8.59676 12.8503 9.15657 12.5885 9.64655L12.2351 10.3081L13.558 11.0149L13.9115 10.3534C14.2867 9.65129 14.4991 8.84933 14.4991 8C14.4991 7.15067 14.2867 6.34871 13.9115 5.64655Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SpeakerVolumeQuietFill.defaultProps = {
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


SpeakerVolumeQuietFill.propTypes = {
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


export default SpeakerVolumeQuietFill