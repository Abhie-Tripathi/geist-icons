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

const LambdaRectangle: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 1.5H2.5V13.5C2.5 14.0523 2.94772 14.5 3.5 14.5H12.5C13.0523 14.5 13.5 14.0523 13.5 13.5V1.5ZM2.5 0H1V1.5V13.5C1 14.8807 2.11929 16 3.5 16H12.5C13.8807 16 15 14.8807 15 13.5V1.5V0H13.5H2.5ZM4.85706 3.45166H5.60706C6.53368 3.45166 7.37801 3.98363 7.77802 4.81948L10.6449 10.8102L10.8629 10.4718L12.1239 11.2843L11.7177 11.9147C11.1642 12.7738 9.88304 12.693 9.4419 11.7712L7.9344 8.62109L6.28439 12.0915L5.96235 12.7688L4.60767 12.1247L4.92972 11.4474L6.95963 7.17796L7.10124 6.88012L6.42497 5.46699C6.27427 5.15208 5.95616 4.95166 5.60706 4.95166H4.85706V3.45166Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


LambdaRectangle.defaultProps = {
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


LambdaRectangle.propTypes = {
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


export default LambdaRectangle