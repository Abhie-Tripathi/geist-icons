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

const TextUppercase: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.21981 13.2149L2.72027 11.5043H2.85H6.15H6.27971L6.78016 13.2149L6.86483 13.5043H7.57227H8.4277H9.13514L9.21981 13.2149L9.72027 11.5043H9.85H13.15H13.2797L13.7802 13.2149L13.8648 13.5043H15.4277L15.2198 12.7937L12.2198 2.53943L10.7802 2.53943L7.99999 12.0423L5.21983 2.53943L3.78017 2.53943L0.780159 12.7937L0.572266 13.5043H2.13514L2.21981 13.2149ZM12.7824 9.80429L11.5 5.42105L10.2176 9.80429H12.7824ZM5.78236 9.80429H3.21762L4.5 5.42105L5.78236 9.80429Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


TextUppercase.propTypes = {
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


export default TextUppercase