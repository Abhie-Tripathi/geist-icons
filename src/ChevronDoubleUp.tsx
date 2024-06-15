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

const ChevronDoubleUp: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.7071 3.14644C8.31657 2.75591 7.68341 2.75592 7.29288 3.14644L3.46966 6.96966L2.93933 7.49999L3.99999 8.56065L4.53032 8.03032L7.99999 4.56065L11.4697 8.03032L12 8.56065L13.0607 7.49999L12.5303 6.96966L8.7071 3.14644ZM8.7071 8.14644C8.31657 7.75592 7.68341 7.75592 7.29288 8.14644L3.46966 11.9697L2.93933 12.5L3.99999 13.5607L4.53032 13.0303L7.99999 9.56065L11.4697 13.0303L12 13.5607L13.0607 12.5L12.5303 11.9697L8.7071 8.14644Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ChevronDoubleUp.defaultProps = {
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


ChevronDoubleUp.propTypes = {
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


export default ChevronDoubleUp