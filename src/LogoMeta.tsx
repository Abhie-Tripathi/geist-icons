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

const LogoMeta: React.FC<AccessibilityProps> = ({
  style = {},
  color = '#000000',
  height = '20px',
  width = '20px',
  className = '',
  cssClasses = '',
  title = '',
  shake = false,
  beat = false,
  rotate = false,
  onClick,

}) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      rotate={rotate ? true : false}
      shake={shake ? true : false}
      beat={beat ? true : false}
      className={className}
    >
      <svg style={style} className={cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <path d="M1.72819 9.68842C1.72819 10.2994 1.86229 10.7684 2.03756 11.0522C2.26735 11.4239 2.6101 11.5813 2.95952 11.5813C3.41021 11.5813 3.82251 11.4695 4.61705 10.3706C5.25358 9.48978 6.00361 8.25345 6.50827 7.47837L7.36291 6.16526C7.95659 5.25331 8.64376 4.23954 9.43163 3.55238C10.0748 2.99152 10.7687 2.67993 11.467 2.67993C12.6393 2.67993 13.756 3.3593 14.6107 4.63347C15.546 6.02894 16 7.78663 16 9.60051C16 10.6788 15.7875 11.4711 15.4258 12.0971C15.0764 12.7025 14.3953 13.3073 13.2497 13.3073V11.5813C14.2306 11.5813 14.4754 10.6799 14.4754 9.64836C14.4754 8.17833 14.1327 6.54695 13.3777 5.38128C12.8418 4.55446 12.1474 4.04924 11.3835 4.04924C10.5572 4.04924 9.89233 4.67242 9.14508 5.78356C8.74781 6.37391 8.33996 7.09334 7.88204 7.90514L7.37794 8.79817C6.36528 10.5937 6.10878 11.0026 5.60245 11.6776C4.71498 12.8594 3.95716 13.3073 2.95952 13.3073C1.77604 13.3073 1.02768 12.7948 0.564192 12.0225C0.185838 11.3933 0 10.5675 0 9.62666L1.72819 9.68842Z" fill="#0081FB"></path>
                                <path d="M1.31885 4.7685C2.11117 3.54719 3.25458 2.69312 4.56603 2.69312C5.32552 2.69312 6.08057 2.9179 6.86899 3.56167C7.73142 4.26552 8.65061 5.42452 9.79736 7.33466L10.2085 8.02015C11.2012 9.67379 11.7659 10.5245 12.0964 10.9257C12.5215 11.4409 12.8192 11.5945 13.2059 11.5945C14.1868 11.5945 14.4317 10.6931 14.4317 9.66154L15.9562 9.6137C15.9562 10.692 15.7437 11.4843 15.382 12.1103C15.0326 12.7157 14.3515 13.3205 13.2059 13.3205C12.4937 13.3205 11.8627 13.1658 11.165 12.5076C10.6286 12.0023 10.0016 11.1049 9.51915 10.2981L8.08418 7.90107C7.3642 6.69812 6.70374 5.80119 6.32149 5.39502C5.91031 4.95824 5.38172 4.43077 4.53821 4.43077C3.8555 4.43077 3.27573 4.90984 2.79054 5.64262L1.31885 4.7685Z" fill="url(#paint0_linear_237_30297)"></path>
                                <path d="M4.582 4.41758C3.89929 4.41758 3.31952 4.89665 2.83433 5.62944C2.14828 6.66491 1.72819 8.20727 1.72819 9.68842C1.72819 10.2994 1.86229 10.7684 2.03756 11.0522L0.564192 12.0225C0.185838 11.3933 0 10.5675 0 9.62666C0 7.91571 0.469604 6.13242 1.36264 4.75532C2.15496 3.53401 3.29837 2.67993 4.60982 2.67993L4.582 4.41758Z" fill="url(#paint1_linear_237_30297)"></path>
                                <defs>
                                  <linearGradient id="paint0_linear_237_30297" x1="3.35028" y1="9.20306" x2="14.3671" y2="9.75947" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0064E1"></stop>
                                    <stop offset="0.4" stop-color="#0064E1"></stop>
                                    <stop offset="0.83" stop-color="#0073EE"></stop>
                                    <stop offset="1" stop-color="#0082FB"></stop>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_237_30297" x1="2.50382" y1="10.414" x2="2.50382" y2="6.35221" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0082FB"></stop>
                                    <stop offset="1" stop-color="#0064E0"></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


LogoMeta.propTypes = {
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


export default LogoMeta