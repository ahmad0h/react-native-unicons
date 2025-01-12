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
      <Path d="M20.481,3.518a4.33,4.33,0,0,0-6.123,0L3.826,14.051a2.727,2.727,0,0,0-.769,1.493l-.789,4.738A1.262,1.262,0,0,0,3.511,21.75a1.186,1.186,0,0,0,.206-.018l4.739-.789a2.73,2.73,0,0,0,1.492-.768L20.481,9.642a4.329,4.329,0,0,0,0-6.124ZM8.888,19.114a1.241,1.241,0,0,1-.678.349L3.8,20.2l.735-4.407a1.237,1.237,0,0,1,.349-.679l8.083-8.083,4,4ZM19.421,8.581l-1.39,1.39-4-4,1.39-1.39a2.83,2.83,0,1,1,4,4Z" />
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
