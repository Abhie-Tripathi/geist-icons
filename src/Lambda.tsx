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

const Lambda: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 0H2V1.5H2.75C3.6834 1.5 4.5339 2.03586 4.93683 2.87781L6.37319 5.87924L6.31873 5.99756L2.31873 14.6864L2.00509 15.3676L3.36764 15.9949L3.68127 15.3136L7.21486 7.63798L10.7173 14.9567C11.3304 16.2379 13.1112 16.3502 13.8805 15.1562L14.2867 14.5257L13.0257 13.7133L12.6195 14.3438C12.486 14.5511 12.1768 14.5316 12.0703 14.3091L6.28987 2.2303C5.63765 0.867411 4.26092 0 2.75 0Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Lambda.defaultProps = {
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


Lambda.propTypes = {
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


export default Lambda