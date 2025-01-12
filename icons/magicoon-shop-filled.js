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
      <Path d="M20.5,18A3.5,3.5,0,0,1,17,21.5H14.53V19a2.5,2.5,0,0,0-5,0v2.5H7A3.5,3.5,0,0,1,3.5,18V13.35A5.634,5.634,0,0,0,5.99,14,4.409,4.409,0,0,0,9,12.78a4.3,4.3,0,0,0,6,0A4.409,4.409,0,0,0,18.01,14a5.634,5.634,0,0,0,2.49-.65Zm.974-9.158L20.386,5.577A4.494,4.494,0,0,0,16.117,2.5H7.883A4.494,4.494,0,0,0,3.614,5.577L2.526,8.842A.5.5,0,0,0,2.5,9a3.5,3.5,0,0,0,3.49,3.5A3.853,3.853,0,0,0,9,11.034a3.809,3.809,0,0,0,6.006,0A3.854,3.854,0,0,0,18.01,12.5,3.5,3.5,0,0,0,21.5,9,.5.5,0,0,0,21.474,8.842Z" />
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
