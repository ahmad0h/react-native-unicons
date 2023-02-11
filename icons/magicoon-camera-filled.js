import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const Uil3Plus = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M14,13a2,2,0,1,1-2-2A2.006,2.006,0,0,1,14,13Zm7.5-2v5A4.507,4.507,0,0,1,17,20.5H7A4.507,4.507,0,0,1,2.5,16V11A4.5,4.5,0,0,1,6.73,6.51l1.26-1.9A2.513,2.513,0,0,1,10.07,3.5h3.86a2.513,2.513,0,0,1,2.08,1.11l1.26,1.9A4.5,4.5,0,0,1,21.5,11ZM16,13a4,4,0,1,0-4,4A4,4,0,0,0,16,13Zm3-3a1,1,0,1,0-1,1A1,1,0,0,0,19,10Z" />
    </Svg>
  );
};

Uil3Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Uil3Plus.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default Uil3Plus;
