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
      <Path d="M17,2.25H7A4.756,4.756,0,0,0,2.25,7V17A4.756,4.756,0,0,0,7,21.75H17A4.756,4.756,0,0,0,21.75,17V7A4.756,4.756,0,0,0,17,2.25Zm.75,10.5h2.5v2.5h-2.5Zm0-4h2.5v2.5h-2.5ZM20.25,7v.25h-2.5v-3.4A3.25,3.25,0,0,1,20.25,7Zm-4-3.25v7.5H7.75V3.75Zm-10,11.5H3.75v-2.5h2.5Zm-2.5-4V8.75h2.5v2.5Zm2.5-7.4v3.4H3.75V7A3.25,3.25,0,0,1,6.25,3.846ZM3.75,17v-.25h2.5v3.4A3.25,3.25,0,0,1,3.75,17Zm4,3.25v-7.5h8.5v7.5Zm10-.1v-3.4h2.5V17A3.25,3.25,0,0,1,17.75,20.154Z" />
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
