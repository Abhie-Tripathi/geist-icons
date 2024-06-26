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

const Puzzle: React.FC<AccessibilityProps> = ({
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
                                <path d="M12.25 14.25V10L12.9212 10.1119C14.1403 10.315 15.25 9.37496 15.25 8.13908V7.86092C15.25 6.62504 14.1403 5.68496 12.9212 5.88813L12.25 6V1.75H8.235L8.30764 2.50382C8.41075 3.57386 7.56957 4.5 6.49457 4.5C5.42349 4.5 4.58361 3.58031 4.68058 2.51362L4.75 1.75H0.75V14.25H12.25Z" stroke="currentColor" fill="transparent" strokeWidth="1.5"></path>
                              </svg>
    </SvgContainer>
  )
}


Puzzle.propTypes = {
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


export default Puzzle