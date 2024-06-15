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

const Kv: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6789 2.05378L9.81677 5.56255L13.3254 6.4247L14.1876 2.91593L10.6789 2.05378ZM10.3829 0.436426C9.93957 0.327486 9.49186 0.59858 9.38292 1.04193L8.19943 5.85853C8.09049 6.30188 8.36159 6.7496 8.80494 6.85854L13.6214 8.04205C14.0648 8.15099 14.5125 7.8799 14.6214 7.43654L15.8049 2.61994C15.9139 2.17659 15.6428 1.72887 15.1994 1.61993L10.3829 0.436426ZM9.50003 14.5C10.6046 14.5 11.5 13.6046 11.5 12.5C11.5 11.3955 10.6046 10.5 9.50003 10.5C8.39546 10.5 7.50003 11.3955 7.50003 12.5C7.50003 13.6046 8.39546 14.5 9.50003 14.5ZM9.50003 16C11.433 16 13 14.433 13 12.5C13 10.567 11.433 9.00004 9.50003 9.00004C7.56703 9.00004 6.00003 10.567 6.00003 12.5C6.00003 14.433 7.56703 16 9.50003 16ZM2.93145 5.14833L5.61583 7.51283L2.2572 8.66149L2.93145 5.14833ZM0.467708 10.0272C0.3916 10.4238 0.772291 10.7546 1.15436 10.624L7.68945 8.38894C8.07152 8.25827 8.16989 7.7636 7.86688 7.4967L2.64371 2.89595C2.33836 2.62699 1.85633 2.79184 1.77963 3.19147L0.467708 10.0272Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Kv.defaultProps = {
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


Kv.propTypes = {
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


export default Kv