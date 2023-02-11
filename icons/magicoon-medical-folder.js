import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const Uil0Plus = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M1915 4345 c-221 -41 -415 -156 -539 -319 -62 -82 -95 -144 -128
-242 l-23 -69 0 -720 0 -720 23 -69 c92 -275 303 -466 603 -548 l84 -23 1060
0 1060 0 84 23 c200 55 365 161 475 306 62 82 95 144 128 242 23 68 23 74 23
544 l0 475 -28 80 c-108 308 -388 519 -737 555 -56 5 -284 10 -505 10 l-403 0
-31 25 c-16 14 -76 90 -133 168 -57 78 -121 160 -144 182 -46 45 -128 89 -195
104 -65 15 -588 12 -674 -4z m638 -263 c16 -9 85 -93 155 -187 134 -179 176
-219 269 -257 57 -22 65 -23 548 -29 536 -6 533 -6 663 -70 81 -40 186 -138
234 -220 65 -109 69 -150 66 -604 -3 -393 -4 -401 -27 -458 -70 -176 -225
-308 -412 -352 -96 -22 -2012 -22 -2108 0 -187 44 -342 176 -412 352 l-24 58
0 680 0 680 24 58 c53 133 159 246 287 308 108 51 154 57 444 58 236 1 268 -1
293 -17z" />
    </Svg>
  );
};

Uil0Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Uil0Plus.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default Uil0Plus;
