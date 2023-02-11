import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMedkit = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M 17 7.25 H 12.8 a 0.747 0.747 0 0 1 -0.624 -0.334 l -1.11 -1.664 a 2.246 2.246 0 0 0 -1.872 -1 H 7 A 4.756 4.756 0 0 0 2.25 9 v 7 A 4.756 4.756 0 0 0 7 20.75 H 17 A 4.756 4.756 0 0 0 21.75 16 V 12 A 4.756 4.756 0 0 0 17 7.25 Z M 20.25 16 A 3.254 3.254 0 0 1 17 19.25 H 7 A 3.254 3.254 0 0 1 3.75 16 V 9 A 3.254 3.254 0 0 1 7 5.75 H 9.2 a 0.747 0.747 0 0 1 0.8 0.25 l 1.11 1.664 a 2.246 2.246 0 0 0 1.872 1 H 17 A 3.254 3.254 0 0 1 20.25 12 z M 11 11 H 13 L 13 17 L 11 17 L 11 11 M 15 13 L 9 13 L 9 15 L 15 15 M 13 13 L 13 15 L 11 15 L 11 13" />
    </Svg>
  );
};

UilMedkit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilMedkit.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilMedkit;
