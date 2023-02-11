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
      <Path d="M 17 7.25 H 12.8 a 0.747 0.747 0 0 1 -0.624 -0.334 l -1.11 -1.664 a 2.246 2.246 0 0 0 -1.872 -1 H 7 A 4.756 4.756 0 0 0 2.25 9 v 7 A 4.756 4.756 0 0 0 7 20.75 H 17 A 4.756 4.756 0 0 0 21.75 16 V 12 A 4.756 4.756 0 0 0 17 7.25 Z M 15 15 A 3.254 3.254 0 0 1 15 17 H 11 A 3.254 3.254 0 0 1 9 15 V 9 A 3.254 3.254 0 0 1 7 6 H 6 a 0.747 0.747 0 0 1 -1 0 l -2 4 a 2.246 2.246 0 0 0 1.872 1 H 13 A 3.254 3.254 0 0 1 15 13 z M 11 11 H 13 L 13 13 L 17 13 L 13 11 M 11 13 L 11 11 L 9 13 L 9 13 M 9 11 L 11 11 L 9 13 M 11 15 L 9 15 L 9 17 L 11 17 M 15 15 L 15 17 L 13 17 L 13 15" />
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
