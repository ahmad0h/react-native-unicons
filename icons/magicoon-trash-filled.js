import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTrashAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M22,6a1,1,0,0,1-1,1H3A1,1,0,0,1,3,5H6.559a1,1,0,0,0,.948-.684l.316-.948A2,2,0,0,1,9.721,2h4.558a2,2,0,0,1,1.9,1.367l.316.95A1,1,0,0,0,17.441,5H21A1,1,0,0,1,22,6ZM19.3,9.03l-.61,9.2a3.523,3.523,0,0,1-3.5,3.27H8.81a3.521,3.521,0,0,1-3.5-3.26L4.7,9.03a.511.511,0,0,1,.13-.37A.523.523,0,0,1,5.2,8.5H18.8a.523.523,0,0,1,.37.16A.511.511,0,0,1,19.3,9.03ZM11,12a1,1,0,0,0-2,0v5a1,1,0,0,0,2,0Zm4,0a1,1,0,0,0-2,0v5a1,1,0,0,0,2,0Z" />
    </Svg>
  );
};

UilTrashAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilTrashAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilTrashAlt;
