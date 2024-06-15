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

const Fingerprint: React.FC<AccessibilityProps> = (props) => {
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
                                <g clip-path="url(#clip0_4628_1818)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M15.0932 7.64904C14.8377 3.56123 11.3168 0.454519 7.22898 0.710006C5.45234 0.821046 3.8593 1.54996 2.64882 2.67365L3.66933 3.77299C4.63533 2.87625 5.90403 2.29574 7.32254 2.20709C10.5835 2.00327 13.3923 4.48161 13.5961 7.74261C13.663 8.81244 14.0605 10.1035 15.1336 10.8299L15.9745 9.58773C15.4544 9.23567 15.1467 8.50463 15.0932 7.64904ZM1.21934 4.48945C0.544864 5.69225 0.197633 7.09732 0.28994 8.57425C0.414316 10.5643 0.700415 12.5343 1.14241 14.4655L2.6046 14.1308C2.1807 12.2786 1.90631 10.3893 1.78702 8.48068C1.71326 7.30048 1.99016 6.18167 2.52767 5.22312L1.21934 4.48945ZM11.9314 8.14996C11.7883 5.86143 9.81714 4.12215 7.5286 4.26518C5.24007 4.40822 3.50079 6.3794 3.64382 8.66793C3.6894 9.3971 3.75974 10.1232 3.85448 10.845L5.34173 10.6498C5.25141 9.9617 5.18435 9.2695 5.1409 8.57437C5.04955 7.11264 6.16045 5.85362 7.62217 5.76226C9.0839 5.67091 10.3429 6.78181 10.4343 8.24353C10.4726 8.85698 10.5332 9.46767 10.6157 10.0745L12.102 9.87246C12.0244 9.30161 11.9674 8.72708 11.9314 8.14996ZM13.0024 13.8749C12.7538 13.0919 12.5457 12.2962 12.379 11.4908L10.9101 11.7947C11.0749 12.5911 11.2779 13.3786 11.5181 14.1546L13.0024 13.8749ZM14.6499 24.8207L10.8508 25.5691C11.9295 25.8912 13.1347 25.7761 14.176 25.1513C14.3437 25.0507 14.5018 24.94 14.6499 24.8207ZM4.79771 15.421C4.62667 14.8172 4.47329 14.2083 4.33781 13.5951C4.27053 13.2906 4.20767 12.985 4.14924 12.6784L5.62272 12.3976C5.67842 12.6899 5.73835 12.9812 5.80249 13.2715C5.94137 13.9001 6.09998 14.5239 6.27803 15.142L4.79771 15.421ZM8.11677 14.7955L8.0783 14.6651L8.0775 14.6624C7.46325 12.5503 7.08106 10.3695 6.94287 8.1585C6.91703 7.7451 7.23122 7.38902 7.64463 7.36318C8.05803 7.33734 8.41411 7.65153 8.43995 8.06494C8.57119 10.1649 8.93413 12.2361 9.51744 14.2421L9.51783 14.2435L9.5983 14.5164L8.11677 14.7955Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_4628_1818">
                                    <rect   fill="white" ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
    </SvgContainer>
  )
}


Fingerprint.defaultProps = {
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


Fingerprint.propTypes = {
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


export default Fingerprint