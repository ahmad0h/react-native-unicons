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
      <Path d="M20.11,5.6A6.246,6.246,0,0,0,15.228,3.25,6.755,6.755,0,0,0,12,4.058,6.755,6.755,0,0,0,8.772,3.25,6.246,6.246,0,0,0,3.89,5.6a7.339,7.339,0,0,0-1.505,6.013c.974,5,6.063,8.486,8.206,9.754a2.766,2.766,0,0,0,2.819,0c2.142-1.268,7.231-4.758,8.2-9.754A7.339,7.339,0,0,0,20.11,5.6Zm.033,5.726c-.858,4.4-5.529,7.585-7.5,8.75a1.261,1.261,0,0,1-1.29,0c-1.969-1.165-6.64-4.351-7.5-8.75A5.824,5.824,0,0,1,5.048,6.55a4.768,4.768,0,0,1,3.724-1.8,5.226,5.226,0,0,1,2.824.81.752.752,0,0,0,.808,0,5.226,5.226,0,0,1,2.824-.81,4.768,4.768,0,0,1,3.724,1.8A5.824,5.824,0,0,1,20.143,11.322Z" />
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
