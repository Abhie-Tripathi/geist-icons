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

const Webhook: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.8349 3.24994C5.14454 4.44567 5.55423 5.97464 6.74996 6.665L7.39465 7.03721L7.02726 7.68466L5.14599 11C5.21289 11.1531 5.25 11.3222 5.25 11.5C5.25 12.1904 4.69036 12.75 4 12.75C3.30964 12.75 2.75 12.1904 2.75 11.5C2.75 10.8634 3.22584 10.338 3.84123 10.26L5.38944 7.5316C3.95909 6.30274 3.55857 4.19264 4.53586 2.49994C5.64043 0.586765 8.08679 -0.0687357 9.99996 1.03583C11.836 2.09584 12.5137 4.39156 11.5892 6.26591L10.4949 4.33754C10.4418 3.53274 10.0009 2.76843 9.24996 2.33487C8.05423 1.64452 6.52525 2.0542 5.8349 3.24994ZM9.146 4.99996C9.21289 4.84686 9.25 4.67776 9.25 4.5C9.25 3.80964 8.69036 3.25 8 3.25C7.30964 3.25 6.75 3.80964 6.75 4.5C6.75 5.13659 7.22586 5.66203 7.84127 5.74002L9.72266 9.05556L10.0956 9.71274L10.75 9.33493C11.9457 8.64458 13.4747 9.05427 14.165 10.25C14.8554 11.4457 14.4457 12.9747 13.25 13.6651C12.5047 14.0953 11.63 14.0983 10.9096 13.75H8.69252C9.85895 15.4685 12.1727 16.0191 14 14.9641C15.9131 13.8595 16.5686 11.4132 15.4641 9.5C14.4886 7.81038 12.4665 7.10169 10.6895 7.71998L9.146 4.99996ZM13.25 11.5C13.25 12.1904 12.6904 12.75 12 12.75C11.591 12.75 11.228 12.5536 10.9999 12.25H7.9298C7.57875 14.1006 5.95279 15.5 4 15.5C1.79086 15.5 0 13.7091 0 11.5C0 9.40018 1.61801 7.67826 3.67529 7.51299L2.58098 9.44147C1.92792 9.89251 1.5 10.6463 1.5 11.5C1.5 12.8807 2.61929 14 4 14C5.38071 14 6.5 12.8807 6.5 11.5V10.75H7.25H10.9999C11.228 10.4464 11.591 10.25 12 10.25C12.6904 10.25 13.25 10.8096 13.25 11.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Webhook.defaultProps = {
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


Webhook.propTypes = {
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


export default Webhook