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

const BrowserEdge: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9655 9.30552C11.0894 9.33014 11.2259 9.3508 11.3727 9.3662C11.7569 9.40653 12.0473 9.3981 12.1627 9.39475H12.1627C12.1819 9.39419 12.1963 9.39377 12.2054 9.39375C12.6481 9.39346 13.0826 9.27443 13.4637 9.04908L13.4689 9.046L13.4689 9.04602C13.8582 8.81831 14.1812 8.4928 14.4059 8.10176C14.6307 7.71071 14.7493 7.26773 14.75 6.81672L14.7501 6.80201C14.7636 5.79754 14.4254 5.1283 14.214 4.71008L14.1792 4.64096C13.1007 2.55091 10.7296 1.25 8 1.25H7.99988C6.53624 1.24986 5.12109 1.7251 3.96129 2.59093C4.30353 2.53919 4.65106 2.5125 5 2.5125C5.2679 2.5125 6.7634 2.52858 8.19362 3.27426C9.22277 3.78873 10.0753 4.59831 10.6422 5.59969C11.1828 6.54221 11.2562 7.64421 11.2562 8.0625C11.2562 8.46398 11.1491 8.89702 10.9655 9.30552ZM0 7.8875C0.001666 7.76588 0.00969136 7.64551 0.0238024 7.52659C0.0121764 7.65052 0.00625233 7.77308 0.00625233 7.89375C-0.00466109 9.1021 0.253676 10.2977 0.762502 11.3938C1.5958 13.1681 3.05159 14.5748 4.85352 15.3467C4.89423 15.3642 4.93504 15.3813 4.97597 15.398C5.36606 15.5575 5.76599 15.6851 6.17191 15.7806L6.17436 15.7811C6.31763 15.8148 6.46165 15.8445 6.60625 15.8701L6.6125 15.8712C7.23305 15.9808 7.86418 16.0166 8.49259 15.9782C9.18342 15.9359 9.87095 15.8038 10.5375 15.5813C10.4187 15.6188 10.2986 15.6515 10.1776 15.6794C10.3068 15.6479 10.4269 15.6146 10.5312 15.5813L10.6125 15.5562C11.8271 15.1365 12.9153 14.4339 13.7923 13.5156C13.9086 13.3938 14.0212 13.2683 14.1298 13.1391L14.1305 13.1383C14.1527 13.1118 14.1748 13.0852 14.1968 13.0584C14.2892 12.9456 14.3787 12.8301 14.4651 12.7119C14.5434 12.6049 14.6192 12.4958 14.6923 12.3846L14.6953 12.3801C14.7222 12.3391 14.7488 12.2978 14.775 12.2563C14.8032 12.2094 14.8154 12.1546 14.8095 12.1003C14.8036 12.0459 14.7801 11.9949 14.7425 11.9552C14.7049 11.9155 14.6554 11.8892 14.6014 11.8804C14.5474 11.8715 14.492 11.8806 14.4437 11.9062C14.4026 11.9276 14.3612 11.9485 14.3196 11.9689L14.3081 11.9745C14.1363 12.0582 13.9605 12.1335 13.7812 12.2L13.7384 12.2158C13.6831 12.2359 13.6275 12.2553 13.5718 12.2738C13.4195 12.3245 13.2655 12.3694 13.1101 12.4084C12.5968 12.5373 12.0685 12.6018 11.5375 12.6C8.58124 12.6 6.00624 10.5688 6.00624 7.95625C6.00681 7.90386 6.00948 7.85163 6.0142 7.79968C6.041 7.50479 6.13405 7.21903 6.28722 6.96405C6.46735 6.66421 6.7241 6.41778 7.03106 6.2501C7.03112 6.25006 7.03119 6.25003 7.03125 6.25L7.05021 6.2411C7.25188 6.14635 7.57624 5.99395 8.00625 6C8.29548 6.00224 8.5806 6.0664 8.84251 6.18786C8.86336 6.19753 8.88407 6.20757 8.90462 6.21796C9.18326 6.35891 9.42554 6.56239 9.6125 6.8125C9.82517 7.09849 9.95657 7.43524 9.99474 7.78723C10.0032 7.89727 10.0062 7.99119 10.0062 8.0625C10.0062 8.08899 10.0052 8.11643 10.0031 8.14473C9.97899 8.47494 9.81454 8.92057 9.52419 9.29919L9.52415 9.29923L9.51875 9.30625L9.525 9.3L9.51898 9.30643L9.51896 9.30645C9.50873 9.317 9.49608 9.32844 9.48211 9.34107L9.4821 9.34108C9.41327 9.4033 9.3125 9.4944 9.3125 9.65C9.3125 9.8125 9.41875 9.975 9.6125 10.1062C9.77375 10.219 9.96104 10.3086 10.1598 10.3797C11.0406 10.6947 12.146 10.6464 12.2039 10.6438L12.2062 10.6437C12.8725 10.6433 13.5265 10.4642 14.1 10.125C14.6774 9.78729 15.1565 9.30452 15.4897 8.72458C15.823 8.14463 15.9989 7.48764 16 6.81875C16.0176 5.50262 15.5602 4.60076 15.334 4.15471L15.334 4.15464L15.3338 4.15436C15.3195 4.12607 15.3061 4.09961 15.2937 4.075C13.9625 1.4875 11.1062 0 8 0C5.89762 -0.000207809 3.87965 0.827186 2.38255 2.30323C1.99727 2.6831 1.65445 3.09807 1.35726 3.54075C0.499648 4.81817 0.0219561 6.32633 0 7.8875ZM3.31953 12.8532C3.22161 12.5734 3.14333 12.2862 3.08559 11.9938C2.90768 11.0929 2.9291 10.1639 3.14833 9.27208C3.36757 8.38028 3.77931 7.54726 4.35467 6.83148C4.93002 6.1157 5.65505 5.5345 6.47887 5.12867L6.50071 5.11818L6.53143 5.10368C6.74801 5.00113 7.2795 4.74947 7.98381 4.74983C7.92295 4.70251 7.85795 4.65635 7.78854 4.61154C7.24267 4.25912 6.34173 3.93822 4.85998 3.88679C3.96334 3.89362 3.07383 4.38543 2.36558 5.21759C1.6451 6.06413 1.25625 7.1003 1.25625 7.89375V7.90504L1.2562 7.90504C1.24697 8.92685 1.46522 9.9379 1.89512 10.8649C2.2478 11.6151 2.73239 12.2873 3.31953 12.8532ZM4.86315 9.0217C5.45086 11.8903 8.37095 13.7769 11.3626 13.8479C11.0018 14.055 10.6207 14.2295 10.2235 14.3681L10.1636 14.3865L10.1636 14.3865L10.1509 14.3905C9.78791 14.5065 9.17543 14.6187 8.84374 14.6187C8.50161 14.6187 7.28909 14.5194 6.21142 13.9529C5.21607 13.4297 4.35498 12.5392 4.35498 10.7812C4.35498 10.321 4.51519 9.64637 4.86315 9.0217Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


BrowserEdge.defaultProps = {
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


BrowserEdge.propTypes = {
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


export default BrowserEdge