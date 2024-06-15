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

const CodeBlock: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.80808 4.44191L2.25003 4.88386L3.13391 3.99997L2.69196 3.55803L1.63391 2.49997L2.69197 1.44191L3.13391 0.999972L2.25003 0.116089L1.80808 0.558031L0.484858 1.88126C0.143149 2.22296 0.143149 2.77698 0.484859 3.11869L1.80808 4.44191ZM12 0.999972H11.25V2.49997H12H13.5V11.75C13.5 12.7165 12.7165 13.5 11.75 13.5H4.25002C3.28353 13.5 2.50003 12.7165 2.50003 11.75V6.99997V6.24997H1.00003V6.99997V11.75C1.00003 13.5449 2.4551 15 4.25002 15H11.75C13.545 15 15 13.5449 15 11.75V1.74997V0.999972H14.25H12ZM7.75003 4.88386L8.19197 4.44191L9.51519 3.11869C9.8569 2.77698 9.8569 2.22296 9.51519 1.88126L8.19196 0.55803L7.75002 0.116089L6.86614 0.999973L7.30808 1.44191L8.36614 2.49997L7.30809 3.55803L6.86615 3.99997L7.75003 4.88386ZM4.13155 3.89688L4.02847 4.51535L5.26541 4.7215L5.36848 4.10303L5.86848 1.10303L5.97156 0.484566L4.73462 0.278409L4.63155 0.896878L4.13155 3.89688Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


CodeBlock.defaultProps = {
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


CodeBlock.propTypes = {
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


export default CodeBlock