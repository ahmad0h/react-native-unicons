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
     
     <Path d="M20.722,7.52a1.949,1.949,0,0,0-2,.094l-3.01,2A4.741,4.741,0,0,0,11,5.25H7A4.756,4.756,0,0,0,2.25,10v4A4.756,4.756,0,0,0,7,18.75h4a4.741,4.741,0,0,0,4.711-4.365l3.01,2a1.95,1.95,0,0,0,3.029-1.624V9.238A1.947,1.947,0,0,0,20.722,7.52ZM14.25,14A3.254,3.254,0,0,1,11,17.25H7A3.254,3.254,0,0,1,3.75,14V10A3.254,3.254,0,0,1,7,6.75h4A3.254,3.254,0,0,1,14.25,10Zm6,.762a.45.45,0,0,1-.7.375l-3.8-2.527V11.39l3.8-2.526a.45.45,0,0,1,.7.374Z" />
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
