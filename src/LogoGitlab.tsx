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

const LogoGitlab: React.FC<AccessibilityProps> = (props) => {
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
                                <g clip-path="url(#clip0_872_3176)">
                                  <path d="M15.5274 6.68664L15.5055 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1677 0.836175C13.069 0.774904 12.9539 0.745394 12.8379 0.751629C12.7219 0.757865 12.6106 0.799545 12.519 0.871043C12.4285 0.944593 12.3628 1.04426 12.3309 1.15647L10.8997 5.53519H5.10437L3.67318 1.15647C3.64214 1.04365 3.57631 0.943483 3.48506 0.870232C3.39349 0.798734 3.28219 0.757054 3.16619 0.750818C3.05018 0.744583 2.93506 0.774093 2.83636 0.835364C2.73794 0.897946 2.66164 0.989838 2.61823 1.09809L0.494551 6.62744L0.473468 6.68339C0.168338 7.48065 0.130675 8.3555 0.366157 9.17603C0.601639 9.99656 1.0975 10.7183 1.77898 11.2324L1.78627 11.2381L1.80574 11.2519L5.03464 13.6699L6.63206 14.8789L7.60511 15.6136C7.71893 15.7 7.85791 15.7468 8.00082 15.7468C8.14373 15.7468 8.28271 15.7 8.39652 15.6136L9.36957 14.8789L10.967 13.6699L14.2154 11.2373L14.2235 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8684 8.35673 15.8312 7.48313 15.5274 6.68664Z" fill="#E24329"></path>
                                  <path d="M15.5273 6.68661L15.5055 6.63066C14.4726 6.84266 13.4994 7.28014 12.6552 7.91184L8 11.4319C9.58526 12.6311 10.9654 13.6731 10.9654 13.6731L14.2137 11.2405L14.2218 11.234C14.9028 10.7198 15.3982 9.99836 15.6337 9.17823C15.8691 8.35811 15.8318 7.48369 15.5273 6.68661Z" fill="#FC6D26"></path>
                                  <path d="M5.03461 13.6731L6.63203 14.8821L7.60508 15.6168C7.7189 15.7032 7.85788 15.75 8.00079 15.75C8.14369 15.75 8.28267 15.7032 8.39649 15.6168L9.36954 14.8821L10.967 13.6731C10.967 13.6731 9.58524 12.6279 7.99998 11.4318C6.41472 12.6279 5.03461 13.6731 5.03461 13.6731Z" fill="#FCA326"></path>
                                  <path d="M3.3439 7.91184C2.50043 7.27884 1.52738 6.84022 0.49449 6.62742L0.473407 6.68337C0.168277 7.48063 0.130614 8.35547 0.366096 9.176C0.601578 9.99653 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2518L5.03458 13.6699C5.03458 13.6699 6.41306 12.6279 7.99995 11.4286L3.3439 7.91184Z" fill="#FC6D26"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_872_3176">
                                    <rect   fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoGitlab.defaultProps = {
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


LogoGitlab.propTypes = {
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


export default LogoGitlab