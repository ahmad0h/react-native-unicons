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
       <Path d="M21.5,7.94A4.766,4.766,0,0,0,17,3.2V3a1,1,0,0,0-2,0v.17H9V3A1,1,0,0,0,7,3v.2A4.766,4.766,0,0,0,2.5,7.94V9.83a.292.292,0,0,0,.02.09A.188.188,0,0,0,2.5,10v7A4.507,4.507,0,0,0,7,21.5H17A4.507,4.507,0,0,0,21.5,17V10a.188.188,0,0,0-.02-.08.292.292,0,0,0,.02-.09ZM8,18a1,1,0,1,1,1-1A1,1,0,0,1,8,18Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,8,14Zm4,4a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,12,14Zm4,4a1,1,0,1,1,1-1A1,1,0,0,1,16,18Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,16,14Zm3.5-4.5H4.5V7.94A2.766,2.766,0,0,1,7.04,5.19.985.985,0,0,0,8,6a1,1,0,0,0,.97-.83h6.06A1,1,0,0,0,16,6a.985.985,0,0,0,.96-.81A2.773,2.773,0,0,1,19.5,7.94Z" />
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
