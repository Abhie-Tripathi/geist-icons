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

const Edge: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.5 1C8.5 1 4.58642 4.74805 3.94122 5.39717C3.86128 5.4776 3.84989 5.60224 3.91398 5.69539C3.97806 5.78854 4.09993 5.82451 4.20557 5.78145L7.90537 4.27345L11.7747 10.3604C11.8406 10.464 11.9758 10.5013 12.0869 10.4465C12.1979 10.3917 12.2483 10.2628 12.2032 10.1489C11.7103 8.90508 8.5 1 8.5 1ZM6.29304 7.03867C6.35522 6.93334 6.32602 6.79881 6.22554 6.72763C6.12505 6.65645 5.98605 6.67185 5.90418 6.76322C5.12486 7.633 0 13.5 0 13.5C0 13.5 5.18613 14.803 6.03089 14.9939C6.14204 15.0191 6.25587 14.964 6.30355 14.8621C6.35122 14.7603 6.31967 14.6394 6.22796 14.5728L3.1616 12.3431L6.29304 7.03867ZM14.054 8.5893C14.016 8.47964 13.9029 8.4131 13.7867 8.43203C13.6705 8.45096 13.5853 8.5498 13.5853 8.66564V12.3824L6.45275 12.5197C6.32824 12.5221 6.22613 12.6175 6.2173 12.7396C6.20846 12.8618 6.2958 12.9704 6.41871 12.9901C7.68171 13.1927 16 14.5728 16 14.5728C16 14.5728 14.3311 9.38966 14.054 8.5893Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Edge.propTypes = {
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


export default Edge