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
      <Path d="M21.37,11.562c-.955,4.9-5.974,8.334-8.088,9.586a2.517,2.517,0,0,1-2.564,0C8.6,19.9,3.585,16.458,2.63,11.562A7.088,7.088,0,0,1,4.083,5.755,6,6,0,0,1,8.772,3.5,6.5,6.5,0,0,1,12,4.344,6.5,6.5,0,0,1,15.228,3.5a6,6,0,0,1,4.689,2.255A7.088,7.088,0,0,1,21.37,11.562Z" />
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
