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

const SettingsSliders: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.75 5.5C11.7165 5.5 12.5 4.7165 12.5 3.75C12.5 2.7835 11.7165 2 10.75 2C9.7835 2 9 2.7835 9 3.75C9 4.7165 9.7835 5.5 10.75 5.5ZM10.75 0.75C12.1479 0.75 13.3225 1.70608 13.6555 3H15.25H16V4.5H15.25H13.6555C13.3225 5.79392 12.1479 6.75 10.75 6.75C9.35212 6.75 8.17754 5.79392 7.84451 4.5H0.75H0V3H0.75H7.84451C8.17754 1.70608 9.35212 0.75 10.75 0.75ZM15.25 13H16V11.5H15.25L8.15549 11.5C7.82245 10.2061 6.64788 9.25 5.25 9.25C3.85212 9.25 2.67755 10.2061 2.34451 11.5H0.75H0V13H0.75H2.34451C2.67755 14.2939 3.85212 15.25 5.25 15.25C6.64788 15.25 7.82246 14.2939 8.15549 13L15.25 13ZM7 12.2513C7 12.2509 7 12.2504 7 12.25C7 12.2496 7 12.2491 7 12.2487C6.99929 11.2828 6.21606 10.5 5.25 10.5C4.2835 10.5 3.5 11.2835 3.5 12.25C3.5 13.2165 4.2835 14 5.25 14C6.21606 14 6.99929 13.2172 7 12.2513Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


SettingsSliders.propTypes = {
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


export default SettingsSliders