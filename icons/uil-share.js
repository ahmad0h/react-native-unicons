import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilShare = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20.75,7V17A4.756,4.756,0,0,1,16,21.75H12a.75.75,0,0,1,0-1.5h4A3.254,3.254,0,0,0,19.25,17V7A3.254,3.254,0,0,0,16,3.75H12a.75.75,0,0,1,0-1.5h4A4.756,4.756,0,0,1,20.75,7Zm-6.22,4.47-4-4A.75.75,0,0,0,9.47,8.531l2.719,2.719H4a.75.75,0,0,0,0,1.5h8.189L9.47,15.47a.75.75,0,0,0,1.06,1.061l4-4A.75.75,0,0,0,14.53,11.47Z" />
    </Svg>
  );
};

UilShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilShare.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilShare;
