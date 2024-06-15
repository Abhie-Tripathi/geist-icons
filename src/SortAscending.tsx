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

const SortAscending: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5303 1.21967C12.2374 0.926777 11.7626 0.926777 11.4697 1.21967L9.21967 3.46967L8.68934 4L9.75 5.06066L10.2803 4.53033L11.25 3.56066V13.25V14H12.75V13.25V3.56066L13.7197 4.53033L14.25 5.06066L15.3107 4L14.7803 3.46967L12.5303 1.21967ZM1.75 4H1V5.5H1.75H5.25H6V4H5.25H1.75ZM1.75 8.25H1V9.75H1.75H4.25H5V8.25H4.25H1.75ZM1.75 12.5H1V14H1.75H7.25H8V12.5H7.25H1.75Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SortAscending.defaultProps = {
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


SortAscending.propTypes = {
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


export default SortAscending