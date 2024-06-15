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

const PlusSquareSmall: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4.25H11C11.4142 4.25 11.75 4.58579 11.75 5V11C11.75 11.4142 11.4142 11.75 11 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11V5C4.25 4.58579 4.58579 4.25 5 4.25ZM3 5C3 3.89543 3.89543 3 5 3H11C12.1046 3 13 3.89543 13 5V11C13 12.1046 12.1046 13 11 13H5C3.89543 13 3 12.1046 3 11V5ZM7.375 10.375V9.75V8.625H6.25H5.625V7.375H6.25H7.375V6.25V5.625H8.625V6.25V7.375H9.75H10.375V8.625H9.75H8.625V9.75V10.375H7.375Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


PlusSquareSmall.defaultProps = {
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


PlusSquareSmall.propTypes = {
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


export default PlusSquareSmall