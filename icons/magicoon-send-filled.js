import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMessage = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.421,5.669l-3.28,13.12a3.529,3.529,0,0,1-3.47,2.71h-.02a3.524,3.524,0,0,1-3.46-2.76l-.86-3.65,5.38-5.38a1,1,0,1,0-1.42-1.42l-5.38,5.38-3.65-.86a3.575,3.575,0,0,1-.05-6.95l13.12-3.28a2.548,2.548,0,0,1,3.09,3.09Z" />
    </Svg>
  );
};

UilMessage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilMessage.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilMessage;
