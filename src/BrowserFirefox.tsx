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

const BrowserFirefox: React.FC<AccessibilityProps> = ({
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
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.745 1.93187V0.657158L3.73726 1.43777C1.57364 3.11374 0.201635 5.86677 0.0997348 8.16437L0.0991211 8.17821V8.19206V8.22835V8.22945C0.102507 10.1453 0.82436 11.9902 2.12211 13.4001C3.41984 14.8099 5.19915 15.6821 7.10876 15.8447C9.01836 16.0072 10.9196 15.4483 12.4371 14.2782C13.9592 13.1047 15.315 11.2235 15.315 8.22835C15.315 5.91547 14.8666 4.72632 14.4109 3.75454C14.3622 3.65075 14.3145 3.55132 14.2682 3.4548C13.9032 2.6936 13.625 2.11332 13.625 1H12.375C12.375 1.41546 12.1987 1.8589 11.8676 2.31919C11.5381 2.77724 11.0854 3.20938 10.6104 3.58803C10.1383 3.96438 9.66285 4.27321 9.30363 4.48856C9.1247 4.59584 8.97624 4.67894 8.87362 4.73467L8.84601 4.7496H7.245V4.74679V4.74079V4.73477V4.72874V4.72269V4.71663V4.71056V4.70447V4.69836V4.69225V4.68611V4.67997V4.67381V4.66764V4.66145V4.65525V4.64904V4.64281V4.63658V4.63033V4.62406V4.61779V4.6115V4.6052V4.59889V4.59257V4.58623V4.57989V4.57353V4.56716V4.56078V4.55439V4.54799V4.54158V4.53516V4.52873V4.52229V4.51583V4.50937V4.5029V4.49642V4.48993V4.48343V4.47692V4.4704V4.46387V4.45734V4.45079V4.44424V4.43768V4.43111V4.42453V4.41795V4.41135V4.40475V4.39815V4.39153V4.38491V4.37828V4.37164V4.365V4.35835V4.3517V4.34503V4.33837V4.33169V4.32501V4.31832V4.31163V4.30494V4.29823V4.29153V4.28482V4.2781V4.27138V4.26465V4.25792V4.25118V4.24445V4.2377V4.23095V4.2242V4.21745V4.21069V4.20393V4.19717V4.1904V4.18363V4.17686V4.17008V4.1633V4.15652V4.14974V4.14296V4.13617V4.12938V4.12259V4.1158V4.10901V4.10222V4.09542V4.08863V4.08183V4.07504V4.06824V4.06144V4.05465V4.04785V4.04105V4.03426V4.02746V4.02066V4.01387V4.00708V4.00028V3.99349V3.9867V3.97991V3.97312V3.96634V3.95955V3.95277V3.94599V3.93921V3.93244V3.92567V3.9189V3.91213V3.90537V3.89861V3.89185V3.88509V3.87834V3.8716V3.86485V3.85812V3.85138V3.84465V3.83792V3.8312V3.82449V3.81778V3.81107V3.80437V3.79767V3.79098V3.78429V3.77761V3.77094V3.76427V3.75761V3.75096V3.74431V3.73767V3.73103V3.7244V3.71778V3.71117V3.70456V3.69796V3.69137V3.68478V3.67821V3.67164V3.66508V3.65853V3.65198V3.64545V3.63892V3.6324V3.62589V3.6194V3.61291V3.60643V3.59995V3.59349V3.58704V3.5806V3.57417V3.56775V3.56134V3.55494V3.54855V3.54217V3.5358V3.52945V3.5231V3.51677V3.51045V3.50414V3.49784V3.49155V3.48528V3.47902V3.47277V3.46653V3.46031V3.4541V3.4479V3.44172V3.43555V3.42939V3.42324V3.41711V3.411V3.40489V3.3988V3.39273V3.38667V3.38063V3.37459V3.36858V3.36258V3.35659V3.35062V3.34467V3.33873V3.33281V3.3269V3.32101V3.31513V3.30927V3.30343V3.2976V3.29179V3.286V3.28023V3.27447V3.26873V3.26301V3.2573V3.25161V3.24594V3.24029V3.23466V3.22904V3.22344V3.21786V3.2123V3.20676V3.20124V3.19574V3.19025V3.18479V3.17935V3.17392V3.16852V3.16313V3.15777V3.15242V3.1471V3.1418V3.13651V3.13125V3.12601V3.12079V3.11559V3.11042V3.10526V3.10013V3.09502V3.08993V3.08486V3.07982V3.07479V3.06979V3.06482V3.05986V3.05493V3.05002V3.04514V3.04028V3.03544V3.03063V3.02584V3.02107V3.01633V3.01161V3.00692V3.00225V2.99761V2.99299V2.98839V2.98382V2.97928V2.97476V2.97027V2.9658V2.96136V2.95695V2.95256V2.9482V2.94386V2.93955V2.93527V2.93102V2.92679V2.92259V2.91841V2.91427V2.91015V2.90606V2.90199V2.89796V2.89395V2.88997V2.88602V2.8821V2.87821V2.87435V2.87051V2.8667V2.86293V2.85918V2.85546V2.85178V2.84812V2.84449V2.84089V2.83733V2.83379V2.83028V2.82681V2.82336V2.81995V2.81657V2.81322V2.8099V2.80661V2.80335V2.80013V2.79694V2.79378V2.79065V2.78756V2.78449V2.78146V2.77847V2.7755V2.77257V2.76967V2.76681V2.76398V2.76118V2.75842V2.75569V2.753V2.75034V2.74771V2.74512V2.74257V2.74004V2.73756V2.73511V2.73269V2.73031V2.72797V2.72566V2.72338V2.72115V2.71895V2.71678V2.71465V2.71256V2.71051V2.70849V2.70651V2.70457V2.70266V2.70079V2.69896V2.69717V1.41051L6.23364 2.20589C5.75879 2.57933 5.20838 3.07886 4.745 3.51652V3.51417V3.50632V3.49846V3.4906V3.48273V3.47486V3.46698V3.45909V3.4512V3.44331V3.43541V3.4275V3.41959V3.41168V3.40376V3.39583V3.38791V3.37997V3.37204V3.3641V3.35616V3.34821V3.34026V3.3323V3.32435V3.31639V3.30842V3.30046V3.29249V3.28452V3.27655V3.26857V3.26059V3.25261V3.24463V3.23665V3.22866V3.22068V3.21269V3.2047V3.19671V3.18872V3.18073V3.17273V3.16474V3.15675V3.14875V3.14076V3.13276V3.12477V3.11678V3.10878V3.10079V3.0928V3.08481V3.07682V3.06883V3.06084V3.05285V3.04487V3.03688V3.0289V3.02092V3.01294V3.00496V2.99699V2.98902V2.98105V2.97308V2.96511V2.95715V2.94919V2.94124V2.93329V2.92534V2.91739V2.90945V2.90151V2.89358V2.88565V2.87772V2.8698V2.86188V2.85397V2.84606V2.83816V2.83026V2.82237V2.81448V2.8066V2.79872V2.79085V2.78298V2.77512V2.76727V2.75942V2.75158V2.74374V2.73591V2.72809V2.72028V2.71247V2.70467V2.69687V2.68909V2.68131V2.67354V2.66577V2.65802V2.65027V2.64253V2.63479V2.62707V2.61936V2.61165V2.60395V2.59626V2.58858V2.58091V2.57325V2.5656V2.55796V2.55032V2.5427V2.53509V2.52748V2.51989V2.51231V2.50474V2.49717V2.48962V2.48208V2.47455V2.46704V2.45953V2.45203V2.44455V2.43708V2.42962V2.42217V2.41473V2.40731V2.3999V2.3925V2.38511V2.37773V2.37037V2.36302V2.35569V2.34837V2.34106V2.33376V2.32648V2.31921V2.31196V2.30472V2.29749V2.29028V2.28308V2.2759V2.26873V2.26157V2.25444V2.24731V2.2402V2.23311V2.22603V2.21897V2.21192V2.20489V2.19788V2.19088V2.1839V2.17693V2.16998V2.16305V2.15613V2.14923V2.14235V2.13548V2.12863V2.1218V2.11499V2.1082V2.10142V2.09466V2.08792V2.08119V2.07449V2.0678V2.06113V2.05448V2.04785V2.04124V2.03465V2.02807V2.02152V2.01498V2.00847V2.00197V1.9955V1.98904V1.98261V1.97619V1.9698V1.96343V1.95707V1.95074V1.94443V1.93814V1.93187ZM11.3896 4.56547C11.8719 4.18096 12.3731 3.71646 12.7774 3.1902C12.8908 3.47682 13.0174 3.73956 13.1425 3.99918L13.1425 3.99925C13.1885 4.09469 13.2343 4.18969 13.2791 4.28531C13.6684 5.11522 14.065 6.12393 14.065 8.22835C14.065 10.7765 12.9393 12.3126 11.6739 13.2883C10.404 14.2675 8.81292 14.7352 7.21479 14.5992C5.61666 14.4631 4.12769 13.7332 3.04179 12.5535C1.95601 11.3739 1.35208 9.83049 1.34912 8.22777V8.20631C1.42168 6.66162 2.20623 4.79408 3.495 3.3651V3.37204V3.37997V3.38791V3.39583V3.40376V3.41168V3.41959V3.4275V3.43541V3.44331V3.4512V3.45909V3.46698V3.47486V3.48273V3.4906V3.49846V3.50632V3.51417V3.52202V3.52986V3.53769V3.54551V3.55333V3.56114V3.56895V3.57674V3.58453V3.59232V3.60009V3.60786V3.61562V3.62337V3.63112V3.63885V3.64658V3.6543V3.66201V3.66971V3.6774V3.68509V3.69276V3.70043V3.70809V3.71573V3.72337V3.731V3.73862V3.74622V3.75382V3.76141V3.76899V3.77655V3.78411V3.79165V3.79919V3.80671V3.81422V3.82172V3.82921V3.83669V3.84416V3.85161V3.85905V3.86648V3.8739V3.88131V3.8887V3.89608V3.90345V3.9108V3.91814V3.92547V3.93279V3.94009V3.94738V3.95465V3.96192V3.96916V3.9764V3.98361V3.99082V3.99801V4.00518V4.01234V4.01949V4.02662V4.03374V4.04084V4.04792V4.05499V4.06205V4.06909V4.07611V4.08311V4.0901V4.09708V4.10404V4.11098V4.1179V4.12481V4.1317V4.13857V4.14543V4.15227V4.15909V4.16589V4.17268V4.17945V4.1862V4.19293V4.19964V4.20634V4.21302V4.21967V4.22631V4.23293V4.23954V4.24612V4.25268V4.25923V4.26575V4.27225V4.27874V4.2852V4.29165V4.29807V4.30448V4.31086V4.31722V4.32357V4.32989V4.33619V4.34247V4.34872V4.35496V4.36118V4.36737V4.37354V4.37969V4.38582V4.39192V4.39801V4.40407V4.41011V4.41612V4.42211V4.42808V4.43403V4.43995V4.44585V4.45173V4.45758V4.46341V4.46921V4.475V4.48075V4.48649V4.49219V4.49788V4.50354V4.50917V4.51478V4.52036V4.52592V4.53146V4.53696V4.54245V4.5479V4.55333V4.55874V4.56412V4.56947V4.5748V4.5801V4.58537V4.59062V4.59584V4.60103V4.60619V4.61133V4.61644V4.62153V4.62658V4.63161V4.63661V4.64158V4.64652V4.65144V4.65632V4.66118V4.66601V4.67081V4.67558V4.68032V4.68504V4.68972V4.69437V4.699V4.70359V4.70816V4.71269V4.7172V4.72167V4.72611V4.73053V4.73491V4.73926V4.74358V4.74787V4.75213V4.75635V4.76055V4.76471V4.76885V4.77295V4.77701V4.78105V4.78505V4.78902V4.79296V4.79687V4.80074V4.80458V4.80839V4.81216V4.8159V4.81961V4.82328V4.82692V4.83053V4.8341V4.83764V4.84114V4.84461V4.84805V4.85145V4.85481V4.85814V4.86144V4.8647V4.86793V4.87111V4.87427V4.87739V4.88047V4.88352V4.88653V4.8895V4.89244V4.89534V4.89821V4.90103V4.90383V4.90658V4.9093V4.91198V4.91462V4.91722V4.91979V4.92232V4.92481V4.92727V4.92968V4.93206V4.9344V4.9367V4.93896V4.94118V4.94337V4.94551V4.94762V4.94968V4.95171V4.9537V4.95564V4.95755V4.95942V4.96124V4.96303V4.96478V4.96648V4.96815V4.96977V4.97136V4.9729V4.9744V4.97586V4.97728V4.97866V4.97999V4.98128V4.98254V4.98374V4.98491V4.98604V4.98712V4.98816V4.98916V4.99011V4.99102V4.99189V4.99271V4.99349V4.99423V4.99492V4.99557V4.99618V4.99674V4.99726V4.99773V4.99816V4.99855V4.99889V4.99918V4.99943V4.99964V4.99979V4.99991V4.99998L4.12 5H3.495V6.52676L4.56557 5.43828L4.56559 5.43826L4.56572 5.43813L4.56638 5.43746L4.56926 5.43454L4.58112 5.42253L4.62803 5.37523C4.66917 5.33387 4.72935 5.27359 4.80493 5.19859C4.95616 5.04851 5.16855 4.83994 5.4128 4.60633C5.59507 4.43201 5.79297 4.24578 5.995 4.06065V4.06144V4.06824V4.07504V4.08183V4.08863V4.09542V4.10222V4.10901V4.1158V4.12259V4.12938V4.13617V4.14296V4.14974V4.15652V4.1633V4.17008V4.17686V4.18363V4.1904V4.19717V4.20393V4.21069V4.21745V4.2242V4.23095V4.2377V4.24445V4.25118V4.25792V4.26465V4.27138V4.2781V4.28482V4.29153V4.29823V4.30494V4.31163V4.31832V4.32501V4.33169V4.33837V4.34503V4.3517V4.35835V4.365V4.37164V4.37828V4.38491V4.39153V4.39815V4.40475V4.41135V4.41795V4.42453V4.43111V4.43768V4.44424V4.45079V4.45734V4.46387V4.4704V4.47692V4.48343V4.48993V4.49642V4.5029V4.50937V4.51583V4.52229V4.52873V4.53516V4.54158V4.54799V4.55439V4.56078V4.56716V4.57353V4.57989V4.58623V4.59257V4.59889V4.6052V4.6115V4.61779V4.62406V4.63033V4.63658V4.64281V4.64904V4.65525V4.66145V4.66764V4.67381V4.67997V4.68611V4.69225V4.69836V4.70447V4.71056V4.71663V4.72269V4.72874V4.73477V4.74079V4.74679V4.75278V4.75875V4.76471V4.77065V4.77657V4.78248V4.78837V4.79425V4.80011V4.80595V4.81178V4.81759V4.82339V4.82916V4.83492V4.84067V4.84639V4.8521V4.85779V4.86346V4.86911V4.87475V4.88037V4.88597V4.89155V4.89711V4.90265V4.90817V4.91368V4.91916V4.92463V4.93008V4.9355V4.94091V4.9463V4.95166V4.95701V4.96233V4.96764V4.97292V4.97819V4.98343V4.98865V4.99385V4.99903V5.00419V5.00932V5.01444V5.01953V5.0246V5.02964V5.03467V5.03967V5.04465V5.04961V5.05454V5.05945V5.06434V5.0692V5.07404V5.07886V5.08365V5.08842V5.09316V5.09788V5.10258V5.10725V5.11189V5.11651V5.12111V5.12568V5.13023V5.13475V5.13924V5.14371V5.14815V5.15257V5.15696V5.16133V5.16566V5.16998V5.17426V5.17852V5.18275V5.18695V5.19113V5.19528V5.1994V5.20349V5.20756V5.2116V5.21561V5.21959V5.22354V5.22746V5.23136V5.23523V5.23906V5.24287V5.24665V5.2504V5.25412V5.25781V5.26147V5.2651V5.2687V5.27227V5.27581V5.27932V5.2828V5.28625V5.28966V5.29305V5.2964V5.29972V5.30301V5.30627V5.3095V5.3127V5.31586V5.31899V5.32209V5.32515V5.32819V5.33119V5.33415V5.33709V5.33999V5.34285V5.34569V5.34849V5.35125V5.35399V5.35668V5.35935V5.36197V5.36457V5.36713V5.36965V5.37214V5.3746V5.9996H6V6L9 8L5.54648 9.72676C6.08951 10.4969 6.98601 11 8 11C9.65686 11 11 9.65685 11 8C11 7.0344 10.5438 6.17535 9.83519 5.62662C9.87094 5.60563 9.90804 5.58363 9.94637 5.56066C10.3372 5.32638 10.8617 4.98628 11.3896 4.56547Z" fill="currentColor"></path>
                              </svg>
    </SvgContainer>
  )
}


BrowserFirefox.propTypes = {
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


export default BrowserFirefox