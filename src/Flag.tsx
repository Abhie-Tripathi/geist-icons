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

const Flag: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.38401C2.64568 2.28957 2.84672 2.17097 3.09632 2.0516C3.67556 1.77457 4.50202 1.5 5.5 1.5C6.36835 1.5 7.01666 1.91731 7.76416 2.47582C7.81395 2.51302 7.86487 2.55137 7.91678 2.59046C8.2325 2.82825 8.58515 3.09385 8.94862 3.30046C9.38732 3.54983 9.90016 3.75 10.5 3.75C11.4771 3.75 12.5081 3.46807 13.2589 3.20897C13.3421 3.18026 13.4226 3.15157 13.5 3.12321V8.81917C13.366 8.88807 13.1923 8.96944 12.9825 9.05151C12.4127 9.27435 11.5825 9.49998 10.5568 9.49998C9.65149 9.49998 9.11435 9.17173 8.42753 8.74001L8.40495 8.72582C7.70405 8.28516 6.85285 7.75 5.5 7.75C4.25466 7.75 3.22521 8.08445 2.5 8.42432V2.38401ZM2.5 10.134V15.25V16H1V15.25V2V1.65215L1.26554 1.42746L1.75 2C1.26554 1.42746 1.26576 1.42728 1.26599 1.42709L1.26646 1.42668L1.26752 1.42579L1.27005 1.42367L1.27679 1.41807L1.29689 1.4017C1.31321 1.38857 1.33537 1.37107 1.36321 1.34985C1.41885 1.30743 1.49735 1.24998 1.59739 1.18261C1.79715 1.04807 2.08466 0.872716 2.44914 0.698399C3.17671 0.350428 4.22526 0 5.5 0C6.90437 0 7.9038 0.707694 8.66198 1.27418C8.72015 1.31765 8.77638 1.3599 8.831 1.40094C9.15213 1.64223 9.41729 1.84147 9.68987 1.99641C9.99337 2.16892 10.2476 2.25 10.5 2.25C11.2275 2.25 12.0715 2.03193 12.7695 1.79103C13.1109 1.67321 13.4025 1.55523 13.6079 1.46707C13.7104 1.42308 13.7908 1.38677 13.8446 1.36197C13.8714 1.34957 13.8916 1.34007 13.9044 1.33395L13.9182 1.32736L13.9206 1.32621L13.9208 1.32612L13.9209 1.32608L13.9209 1.32605L13.9211 1.32597L15 0.798502V2V9.24998V9.6392L14.6817 9.86326L14.25 9.24998C14.6817 9.86326 14.6815 9.86342 14.6813 9.86359L14.6808 9.86394L14.6797 9.86471L14.6771 9.86653L14.6702 9.87124L14.6502 9.88477C14.6341 9.89556 14.6123 9.90981 14.5851 9.92701C14.5307 9.96141 14.4542 10.0077 14.3569 10.0618C14.1624 10.1699 13.8834 10.3098 13.5289 10.4485C12.8202 10.7256 11.8039 11 10.5568 11C9.20395 11 8.35275 10.4648 7.65185 10.0242L7.62928 10.01C6.94245 9.57826 6.40532 9.25 5.5 9.25C4.50202 9.25 3.67557 9.52457 3.09633 9.8016C2.84672 9.92098 2.64568 10.0396 2.5 10.134ZM2.23212 10.3245C2.23169 10.3249 2.23159 10.325 2.23184 10.3248L2.23212 10.3245Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Flag.propTypes = {
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


export default Flag