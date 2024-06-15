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

const Monorepo: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 3.25C3.25 3.80228 2.80228 4.25 2.25 4.25C1.69772 4.25 1.25 3.80228 1.25 3.25C1.25 2.69772 1.69772 2.25 2.25 2.25C2.80228 2.25 3.25 2.69772 3.25 3.25ZM2.25 5.5C2.66117 5.5 3.04658 5.38971 3.37826 5.1971L7.61629 8.49335L8 8.79179L8.38371 8.49335L12.6217 5.1971C12.9534 5.38971 13.3388 5.5 13.75 5.5C14.9926 5.5 16 4.49264 16 3.25C16 2.00736 14.9926 1 13.75 1C12.5074 1 11.5 2.00736 11.5 3.25C11.5 3.6247 11.5916 3.978 11.7536 4.28874L8 7.20821L4.2464 4.28874C4.40841 3.978 4.5 3.6247 4.5 3.25C4.5 2.00736 3.49264 1 2.25 1C1.00736 1 0 2.00736 0 3.25C0 4.49264 1.00736 5.5 2.25 5.5ZM3.25 12.75C3.25 13.3023 2.80228 13.75 2.25 13.75C1.69772 13.75 1.25 13.3023 1.25 12.75C1.25 12.1977 1.69772 11.75 2.25 11.75C2.80228 11.75 3.25 12.1977 3.25 12.75ZM2.25 15C3.49264 15 4.5 13.9926 4.5 12.75C4.5 11.7242 3.81357 10.8588 2.875 10.5879V7H1.625V10.5879C0.68643 10.8588 0 11.7242 0 12.75C0 13.9926 1.00736 15 2.25 15ZM13.75 4.25C14.3023 4.25 14.75 3.80228 14.75 3.25C14.75 2.69772 14.3023 2.25 13.75 2.25C13.1977 2.25 12.75 2.69772 12.75 3.25C12.75 3.80228 13.1977 4.25 13.75 4.25ZM14.75 12.75C14.75 13.3023 14.3023 13.75 13.75 13.75C13.1977 13.75 12.75 13.3023 12.75 12.75C12.75 12.1977 13.1977 11.75 13.75 11.75C14.3023 11.75 14.75 12.1977 14.75 12.75ZM13.75 15C14.9926 15 16 13.9926 16 12.75C16 11.7242 15.3136 10.8588 14.375 10.5879V7H13.125V10.5879C12.1864 10.8588 11.5 11.7242 11.5 12.75C11.5 13.9926 12.5074 15 13.75 15Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Monorepo.defaultProps = {
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


Monorepo.propTypes = {
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


export default Monorepo