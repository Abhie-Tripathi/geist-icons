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

const Postgres: React.FC<AccessibilityProps> = (props) => {
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.80714 0C6.05244 0 4.07818 1.00497 2.80443 2.50789C1.54883 3.98938 1.02936 5.88784 1.02936 7.60927V11.7025C1.02936 12.6777 1.20634 13.4725 1.54675 14.1077C1.89174 14.7514 2.38102 15.1868 2.92666 15.4715C3.94135 16.001 5.15367 16.0004 5.93949 16L6.00002 16H6.75002V15.25C6.75002 14.971 6.75142 14.5234 6.83939 14.0681C6.93042 13.5969 7.0921 13.2389 7.31986 13.0382C7.35192 13.0099 7.38611 12.9801 7.42194 12.9489C7.65142 12.7488 7.94844 12.4898 8.18682 12.2027C8.3408 12.0173 8.49306 11.7946 8.60036 11.5346C10.3609 11.4835 11.9378 11.18 13.0925 10.1746C14.4009 9.03546 14.9805 7.16892 14.9805 4.42564V4.4198V4.41392V4.408V4.40205V4.39605V4.39002V4.38395V4.37785V4.37171V4.36553V4.35931V4.35306V4.34677V4.34044V4.33408V4.32768V4.32125V4.31478V4.30828V4.30174V4.29517V4.28856V4.28192V4.27525V4.26854V4.26179V4.25502V4.24821V4.24136V4.23449V4.22758V4.22064V4.21366V4.20665V4.19962V4.19255V4.18544V4.17831V4.17115V4.16395V4.15672V4.14947V4.14218V4.13486V4.12751V4.12014V4.11273V4.10529V4.09783V4.09033V4.08281V4.07526V4.06767V4.06006V4.05243V4.04476V4.03707V4.02935V4.0216V4.01382V4.00602V3.99819V3.99034V3.98246V3.97455V3.96662V3.95866V3.95067V3.94266V3.93463V3.92656V3.91848V3.91037V3.90224V3.89408V3.88589V3.87769V3.86946V3.8612V3.85293V3.84463V3.83631V3.82796V3.81959V3.8112V3.80279V3.79436V3.7859V3.77743V3.76893V3.76041V3.75187V3.74331V3.73473V3.72613V3.71751V3.70887V3.7002V3.69152V3.68282V3.67411V3.66537V3.65661V3.64784V3.63904V3.63023V3.6214V3.61255V3.60369V3.59481V3.58591V3.57699V3.56806V3.55911V3.55014V3.54116V3.53216V3.52315V3.51412V3.50508V3.49602V3.48694V3.47785V3.46875V3.45963V3.45049V3.44135V3.43219V3.42301V3.41382V3.40462V3.39541V3.38618V3.37694V3.36769V3.35842V3.34915V3.33986V3.33056V3.32125V3.31192V3.30259V3.29324V3.28389V3.27452V3.26515V3.25576V3.24636V3.23696V3.22754V3.21811V3.20868V3.19924V3.18978V3.18032V3.17085V3.16138V3.15189V3.1424V3.1329V3.12339V3.11388V3.10435V3.09482V3.08529V3.07575V3.0662V3.05664V3.04708V3.03752V3.02795V3.01837V3.00879V2.9992V2.98961V2.98002V2.97042V2.96081V2.95121V2.9416V2.93198V2.92236V2.91274V2.90312V2.89349V2.88386V2.87423V2.8646V2.85496V2.84532V2.83569V2.82605V2.8164V2.80676V2.79712V2.78748V2.77783V2.76819V2.75854V2.7489V2.73926V2.72962V2.71997V2.71033V2.70069V2.69105V2.68142V2.67178V2.66215V2.65252V2.64289V2.63327V2.62364V2.61402V2.60441V2.59479V2.58518V2.57558V2.56598V2.55638V2.54678V2.53719V2.52761V2.51803V2.50846V2.49889V2.48932V2.47977V2.47021V2.46067V2.45113V2.4416V2.43207V2.42255V2.41304V2.40353V2.39403V2.38454V2.37506V2.36559V2.35612V2.34666V2.33722V2.32778V2.31835V2.30892V2.29951V2.29011V2.28072V2.27133V2.26196V2.2526V2.24325V2.2339V2.22457V2.21526V2.20595V2.19665V2.18737V2.1781V2.16884V2.15959V2.15035V2.14113V2.13192V2.12273V2.11354V2.10437V2.09522V2.08608V2.07695V2.06783V2.05874V2.04965V2.04058V2.03153V2.02249V2.01346V2.00446V1.99547V1.98649V1.97753V1.96859V1.95966V1.95075V1.94186V1.93298V1.92412V1.91528V1.90646V1.89766V1.88887V1.8801V1.87135V1.86262V1.85391V1.84522V1.83654V1.82789V1.81926V1.81064V1.80205V1.79348V1.78492V1.77639V1.76788V1.75939V1.75092V1.74248V1.73405V1.72565V1.71727V1.70891V1.70057V1.69226V1.68397V1.6757V1.66745V1.65923V1.65104V1.64286V1.63471V1.62659V1.61849V1.61041V1.60236V1.59434V1.58633V1.57836V1.57041V1.56249V1.55459V1.54672V1.53887V1.53105V1.52326V1.5155V1.50776V1.50005V1.49237V1.48471V1.47708V1.46948V1.46191V1.45437V1.44686V1.43938V1.43192V1.4245V1.4171V1.40973V1.4024V1.39509V1.38781V1.38057V1.37335V1.36617V1.35902V1.3519V1.34481V1.33775V1.33072V1.32373V1.31677V1.30984V1.30294V1.29608V1.28925V1.28245V1.27568V1.26895V1.26226V1.25559V1.24897V1.24237V1.23581V1.22929V1.2228V1.21634V1.20992V1.20354V1.19719V1.19088V1.18461V1.17837V1.17217V1.166V1.15987V1.15378V1.14773V1.14171V1.13573V1.12979V1.12389V1.11802V1.1122V1.10641V1.10066V1.09495V1.08928V1.08365V1.07806V1.07251V1.067V1.06153V1.0561V1.05071V1.04536V1.04005V1.03479V1.02956V1.02438V1.01924V1.01414V1.00908V1.00407V0.999099V0.99417V0.989284V0.984441V0.979642V0.974887V0.970175V0.965507V0.960883V0.956304V0.95177V0.94728V0.942835V0.938435V0.934081V0.929772V0.925509V0.921292V0.917121V0.912997V0.908919V0.904888V0.900903V0.896966V0.893076V0.889234V0.885439V0.881692V0.877994V0.874344V0.870742V0.867188V0.863684V0.860229V0.856823V0.853467V0.85016V0.846903V0.843696V0.840539V0.837433V0.834378V0.831373V0.828419V0.825517V0.822666V0.819867V0.817119V0.814423V0.81178V0.809189V0.806651V0.804165V0.801733V0.799353V0.797027V0.794755V0.792536V0.790371V0.788261V0.786205V0.784203V0.782256V0.780364V0.778527V0.776746V0.77502V0.77335V0.771735V0.770177V0.768675V0.76723V0.765841V0.764509V0.763235V0.762017V0.760857V0.759755V0.758711V0.757724V0.756796V0.755927V0.755116V0.754364V0.753671V0.753037V0.752463V0.751948V0.751493V0.751098V0.750763V0.750489V0.750275V0.750123V0.750031L14.2305 0.75H14.9805V0H14.2305H8.80714ZM6.44743 11.8081C6.60472 11.6703 6.74367 11.5486 6.86479 11.4274C6.42331 11.3419 6.01938 11.2205 5.68823 11.1038C5.38288 10.9962 5.12818 10.8885 4.94828 10.807C4.85814 10.7662 4.78623 10.7317 4.73555 10.7067C4.71019 10.6942 4.6901 10.684 4.67564 10.6766L4.65822 10.6676L4.65276 10.6648L4.65085 10.6638L4.65011 10.6634L4.64979 10.6632C4.64964 10.6631 4.6495 10.6631 5 10L4.6495 10.6631L3.98644 10.3126L4.68744 8.98644L5.34943 9.33637L5.3497 9.33652L5.35003 9.33669L5.35025 9.33681L5.35048 9.33692L5.3505 9.33694L5.35878 9.3412C5.36703 9.34542 5.38063 9.3523 5.39922 9.36147C5.43642 9.37983 5.49342 9.40725 5.56734 9.44074C5.71558 9.50791 5.92962 9.59847 6.18678 9.68909C6.71072 9.87373 7.36994 10.0429 8.00002 10.0429C9.95835 10.0429 11.2666 9.77551 12.1075 9.04335C12.9245 8.33204 13.4805 7.01495 13.4805 4.42564V4.4198V4.41392V4.408V4.40205V4.39605V4.39002V4.38395V4.37785V4.37171V4.36553V4.35931V4.35306V4.34677V4.34044V4.33408V4.32768V4.32125V4.31478V4.30828V4.30174V4.29517V4.28856V4.28192V4.27525V4.26854V4.26179V4.25502V4.24821V4.24136V4.23449V4.22758V4.22064V4.21366V4.20665V4.19962V4.19255V4.18544V4.17831V4.17115V4.16395V4.15672V4.14947V4.14218V4.13486V4.12751V4.12014V4.11273V4.10529V4.09783V4.09033V4.08281V4.07526V4.06767V4.06006V4.05243V4.04476V4.03707V4.02935V4.0216V4.01382V4.00602V3.99819V3.99034V3.98246V3.97455V3.96662V3.95866V3.95067V3.94266V3.93463V3.92656V3.91848V3.91037V3.90224V3.89408V3.88589V3.87769V3.86946V3.8612V3.85293V3.84463V3.83631V3.82796V3.81959V3.8112V3.80279V3.79436V3.7859V3.77743V3.76893V3.76041V3.75187V3.74331V3.73473V3.72613V3.71751V3.70887V3.7002V3.69152V3.68282V3.67411V3.66537V3.65661V3.64784V3.63904V3.63023V3.6214V3.61255V3.60369V3.59481V3.58591V3.57699V3.56806V3.55911V3.55014V3.54116V3.53216V3.52315V3.51412V3.50508V3.49602V3.48694V3.47785V3.46875V3.45963V3.45049V3.44135V3.43219V3.42301V3.41382V3.40462V3.39541V3.38618V3.37694V3.36769V3.35842V3.34915V3.33986V3.33056V3.32125V3.31192V3.30259V3.29324V3.28389V3.27452V3.26515V3.25576V3.24636V3.23696V3.22754V3.21811V3.20868V3.19924V3.18978V3.18032V3.17085V3.16138V3.15189V3.1424V3.1329V3.12339V3.11388V3.10435V3.09482V3.08529V3.07575V3.0662V3.05664V3.04708V3.03752V3.02795V3.01837V3.00879V2.9992V2.98961V2.98002V2.97042V2.96081V2.95121V2.9416V2.93198V2.92236V2.91274V2.90312V2.89349V2.88386V2.87423V2.8646V2.85496V2.84532V2.83569V2.82605V2.8164V2.80676V2.79712V2.78748V2.77783V2.76819V2.75854V2.7489V2.73926V2.72962V2.71997V2.71033V2.70069V2.69105V2.68142V2.67178V2.66215V2.65252V2.64289V2.63327V2.62364V2.61402V2.60441V2.59479V2.58518V2.57558V2.56598V2.55638V2.54678V2.53719V2.52761V2.51803V2.50846V2.49889V2.48932V2.47977V2.47021V2.46067V2.45113V2.4416V2.43207V2.42255V2.41304V2.40353V2.39403V2.38454V2.37506V2.36559V2.35612V2.34666V2.33722V2.32778V2.31835V2.30892V2.29951V2.29011V2.28072V2.27133V2.26196V2.2526V2.24325V2.2339V2.22457V2.21526V2.20595V2.19665V2.18737V2.1781V2.16884V2.15959V2.15035V2.14113V2.13192V2.12273V2.11354V2.10437V2.09522V2.08608V2.07695V2.06783V2.05874V2.04965V2.04058V2.03153V2.02249V2.01346V2.00446V1.99547V1.98649V1.97753V1.96859V1.95966V1.95075V1.94186V1.93298V1.92412V1.91528V1.90646V1.89766V1.88887V1.8801V1.87135V1.86262V1.85391V1.84522V1.83654V1.82789V1.81926V1.81064V1.80205V1.79348V1.78492V1.77639V1.76788V1.75939V1.75092V1.74248V1.73405V1.72565V1.71727V1.70891V1.70057V1.69226V1.68397V1.6757V1.66745V1.65923V1.65104V1.64286V1.63471V1.62659V1.61849V1.61041V1.60236V1.59434V1.58633V1.57836V1.57041V1.56249V1.55459V1.54672V1.53887V1.53105V1.52326V1.5155V1.50776V1.50005V1.5H8.80714C6.45072 1.5 4.91109 2.34222 3.94873 3.47771C2.96822 4.63464 2.52936 6.16581 2.52936 7.60927V11.7025C2.52936 12.5011 2.6746 13.0366 2.86887 13.3991C3.05856 13.7531 3.31641 13.9829 3.62058 14.1416C4.09266 14.388 4.6689 14.4653 5.27414 14.4893C5.2908 14.2712 5.31898 14.0302 5.36663 13.7835C5.48159 13.1885 5.73188 12.4383 6.32805 11.9129C6.36892 11.8768 6.40867 11.842 6.44732 11.8082L6.44743 11.8081ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


Postgres.defaultProps = {
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


Postgres.propTypes = {
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


export default Postgres