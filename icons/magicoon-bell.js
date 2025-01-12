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
      <Path d="M20.456,15.646,19.35,13.8a4.245,4.245,0,0,1-.605-2.184V8.99a6.745,6.745,0,0,0-13.49,0v2.627a4.245,4.245,0,0,1-.6,2.184L3.544,15.646A2.05,2.05,0,0,0,5.3,18.75h3.98c-.008.084-.033.165-.033.25a2.75,2.75,0,0,0,5.5,0c0-.085-.025-.166-.033-.25H18.7a2.05,2.05,0,0,0,1.759-3.1ZM13.25,19a1.25,1.25,0,0,1-2.5,0,1.232,1.232,0,0,1,.033-.25h2.434A1.232,1.232,0,0,1,13.25,19Zm5.927-2.029a.542.542,0,0,1-.48.279H5.3a.549.549,0,0,1-.473-.832l1.107-1.846a5.752,5.752,0,0,0,.818-2.955V8.99a5.245,5.245,0,0,1,10.49,0v2.627a5.752,5.752,0,0,0,.818,2.955l1.107,1.846A.541.541,0,0,1,19.177,16.971Z" />
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
