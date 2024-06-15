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

const LogoContentful: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M4.80405 11.157C3.97217 10.3153 3.50241 9.17029 3.51219 7.9861C3.51219 6.8019 3.98196 5.65685 4.83341 4.82498C5.55763 4.17906 5.62613 3.06337 4.98021 2.33915C4.33428 1.61493 3.21859 1.54643 2.49437 2.19235C2.44544 2.24128 2.39651 2.28043 2.35736 2.32936C-0.774401 5.44155 -0.784188 10.5013 2.31821 13.633C2.96414 14.3573 4.07983 14.416 4.80405 13.7701C5.52826 13.1241 5.58699 12.0084 4.94106 11.2842C4.89213 11.2451 4.85298 11.1961 4.80405 11.157Z" fill="#FFDA00"></path>
                                <path d="M4.83331 4.825C6.58514 3.08297 9.4233 3.09275 11.1653 4.84458C11.8113 5.57858 12.927 5.64709 13.6512 5.00116C14.3754 4.35524 14.4537 3.23955 13.8078 2.51534C13.7588 2.4664 13.7099 2.40768 13.661 2.36853C10.5586 -0.763221 5.51838 -0.792581 2.38662 2.30003C2.37684 2.30981 2.36705 2.3196 2.35726 2.32939C1.62326 2.97531 1.55475 4.08121 2.20068 4.81522C2.8466 5.54922 3.9525 5.61773 4.68651 4.97181C4.73544 4.92287 4.78438 4.87394 4.83331 4.825Z" fill="#67B3FF"></path>
                                <path d="M11.1457 11.1766C10.3041 12.0183 9.15901 12.4782 7.97482 12.4782C6.79062 12.4782 5.64557 12.0085 4.8137 11.157C4.16777 10.4328 3.05208 10.3643 2.32786 11.0102C1.60364 11.6561 1.53513 12.7718 2.18106 13.4961C2.22999 13.545 2.26914 13.5939 2.31807 13.6331C5.42047 16.7648 10.4704 16.7942 13.6022 13.6918C13.612 13.682 13.612 13.682 13.6218 13.6722C14.3166 12.9871 14.3166 11.8715 13.6316 11.1766C12.9563 10.5013 11.8406 10.4915 11.1457 11.1766Z" fill="#EB5A68"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoContentful.defaultProps = {
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


LogoContentful.propTypes = {
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


export default LogoContentful