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
      <Path d="M7.5,11V7a4.5,4.5,0,0,1,9,0v4a4.5,4.5,0,0,1-9,0ZM20,11a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8.008,8.008,0,0,0,7,7.931V20H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V18.931A8.008,8.008,0,0,0,20,11Z" />
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
