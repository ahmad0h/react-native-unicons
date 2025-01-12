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
      <Path d="M17,3.25H7A4.756,4.756,0,0,0,2.25,8v8a4.682,4.682,0,0,0,.135,1.079.726.726,0,0,0,.043.137A4.744,4.744,0,0,0,7,20.75H17A4.756,4.756,0,0,0,21.75,16V8A4.756,4.756,0,0,0,17,3.25ZM7,4.75H17A3.254,3.254,0,0,1,20.25,8v5.189L16.24,9.18a1.755,1.755,0,0,0-2.48,0L9,13.939l-.76-.759a1.755,1.755,0,0,0-2.48,0L3.75,15.189V8A3.254,3.254,0,0,1,7,4.75Zm10,14.5H7A3.246,3.246,0,0,1,3.956,17.1L6.82,14.24a.218.218,0,0,1,.36,0l.94.94a1.245,1.245,0,0,0,1.76,0l4.94-4.94a.259.259,0,0,1,.36,0l5.07,5.071V16A3.254,3.254,0,0,1,17,19.25ZM7,9a1,1,0,1,1,1,1A1,1,0,0,1,7,9Z" />
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
