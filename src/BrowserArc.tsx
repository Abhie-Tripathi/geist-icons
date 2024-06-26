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

const BrowserArc: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.02732 1.59423C6.40092 0.847013 7.16462 0.375 8.00004 0.375C8.83545 0.375 9.59916 0.847012 9.97276 1.59423L9.97623 1.60118L9.97954 1.60822L12.1996 6.3389C12.6942 5.6993 13.5488 5.39605 14.3698 5.64152C15.4353 5.96006 16.0408 7.08201 15.7222 8.14746C15.4295 9.12656 14.9252 10.0005 14.2661 10.7425L15.0628 12.4402C15.6018 13.5283 15.1597 14.8483 14.0727 15.3918C12.9832 15.9366 11.6583 15.4949 11.1136 14.4054L11.1089 14.396L11.1045 14.3864L10.5065 13.0821C9.70958 13.3169 8.86688 13.4412 8.00766 13.4412C7.18627 13.4412 6.38365 13.329 5.62302 13.1167L5.07276 14.3761L5.06629 14.391L5.05905 14.4054C4.51431 15.4949 3.18948 15.9366 2.09997 15.3918C1.01429 14.8489 0.571981 13.5315 1.1079 12.4442L1.83693 10.8361C1.47105 10.4376 1.14998 9.99969 0.882302 9.52681C0.3345 8.55904 0.674944 7.33044 1.64271 6.78263C2.29427 6.41382 3.06406 6.44763 3.66473 6.80444L6.0171 1.61567L6.02201 1.60486L6.02732 1.59423ZM4.5724 7.82964C4.91518 8.29797 5.42326 8.71478 6.05611 9.00321L7.42731 5.86472L7.98631 4.58526L8.56818 5.85449L10.0033 8.98483C10.6452 8.68289 11.1512 8.24741 11.4871 7.76297L8.85165 2.14716C8.6887 1.82694 8.3597 1.625 8.00004 1.625C7.64157 1.625 7.31357 1.82559 7.15005 2.14397L4.5724 7.82964ZM8.79677 9.3526L8.01376 7.64463L7.26478 9.35895C7.50293 9.39492 7.75097 9.41407 8.00766 9.41407C8.28193 9.41407 8.54535 9.39265 8.79677 9.3526ZM2.80744 11.7227L2.24186 12.9702L2.23696 12.9811L2.23165 12.9917C1.99563 13.4637 2.18697 14.0378 2.659 14.2738C3.12678 14.5077 3.69471 14.3219 3.93458 13.859L4.4441 12.6928C3.85686 12.4314 3.30691 12.1057 2.80744 11.7227ZM11.6797 12.6416L12.2358 13.8547C12.4744 14.3207 13.0444 14.5084 13.5137 14.2738C13.9857 14.0378 14.177 13.4637 13.941 12.9917L13.9375 12.9847L13.9342 12.9777L13.3086 11.6446C12.8128 12.0366 12.265 12.3712 11.6797 12.6416ZM12.9507 7.31886C13.0898 6.85366 13.5797 6.5893 14.0449 6.72838C14.5101 6.86746 14.7744 7.35732 14.6354 7.82252C13.8429 10.473 11.1129 12.3068 8.00766 12.3068C5.36393 12.3068 3.01146 10.9854 1.86951 8.968C1.63033 8.54545 1.77897 8.00902 2.20151 7.76984C2.62406 7.53066 3.16049 7.6793 3.39967 8.10184C4.19597 9.5086 5.92623 10.5485 8.00766 10.5485C10.4735 10.5485 12.418 9.10076 12.9507 7.31886Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


BrowserArc.propTypes = {
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


export default BrowserArc