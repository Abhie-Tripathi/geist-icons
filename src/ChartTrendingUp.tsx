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

const ChartTrendingUp: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.8242 3H10.0742V4.5H10.8242H13.4382L8.49989 9.43829L6.207 7.14629C5.81645 6.75589 5.18339 6.75595 4.79292 7.14642L0.719662 11.2197L0.189331 11.75L1.24999 12.8107L1.78032 12.2803L5.50009 8.56057L7.79298 10.8526C8.18353 11.243 8.81659 11.2429 9.20706 10.8524L14.4988 5.56066V8.17462V8.92462H15.9988V8.17462V4C15.9988 3.44772 15.5511 3 14.9988 3H10.8242Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ChartTrendingUp.defaultProps = {
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


ChartTrendingUp.propTypes = {
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


export default ChartTrendingUp