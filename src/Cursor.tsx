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

const Cursor: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.547184 1.51189L-0.0255737 -0.0255127L1.51183 0.547244L14.2618 5.29724L15.9637 5.93129L14.3103 6.68283L9.79559 8.73499L14.5303 13.4697L13.4697 14.5304L8.73493 9.79565L6.68277 14.3104L5.93123 15.9638L5.29718 14.2619L0.547184 1.51189ZM8.53103 7.6621L12.0363 6.06882L2.52556 2.52562L6.06876 12.0363L7.66204 8.53109C7.83713 8.1459 8.14584 7.83719 8.53103 7.6621Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Cursor.defaultProps = {
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


Cursor.propTypes = {
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


export default Cursor