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

const FolderOpen: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4V6H2.5V2.5H6L7.33333 3.5C7.76607 3.82456 8.29241 4 8.83333 4H13.5ZM1 6V2.5V1H2.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H13.5H15V4V6H16L15.8333 7.5L15.2471 12.7761C15.1064 14.0422 14.0363 15 12.7624 15H3.23761C1.96373 15 0.893573 14.0422 0.752898 12.7761L0.166667 7.5L0 6H1ZM14 7.5H2H1.6759L2.24372 12.6104C2.29999 13.1169 2.72806 13.5 3.23761 13.5H12.7624C13.2719 13.5 13.7 13.1169 13.7563 12.6104L14.3241 7.5H14Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


FolderOpen.defaultProps = {
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


FolderOpen.propTypes = {
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


export default FolderOpen