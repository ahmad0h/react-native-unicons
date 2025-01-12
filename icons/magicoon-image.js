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
       <Path d="M17.413,6.268l-1.2-1.793A2.745,2.745,0,0,0,13.93,3.25H10.07A2.745,2.745,0,0,0,7.782,4.475l-1.2,1.793A4.756,4.756,0,0,0,2.25,11v5A4.756,4.756,0,0,0,7,20.75H17A4.756,4.756,0,0,0,21.75,16V11A4.756,4.756,0,0,0,17.413,6.268ZM20.25,16A3.254,3.254,0,0,1,17,19.25H7A3.254,3.254,0,0,1,3.75,16V11A3.254,3.254,0,0,1,7,7.75a.749.749,0,0,0,.624-.334L9.03,5.307a1.247,1.247,0,0,1,1.04-.557h3.86a1.247,1.247,0,0,1,1.04.557l1.406,2.109A.749.749,0,0,0,17,7.75,3.254,3.254,0,0,1,20.25,11ZM12,9.25A3.75,3.75,0,1,0,15.75,13,3.754,3.754,0,0,0,12,9.25Zm0,6A2.25,2.25,0,1,1,14.25,13,2.252,2.252,0,0,1,12,15.25ZM19,10a1,1,0,1,1-1-1A1,1,0,0,1,19,10Z" />
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
