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

const LogoDiscord: React.FC<AccessibilityProps> = (props) => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? true : false}
      shake={props.shake ? true : false}
      beat={props.beat ? true : false}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses}   strokeLinejoin="round"  viewBox="0 0 16 16" >
                                <path d="M13.5535 3.01557C12.5023 2.5343 11.3925 2.19287 10.2526 2C10.0966 2.27886 9.95547 2.56577 9.82976 2.85952C8.6155 2.67655 7.38067 2.67655 6.16641 2.85952C6.04063 2.5658 5.89949 2.27889 5.74357 2C4.60289 2.1945 3.4924 2.53674 2.44013 3.01809C0.351096 6.10885 -0.215207 9.12285 0.0679444 12.0941C1.29133 12.998 2.66066 13.6854 4.11639 14.1265C4.44417 13.6856 4.73422 13.2179 4.98346 12.7283C4.51007 12.5515 4.05317 12.3334 3.61804 12.0764C3.73256 11.9934 3.84456 11.9078 3.95279 11.8248C5.21891 12.4202 6.60083 12.7289 7.99997 12.7289C9.39912 12.7289 10.781 12.4202 12.0472 11.8248C12.1566 11.9141 12.2686 11.9997 12.3819 12.0764C11.9459 12.3338 11.4882 12.5524 11.014 12.7296C11.2629 13.2189 11.553 13.6862 11.881 14.1265C13.338 13.6872 14.7084 13.0001 15.932 12.0953C16.2642 8.64968 15.3644 5.66336 13.5535 3.01557ZM5.34212 10.2668C4.55307 10.2668 3.90119 9.55073 3.90119 8.66981C3.90119 7.78889 4.53042 7.06654 5.3396 7.06654C6.14879 7.06654 6.79563 7.78889 6.78179 8.66981C6.76795 9.55073 6.14627 10.2668 5.34212 10.2668ZM10.6578 10.2668C9.86752 10.2668 9.21815 9.55073 9.21815 8.66981C9.21815 7.78889 9.84738 7.06654 10.6578 7.06654C11.4683 7.06654 12.1101 7.78889 12.0962 8.66981C12.0824 9.55073 11.462 10.2668 10.6578 10.2668Z" fill="#5865F2"></path>
                              </svg>
    </SvgContainer>
  )
}


LogoDiscord.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoDiscord.propTypes = {
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


export default LogoDiscord