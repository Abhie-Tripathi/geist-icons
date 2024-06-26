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

const Webcam: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 2C1.00736 2 0 3.00736 0 4.25V11.75C0 12.9926 1.00736 14 2.25 14H10.75H11.5V13.25V11.375L14.5 13.125L16 14V12.2634V3.73656V2L14.5 2.875L11.5 4.625V2.75V2H10.75H2.25ZM11.5 6.36156V9.63844L14.5 11.3884V4.61156L11.5 6.36156ZM10 5.5V3.5H2.25C1.83579 3.5 1.5 3.83579 1.5 4.25V11.75C1.5 12.1642 1.83579 12.5 2.25 12.5H10V10.5V5.5Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Webcam.propTypes = {
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


export default Webcam