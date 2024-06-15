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

const AcronymJs: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H13.5C14.8807 0 16 1.11929 16 2.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V2.5ZM7.5 8V12.125C7.5 12.3321 7.33211 12.5 7.125 12.5C6.91789 12.5 6.75 12.3321 6.75 12.125V11.75H5.25V12.125C5.25 13.1605 6.08947 14 7.125 14C8.16053 14 9 13.1605 9 12.125V8H7.5ZM11.75 9.875C11.75 9.66789 11.9179 9.5 12.125 9.5H13.5V8H12.125C11.0895 8 10.25 8.83947 10.25 9.875C10.25 10.9105 11.0895 11.75 12.125 11.75C12.3321 11.75 12.5 11.9179 12.5 12.125C12.5 12.3321 12.3321 12.5 12.125 12.5H10.5V14H12.125C13.1605 14 14 13.1605 14 12.125C14 11.0895 13.1605 10.25 12.125 10.25C11.9179 10.25 11.75 10.0821 11.75 9.875Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


AcronymJs.defaultProps = {
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


AcronymJs.propTypes = {
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


export default AcronymJs