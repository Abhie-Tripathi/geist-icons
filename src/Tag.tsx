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

const Tag: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.5H6.34315C7.00619 1.5 7.64207 1.76339 8.11091 2.23223L13.8787 8L8 13.8787L2.23223 8.11091C1.76339 7.64207 1.5 7.00619 1.5 6.34315V1.5ZM16 8L14.9393 6.93934L9.17157 1.17157C8.42143 0.421427 7.40401 0 6.34315 0H1.5H0V1.5V6.34315C0 7.40401 0.421426 8.42143 1.17157 9.17157L6.93934 14.9393L8 16L9.06066 14.9393L14.9393 9.06066L16 8ZM4.5 5.25C4.91421 5.25 5.25 4.91421 5.25 4.5C5.25 4.08579 4.91421 3.75 4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5C3.75 4.91421 4.08579 5.25 4.5 5.25Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Tag.propTypes = {
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


export default Tag