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
      <Path d="M13.5,6.511V17.489a2.976,2.976,0,0,1-1.749,2.732,3.016,3.016,0,0,1-1.261.279,2.972,2.972,0,0,1-1.941-.727L5.955,17.548a.5.5,0,0,0-.324-.121H4.893a2.4,2.4,0,0,1-2.393-2.4V8.975a2.4,2.4,0,0,1,2.392-2.4h.739a.5.5,0,0,0,.323-.12l2.6-2.226A3,3,0,0,1,13.5,6.511ZM16.8,8.4A1,1,0,1,0,15.2,9.6a4,4,0,0,1,0,4.792A1,1,0,0,0,16.8,15.6a6,6,0,0,0,0-7.208Zm2.646-3.065a1,1,0,1,0-1.486,1.338,7.977,7.977,0,0,1,0,10.662,1,1,0,1,0,1.486,1.338,9.975,9.975,0,0,0,0-13.338Z" />
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
