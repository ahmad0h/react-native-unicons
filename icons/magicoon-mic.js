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
       <Path d="M12,15.75A4.756,4.756,0,0,0,16.75,11V7a4.75,4.75,0,0,0-9.5,0v4A4.756,4.756,0,0,0,12,15.75ZM8.75,7a3.25,3.25,0,0,1,6.5,0v4a3.25,3.25,0,0,1-6.5,0Zm4,11.712V20.25H16a.75.75,0,0,1,0,1.5H8a.75.75,0,0,1,0-1.5h3.25V18.712A7.76,7.76,0,0,1,4.25,11a.75.75,0,0,1,1.5,0,6.25,6.25,0,0,0,12.5,0,.75.75,0,0,1,1.5,0A7.76,7.76,0,0,1,12.75,18.712Z" />
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
