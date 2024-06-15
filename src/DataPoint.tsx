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

const DataPoint: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 5.25C7.5 6.2165 6.7165 7 5.75 7C4.7835 7 4 6.2165 4 5.25C4 4.2835 4.7835 3.5 5.75 3.5C6.7165 3.5 7.5 4.2835 7.5 5.25ZM7.5 10.75C7.5 11.7165 6.7165 12.5 5.75 12.5C4.7835 12.5 4 11.7165 4 10.75C4 9.7835 4.7835 9 5.75 9C6.7165 9 7.5 9.7835 7.5 10.75ZM10.25 9.75C11.2165 9.75 12 8.9665 12 8C12 7.0335 11.2165 6.25 10.25 6.25C9.2835 6.25 8.5 7.0335 8.5 8C8.5 8.9665 9.2835 9.75 10.25 9.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


DataPoint.defaultProps = {
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


DataPoint.propTypes = {
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


export default DataPoint