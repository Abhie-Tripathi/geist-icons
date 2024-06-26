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

const Music: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 1.5H2.5V13.5C2.5 14.0523 2.94772 14.5 3.5 14.5H12.5C13.0523 14.5 13.5 14.0523 13.5 13.5V1.5ZM2.5 0H1V1.5V13.5C1 14.8807 2.11929 16 3.5 16H12.5C13.8807 16 15 14.8807 15 13.5V1.5V0H13.5H2.5ZM5.25 10.5C5.25 11.1904 5.80964 11.75 6.5 11.75C7.19036 11.75 7.75 11.1904 7.75 10.5C7.75 9.80964 7.19036 9.25 6.5 9.25C5.80964 9.25 5.25 9.80964 5.25 10.5ZM6.5 13C5.11929 13 4 11.8807 4 10.5C4 9.11929 5.11929 8 6.5 8C6.95329 8 7.37841 8.12064 7.745 8.33157V3.5L8.86813 3.12363L8.86864 3.12319L8.87027 3.12533L8.88013 3.13807C8.88944 3.15 8.90412 3.16862 8.92381 3.19297C8.96324 3.24172 9.02247 3.31313 9.09857 3.39961C9.25154 3.57344 9.46872 3.80366 9.7267 4.03196C10.2758 4.51789 10.8763 4.875 11.38 4.875H12.005V6.125H11.38C10.4374 6.125 9.57694 5.54953 8.995 5.05215V9.75V10.3405C8.99831 10.3933 9 10.4464 9 10.5C9 11.8807 7.88071 13 6.5 13Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Music.propTypes = {
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


export default Music