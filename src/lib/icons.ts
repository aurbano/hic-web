import { library } from '@fortawesome/fontawesome-svg-core'

/**
 * Icon Preloading
 * This is done so that only the icons that we need are loaded from FontAwesome
 */

// Icons available in two styles, regular and solid
// solid tends to have all free icons, while some regular ones are PRO only
import {
  faLock,
  faLockOpen,
  faCircle,
  faDotCircle,
  faCircleNotch,
  faCode,
  faCog,
  faArrowAltCircleDown,
  faMeh,
  faAngry,
  faDizzy,
  faFlushed,
  faFrown,
  faFrownOpen,
  faGrimace,
  faGrin,
  faGrinAlt,
  faGrinBeam,
  faGrinBeamSweat,
  faGrinHearts,
  faGrinSquint,
  faGrinSquintTears,
  faGrinStars,
  faGrinTears,
  faGrinTongue,
  faGrinTongueSquint,
  faGrinTongueWink,
  faGrinWink,
  faKiss,
  faKissBeam,
  faKissWinkHeart,
  faLaugh,
  faLaughBeam,
  faLaughSquint,
  faLaughWink,
  faMehBlank,
  faMehRollingEyes,
  faSadCry,
  faSadTear,
  faSmile,
  faSmileBeam,
  faSmileWink,
  faSurprise,
  faTired,
  faShieldAlt,
  faQuestionCircle,
  faPaperPlane,
  faTimes,
  faReply,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  faDotCircle as farDotCircle,
  faMeh as farMeh,
  faAngry as farAngry,
  faDizzy as farDizzy,
  faFlushed as farFlushed,
  faFrown as farFrown,
  faFrownOpen as farFrownOpen,
  faGrimace as farGrimace,
  faGrin as farGrin,
  faGrinAlt as farGrinAlt,
  faGrinBeam as farGrinBeam,
  faGrinBeamSweat as farGrinBeamSweat,
  faGrinHearts as farGrinHearts,
  faGrinSquint as farGrinSquint,
  faGrinSquintTears as farGrinSquintTears,
  faGrinStars as farGrinStars,
  faGrinTears as farGrinTears,
  faGrinTongue as farGrinTongue,
  faGrinTongueSquint as farGrinTongueSquint,
  faGrinTongueWink as farGrinTongueWink,
  faGrinWink as farGrinWink,
  faKiss as farKiss,
  faKissBeam as farKissBeam,
  faKissWinkHeart as farKissWinkHeart,
  faLaugh as farLaugh,
  faLaughBeam as farLaughBeam,
  faLaughSquint as farLaughSquint,
  faLaughWink as farLaughWink,
  faMehBlank as farMehBlank,
  faMehRollingEyes as farMehRollingEyes,
  faSadCry as farSadCry,
  faSadTear as farSadTear,
  faSmile as farSmile,
  faSmileBeam as farSmileBeam,
  faSmileWink as farSmileWink,
  faSurprise as farSurprise,
  faTired as farTired,
} from '@fortawesome/free-regular-svg-icons'

/**
 * All icons that will be used in this app need to be preloaded here
 */
library.add(
  faLock,
  faLockOpen,
  faCircle,
  faDotCircle,
  farDotCircle,
  faCircleNotch,
  faCode,
  faCog,
  faArrowAltCircleDown,
  faMeh,
  farMeh,
  faAngry,
  faDizzy,
  faFlushed,
  faFrown,
  faFrownOpen,
  faGrimace,
  faGrin,
  faGrinAlt,
  faGrinBeam,
  faGrinBeamSweat,
  faGrinHearts,
  faGrinSquint,
  faGrinSquintTears,
  faGrinStars,
  faGrinTears,
  faGrinTongue,
  faGrinTongueSquint,
  faGrinTongueWink,
  faGrinWink,
  faKiss,
  faKissBeam,
  faKissWinkHeart,
  faLaugh,
  faLaughBeam,
  faLaughSquint,
  faLaughWink,
  faMehBlank,
  faMehRollingEyes,
  faSadCry,
  faSadTear,
  faSmile,
  faSmileBeam,
  faSmileWink,
  faSurprise,
  faTired,
  farAngry,
  farDizzy,
  farFlushed,
  farFrown,
  farFrownOpen,
  farGrimace,
  farGrin,
  farGrinAlt,
  farGrinBeam,
  farGrinBeamSweat,
  farGrinHearts,
  farGrinSquint,
  farGrinSquintTears,
  farGrinStars,
  farGrinTears,
  farGrinTongue,
  farGrinTongueSquint,
  farGrinTongueWink,
  farGrinWink,
  farKiss,
  farKissBeam,
  farKissWinkHeart,
  farLaugh,
  farLaughBeam,
  farLaughSquint,
  farLaughWink,
  farMehBlank,
  farMehRollingEyes,
  farSadCry,
  farSadTear,
  farSmile,
  farSmileBeam,
  farSmileWink,
  farSurprise,
  farTired,
  faShieldAlt,
  faQuestionCircle,
  faPaperPlane,
  faTimes,
  faReply,
  faExternalLinkAlt,
)
