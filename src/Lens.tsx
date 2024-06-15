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

const Lens: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.753 14.2609C9.19532 14.4167 8.60739 14.5 8 14.5C5.49509 14.5 3.32112 13.0831 2.23586 11.007H9.753V14.2609ZM11.007 13.7641C13.0831 12.6789 14.5 10.5049 14.5 8C14.5 7.3926 14.4167 6.80466 14.2609 6.24699H11.007V13.7641ZM13.7641 4.99299H11.007H10.38H6.24699V1.73913C6.80466 1.58331 7.3926 1.5 8 1.5C10.5049 1.5 12.6789 2.91692 13.7641 4.99299ZM4.99299 2.23587C2.91692 3.32113 1.5 5.4951 1.5 8C1.5 8.60739 1.58331 9.19532 1.73913 9.753H4.99299V5.61999V4.99299V2.23587ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.24699 6.24699H9.75299V9.75299H6.24699V6.24699Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Lens.defaultProps = {
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


Lens.propTypes = {
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


export default Lens