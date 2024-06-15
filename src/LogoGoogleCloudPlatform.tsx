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

const LogoGoogleCloudPlatform: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M10.1529 5.07982H10.6408L12.0316 3.67566L12.0999 3.07951C11.3032 2.36953 10.3404 1.87633 9.30236 1.6465C8.26434 1.41667 7.18543 1.45781 6.16754 1.76601C5.14965 2.07422 4.22638 2.63932 3.48496 3.40794C2.74353 4.17656 2.20842 5.12333 1.93018 6.1588C2.08511 6.09468 2.25675 6.08428 2.41817 6.12924L5.19973 5.66611C5.19973 5.66611 5.34125 5.42962 5.41444 5.4444C6.01044 4.78355 6.8341 4.37769 7.7168 4.30991C8.5995 4.24213 9.47448 4.51756 10.1626 5.07982H10.1529Z" fill="#EA4335" ></path>
                                <path d="M14.0128 6.15871C13.6931 4.97017 13.0368 3.90169 12.1243 3.08435L10.1723 5.05509C10.5791 5.39069 10.9052 5.81518 11.1258 6.29653C11.3464 6.77789 11.4559 7.30354 11.446 7.83384V8.18365C11.6741 8.18365 11.9 8.22901 12.1108 8.31716C12.3216 8.4053 12.5131 8.5345 12.6744 8.69737C12.8357 8.86024 12.9637 9.0536 13.051 9.2664C13.1383 9.4792 13.1832 9.70727 13.1832 9.93761C13.1832 10.1679 13.1383 10.396 13.051 10.6088C12.9637 10.8216 12.8357 11.015 12.6744 11.1778C12.5131 11.3407 12.3216 11.4699 12.1108 11.5581C11.9 11.6462 11.6741 11.6916 11.446 11.6916H7.97147L7.625 12.0463V14.1501L7.97147 14.4999H11.446C12.4162 14.5075 13.3631 14.1996 14.1466 13.6218C14.9301 13.044 15.5086 12.2269 15.7965 11.2914C16.0844 10.3559 16.0664 9.35168 15.7451 8.42732C15.4239 7.50296 14.8165 6.70753 14.0128 6.15871Z" fill="#4285F4"></path>
                                <path d="M4.49204 14.4798H7.96655V11.6715H4.49204C4.2445 11.6715 3.99986 11.6177 3.77469 11.5139L3.2867 11.6666L1.88616 13.0707L1.76416 13.5634C2.54955 14.1622 3.50789 14.4841 4.49204 14.4798Z" fill="#34A853"></path>
                                <path d="M4.49182 5.37027C3.5504 5.37595 2.63423 5.67834 1.8713 6.23523C1.10836 6.79211 0.536746 7.57567 0.236297 8.47646C-0.0641533 9.37726 -0.0784364 10.3503 0.195442 11.2597C0.469321 12.1691 1.01768 12.9694 1.76394 13.5489L3.77935 11.5141C3.52323 11.3972 3.29901 11.2194 3.12593 10.9959C2.95284 10.7723 2.83606 10.5097 2.7856 10.2306C2.73514 9.95144 2.75251 9.66412 2.83622 9.39325C2.91992 9.12238 3.06747 8.87606 3.2662 8.67542C3.46493 8.47478 3.7089 8.32582 3.97719 8.24131C4.24548 8.15679 4.53007 8.13926 4.80654 8.1902C5.08302 8.24115 5.34312 8.35905 5.56454 8.5338C5.78596 8.70855 5.96208 8.93493 6.0778 9.19351L8.09321 7.15872C7.67019 6.60039 7.12498 6.14842 6.50022 5.83816C5.87545 5.5279 5.18807 5.36776 4.49182 5.37027Z" fill="#FBBC05"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoGoogleCloudPlatform.defaultProps = {
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


LogoGoogleCloudPlatform.propTypes = {
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


export default LogoGoogleCloudPlatform