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

const CornerUpRight: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5303 10.0303L11 10.5607L9.93934 9.50001L10.4697 8.96968L12.4393 7.00001H2.75C2.61193 7.00001 2.5 7.11193 2.5 7.25001V13.5V14.25H1V13.5V7.25001C1 6.28351 1.7835 5.50001 2.75 5.50001H12.4393L10.4697 3.53034L9.93934 3.00001L11 1.93935L11.5303 2.46968L14.7803 5.71968C15.0732 6.01257 15.0732 6.48744 14.7803 6.78034L11.5303 10.0303Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CornerUpRight.defaultProps = {
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


CornerUpRight.propTypes = {
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


export default CornerUpRight