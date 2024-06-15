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

const CloudDownload: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.875 1.5C3.01104 1.5 1.5 3.01104 1.5 4.875V6.40385C1.5 7.22166 1.87727 7.95083 2.47018 8.42791L3.0545 8.89808L2.11415 10.0667L1.52982 9.59656C0.598275 8.84699 0 7.69502 0 6.40385V4.875C0 2.18261 2.18261 0 4.875 0C6.79184 0 8.44888 1.1064 9.2449 2.71201C9.35322 2.93049 9.51183 3 9.60112 3H12.25C14.3211 3 16 4.67893 16 6.75C16 7.8785 15.5006 8.89123 14.7133 9.57758L14.1479 10.0704L13.1622 8.93972L13.7276 8.44689C14.202 8.03329 14.5 7.42688 14.5 6.75C14.5 5.50736 13.4926 4.5 12.25 4.5H9.60112C8.79547 4.5 8.1902 3.96162 7.901 3.37829C7.34838 2.26364 6.20018 1.5 4.875 1.5ZM8.75 13.4393L10.7197 11.4697L11.25 10.9393L12.3107 12L11.7803 12.5303L8.70711 15.6036C8.31658 15.9941 7.68342 15.9941 7.29289 15.6036L4.21967 12.5303L3.68934 12L4.75 10.9393L5.28033 11.4697L7.25 13.4393V7.75V7H8.75V7.75V13.4393Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CloudDownload.defaultProps = {
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


CloudDownload.propTypes = {
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


export default CloudDownload