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

const PreviewDocument: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 4.6736V9.09116L15 10.7065V4.44907C15 4.16343 14.8779 3.89142 14.6644 3.70166L10.7842 0.252591C10.6011 0.0898786 10.3647 0 10.1198 0H2.5H1V1.5V13.5C1 14.8807 2.11929 16 3.5 16H11.7275L11.3016 15.5414L10.3346 14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V1.5H9.9297L13.5 4.6736ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 8.63488 11.331 9.23028 11.0354 9.74364L14.0496 12.9897L14.5599 13.5393L13.4607 14.5599L12.9504 14.0103L10.0223 10.857C9.4512 11.262 8.7534 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


PreviewDocument.defaultProps = {
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


PreviewDocument.propTypes = {
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


export default PreviewDocument