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

const LogoBitbucketColor: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M15.0132 1.00004C15.0833 0.999103 15.1528 1.01411 15.2168 1.04401C15.2807 1.07391 15.3376 1.11798 15.3834 1.17313C15.4292 1.22827 15.4628 1.29315 15.4819 1.36322C15.501 1.43328 15.505 1.50683 15.4938 1.57869L13.4536 14.4338C13.4282 14.5911 13.3502 14.7341 13.2333 14.8376C13.1164 14.9411 12.9681 14.9986 12.8144 15H3.02696C2.91176 15.0015 2.79987 14.96 2.71166 14.8831C2.62344 14.8062 2.56478 14.699 2.54636 14.5809L0.506198 1.58119C0.494969 1.50932 0.499032 1.43577 0.518103 1.36571C0.537173 1.29565 0.570788 1.23077 0.616589 1.17562C0.662389 1.12048 0.719264 1.07641 0.783219 1.04651C0.847176 1.0166 0.916662 1.0016 0.986801 1.00254L15.0132 1.00004ZM6.42242 10.2909H9.54634L10.3922 5.70409H5.66547L6.42242 10.2909Z" fill="#2684FF"></path>
                                <path d="M1.15503 5.70409H5.66549L6.42244 10.2909H9.54636L13.235 14.8353C13.1181 14.9403 12.969 14.9986 12.8145 15H3.02458C2.90938 15.0015 2.79749 14.96 2.70927 14.8831C2.62106 14.8062 2.5624 14.699 2.54397 14.5809L1.15503 5.70409Z" fill="url(#paint0_linear_872_3184)"></path>
                                <defs>
                                  <linearGradient id="paint0_linear_872_3184" x1="0.112125" y1="6.9886" x2="7.77447" y2="12.7502" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.18" stop-color="#0052CC"></stop>
                                    <stop offset="1" stop-color="#2684FF"></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoBitbucketColor.defaultProps = {
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


LogoBitbucketColor.propTypes = {
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


export default LogoBitbucketColor