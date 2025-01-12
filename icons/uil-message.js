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
      <Path d="M20.927,3.073a2.782,2.782,0,0,0-2.663-.738L5.151,5.614A3.83,3.83,0,0,0,5.2,13.058l4.646,1.093L10.942,18.8a3.773,3.773,0,0,0,3.7,2.953h.028a3.773,3.773,0,0,0,3.714-2.9L21.665,5.735A2.781,2.781,0,0,0,20.927,3.073Zm-.718,2.3L16.931,18.484a2.3,2.3,0,0,1-2.277,1.766,2.274,2.274,0,0,1-2.252-1.8l-1.1-4.69L15.53,9.53a.75.75,0,0,0-1.06-1.06L10.237,12.7l-4.69-1.1a2.33,2.33,0,0,1-.031-4.529L18.628,3.791a1.313,1.313,0,0,1,.321-.04,1.3,1.3,0,0,1,1.26,1.621Z" />
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
