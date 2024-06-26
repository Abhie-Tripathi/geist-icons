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

const LogoRemix: React.FC<AccessibilityProps> = ({
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
                                <path d="M8.62008 1C12.2215 1 14 2.71409 14 5.45218C14 7.50017 12.7406 8.83579 11.0393 9.05841C12.4754 9.34782 13.315 10.1715 13.4697 11.7965L13.4921 12.0953L13.5116 12.3747L13.5285 12.636L13.5402 12.8331L13.5528 13.0656L13.5594 13.1983L13.5687 13.4091L13.5762 13.6082L13.5799 13.7226L13.5849 13.906L13.5893 14.1156L13.5909 14.2169L13.5937 14.5105L13.5946 14.8168L13.5947 15H9.89195L9.89213 14.9236L9.89346 14.7752L9.89567 14.6307L9.9021 14.2806L9.90372 14.1633L9.90499 13.9792L9.90482 13.8615L9.90374 13.7381L9.90224 13.6413L9.89918 13.5057L9.89478 13.3618L9.88887 13.2089L9.88129 13.046L9.87682 12.9605L9.86922 12.827L9.86049 12.6866L9.84695 12.4883L9.83528 12.3307C9.83193 12.2821 9.82806 12.2347 9.82365 12.1883L9.81414 12.0972C9.69149 11.0207 9.26452 10.5807 8.53324 10.434L8.47159 10.4224C8.43002 10.4152 8.38752 10.4088 8.34407 10.4032L8.2782 10.3955C8.26711 10.3943 8.25595 10.3931 8.24474 10.392L8.17675 10.3861L8.10736 10.3812L8.03656 10.3774L7.96513 10.3746L7.89232 10.3728L7.81814 10.3719L1.98401 10.3718V7.45568H7.95729C8.05569 7.45568 8.15105 7.45381 8.24336 7.45L8.33466 7.44555L8.42393 7.43978L8.51117 7.43269C8.52554 7.43139 8.53982 7.43004 8.55403 7.42864L8.63822 7.41952C8.69368 7.41299 8.74778 7.40555 8.80053 7.39717L8.87864 7.3839C9.85519 7.20685 10.3434 6.68846 10.3434 5.67686C10.3434 4.54159 9.54808 3.85355 7.95729 3.85355H1.98401V1H8.62008ZM5.86625 12.8261C6.35352 12.8261 6.55739 13.0966 6.63002 13.3556L6.6396 13.3928L6.64747 13.4297L6.65259 13.4588L6.65478 13.4732L6.65844 13.5017L6.66121 13.5295L6.66226 13.5432L6.66376 13.57L6.66422 13.5831L6.66458 13.6086V15H1.98401V12.8261H5.86625Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoRemix.propTypes = {
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


export default LogoRemix