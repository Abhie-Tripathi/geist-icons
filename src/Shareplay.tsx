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

const Shareplay: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 11.5H1.5V3.5H14.5V11.5H12.5H11.75V13H12.5H15C15.5523 13 16 12.5523 16 12V3C16 2.44772 15.5523 2 15 2H1C0.447714 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H3.5H4.25V11.5H3.5ZM8.20801 10.312C8.10906 10.1636 7.89094 10.1636 7.79199 10.312L4.25912 15.6113C4.14836 15.7775 4.26746 16 4.46713 16H11.5329C11.7325 16 11.8516 15.7775 11.7409 15.6113L8.20801 10.312Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Shareplay.propTypes = {
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


export default Shareplay