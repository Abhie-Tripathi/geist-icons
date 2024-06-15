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

const ArrowUpDown: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.21968 3.46975L3.68935 4.00008L4.75001 5.06074L5.28034 4.53041L7.24999 2.56076L7.24999 13.4393L5.28031 11.4697L4.74998 10.9393L3.68932 12L4.21965 12.5303L7.29288 15.6036C7.6834 15.9941 8.31657 15.9941 8.70709 15.6036L11.7803 12.5303L12.3106 12L11.25 10.9393L10.7197 11.4697L8.74999 13.4393L8.74999 2.56072L10.7197 4.53041L11.25 5.06075L12.3107 4.00009L11.7803 3.46975L8.70712 0.396531C8.31659 0.00600645 7.68343 0.00600637 7.2929 0.396531L4.21968 3.46975Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ArrowUpDown.defaultProps = {
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


ArrowUpDown.propTypes = {
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


export default ArrowUpDown