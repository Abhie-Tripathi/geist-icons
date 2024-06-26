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

const ChevronDoubleDown: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.53032 2.96966L3.99999 2.43933L2.93933 3.49999L3.46966 4.03032L7.29289 7.85355C7.68341 8.24407 8.31658 8.24407 8.7071 7.85354L12.5303 4.03032L13.0607 3.49999L12 2.43933L11.4697 2.96966L7.99999 6.43933L4.53032 2.96966ZM4.53032 7.96966L3.99999 7.43933L2.93933 8.49999L3.46966 9.03032L7.29289 12.8535C7.68341 13.2441 8.31658 13.2441 8.7071 12.8535L12.5303 9.03032L13.0607 8.49999L12 7.43933L11.4697 7.96966L7.99999 11.4393L4.53032 7.96966Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


ChevronDoubleDown.propTypes = {
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


export default ChevronDoubleDown