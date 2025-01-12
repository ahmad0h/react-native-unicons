import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCalender = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,3.25h-.25V3a.75.75,0,0,0-1.5,0v.25H8.75V3a.75.75,0,0,0-1.5,0v.25H7A4.756,4.756,0,0,0,2.25,8v9A4.756,4.756,0,0,0,7,21.75H17A4.756,4.756,0,0,0,21.75,17V8A4.756,4.756,0,0,0,17,3.25ZM7,4.75h.25V6a.75.75,0,0,0,1.5,0V4.75h6.5V6a.75.75,0,0,0,1.5,0V4.75H17A3.254,3.254,0,0,1,20.25,8v.25H3.75V8A3.254,3.254,0,0,1,7,4.75Zm10,15.5H7A3.254,3.254,0,0,1,3.75,17V9.75h16.5V17A3.254,3.254,0,0,1,17,20.25ZM17,13a1,1,0,1,1-1-1A1,1,0,0,1,17,13Zm-4,0a1,1,0,1,1-1-1A1,1,0,0,1,13,13ZM9,13a1,1,0,1,1-1-1A1,1,0,0,1,9,13Zm8,4a1,1,0,1,1-1-1A1,1,0,0,1,17,17Zm-4,0a1,1,0,1,1-1-1A1,1,0,0,1,13,17ZM9,17a1,1,0,1,1-1-1A1,1,0,0,1,9,17Z" />
    </Svg>
  );
};

UilCalender.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCalender.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCalender;
