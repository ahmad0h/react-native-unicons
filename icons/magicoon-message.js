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
      <Path d="M17,3.25H7A4.756,4.756,0,0,0,2.25,8V21a.75.75,0,0,0,1.28.53l2.414-2.414a1.246,1.246,0,0,1,.885-.366H17A4.756,4.756,0,0,0,21.75,14V8A4.756,4.756,0,0,0,17,3.25ZM20.25,14A3.254,3.254,0,0,1,17,17.25H6.829a2.73,2.73,0,0,0-1.945.806L3.75,19.189V8A3.254,3.254,0,0,1,7,4.75H17A3.254,3.254,0,0,1,20.25,8ZM9,11a1,1,0,1,1-1-1A1,1,0,0,1,9,11Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,13,11Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,17,11Z" />
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
