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
      <Path d="M15.53,9.53,13.061,12l2.469,2.47a.75.75,0,1,1-1.06,1.06L12,13.061,9.53,15.53a.75.75,0,0,1-1.06-1.06L10.939,12,8.47,9.53A.75.75,0,0,1,9.53,8.47L12,10.939,14.47,8.47a.75.75,0,0,1,1.06,1.06ZM21.75,9v6A6.758,6.758,0,0,1,15,21.75H9A6.758,6.758,0,0,1,2.25,15V9A6.758,6.758,0,0,1,9,2.25h6A6.758,6.758,0,0,1,21.75,9Zm-1.5,0A5.256,5.256,0,0,0,15,3.75H9A5.256,5.256,0,0,0,3.75,9v6A5.256,5.256,0,0,0,9,20.25h6A5.256,5.256,0,0,0,20.25,15Z" />
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
