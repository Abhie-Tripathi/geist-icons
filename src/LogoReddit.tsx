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

const LogoReddit: React.FC<AccessibilityProps> = (props) => {
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
                                <path d="M7.99102 15.8942C12.3558 15.8942 15.8941 12.3558 15.8941 7.99104C15.8941 3.62626 12.3558 0.0879135 7.99102 0.0879135C3.62624 0.0879135 0.0878906 3.62626 0.0878906 7.99104C0.0878906 12.3558 3.62624 15.8942 7.99102 15.8942Z" fill="#FF4500"></path>
                                <path d="M13.2618 7.99104C13.2382 7.35457 12.7038 6.85755 12.0654 6.87916C11.7825 6.88899 11.5134 7.0049 11.3092 7.19932C10.4094 6.58639 9.35253 6.25042 8.26611 6.22689L8.77876 3.76146L10.4702 4.1171C10.5173 4.55125 10.9063 4.86562 11.3404 4.81837C11.7746 4.7713 12.0889 4.3823 12.0417 3.94815C11.9945 3.51401 11.6056 3.19964 11.1715 3.24688C10.9219 3.27235 10.698 3.41776 10.5744 3.63396L8.63738 3.24688C8.50584 3.21737 8.37412 3.29992 8.34462 3.43357C8.34462 3.4355 8.34462 3.4355 8.34462 3.43743L7.76119 6.17982C6.66108 6.19756 5.59047 6.53546 4.67897 7.15225C4.21532 6.71618 3.48455 6.73778 3.04847 7.20336C2.61239 7.66701 2.63399 8.39779 3.09958 8.83386C3.19002 8.91834 3.29399 8.99105 3.40991 9.04215C3.402 9.15807 3.402 9.27398 3.40991 9.38989C3.40991 11.1598 5.47262 12.5998 8.01655 12.5998C10.5605 12.5998 12.6232 11.1618 12.6232 9.38989C12.6311 9.27398 12.6311 9.15807 12.6232 9.04215C13.0201 8.8437 13.2697 8.43502 13.2618 7.99104ZM5.35864 8.78276C5.35864 8.34668 5.71428 7.99104 6.15036 7.99104C6.58644 7.99104 6.94208 8.34668 6.94208 8.78276C6.94208 9.21883 6.58644 9.57447 6.15036 9.57447C5.71235 9.57043 5.35864 9.21883 5.35864 8.78276ZM9.94965 10.9868V10.9554C9.38783 11.3778 8.70026 11.5938 7.99688 11.5645C7.2935 11.594 6.60611 11.3778 6.04411 10.9554C5.96946 10.865 5.98316 10.7296 6.07361 10.6549C6.15211 10.5901 6.26416 10.5901 6.34477 10.6549C6.82019 11.0027 7.39975 11.1795 7.98898 11.1519C8.57837 11.1834 9.15987 11.0144 9.64108 10.6707C9.72749 10.5862 9.86887 10.5882 9.95352 10.6746C10.038 10.761 10.0361 10.9024 9.94965 10.9868ZM9.84164 9.63138C9.82795 9.63138 9.81618 9.63138 9.8023 9.63138L9.80828 9.60187C9.3722 9.60187 9.01656 9.24623 9.01656 8.81015C9.01656 8.37408 9.3722 8.01844 9.80828 8.01844C10.2444 8.01844 10.6 8.37408 10.6 8.81015C10.6176 9.24641 10.2777 9.61364 9.84164 9.63138Z" fill="white"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoReddit.defaultProps = {
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


LogoReddit.propTypes = {
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


export default LogoReddit